<?php
/**
 * Plugin Name: STB Academy Core & React Bridge
 * Plugin URI: https://github.com/jeasonbello95/STB-Academy
 * Description: Puente de integración de frontend React con WordPress y Tutor LMS. Carga el Header nativo de WordPress (wp_nav_menu), la app de React en portada/rutas principales y expone endpoints REST para cursos.
 * Version: 1.3.0
 * Author: STB Academy Team
 * Author URI: https://stbacademy.net
 * Text Domain: stb-academy-core
 */

if (!defined('ABSPATH')) {
    exit;
}

define('STB_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('STB_PLUGIN_URL', plugin_dir_url(__FILE__));
define('STB_PLUGIN_VERSION', '1.3.0');

class STB_Academy_Core {
    private static $instance = null;

    public static function get_instance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        // Registrar ubicación de menú de WordPress para el Header
        add_action('init', array($this, 'register_nav_menus'));
        add_action('init', array($this, 'register_event_registration_post_type'));
        add_filter('manage_stb_registration_posts_columns', array($this, 'set_stb_registration_columns'));
        add_action('manage_stb_registration_posts_custom_column', array($this, 'render_stb_registration_columns'), 10, 2);

        // Filtros para estilizar los enlaces del menú nativo wp_nav_menu()
        add_filter('nav_menu_link_attributes', array($this, 'style_nav_menu_links'), 10, 3);
        add_filter('nav_menu_css_class', array($this, 'style_nav_menu_items'), 10, 3);

        // Encolar scripts y estilos de React
        add_action('wp_enqueue_scripts', array($this, 'enqueue_react_assets'));

        // Shortcode para incrustar la app React en cualquier página
        add_shortcode('stb_academy_app', array($this, 'render_react_app_shortcode'));

        // Registrar plantilla de página tipo Canvas y captura de portada/rutas React
        add_filter('theme_page_templates', array($this, 'register_page_templates'));
        add_filter('template_include', array($this, 'load_page_templates'), 99);

        // Registrar endpoints REST API personalizados para React + Tutor LMS
        add_action('rest_api_init', array($this, 'register_rest_routes'));

        // Filtrar tipo de script para añadir type="module" al bundle de Vite
        add_filter('script_loader_tag', array($this, 'add_module_to_script'), 10, 3);

        // Redirigir siempre a la portada principal al cerrar sesión (evitar wp-login.php)
        add_filter('logout_redirect', array($this, 'custom_logout_redirect'), 99, 3);
        add_action('wp_logout', array($this, 'custom_on_logout'));

        // Bloquear acceso a /wp-admin/ para usuarios normales (estudiantes/suscriptores)
        add_action('admin_init', array($this, 'restrict_wp_admin_access'));
        add_action('after_setup_theme', array($this, 'hide_admin_bar_for_students'));
        add_filter('login_redirect', array($this, 'custom_login_redirect'), 99, 3);

        // Forzar tema oscuro de Tutor LMS en todo el sitio
        add_action('wp_head', array($this, 'inject_dark_theme_head'), 1);

        // Inyectar el Favicon oficial de STB Academy en todas las vistas (Tutor LMS, Frontend, Admin y Login)
        add_action('wp_head', array($this, 'inject_stb_favicon'), 1);
        add_action('admin_head', array($this, 'inject_stb_favicon'), 1);
        add_action('login_head', array($this, 'inject_stb_favicon'), 1);
        add_filter('get_site_icon_url', array($this, 'filter_site_icon_url'), 99, 3);
        add_filter('site_icon_meta_tags', array($this, 'filter_site_icon_meta_tags'), 99, 1);
        add_action('admin_head', array($this, 'style_tutor_admin_menu_icon'));

        // Integración de plantillas y estilos eCommerce STB Academy para Tutor LMS (Carrito, Checkout y Pagos)
        add_filter('tutor_get_template_path', array($this, 'override_tutor_ecommerce_templates'), 99, 2);
        add_action('wp_enqueue_scripts', array($this, 'enqueue_ecommerce_assets'), 20);

        // Prevención de errores TypeError y Warnings en addon de suscripciones de Tutor Pro
        add_action('init', array($this, 'prevent_subscription_null_errors'), 1);
        add_action('wp', array($this, 'prevent_subscription_null_errors'), 1);
        add_action('template_redirect', array($this, 'prevent_subscription_null_errors'), 1);
        add_filter('is_course_purchasable', array($this, 'safe_is_course_purchasable_precheck'), 1, 2);

        // Corrección de publicación de cursos en Tutor LMS (evitar que se queden en estado 'future'/programado por desfase horario GMT)
        add_filter('wp_insert_post_data', array($this, 'fix_course_builder_publish_status'), 20, 2);

        // Meta box para cursos presenciales y fechas de eventos
        add_action('add_meta_boxes', array($this, 'register_course_event_meta_box'));
        add_action('save_post_courses', array($this, 'save_course_event_meta'));

        // Integración de bloque nativo de Modalidad Presencial y Horario en Tutor Course Builder
        add_action('tutor_course_builder_footer', array($this, 'inject_course_builder_event_assets'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_course_builder_event_assets_frontend'), 25);
        add_action('admin_enqueue_scripts', array($this, 'enqueue_course_builder_event_assets_backend'), 25);
        add_filter('tutor_course_builder_localized_data', array($this, 'localize_course_event_data'));
        add_filter('tutor_course_details_response', array($this, 'filter_course_details_response'));
        add_action('tutor_after_prepare_update_post_meta', array($this, 'save_tutor_course_event_meta'), 10, 2);
        add_action('wp_ajax_stb_get_builder_event_details', array($this, 'ajax_get_builder_event_details'));
        add_action('wp_ajax_stb_save_builder_event_details', array($this, 'ajax_save_builder_event_details'));

        // Integración de detalles presenciales en vistas de preview y detalle de curso Tutor LMS (Fallback)
        add_action('tutor_course/single/lead_meta/after', array($this, 'render_tutor_single_course_event_badge'));
        add_action('tutor_course/single/after/topics', array($this, 'render_tutor_single_course_event_card'));
    }

    /**
     * Bloquear el acceso a wp-admin para usuarios no administradores
     * Redirige al alumno a la portada principal con su cuenta logueada
     */
    public function restrict_wp_admin_access() {
        if (defined('DOING_AJAX') && DOING_AJAX) {
            return;
        }

        if (!is_user_logged_in()) {
            return;
        }

        // Si el usuario no tiene permisos de administrador, redirigir al inicio
        if (!current_user_can('administrator') && !current_user_can('manage_options')) {
            wp_safe_redirect(home_url('/'));
            exit;
        }
    }

    /**
     * Ocultar la barra superior de administración de WordPress para estudiantes
     */
    public function hide_admin_bar_for_students() {
        if (!current_user_can('administrator') && !current_user_can('manage_options')) {
            show_admin_bar(false);
        }
    }

    /**
     * Redirección de login según rol de usuario
     */
    public function custom_login_redirect($redirect_to, $requested_redirect_to, $user) {
        if (is_a($user, 'WP_User')) {
            if ($user->has_cap('administrator') || $user->has_cap('manage_options')) {
                return $redirect_to ?: admin_url();
            }
            return home_url('/');
        }
        return $redirect_to;
    }

    /**
     * Determina si la petición actual corresponde a la portada o una ruta de React
     */
    public function is_stb_react_route() {
        // Ignorar peticiones REST API, wp-admin, wp-login, cron, etc.
        if (defined('REST_REQUEST') && REST_REQUEST) {
            return false;
        }

        $request_uri = parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH) ?? '';
        if (
            strpos($request_uri, '/wp-json') !== false ||
            strpos($request_uri, '/wp-admin') !== false ||
            strpos($request_uri, 'wp-login.php') !== false ||
            strpos($request_uri, 'xmlrpc.php') !== false
        ) {
            return false;
        }

        // 1. Portada del sitio (página principal)
        if (is_front_page() || is_home()) {
            return true;
        }

        // 2. Página con plantilla STB Canvas o con shortcode
        global $post;
        if (is_a($post, 'WP_Post') && (
            has_shortcode($post->post_content, 'stb_academy_app') ||
            get_page_template_slug($post->ID) === 'stb-canvas-template.php'
        )) {
            return true;
        }

        // 3. Rutas del frontend React (SPA)
        $clean_uri = rtrim($request_uri, '/');
        $react_routes = array(
            '/cursos',
            '/eventos',
            '/stblock',
            '/stblock/run',
            '/login',
            '/registro',
            '/verificar-cuenta',
        );

        foreach ($react_routes as $route) {
            if ($clean_uri === $route || strpos($clean_uri, $route . '/') === 0) {
                return true;
            }
        }

        return false;
    }

    /**
     * Registrar ubicación de menú independiente del tema
     */
    public function register_nav_menus() {
        register_nav_menus(array(
            'stb_primary' => __('STB Academy Menú Principal (Header Nativo)', 'stb-academy-core'),
        ));
    }

    /**
     * Estilos de clases para los elementos <li> del menú nativo
     */
    public function style_nav_menu_items($classes, $item, $args) {
        $classes[] = 'list-none m-0 p-0';
        return $classes;
    }

    /**
     * Estilos para las etiquetas <a> del menú nativo
     */
    public function style_nav_menu_links($atts, $item, $args) {
        $is_stblock = strpos(strtolower($item->title . ' ' . $item->url), 'stblock') !== false;
        if ($is_stblock) {
            $atts['class'] = 'rounded-full border border-primary-500/50 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold text-primary-300 hover:bg-primary-500/20 hover:border-primary-400 transition-all';
        } else {
            $atts['class'] = 'text-slate-300 hover:text-white font-display text-[0.9rem] font-medium tracking-wide transition-colors';
        }
        $atts['style'] = 'text-decoration:none;';
        return $atts;
    }

    /**
     * Obtener datos del menú y sesión de usuario desde WordPress
     */
    public function get_header_data() {
        $menu_items = array();
        $locations = get_nav_menu_locations();

        $menu_id = null;
        if (isset($locations['stb_primary']) && $locations['stb_primary'] > 0) {
            $menu_id = $locations['stb_primary'];
        } elseif (!empty($locations)) {
            $menu_id = reset($locations);
        }

        if ($menu_id) {
            $items = wp_get_nav_menu_items($menu_id);
            if ($items && !is_wp_error($items)) {
                foreach ($items as $item) {
                    if (empty($item->menu_item_parent)) {
                        $url = $item->url;
                        $home_url = home_url();
                        $path = str_replace($home_url, '', $url);
                        if (empty($path)) {
                            $path = '/';
                        }

                        $menu_items[] = array(
                            'id'     => (string)$item->ID,
                            'label'  => $item->title,
                            'href'   => $path,
                            'rawUrl' => $url,
                            'target' => $item->target ? $item->target : '_self',
                        );
                    }
                }
            }
        }

        if (empty($menu_items)) {
            $menu_items = array(
                array('id' => '1', 'label' => 'Inicio', 'href' => '/'),
                array('id' => '2', 'label' => 'Cursos', 'href' => '/cursos'),
                array('id' => '3', 'label' => 'Eventos', 'href' => '/eventos'),
                array('id' => '4', 'label' => 'STBlock', 'href' => '/stblock'),
            );
        }

        $is_logged_in = is_user_logged_in();
        $current_user = wp_get_current_user();
        
        $dashboard_url = home_url('/dashboard/');
        if (function_exists('tutor_utils')) {
            $tutor_dash = tutor_utils()->get_tutor_dashboard_page_permalink();
            if ($tutor_dash) {
                $dashboard_url = $tutor_dash;
            }
        }

        return array(
            'menu' => $menu_items,
            'auth' => array(
                'isLoggedIn'   => $is_logged_in,
                'userId'       => $is_logged_in ? $current_user->ID : null,
                'userName'     => $is_logged_in ? ($current_user->display_name ?: $current_user->user_login) : null,
                'userEmail'    => $is_logged_in ? $current_user->user_email : null,
                'userAvatar'   => $is_logged_in ? get_avatar_url($current_user->ID) : null,
                'dashboardUrl' => esc_url($dashboard_url),
                'loginUrl'     => esc_url(wp_login_url(home_url())),
                'logoutUrl'    => esc_url(wp_logout_url(home_url())),
                'registerUrl'  => esc_url(wp_registration_url()),
            ),
            'site' => array(
                'name'        => get_bloginfo('name'),
                'description' => get_bloginfo('description'),
                'url'         => esc_url(home_url('/')),
            ),
        );
    }

    /**
     * Localiza los archivos compilados de Vite en dist/assets
     */
    private function get_vite_assets() {
        $dist_dir = STB_PLUGIN_DIR . 'dist/';
        $assets_dir = $dist_dir . 'assets/';
        $js_file = '';
        $css_file = '';
        $latest_js_mtime = 0;
        $latest_css_mtime = 0;

        if (is_dir($assets_dir)) {
            $files = scandir($assets_dir);
            foreach ($files as $file) {
                $full_path = $assets_dir . $file;
                if (is_file($full_path)) {
                    $mtime = filemtime($full_path);
                    if (preg_match('/^index-.*\.js$/', $file) && $mtime > $latest_js_mtime) {
                        $js_file = 'dist/assets/' . $file;
                        $latest_js_mtime = $mtime;
                    } elseif (preg_match('/^index-.*\.css$/', $file) && $mtime > $latest_css_mtime) {
                        $css_file = 'dist/assets/' . $file;
                        $latest_css_mtime = $mtime;
                    }
                }
            }
        }

        return array(
            'js'  => $js_file,
            'css' => $css_file,
        );
    }

    /**
     * Encola los assets de React y estilos Tailwind en rutas STB y eCommerce de Tutor LMS
     */
    public function enqueue_react_assets() {
        if ($this->is_stb_react_route() || $this->is_tutor_ecommerce_page() || (function_exists('tutor') && is_singular(tutor()->course_post_type))) {
            $assets = $this->get_vite_assets();

            if (!empty($assets['css']) && file_exists(STB_PLUGIN_DIR . $assets['css'])) {
                wp_enqueue_style(
                    'stb-react-styles',
                    STB_PLUGIN_URL . $assets['css'],
                    array(),
                    filemtime(STB_PLUGIN_DIR . $assets['css'])
                );
            }

            if ($this->is_stb_react_route() && !empty($assets['js']) && file_exists(STB_PLUGIN_DIR . $assets['js'])) {
                wp_enqueue_script(
                    'stb-react-bundle',
                    STB_PLUGIN_URL . $assets['js'],
                    array(),
                    filemtime(STB_PLUGIN_DIR . $assets['js']),
                    true
                );

                // Configuración y datos de menú/Tutor LMS para el frontend React
                wp_localize_script('stb-react-bundle', 'STB_APP_CONFIG', array(
                    'restUrl'     => esc_url_raw(rest_url()),
                    'stbApiUrl'   => esc_url_raw(rest_url('stb/v1/')),
                    'tutorApiUrl' => esc_url_raw(rest_url('tutor/v1/')),
                    'nonce'       => wp_create_nonce('wp_rest'),
                    'siteUrl'     => esc_url_raw(site_url()),
                    'pluginUrl'   => STB_PLUGIN_URL,
                    'headerData'  => $this->get_header_data(),
                    'recaptcha'   => array(
                        'enabled' => $this->is_recaptcha_enabled(),
                        'siteKey' => $this->get_recaptcha_site_key(),
                    ),
                ));
            }
        }
    }

    /**
     * Comprueba si Google reCAPTCHA debe estar activo
     * Se desactiva automáticamente en local (.local, localhost, 127.0.0.1) y se activa en producción
     */
    public function is_recaptcha_enabled() {
        if (defined('STB_RECAPTCHA_ENABLED')) {
            return (bool) STB_RECAPTCHA_ENABLED;
        }

        $host = $_SERVER['HTTP_HOST'] ?? '';
        if (
            strpos($host, '.local') !== false ||
            strpos($host, 'localhost') !== false ||
            strpos($host, '127.0.0.1') !== false ||
            (function_exists('wp_get_environment_type') && wp_get_environment_type() === 'local')
        ) {
            return false;
        }

        return (bool) get_option('stb_recaptcha_enabled', true);
    }

    /**
     * Obtiene la clave de sitio pública de reCAPTCHA
     */
    public function get_recaptcha_site_key() {
        if (defined('STB_RECAPTCHA_SITE_KEY')) {
            return STB_RECAPTCHA_SITE_KEY;
        }
        return get_option('stb_recaptcha_site_key', '6Ld-PROD-STB-ACADEMY-SITE-KEY');
    }

    /**
     * Valida el token de reCAPTCHA con los servidores de Google
     */
    public function verify_recaptcha($token) {
        if (!$this->is_recaptcha_enabled()) {
            return true; // En entorno local se omite la validación
        }

        if (empty($token)) {
            return false;
        }

        $secret_key = defined('STB_RECAPTCHA_SECRET_KEY') ? STB_RECAPTCHA_SECRET_KEY : get_option('stb_recaptcha_secret_key', '');
        if (empty($secret_key) || $secret_key === '6Ld-PROD-STB-ACADEMY-SECRET-KEY') {
            return true; // Si aún no se ha colocado la clave secreta real en producción, no bloquear
        }

        $response = wp_remote_post('https://www.google.com/recaptcha/api/siteverify', array(
            'body' => array(
                'secret'   => $secret_key,
                'response' => $token,
                'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
            ),
            'timeout' => 10,
        ));

        if (is_wp_error($response)) {
            return false;
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);
        return !empty($body['success']);
    }

    /**
     * Añade type="module" a la etiqueta script generada por Vite
     */
    public function add_module_to_script($tag, $handle, $src) {
        if ('stb-react-bundle' === $handle) {
            $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
        }
        return $tag;
    }

    /**
     * Shortcode [stb_academy_app]
     */
    public function render_react_app_shortcode($atts) {
        return '<div id="root" class="stb-academy-app-container"></div>';
    }

    /**
     * Registra las plantillas Canvas y eCommerce para páginas completas
     */
    public function register_page_templates($templates) {
        $templates['stb-canvas-template.php'] = 'STB Academy Canvas (Pantalla Completa React)';
        $templates['stb-ecommerce-template.php'] = 'STB Academy eCommerce (Carrito & Checkout)';
        $templates['stb-course-single-template.php'] = 'STB Academy Curso Individual (Dark Cyber)';
        return $templates;
    }

    /**
     * Intercepta la portada, rutas de React y páginas eCommerce para renderizar con el diseño oficial
     */
    public function load_page_templates($template) {
        if ($this->is_stb_react_route()) {
            $custom_template = STB_PLUGIN_DIR . 'templates/stb-canvas-template.php';
            if (file_exists($custom_template)) {
                if (is_404()) {
                    status_header(200);
                    global $wp_query;
                    if ($wp_query) {
                        $wp_query->is_404 = false;
                    }
                }
                return $custom_template;
            }
        }

        if ($this->is_tutor_ecommerce_page()) {
            $ecom_template = STB_PLUGIN_DIR . 'templates/stb-ecommerce-template.php';
            if (file_exists($ecom_template)) {
                return $ecom_template;
            }
        }

        if (function_exists('tutor') && (is_singular(tutor()->course_post_type) || is_singular('courses'))) {
            $course_template = STB_PLUGIN_DIR . 'templates/stb-course-single-template.php';
            if (file_exists($course_template)) {
                return $course_template;
            }
        }

        return $template;
    }

    /**
     * Endpoints REST para conectar Tutor LMS con React
     */
    public function register_rest_routes() {
        register_rest_route('stb/v1', '/courses', array(
            'methods'             => 'GET',
            'callback'            => array($this, 'rest_get_courses'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('stb/v1', '/events', array(
            'methods'             => 'GET',
            'callback'            => array($this, 'rest_get_events'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('stb/v1', '/events/register', array(
            'methods'             => 'POST',
            'callback'            => array($this, 'rest_register_event'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('stb/v1', '/header', array(
            'methods'             => 'GET',
            'callback'            => array($this, 'rest_get_header'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('stb/v1', '/stats', array(
            'methods'             => 'GET',
            'callback'            => array($this, 'rest_get_stats'),
            'permission_callback' => '__return_true',
        ));

        // Endpoints de autenticación (Login, Registro, Logout, Estado de sesión)
        register_rest_route('stb/v1', '/auth/login', array(
            'methods'             => 'POST',
            'callback'            => array($this, 'rest_auth_login'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('stb/v1', '/auth/register', array(
            'methods'             => 'POST',
            'callback'            => array($this, 'rest_auth_register'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('stb/v1', '/auth/logout', array(
            'methods'             => 'POST',
            'callback'            => array($this, 'rest_auth_logout'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('stb/v1', '/auth/me', array(
            'methods'             => 'GET',
            'callback'            => array($this, 'rest_auth_me'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('stb/v1', '/auth/verify', array(
            'methods'             => 'GET',
            'callback'            => array($this, 'rest_auth_verify'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('stb/v1', '/auth/resend-verification', array(
            'methods'             => 'POST',
            'callback'            => array($this, 'rest_auth_resend_verification'),
            'permission_callback' => '__return_true',
        ));
    }

    /**
     * Envía correo HTML oficial de verificación de cuenta mediante FluentSMTP / wp_mail
     */
    public function send_verification_email($user_id, $email, $name, $token) {
        $verify_url = home_url('/verificar-cuenta?token=' . urlencode($token) . '&email=' . urlencode($email));
        $logo_url = home_url('/imagenes/LOGO-STB-ACADEMY--BLANCO.png');
        $site_name = get_bloginfo('name') ?: 'STB Academy';

        $subject = 'Verifica tu cuenta en STB Academy';

        $message = '<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Verifica tu cuenta en STB Academy</title>
</head>
<body style="margin:0;padding:0;background-color:#07090e;font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;color:#e2e8f0;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#07090e;padding:40px 15px;">
        <tr>
            <td align="center">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:580px;background-color:#0d121f;border-radius:24px;border:1px solid rgba(255,255,255,0.12);overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,0.6);">
                    <tr>
                        <td style="height:3px;background:linear-gradient(90deg, #10b981, #54b435, #06b6d4);"></td>
                    </tr>
                    <tr>
                        <td align="center" style="padding:35px 30px 20px 30px;">
                            <img src="' . esc_url($logo_url) . '" alt="' . esc_attr($site_name) . '" style="height:42px;width:auto;display:block;" />
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px 40px 30px 40px;text-align:center;">
                            <h1 style="color:#ffffff;font-size:24px;font-weight:800;margin:0 0 12px 0;letter-spacing:-0.5px;">¡Bienvenido a STB Academy, ' . esc_html($name) . '!</h1>
                            <p style="color:#94a3b8;font-size:15px;line-height:1.6;margin:0 0 28px 0;">
                                Gracias por registrarte en nuestra plataforma. Para activar tu cuenta de estudiante y comenzar tus cursos, confirma tu correo electrónico haciendo clic en el siguiente botón:
                            </p>
                            <table border="0" cellspacing="0" cellpadding="0" style="margin:0 auto 30px auto;">
                                <tr>
                                    <td align="center" style="border-radius:50px;background-color:#54b435;box-shadow:0 0 25px rgba(84,180,53,0.4);">
                                        <a href="' . esc_url($verify_url) . '" target="_blank" style="display:inline-block;padding:16px 36px;font-size:13px;font-weight:700;color:#000000;text-decoration:none;text-transform:uppercase;letter-spacing:1px;border-radius:50px;">
                                            Verificar mi Cuenta
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <p style="color:#64748b;font-size:12px;line-height:1.5;margin:0 0 8px 0;">
                                O copia y pega el siguiente enlace en tu navegador:
                            </p>
                            <p style="color:#54b435;font-size:12px;word-break:break-all;margin:0 0 25px 0;">
                                <a href="' . esc_url($verify_url) . '" style="color:#54b435;text-decoration:none;">' . esc_html($verify_url) . '</a>
                            </p>
                            <div style="height:1px;background-color:rgba(255,255,255,0.08);margin:25px 0;"></div>
                            <p style="color:#475569;font-size:12px;margin:0;">
                                Si no creaste esta cuenta, puedes ignorar este correo con total tranquilidad.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding:20px;background-color:#06080d;border-top:1px solid rgba(255,255,255,0.06);color:#475569;font-size:11px;">
                            © ' . date('Y') . ' STB Academy. Todos los derechos reservados.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>';

        $headers = array('Content-Type: text/html; charset=UTF-8');
        return wp_mail($email, $subject, $message, $headers);
    }

    /**
     * Endpoint para iniciar sesión en WordPress / Tutor LMS desde React
     */
    public function rest_auth_login($request) {
        $params = $request->get_json_params();
        $username = isset($params['username']) ? trim($params['username']) : '';
        $password = isset($params['password']) ? $params['password'] : '';
        $remember = !empty($params['remember']);

        // Validar reCAPTCHA si está habilitado en producción
        $recaptcha_token = isset($params['recaptcha_token']) ? $params['recaptcha_token'] : '';
        if (!$this->verify_recaptcha($recaptcha_token)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Validación de seguridad reCAPTCHA fallida. Por favor recarga e inténtalo de nuevo.',
            ), 400);
        }

        if (empty($username) || empty($password)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Por favor proporciona tu correo o usuario y tu contraseña.',
            ), 400);
        }

        // Si ingresaron un email, buscar el username correspondiente
        if (is_email($username)) {
            $user_obj = get_user_by('email', $username);
            if ($user_obj) {
                $username = $user_obj->user_login;
            }
        }

        $creds = array(
            'user_login'    => $username,
            'user_password' => $password,
            'remember'      => $remember || true,
        );

        $user = wp_signon($creds, false);

        if (is_wp_error($user)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Usuario o contraseña incorrectos.',
                'error'   => $user->get_error_message(),
            ), 401);
        }

        // Verificar si la cuenta requiere verificación por correo (para no-administradores)
        $is_admin = user_can($user->ID, 'administrator') || user_can($user->ID, 'manage_options');
        $is_verified = get_user_meta($user->ID, '_stb_email_verified', true);

        if (!$is_admin && $is_verified === '0') {
            // Destruir cualquier cookie que wp_signon haya colocado
            wp_logout();

            return new WP_REST_Response(array(
                'success'      => false,
                'isUnverified' => true,
                'email'        => $user->user_email,
                'message'      => 'Tu cuenta aún no ha sido verificada. Por favor revisa tu correo electrónico para activarla.',
            ), 403);
        }

        wp_set_current_user($user->ID);
        wp_set_auth_cookie($user->ID, true);

        $dashboard_url = home_url('/dashboard/');
        if (function_exists('tutor_utils') && tutor_utils()->get_tutor_dashboard_page_permalink()) {
            $dashboard_url = tutor_utils()->get_tutor_dashboard_page_permalink();
        }

        return new WP_REST_Response(array(
            'success'     => true,
            'message'     => 'Inicio de sesión exitoso.',
            'user'        => array(
                'id'       => $user->ID,
                'name'     => $user->display_name ?: $user->user_login,
                'email'    => $user->user_email,
                'avatar'   => get_avatar_url($user->ID),
                'roles'    => (array)$user->roles,
            ),
            'redirectUrl' => $dashboard_url,
        ), 200);
    }

    /**
     * Endpoint para registrar nuevos estudiantes desde React con verificación obligatoria
     */
    public function rest_auth_register($request) {
        $params = $request->get_json_params();
        $name = isset($params['name']) ? sanitize_text_field($params['name']) : '';
        $email = isset($params['email']) ? sanitize_email($params['email']) : '';
        $phone = isset($params['phone']) ? sanitize_text_field($params['phone']) : '';
        $password = isset($params['password']) ? $params['password'] : '';

        // Validar reCAPTCHA si está habilitado en producción
        $recaptcha_token = isset($params['recaptcha_token']) ? $params['recaptcha_token'] : '';
        if (!$this->verify_recaptcha($recaptcha_token)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Validación de seguridad reCAPTCHA fallida. Por favor recarga e inténtalo de nuevo.',
            ), 400);
        }

        if (empty($email) || empty($password) || empty($name)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Todos los campos obligatorios deben ser completados.',
            ), 400);
        }

        if (!is_email($email)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'El formato del correo electrónico no es válido.',
            ), 400);
        }

        if (email_exists($email)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Este correo electrónico ya está registrado. Por favor inicia sesión.',
            ), 400);
        }

        // Generar nombre de usuario único
        $username = sanitize_user(current(explode('@', $email)));
        if (empty($username) || username_exists($username)) {
            $username = 'user_' . wp_rand(1000, 99999);
        }

        $user_id = wp_create_user($username, $password, $email);

        if (is_wp_error($user_id)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => $user_id->get_error_message(),
            ), 400);
        }

        // Guardar nombre visible y teléfono
        wp_update_user(array(
            'ID'           => $user_id,
            'display_name' => $name,
            'first_name'   => $name,
        ));

        if (!empty($phone)) {
            update_user_meta($user_id, 'phone_number', $phone);
        }

        // Asignar rol de suscriptor / alumno en Tutor LMS
        $user_obj = new WP_User($user_id);
        $user_obj->set_role('subscriber');

        // Generar token criptográfico para verificación por correo
        $verification_token = wp_generate_password(48, false);
        update_user_meta($user_id, '_stb_email_verified', '0');
        update_user_meta($user_id, '_stb_verification_token', $verification_token);
        update_user_meta($user_id, '_stb_verification_sent_at', time());

        // Enviar correo de verificación a través de FluentSMTP / wp_mail
        $this->send_verification_email($user_id, $email, $name, $verification_token);

        return new WP_REST_Response(array(
            'success'              => true,
            'requiresVerification' => true,
            'message'              => '¡Cuenta creada con éxito! Te hemos enviado un correo de verificación. Por favor revisa tu bandeja de entrada o spam para activar tu cuenta.',
            'email'                => $email,
        ), 200);
    }

    /**
     * Endpoint para verificar token recibido por enlace de correo
     */
    public function rest_auth_verify($request) {
        $token = sanitize_text_field($request->get_param('token') ?? '');
        $email = sanitize_email($request->get_param('email') ?? '');

        if (empty($token)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'No se ha proporcionado un token de verificación.',
            ), 400);
        }

        $user = null;
        if (!empty($email)) {
            $user = get_user_by('email', $email);
        }

        if (!$user) {
            $users = get_users(array(
                'meta_key'   => '_stb_verification_token',
                'meta_value' => $token,
                'number'     => 1,
            ));
            if (!empty($users)) {
                $user = $users[0];
            }
        }

        if (!$user) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'El enlace de verificación no es válido o ya fue utilizado.',
            ), 400);
        }

        $stored_token = get_user_meta($user->ID, '_stb_verification_token', true);
        if (empty($stored_token) || $stored_token !== $token) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'El token de verificación es inválido o ha expirado.',
            ), 400);
        }

        // Marcar cuenta como verificada
        update_user_meta($user->ID, '_stb_email_verified', '1');
        delete_user_meta($user->ID, '_stb_verification_token');
        delete_user_meta($user->ID, '_stb_verification_sent_at');

        // Iniciar sesión automáticamente tras verificar
        wp_set_current_user($user->ID);
        wp_set_auth_cookie($user->ID, true);

        $dashboard_url = home_url('/dashboard/');
        if (function_exists('tutor_utils') && tutor_utils()->get_tutor_dashboard_page_permalink()) {
            $dashboard_url = tutor_utils()->get_tutor_dashboard_page_permalink();
        }

        return new WP_REST_Response(array(
            'success'     => true,
            'message'     => '¡Tu cuenta ha sido verificada con éxito! Bienvenido a STB Academy.',
            'redirectUrl' => $dashboard_url,
        ), 200);
    }

    /**
     * Endpoint para reenviar correo de verificación
     */
    public function rest_auth_resend_verification($request) {
        $params = $request->get_json_params();
        $email = sanitize_email($params['email'] ?? '');

        if (empty($email) || !is_email($email)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Por favor introduce una dirección de correo válida.',
            ), 400);
        }

        $user = get_user_by('email', $email);
        if (!$user) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'No encontramos ninguna cuenta asociada a este correo electrónico.',
            ), 404);
        }

        $is_verified = get_user_meta($user->ID, '_stb_email_verified', true);
        if ($is_verified === '1') {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Esta cuenta ya está verificada. Puedes iniciar sesión directamente.',
            ), 400);
        }

        $token = wp_generate_password(48, false);
        update_user_meta($user->ID, '_stb_verification_token', $token);
        update_user_meta($user->ID, '_stb_verification_sent_at', time());

        $name = $user->display_name ?: $user->user_login;
        $this->send_verification_email($user->ID, $email, $name, $token);

        return new WP_REST_Response(array(
            'success' => true,
            'message' => 'Hemos reenviado el correo de verificación. Revisa tu bandeja de entrada o spam.',
        ), 200);
    }

    /**
     * Endpoint para cerrar sesión
     */
    public function rest_auth_logout($request) {
        wp_logout();
        return new WP_REST_Response(array(
            'success'     => true,
            'redirectUrl' => home_url('/'),
        ), 200);
    }

    /**
     * Endpoint para consultar sesión actual
     */
    public function rest_auth_me($request) {
        $is_logged_in = is_user_logged_in();
        if (!$is_logged_in) {
            return new WP_REST_Response(array(
                'isLoggedIn' => false,
            ), 200);
        }

        $current_user = wp_get_current_user();
        $dashboard_url = home_url('/dashboard/');
        if (function_exists('tutor_utils') && tutor_utils()->get_tutor_dashboard_page_permalink()) {
            $dashboard_url = tutor_utils()->get_tutor_dashboard_page_permalink();
        }

        return new WP_REST_Response(array(
            'isLoggedIn'   => true,
            'id'           => $current_user->ID,
            'name'         => $current_user->display_name ?: $current_user->user_login,
            'email'        => $current_user->user_email,
            'avatar'       => get_avatar_url($current_user->ID),
            'dashboardUrl' => esc_url($dashboard_url),
        ), 200);
    }

    /**
     * Endpoint REST para el header
     */
    public function rest_get_header($request) {
        return rest_ensure_response($this->get_header_data());
    }

    /**
     * Devuelve los cursos de Tutor LMS adaptados al modelo del frontend React
     */
    public function rest_get_courses($request) {
        $args = array(
            'post_type'      => 'courses',
            'post_status'    => 'publish',
            'posts_per_page' => 100,
            'orderby'        => 'menu_order date',
            'order'          => 'DESC',
        );

        $query = new WP_Query($args);
        $courses = array();

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $post_id = get_the_ID();
                $post = get_post($post_id);

                // Precio en Tutor LMS
                $price_type = get_post_meta($post_id, '_tutor_course_price_type', true);
                $is_free = ($price_type === 'free');
                $price_val = get_post_meta($post_id, '_tutor_course_price', true);
                $sale_price_val = get_post_meta($post_id, '_tutor_course_sale_price', true);

                $price_formatted = 'Gratis';
                $price_number = 0;

                if (!$is_free && (!empty($price_val) || !empty($sale_price_val))) {
                    $active_price = !empty($sale_price_val) ? (float)$sale_price_val : (float)$price_val;
                    $price_number = $active_price;
                    $price_formatted = '$' . number_format($active_price, 2, ',', '.');
                } elseif (!$is_free && function_exists('tutor_utils')) {
                    $tutor_price = tutor_utils()->get_course_price($post_id);
                    if (!empty($tutor_price)) {
                        $price_formatted = wp_strip_all_tags($tutor_price);
                    }
                }

                // Nivel de dificultad
                $level_raw = get_post_meta($post_id, '_tutor_course_level', true);
                if (empty($level_raw)) {
                    $level_raw = get_post_meta($post_id, '_course_level', true);
                }
                $levels_map = array(
                    'all_levels'   => 'Todos los niveles',
                    'beginner'     => 'Principiante',
                    'intermediate' => 'Intermedio',
                    'expert'       => 'Avanzado',
                );
                $level = isset($levels_map[$level_raw]) ? $levels_map[$level_raw] : (!empty($level_raw) ? ucfirst($level_raw) : 'Todos los niveles');

                // Duración del curso
                $duration_meta = get_post_meta($post_id, '_tutor_course_duration', true);
                $duration = 'A tu propio ritmo';
                if (is_array($duration_meta)) {
                    $h = isset($duration_meta['hours']) ? (int)$duration_meta['hours'] : 0;
                    $m = isset($duration_meta['minutes']) ? (int)$duration_meta['minutes'] : 0;
                    if ($h > 0 || $m > 0) {
                        $duration = ($h > 0 ? "{$h}h " : '') . ($m > 0 ? "{$m}m" : '');
                    }
                } elseif (is_string($duration_meta) && !empty($duration_meta)) {
                    $duration = $duration_meta;
                } else {
                    $duration_hours = get_post_meta($post_id, '_course_duration_hours', true);
                    $duration_minutes = get_post_meta($post_id, '_course_duration_minutes', true);
                    if (!empty($duration_hours)) {
                        $duration = $duration_hours . 'h ' . ($duration_minutes ? $duration_minutes . 'm' : '');
                    }
                }

                // Categorías de Tutor LMS
                $terms = get_the_terms($post_id, 'course-category');
                $categories_list = array();
                $primary_category = 'General';
                if (!empty($terms) && !is_wp_error($terms)) {
                    foreach ($terms as $term) {
                        $categories_list[] = $term->name;
                    }
                    $primary_category = $terms[0]->name;
                }

                // Imagen destacada del curso con fallback dinámico
                $image_url = get_the_post_thumbnail_url($post_id, 'large');
                if (!$image_url) {
                    $fallback_images = array(
                        'Forex & Futuros' => 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
                        'Psicología'      => 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
                        'Criptomonedas'   => 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80',
                        'Robótica'        => 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
                    );
                    $image_url = isset($fallback_images[$primary_category]) ? $fallback_images[$primary_category] : 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80';
                }

                // Total de lecciones
                $lesson_count = function_exists('tutor_utils') ? tutor_utils()->get_lesson_count_by_course($post_id) : 0;

                // Total de estudiantes
                $enrolled_count = function_exists('tutor_utils') ? (int)tutor_utils()->count_enrolled_users_by_course($post_id) : 0;

                // Instructor
                $author_id = $post->post_author;
                $instructor_name = get_the_author_meta('display_name', $author_id);
                $instructor_avatar = get_avatar_url($author_id);

                // Rating
                $rating = function_exists('tutor_utils') ? tutor_utils()->get_course_rating($post_id) : null;
                $rating_avg = $rating && isset($rating->rating_avg) ? (float)$rating->rating_avg : 4.9;
                $rating_count = $rating && isset($rating->rating_count) ? (int)$rating->rating_count : 18;

                // Etiquetas (course-tag) de Tutor LMS
                $tags_terms = wp_get_post_terms($post_id, 'course-tag');
                $tags_list = array();
                $is_presencial = false;
                if (!empty($tags_terms) && !is_wp_error($tags_terms)) {
                    foreach ($tags_terms as $tt) {
                        $tags_list[] = $tt->name;
                        if (strtolower($tt->slug) === 'presencial' || strtolower($tt->name) === 'presencial') {
                            $is_presencial = true;
                        }
                    }
                }

                // Fecha y ubicación de evento (para cursos presenciales o programados)
                $event_date = get_post_meta($post_id, '_stb_event_date', true);
                if (empty($event_date)) {
                    $event_date = get_post_meta($post_id, '_event_date', true);
                }
                if (empty($event_date)) {
                    $course_settings = get_post_meta($post_id, '_tutor_course_settings', true);
                    if (is_array($course_settings) && !empty($course_settings['enrollment_starts_at'])) {
                        $event_date = substr($course_settings['enrollment_starts_at'], 0, 10);
                    }
                }
                if (empty($event_date)) {
                    $event_date = get_the_date('Y-m-d', $post_id);
                }

                $event_location = get_post_meta($post_id, '_stb_event_location', true);
                if (empty($event_location)) {
                    $event_location = 'CC La Redoma de los Robles, Local 50 — Porlamar, Nueva Esparta';
                }

                $event_days = get_post_meta($post_id, '_stb_event_days', true);
                $event_schedule = get_post_meta($post_id, '_stb_event_schedule', true);

                $primary_tag = $is_presencial ? 'Presencial' : (!empty($tags_list) ? $tags_list[0] : 'Online');

                $courses[] = array(
                    'id'                => (string)$post_id,
                    'title'             => html_entity_decode(get_the_title()),
                    'slug'              => get_post_field('post_name', $post_id),
                    'description'       => wp_strip_all_tags(get_the_excerpt() ?: get_the_content()),
                    'price'             => $price_formatted,
                    'price_raw'         => $price_number,
                    'is_free'           => $is_free,
                    'tag'               => $primary_tag,
                    'tags'              => $tags_list,
                    'is_presencial'     => $is_presencial,
                    'date'              => $event_date,
                    'event_date'        => $event_date,
                    'location'          => $event_location,
                    'days'              => $event_days,
                    'schedule'          => $event_schedule,
                    'image'             => $image_url,
                    'category'          => $primary_category,
                    'categories'        => $categories_list,
                    'duration'          => $duration,
                    'level'             => $level,
                    'lesson_count'      => $lesson_count,
                    'total_enrolled'    => $enrolled_count,
                    'instructor_name'   => $instructor_name,
                    'instructor_avatar' => $instructor_avatar,
                    'rating_avg'        => $rating_avg,
                    'rating_count'      => $rating_count,
                    'permalink'         => get_permalink($post_id),
                );
            }
            wp_reset_postdata();
        }

        return rest_ensure_response($courses);
    }

    /**
     * Devuelve exclusivamente los cursos que tienen la etiqueta 'presencial'
     * formateados para el calendario interactivo y la vista de eventos
     */
    public function rest_get_events($request) {
        $args = array(
            'post_type'      => 'courses',
            'post_status'    => 'publish',
            'posts_per_page' => 100,
            'orderby'        => 'date',
            'order'          => 'ASC',
        );

        $query = new WP_Query($args);
        $events = array();

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $post_id = get_the_ID();

                // Comprobar si tiene la etiqueta 'presencial'
                $tags_terms = wp_get_post_terms($post_id, 'course-tag');
                $is_presencial = false;
                $tags_list = array();
                if (!empty($tags_terms) && !is_wp_error($tags_terms)) {
                    foreach ($tags_terms as $tt) {
                        $tags_list[] = $tt->name;
                        if (strtolower($tt->slug) === 'presencial' || strtolower($tt->name) === 'presencial') {
                            $is_presencial = true;
                        }
                    }
                }

                if (!$is_presencial) {
                    continue;
                }

                // Precio en Tutor LMS
                $price_type = get_post_meta($post_id, '_tutor_course_price_type', true);
                $is_free = ($price_type === 'free');
                $price_val = get_post_meta($post_id, '_tutor_course_price', true);
                $sale_price_val = get_post_meta($post_id, '_tutor_course_sale_price', true);
                $price_formatted = 'Gratis';
                $price_number = 0;
                if (!$is_free && (!empty($price_val) || !empty($sale_price_val))) {
                    $active_price = !empty($sale_price_val) ? (float)$sale_price_val : (float)$price_val;
                    $price_number = $active_price;
                    $price_formatted = '$' . number_format($active_price, 2, ',', '.');
                } elseif (!$is_free && function_exists('tutor_utils')) {
                    $tutor_price = tutor_utils()->get_course_price($post_id);
                    if (!empty($tutor_price)) {
                        $price_formatted = wp_strip_all_tags($tutor_price);
                    }
                }

                // Imagen
                $image_url = get_the_post_thumbnail_url($post_id, 'large');
                if (!$image_url) {
                    $image_url = 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80';
                }

                // Fecha del evento presencial
                $event_date = get_post_meta($post_id, '_stb_event_date', true);
                if (empty($event_date)) {
                    $event_date = get_post_meta($post_id, '_event_date', true);
                }
                if (empty($event_date)) {
                    $course_settings = get_post_meta($post_id, '_tutor_course_settings', true);
                    if (is_array($course_settings) && !empty($course_settings['enrollment_starts_at'])) {
                        $event_date = substr($course_settings['enrollment_starts_at'], 0, 10);
                    }
                }
                if (empty($event_date)) {
                    $event_date = get_the_date('Y-m-d', $post_id);
                }

                // Ubicación
                $event_location = get_post_meta($post_id, '_stb_event_location', true);
                if (empty($event_location)) {
                    $event_location = 'CC La Redoma de los Robles, Local 50 — Porlamar, Nueva Esparta';
                }

                // Duración y nivel
                $duration_meta = get_post_meta($post_id, '_tutor_course_duration', true);
                $duration = 'Presencial';
                if (is_array($duration_meta)) {
                    $h = isset($duration_meta['hours']) ? (int)$duration_meta['hours'] : 0;
                    $m = isset($duration_meta['minutes']) ? (int)$duration_meta['minutes'] : 0;
                    if ($h > 0 || $m > 0) {
                        $duration = ($h > 0 ? "{$h}h " : '') . ($m > 0 ? "{$m}m" : '');
                    }
                }

                $level_raw = get_post_meta($post_id, '_tutor_course_level', true);
                $levels_map = array(
                    'all_levels'   => 'Todos los niveles',
                    'beginner'     => 'Principiante',
                    'intermediate' => 'Intermedio',
                    'expert'       => 'Avanzado',
                );
                $level = isset($levels_map[$level_raw]) ? $levels_map[$level_raw] : 'Todos los niveles';

                $event_days = get_post_meta($post_id, '_stb_event_days', true);
                $event_schedule = get_post_meta($post_id, '_stb_event_schedule', true);

                $events[] = array(
                    'id'           => (string)$post_id,
                    'course_id'    => (string)$post_id,
                    'title'        => html_entity_decode(get_the_title()),
                    'slug'         => get_post_field('post_name', $post_id),
                    'date'         => $event_date,
                    'description'  => wp_strip_all_tags(get_the_excerpt() ?: get_the_content()),
                    'location'     => $event_location,
                    'days'         => $event_days,
                    'schedule'     => $event_schedule,
                    'price'        => $price_formatted,
                    'price_raw'    => $price_number,
                    'is_free'      => $is_free,
                    'image'        => $image_url,
                    'permalink'    => get_permalink($post_id),
                    'tag'          => 'Presencial',
                    'tags'         => $tags_list,
                    'duration'     => !empty($event_schedule) ? $event_schedule : $duration,
                    'level'        => $level,
                );
            }
            wp_reset_postdata();
        }

        return rest_ensure_response($events);
    }

    /**
     * Registra el tipo de contenido personalizado para inscripciones presenciales
     */
    public function register_event_registration_post_type() {
        register_post_type('stb_registration', array(
            'labels' => array(
                'name'               => 'Inscripciones Presenciales',
                'singular_name'      => 'Inscripción Presencial',
                'menu_name'          => 'Inscripciones Presenciales',
                'all_items'          => 'Inscripciones Presenciales',
                'view_item'          => 'Ver Inscripción',
                'search_items'       => 'Buscar Inscripciones',
                'not_found'          => 'No hay inscripciones registradas',
            ),
            'public'              => false,
            'show_ui'             => true,
            'show_in_menu'        => 'tutor',
            'capability_type'     => 'post',
            'hierarchical'        => false,
            'supports'            => array('title', 'editor', 'custom-fields'),
            'has_archive'         => false,
            'rewrite'             => false,
            'query_var'           => false,
        ));
    }

    /**
     * Columnas personalizadas en el panel de WordPress para inscripciones presenciales
     */
    public function set_stb_registration_columns($columns) {
        $new_columns = array(
            'cb'          => $columns['cb'],
            'title'       => 'Cursante',
            'reg_code'    => 'Código',
            'student_dni' => 'C.I. / DNI',
            'student_phone' => 'Teléfono / WhatsApp',
            'course'      => 'Curso Presencial',
            'payment'     => 'Método de Pago',
            'rep_info'    => 'Representante',
            'date'        => 'Fecha de Registro',
        );
        return $new_columns;
    }

    public function render_stb_registration_columns($column, $post_id) {
        switch ($column) {
            case 'reg_code':
                $code = get_post_meta($post_id, '_stb_reg_code', true);
                echo '<strong><code>' . esc_html($code ?: '-' . $post_id) . '</code></strong>';
                break;
            case 'student_dni':
                echo esc_html(get_post_meta($post_id, '_stb_student_dni', true) ?: '-');
                break;
            case 'student_phone':
                $phone = get_post_meta($post_id, '_stb_student_phone', true);
                if ($phone) {
                    $clean_phone = preg_replace('/[^0-9]/', '', $phone);
                    echo '<a href="https://wa.me/' . esc_attr($clean_phone) . '" target="_blank" style="color:#54b435;font-weight:600;">' . esc_html($phone) . '</a>';
                } else {
                    echo '-';
                }
                break;
            case 'course':
                echo esc_html(get_post_meta($post_id, '_stb_course_title', true) ?: '-');
                break;
            case 'payment':
                $pay = get_post_meta($post_id, '_stb_payment_method', true);
                $ref = get_post_meta($post_id, '_stb_payment_reference', true);
                $names = array(
                    'cashea'       => 'Cashea (Cuotas sin interés)',
                    'pago_movil'   => 'Pago Móvil (Bs)',
                    'zelle'        => 'Zelle (USD)',
                    'efectivo'     => 'Efectivo en Sede',
                    'transferencia'=> 'Transferencia Bancaria',
                    'usdt'         => 'Binance Pay / USDT',
                    'gratis'       => 'Beca / Gratuito',
                );
                echo '<span>' . esc_html($names[$pay] ?? $pay) . '</span>';
                if (!empty($ref)) {
                    echo '<br><small style="color:#94a3b8;">Ref: ' . esc_html($ref) . '</small>';
                }
                break;
            case 'rep_info':
                $is_minor = get_post_meta($post_id, '_stb_is_minor', true);
                if ($is_minor === '1') {
                    $rep_name = get_post_meta($post_id, '_stb_rep_name', true);
                    $rep_rel = get_post_meta($post_id, '_stb_rep_relation', true);
                    echo '<span style="color:#f59e0b;font-size:11px;font-weight:bold;">[Menor de Edad]</span><br>';
                    echo esc_html($rep_name . ($rep_rel ? " ({$rep_rel})" : ''));
                } else {
                    echo '<span style="color:#64748b;font-size:11px;">Mayor de edad</span>';
                }
                break;
        }
    }

    /**
     * Endpoint REST para procesar la Inscripción Inmediata a cursos presenciales
     */
    public function rest_register_event($request) {
        $params = $request->get_json_params();
        if (empty($params)) {
            $params = $request->get_params();
        }

        $course_id     = isset($params['course_id']) ? sanitize_text_field($params['course_id']) : '';
        $course_title  = isset($params['course_title']) ? sanitize_text_field($params['course_title']) : '';
        $student_name  = isset($params['student_name']) ? sanitize_text_field($params['student_name']) : '';
        $student_dni   = isset($params['student_dni']) ? sanitize_text_field($params['student_dni']) : '';
        $student_email = isset($params['student_email']) ? sanitize_email($params['student_email']) : '';
        $student_phone = isset($params['student_phone']) ? sanitize_text_field($params['student_phone']) : '';
        $is_minor      = !empty($params['is_minor']);
        $rep_name      = isset($params['representative_name']) ? sanitize_text_field($params['representative_name']) : '';
        $rep_dni       = isset($params['representative_dni']) ? sanitize_text_field($params['representative_dni']) : '';
        $rep_phone     = isset($params['representative_phone']) ? sanitize_text_field($params['representative_phone']) : '';
        $rep_relation  = isset($params['representative_relation']) ? sanitize_text_field($params['representative_relation']) : '';
        $payment_method= isset($params['payment_method']) ? sanitize_text_field($params['payment_method']) : 'pago_movil';
        $payment_ref   = isset($params['payment_reference']) ? sanitize_text_field($params['payment_reference']) : '';
        $exp_level     = isset($params['experience_level']) ? sanitize_text_field($params['experience_level']) : 'Principiante';
        $has_laptop    = isset($params['has_laptop']) ? sanitize_text_field($params['has_laptop']) : 'si';
        $notes         = isset($params['notes']) ? sanitize_textarea_field($params['notes']) : '';

        // Validaciones obligatorias
        if (empty($student_name) || empty($student_email) || empty($student_phone)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Por favor completa los campos requeridos: Nombre completo, Correo electrónico y Teléfono.',
            ), 400);
        }

        if ($is_minor && (empty($rep_name) || empty($rep_phone))) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Para estudiantes menores de edad es obligatorio indicar el Nombre y Teléfono del representante legal.',
            ), 400);
        }

        // Generar código único de registro STB
        $reg_code = 'STB-PRES-' . strtoupper(substr(md5(uniqid((string)mt_rand(), true)), 0, 6));

        // Registrar post en WordPress
        $post_title = $student_name . ' - ' . ($course_title ?: 'Curso Presencial') . ' [' . $reg_code . ']';
        $post_id = wp_insert_post(array(
            'post_type'   => 'stb_registration',
            'post_title'  => $post_title,
            'post_status' => 'publish',
            'post_content'=> "Inscripción presencial para: {$course_title}\nCódigo: {$reg_code}\nCursante: {$student_name}\nCédula: {$student_dni}\nEmail: {$student_email}\nTeléfono: {$student_phone}\nMétodo de pago: {$payment_method}\nReferencia: {$payment_ref}",
        ));

        if (!is_wp_error($post_id) && $post_id) {
            update_post_meta($post_id, '_stb_reg_code', $reg_code);
            update_post_meta($post_id, '_stb_course_id', $course_id);
            update_post_meta($post_id, '_stb_course_title', $course_title);
            update_post_meta($post_id, '_stb_student_name', $student_name);
            update_post_meta($post_id, '_stb_student_dni', $student_dni);
            update_post_meta($post_id, '_stb_student_email', $student_email);
            update_post_meta($post_id, '_stb_student_phone', $student_phone);
            update_post_meta($post_id, '_stb_is_minor', $is_minor ? '1' : '0');
            update_post_meta($post_id, '_stb_rep_name', $rep_name);
            update_post_meta($post_id, '_stb_rep_dni', $rep_dni);
            update_post_meta($post_id, '_stb_rep_phone', $rep_phone);
            update_post_meta($post_id, '_stb_rep_relation', $rep_relation);
            update_post_meta($post_id, '_stb_payment_method', $payment_method);
            update_post_meta($post_id, '_stb_payment_reference', $payment_ref);
            update_post_meta($post_id, '_stb_experience_level', $exp_level);
            update_post_meta($post_id, '_stb_has_laptop', $has_laptop);
            update_post_meta($post_id, '_stb_notes', $notes);
            update_post_meta($post_id, '_stb_registered_at', current_time('mysql'));
        }

        // Notificación al correo del administrador
        $admin_email = get_option('admin_email');
        if (!empty($admin_email)) {
            $admin_subject = "Nueva Inscripción Presencial [{$reg_code}] - {$student_name}";
            $admin_msg = "Se ha registrado una nueva inscripción presencial inmediata en STB Academy:\n\n" .
                "Código: {$reg_code}\n" .
                "Curso: {$course_title}\n" .
                "Estudiante: {$student_name}\n" .
                "Cédula / DNI: {$student_dni}\n" .
                "Correo: {$student_email}\n" .
                "Teléfono / WhatsApp: {$student_phone}\n" .
                ($is_minor ? "Menor de edad: Sí\nRepresentante: {$rep_name} ({$rep_relation}) - C.I: {$rep_dni} - Tel: {$rep_phone}\n" : "Mayor de edad: Sí\n") .
                "Método de Pago: {$payment_method}\n" .
                (!empty($payment_ref) ? "Referencia: {$payment_ref}\n" : "") .
                "Nivel de experiencia: {$exp_level}\n" .
                "Lleva laptop propia: {$has_laptop}\n" .
                (!empty($notes) ? "Notas: {$notes}\n" : "");

            @wp_mail($admin_email, $admin_subject, $admin_msg);
        }

        return new WP_REST_Response(array(
            'success'          => true,
            'registration_code'=> $reg_code,
            'message'          => '¡Inscripción registrada con éxito! Te esperamos en la sede presencial.',
            'student_name'     => $student_name,
            'course_title'     => $course_title,
            'payment_method'   => $payment_method,
        ), 200);
    }

    /**
     * Estadísticas dinámicas de la academia
     */
    public function rest_get_stats($request) {
        $courses_count = wp_count_posts('courses')->publish ?? 0;
        $users_count = count_users()['total_users'] ?? 0;

        return rest_ensure_response(array(
            'students' => max(1000, $users_count),
            'courses'  => max(50, (int)$courses_count),
            'success'  => '98%',
            'support'  => '24/7',
        ));
    }

    /**
     * Inyecta la configuración del tema oscuro de Tutor LMS y STB Academy
     * Asegura que el atributo data-tutor-theme="dark" y clase "dark" se apliquen instantáneamente
     */
    public function inject_dark_theme_head() {
        ?>
        <script>
            (function() {
                try {
                    document.documentElement.setAttribute('data-tutor-theme', 'dark');
                    document.documentElement.classList.add('dark');
                    if (window.location.href.indexOf('create-course') !== -1) {
                        document.documentElement.classList.add('tutor-course-builder-active');
                    }
                    function pinCourseBuilderAdminBar() {
                        var bar = document.getElementById('wpadminbar');
                        if (bar && document.body) {
                            if (document.body.classList.contains('tutor-screen-course-builder') ||
                                window.location.href.indexOf('create-course') !== -1) {
                                if (document.body.firstChild !== bar) {
                                    document.body.prepend(bar);
                                }
                            }
                            document.documentElement.classList.add('has-wpadminbar');
                            document.body.classList.add('has-wpadminbar');
                        }
                    }
                    if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', pinCourseBuilderAdminBar);
                    } else {
                        pinCourseBuilderAdminBar();
                    }
                    window.addEventListener('load', pinCourseBuilderAdminBar);
                    if (typeof MutationObserver !== 'undefined') {
                        var observer = new MutationObserver(function() {
                            pinCourseBuilderAdminBar();
                        });
                        if (document.body) {
                            observer.observe(document.body, { childList: true });
                        } else {
                            document.addEventListener('DOMContentLoaded', function() {
                                if (document.body) {
                                    observer.observe(document.body, { childList: true });
                                }
                            });
                        }
                    }

                    // Asegurar que el botón "+ Nuevo -> Curso" de la barra de administración cree y redirija a un nuevo curso
                    document.addEventListener('click', function(e) {
                        var btn = e.target.closest && e.target.closest('a.tutor-create-new-course, button.tutor-create-new-course, li.tutor-create-new-course a, #wp-admin-bar-new-courses a');
                        if (!btn) return;
                        
                        e.preventDefault();
                        e.stopPropagation();
                        btn.style.pointerEvents = 'none';
                        if (btn.classList.contains('ab-item')) {
                            btn.innerHTML = 'Creando curso...';
                        }
                        
                        var ajaxUrl = (window._tutorobject && window._tutorobject.ajaxurl) || '/wp-admin/admin-ajax.php';
                        var nonce = (window._tutorobject && window._tutorobject._tutor_nonce) || '';
                        
                        var formData = new FormData();
                        formData.append('action', 'tutor_create_new_draft_course');
                        formData.append('from_dashboard', '1');
                        if (nonce) {
                            formData.append('_tutor_nonce', nonce);
                        }
                        
                        fetch(ajaxUrl, {
                            method: 'POST',
                            body: formData,
                            credentials: 'same-origin'
                        })
                        .then(function(res) { return res.json(); })
                        .then(function(resData) {
                            if (resData && resData.status_code === 201 && resData.data) {
                                window.location.href = resData.data;
                            } else if (resData && resData.data) {
                                window.location.href = resData.data;
                            } else {
                                window.location.href = '/escritorio/create-course/';
                            }
                        })
                        .catch(function() {
                            window.location.href = '/escritorio/create-course/';
                        });
                    }, true);
                } catch(e) {}
            })();
        </script>
        <style>
            :root, html, body {
                color-scheme: dark !important;
            }
            /* Reset de márgenes y paddings en Course Builder para un scroll limpio y sin desfases */
            html:has(body.tutor-screen-course-builder),
            html.tutor-course-builder-active,
            body.tutor-screen-course-builder {
                margin: 0 !important;
                padding: 0 !important;
            }
            /* Tutor Course Builder - Modo Oscuro Adaptativo */
            html:has(body.tutor-screen-course-builder),
            html.tutor-course-builder-active {
                background-color: #12151c !important;
            }
            body.tutor-screen-course-builder,
            body.tutor-screen-course-builder[data-tutor-theme] {
                background-color: #f8f8f8 !important;
                filter: invert(0.92) hue-rotate(180deg) brightness(0.95) contrast(0.95) !important;
                min-height: 100vh !important;
                color-scheme: light !important;
            }
            /* Preservar colores naturales de medios e imágenes reales */
            body.tutor-screen-course-builder img,
            body.tutor-screen-course-builder video,
            body.tutor-screen-course-builder picture,
            body.tutor-screen-course-builder canvas,
            body.tutor-screen-course-builder [style*="background-image"],
            body.tutor-screen-course-builder iframe[src*="youtube"],
            body.tutor-screen-course-builder iframe[src*="vimeo"] {
                filter: invert(1.08) hue-rotate(180deg) !important;
            }
            /* WP Admin Bar: Sticky arriba de todo, siempre visible al hacer scroll */
            body.tutor-screen-course-builder #wpadminbar {
                position: sticky !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                width: 100% !important;
                z-index: 999999 !important;
                filter: invert(1.08) hue-rotate(180deg) !important;
                display: block !important;
            }
            /* Header de Tutor Course Builder: Pegado exactamente debajo de WP Admin Bar al navegar y hacer scroll */
            @media screen and (min-width: 783px) {
                body.tutor-screen-course-builder #wpadminbar {
                    height: 32px !important;
                    min-height: 32px !important;
                }

                body.tutor-screen-course-builder:has(#wpadminbar) #tutor-course-builder > div > div:first-child,
                body.tutor-screen-course-builder.admin-bar #tutor-course-builder > div > div:first-child,
                body.tutor-screen-course-builder.has-wpadminbar #tutor-course-builder > div > div:first-child,
                html:has(#wpadminbar) body.tutor-screen-course-builder #tutor-course-builder > div > div:first-child,
                html.has-wpadminbar body.tutor-screen-course-builder #tutor-course-builder > div > div:first-child,
                body.tutor-screen-course-builder:has(#wpadminbar) div:has(> [data-title-divider]),
                body.tutor-screen-course-builder.admin-bar div:has(> [data-title-divider]),
                body.tutor-screen-course-builder.has-wpadminbar div:has(> [data-title-divider]) {
                    position: sticky !important;
                    top: 32px !important;
                    z-index: 99999 !important;
                }

                body:has(#wpadminbar) .tutor-dashboard-header,
                body.admin-bar .tutor-dashboard-header,
                body.has-wpadminbar .tutor-dashboard-header {
                    top: 32px !important;
                }
                body:has(#wpadminbar) .tutor-dashboard-sidebar,
                body.admin-bar .tutor-dashboard-sidebar,
                body.has-wpadminbar .tutor-dashboard-sidebar {
                    top: 32px !important;
                }
            }

            @media screen and (max-width: 782px) {
                body.tutor-screen-course-builder #wpadminbar {
                    height: 46px !important;
                    min-height: 46px !important;
                }

                body.tutor-screen-course-builder:has(#wpadminbar) #tutor-course-builder > div > div:first-child,
                body.tutor-screen-course-builder.admin-bar #tutor-course-builder > div > div:first-child,
                body.tutor-screen-course-builder.has-wpadminbar #tutor-course-builder > div > div:first-child,
                html:has(#wpadminbar) body.tutor-screen-course-builder #tutor-course-builder > div > div:first-child,
                html.has-wpadminbar body.tutor-screen-course-builder #tutor-course-builder > div > div:first-child,
                body.tutor-screen-course-builder:has(#wpadminbar) div:has(> [data-title-divider]),
                body.tutor-screen-course-builder.admin-bar div:has(> [data-title-divider]),
                body.tutor-screen-course-builder.has-wpadminbar div:has(> [data-title-divider]) {
                    position: sticky !important;
                    top: 46px !important;
                    z-index: 99999 !important;
                }

                body:has(#wpadminbar) .tutor-dashboard-header,
                body.admin-bar .tutor-dashboard-header,
                body.has-wpadminbar .tutor-dashboard-header {
                    top: 46px !important;
                }
                body:has(#wpadminbar) .tutor-dashboard-sidebar,
                body.admin-bar .tutor-dashboard-sidebar,
                body.has-wpadminbar .tutor-dashboard-sidebar {
                    top: 46px !important;
                }
            }
            html[data-tutor-theme="dark"],
            body[data-tutor-theme="dark"],
            .tutor-wrap,
            .tutor-dashboard-body,
            .tutor-dashboard-left-menu,
            .tutor-learning-area,
            .tutor-course-filter-wrap {
                background-color: var(--tutor-surface-base, #161b26) !important;
                color: var(--tutor-text-primary, #f0f1f1) !important;
            }
            /* Estilos para el botón interactivo de regreso al inicio */
            .stb-dashboard-sidebar-header {
                padding: 14px 12px 10px;
                margin-bottom: 8px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }
            .stb-sidebar-nav-back {
                display: flex !important;
                align-items: center !important;
                gap: 8px !important;
                width: 100% !important;
                box-sizing: border-box !important;
                text-decoration: none !important;
                padding: 6px 8px !important;
                border-radius: 10px !important;
                background: rgba(255, 255, 255, 0.04) !important;
                border: 1px solid rgba(255, 255, 255, 0.08) !important;
                transition: all 0.2s ease !important;
            }
            .stb-sidebar-nav-back:hover {
                background: rgba(0, 240, 255, 0.1) !important;
                border-color: rgba(0, 240, 255, 0.35) !important;
            }
            .stb-sidebar-nav-back:hover .stb-back-icon {
                background: rgba(0, 240, 255, 0.25) !important;
                color: #00F0FF !important;
                transform: translateX(-2px);
            }
            .stb-back-icon {
                width: 26px;
                height: 26px;
                min-width: 26px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 7px;
                background: rgba(255, 255, 255, 0.08);
                color: #ffffff;
                transition: all 0.2s ease;
            }
            .stb-brand-icon {
                width: 18px;
                height: 18px;
                min-width: 18px;
                object-fit: contain;
                border-radius: 4px;
            }
            .stb-brand-label {
                font-size: 13px !important;
                font-weight: 700 !important;
                color: #ffffff !important;
                letter-spacing: -0.01em !important;
                white-space: nowrap !important;
                line-height: 1 !important;
            }
            .stb-brand-label .stb-cyan {
                color: #00F0FF !important;
            }
            /* Notificaciones Tutor LMS: alto contraste en tema oscuro sin alterar dimensiones del layout */
            .tutor-dashboard-notification-trigger-wrap button {
                color: #e2e8f0 !important;
                border-color: rgba(255, 255, 255, 0.16) !important;
                background: rgba(255, 255, 255, 0.05) !important;
                border-radius: 8px !important;
                transition: all 0.2s ease !important;
            }
            .tutor-dashboard-notification-trigger-wrap button:hover {
                background: rgba(0, 240, 255, 0.12) !important;
                border-color: rgba(0, 240, 255, 0.45) !important;
                color: #00F0FF !important;
            }
            .tutor-dashboard-notification-badge {
                background: #ef4444 !important;
                box-shadow: 0 0 6px rgba(239, 68, 68, 0.8) !important;
            }
        </style>
        <?php
    }

    /**
     * Inyecta las etiquetas de Favicon oficial de STB Academy
     */
    public function inject_stb_favicon() {
        $favicon_url = esc_url(home_url('/imagenes/favicon.png'));
        echo '<link rel="icon" type="image/png" href="' . $favicon_url . '" />' . "\n";
        echo '<link rel="shortcut icon" type="image/png" href="' . $favicon_url . '" />' . "\n";
        echo '<link rel="apple-touch-icon" href="' . $favicon_url . '" />' . "\n";
    }

    /**
     * Filtra la URL del favicon oficial del sitio de WordPress
     */
    public function filter_site_icon_url($url, $size = 512, $blog_id = 0) {
        return esc_url(home_url('/imagenes/favicon.png'));
    }

    /**
     * Filtra los meta tags del icono del sitio para Tutor LMS y WordPress
     */
    public function filter_site_icon_meta_tags($meta_tags) {
        $favicon_url = esc_url(home_url('/imagenes/favicon.png'));
        return array(
            sprintf('<link rel="icon" href="%s" sizes="32x32" />', $favicon_url),
            sprintf('<link rel="icon" href="%s" sizes="192x192" />', $favicon_url),
            sprintf('<link rel="apple-touch-icon" href="%s" />', $favicon_url),
            sprintf('<meta name="msapplication-TileImage" content="%s" />', $favicon_url),
        );
    }

    /**
     * Cambia el icono del menú de Tutor LMS en el panel de administración por el favicon de STB
     */
    public function style_tutor_admin_menu_icon() {
        $favicon_url = esc_url(home_url('/imagenes/favicon.png'));
        ?>
        <style>
            #toplevel_page_tutor .wp-menu-image img,
            #toplevel_page_tutor .wp-menu-image svg {
                display: none !important;
            }
            #toplevel_page_tutor .wp-menu-image {
                background-image: url('<?php echo $favicon_url; ?>') !important;
                background-repeat: no-repeat !important;
                background-position: center !important;
                background-size: 18px 18px !important;
            }
        </style>
        <?php
    }

    /**
     * Comprueba si la página actual es una vista de carrito, checkout o pagos de Tutor LMS
     */
    public function is_tutor_ecommerce_page() {
        if (!function_exists('tutor_utils')) {
            return false;
        }

        $cart_id     = (int) tutor_utils()->get_option('tutor_cart_page_id');
        $checkout_id = (int) tutor_utils()->get_option('tutor_checkout_page_id');
        $page_id     = get_the_ID();

        if ($page_id && ($page_id === $cart_id || $page_id === $checkout_id)) {
            return true;
        }

        $request_uri = $_SERVER['REQUEST_URI'] ?? '';
        $clean_uri   = trim(parse_url($request_uri, PHP_URL_PATH), '/');

        if (
            $clean_uri === 'cart' ||
            $clean_uri === 'checkout' ||
            strpos($clean_uri, 'cart/') === 0 ||
            strpos($clean_uri, 'checkout/') === 0 ||
            strpos($clean_uri, 'tutor-order-status') !== false ||
            strpos($clean_uri, 'membership-pricing') !== false
        ) {
            return true;
        }

        return false;
    }

    /**
     * Encola los estilos visuales de modo oscuro Cyber / Neon para eCommerce
     */
    public function enqueue_ecommerce_assets() {
        if ($this->is_tutor_ecommerce_page() || (function_exists('tutor') && is_single() && get_post_type() === tutor()->course_post_type)) {
            $css_file = STB_PLUGIN_DIR . 'assets/css/stb-ecommerce.css';
            if (file_exists($css_file)) {
                wp_enqueue_style(
                    'stb-ecommerce-styles',
                    STB_PLUGIN_URL . 'assets/css/stb-ecommerce.css',
                    array(),
                    filemtime($css_file)
                );
            }
        }
    }

    /**
     * Sobrescribe las plantillas nativas de Tutor LMS para Carrito, Checkout, Detalles y Cursos
     */
    public function override_tutor_ecommerce_templates($template_location, $template) {
        $custom_path = STB_PLUGIN_DIR . 'templates/tutor/' . str_replace('.', DIRECTORY_SEPARATOR, $template) . '.php';
        if (file_exists($custom_path)) {
            return $custom_path;
        }
        return $template_location;
    }

    /**
     * Previene errores de tipo null en array_filter y foreach dentro del SubscriptionModel de Tutor Pro
     */
    public function prevent_subscription_null_errors() {
        if (class_exists('\Tutor\Cache\TutorCache')) {
            \Tutor\Cache\TutorCache::set('get_user_active_subscriptions_0', array());
            \Tutor\Cache\TutorCache::set('get_user_active_subscriptions_', array());
            $course_id = get_the_ID();
            if ($course_id) {
                \Tutor\Cache\TutorCache::set("bundle_ids_by_course_{$course_id}", array());
            }
        }

        // Si el usuario no está logueado, remover el callback problemático de Tutor Pro Subscription
        if (!is_user_logged_in()) {
            global $wp_filter;
            if (isset($wp_filter['is_course_purchasable']->callbacks[10])) {
                foreach ($wp_filter['is_course_purchasable']->callbacks[10] as $key => $callback) {
                    if (is_array($callback['function']) && is_object($callback['function'][0]) && get_class($callback['function'][0]) === 'TutorPro\Subscription\Controllers\FrontendController') {
                        unset($wp_filter['is_course_purchasable']->callbacks[10][$key]);
                    }
                }
            }
        }
    }

    /**
     * Asegura que el cache de suscripciones esté inicializado antes de comprobar si el curso es comprable
     */
    public function safe_is_course_purchasable_precheck($is_purchasable, $course_id) {
        if (class_exists('\Tutor\Cache\TutorCache')) {
            \Tutor\Cache\TutorCache::set('get_user_active_subscriptions_0', array());
            \Tutor\Cache\TutorCache::set('get_user_active_subscriptions_', array());
            if ($course_id) {
                \Tutor\Cache\TutorCache::set("bundle_ids_by_course_{$course_id}", array());
            }
        }

        if (!is_user_logged_in()) {
            global $wp_filter;
            if (isset($wp_filter['is_course_purchasable']->callbacks[10])) {
                foreach ($wp_filter['is_course_purchasable']->callbacks[10] as $key => $callback) {
                    if (is_array($callback['function']) && is_object($callback['function'][0]) && get_class($callback['function'][0]) === 'TutorPro\Subscription\Controllers\FrontendController') {
                        unset($wp_filter['is_course_purchasable']->callbacks[10][$key]);
                    }
                }
            }
        }

        return $is_purchasable;
    }

    /**
     * Asegura que los cursos publicados desde el Course Builder de Tutor LMS se guarden con estado 'publish'
     * y no sean forzados a 'future' (programados) por discrepancias horarias entre el navegador (GMT) y el servidor local.
     */
    public function fix_course_builder_publish_status($data, $postarr) {
        if (isset($data['post_type']) && $data['post_type'] === 'courses') {
            $requested_status = isset($postarr['post_status']) ? $postarr['post_status'] : '';
            if ($requested_status === 'publish' || ($data['post_status'] === 'future' && $requested_status !== 'future')) {
                $data['post_status'] = 'publish';
                $data['post_date'] = current_time('mysql');
                $data['post_date_gmt'] = current_time('mysql', 1);
            }
        }
        return $data;
    }

    /**
     * Registrar Meta Box para eventos presenciales en Cursos
     */
    public function register_course_event_meta_box() {
        add_meta_box(
            'stb_course_event_settings',
            'STB Academy — Configuración Presencial / Evento',
            array($this, 'render_course_event_meta_box'),
            'courses',
            'side',
            'high'
        );
    }

    public function render_course_event_meta_box($post) {
        wp_nonce_field('stb_save_course_event_meta', 'stb_course_event_nonce');
        $event_date = get_post_meta($post->ID, '_stb_event_date', true);
        $event_location = get_post_meta($post->ID, '_stb_event_location', true);
        $event_days = get_post_meta($post->ID, '_stb_event_days', true);
        $event_schedule = get_post_meta($post->ID, '_stb_event_schedule', true);
        ?>
        <p style="margin-bottom:12px;">
            <label for="stb_event_location" style="font-weight:600;display:block;margin-bottom:4px;">Ubicación / Dónde se hará el curso:</label>
            <input type="text" id="stb_event_location" name="stb_event_location" value="<?php echo esc_attr($event_location); ?>" placeholder="CC La Redoma de los Robles, Local 50 — Porlamar" style="width:100%;padding:6px;border-radius:6px;border:1px solid #ccc;" />
            <span style="color:#666;font-size:11px;display:block;margin-top:3px;">Sede, aula o dirección física de las clases.</span>
        </p>
        <p style="margin-bottom:12px;">
            <label for="stb_event_days" style="font-weight:600;display:block;margin-bottom:4px;">Días en los que se hará:</label>
            <input type="text" id="stb_event_days" name="stb_event_days" value="<?php echo esc_attr($event_days); ?>" placeholder="Sábados o Lunes a Viernes" style="width:100%;padding:6px;border-radius:6px;border:1px solid #ccc;" />
            <span style="color:#666;font-size:11px;display:block;margin-top:3px;">ej. Sábados, Lunes a Viernes, etc.</span>
        </p>
        <p style="margin-bottom:12px;">
            <label for="stb_event_date" style="font-weight:600;display:block;margin-bottom:4px;">Fecha de Inicio (para el Calendario):</label>
            <input type="date" id="stb_event_date" name="stb_event_date" value="<?php echo esc_attr($event_date); ?>" style="width:100%;padding:6px;border-radius:6px;border:1px solid #ccc;" />
            <span style="color:#666;font-size:11px;display:block;margin-top:3px;">Si se deja vacío, tomará la fecha de publicación del curso.</span>
        </p>
        <p style="margin-bottom:6px;">
            <label for="stb_event_schedule" style="font-weight:600;display:block;margin-bottom:4px;">Horario específico:</label>
            <input type="text" id="stb_event_schedule" name="stb_event_schedule" value="<?php echo esc_attr($event_schedule); ?>" placeholder="09:00 AM – 01:00 PM" style="width:100%;padding:6px;border-radius:6px;border:1px solid #ccc;" />
            <span style="color:#666;font-size:11px;display:block;margin-top:3px;">Rango horario en que se imparten las clases.</span>
        </p>
        <?php
    }

    public function save_course_event_meta($post_id) {
        if (!isset($_POST['stb_course_event_nonce']) || !wp_verify_nonce($_POST['stb_course_event_nonce'], 'stb_save_course_event_meta')) {
            return;
        }
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
        if (isset($_POST['stb_event_date'])) {
            update_post_meta($post_id, '_stb_event_date', sanitize_text_field($_POST['stb_event_date']));
        }
        if (isset($_POST['stb_event_location'])) {
            update_post_meta($post_id, '_stb_event_location', sanitize_text_field($_POST['stb_event_location']));
        }
        if (isset($_POST['stb_event_days'])) {
            update_post_meta($post_id, '_stb_event_days', sanitize_text_field($_POST['stb_event_days']));
        }
        if (isset($_POST['stb_event_schedule'])) {
            update_post_meta($post_id, '_stb_event_schedule', sanitize_text_field($_POST['stb_event_schedule']));
        }
    }

    /**
     * Comprueba si la vista actual es el Course Builder de Tutor LMS
     */
    public function is_tutor_course_builder() {
        global $pagenow;
        $is_backend = is_admin() && 'admin.php' === $pagenow && 'create-course' === (isset($_GET['page']) ? $_GET['page'] : '');
        $is_frontend = function_exists('tutor_utils') && tutor_utils()->is_tutor_frontend_dashboard('create-course');
        $uri = $_SERVER['REQUEST_URI'] ?? '';
        $is_uri = (strpos($uri, 'create-course') !== false);
        return $is_backend || $is_frontend || $is_uri;
    }

    public function enqueue_course_builder_event_assets_frontend() {
        if ($this->is_tutor_course_builder()) {
            $this->enqueue_course_builder_event_assets();
        }
    }

    public function enqueue_course_builder_event_assets_backend($hook = '') {
        if ($this->is_tutor_course_builder()) {
            $this->enqueue_course_builder_event_assets();
        }
    }

    public function inject_course_builder_event_assets() {
        $this->enqueue_course_builder_event_assets();
    }

    public function enqueue_course_builder_event_assets() {
        static $enqueued = false;
        if ($enqueued) {
            return;
        }
        $enqueued = true;

        wp_enqueue_style(
            'stb-course-builder-events',
            STB_PLUGIN_URL . 'assets/css/stb-course-builder-events.css',
            array(),
            STB_PLUGIN_VERSION
        );

        wp_enqueue_script(
            'stb-course-builder-events',
            STB_PLUGIN_URL . 'assets/js/stb-course-builder-events.js',
            array('jquery'),
            STB_PLUGIN_VERSION,
            true
        );

        $course_id = isset($_GET['course_id']) ? (int)$_GET['course_id'] : 0;
        $location = $course_id ? get_post_meta($course_id, '_stb_event_location', true) : '';
        $days = $course_id ? get_post_meta($course_id, '_stb_event_days', true) : '';
        $date = $course_id ? get_post_meta($course_id, '_stb_event_date', true) : '';
        $schedule = $course_id ? get_post_meta($course_id, '_stb_event_schedule', true) : '';
        $is_presencial = false;
        if ($course_id) {
            $terms = wp_get_post_terms($course_id, 'course-tag');
            if (!empty($terms) && !is_wp_error($terms)) {
                foreach ($terms as $t) {
                    if (strtolower($t->slug) === 'presencial' || strtolower($t->name) === 'presencial') {
                        $is_presencial = true;
                        break;
                    }
                }
            }
        }

        wp_localize_script('stb-course-builder-events', 'stbCourseBuilderData', array(
            'ajax_url'      => admin_url('admin-ajax.php'),
            'nonce'         => wp_create_nonce('stb_save_course_event_meta'),
            'course_id'     => $course_id,
            'location'      => $location,
            'days'          => $days,
            'date'          => $date,
            'schedule'      => $schedule,
            'is_presencial' => $is_presencial,
        ));
    }

    /**
     * Localizar datos del evento en _tutorobject de Course Builder
     */
    public function localize_course_event_data($data) {
        $course_id = isset($_GET['course_id']) ? (int)$_GET['course_id'] : 0;
        if (!$course_id && isset($_POST['course_id'])) {
            $course_id = (int)$_POST['course_id'];
        }

        $location = $course_id ? get_post_meta($course_id, '_stb_event_location', true) : '';
        $days = $course_id ? get_post_meta($course_id, '_stb_event_days', true) : '';
        $date = $course_id ? get_post_meta($course_id, '_stb_event_date', true) : '';
        $schedule = $course_id ? get_post_meta($course_id, '_stb_event_schedule', true) : '';
        $is_presencial = false;
        if ($course_id) {
            $terms = wp_get_post_terms($course_id, 'course-tag');
            if (!empty($terms) && !is_wp_error($terms)) {
                foreach ($terms as $t) {
                    if (strtolower($t->slug) === 'presencial' || strtolower($t->name) === 'presencial') {
                        $is_presencial = true;
                        break;
                    }
                }
            }
        }

        $data['stb_event_data'] = array(
            'course_id'     => $course_id,
            'location'      => $location,
            'days'          => $days,
            'date'          => $date,
            'schedule'      => $schedule,
            'is_presencial' => $is_presencial,
        );

        return $data;
    }

    /**
     * Añadir datos del evento a la respuesta de tutor_course_details
     */
    public function filter_course_details_response($data) {
        $course_id = isset($data['ID']) ? (int)$data['ID'] : 0;
        if (!$course_id && isset($_GET['course_id'])) {
            $course_id = (int)$_GET['course_id'];
        }
        if ($course_id) {
            $data['stb_event_location'] = get_post_meta($course_id, '_stb_event_location', true);
            $data['stb_event_days'] = get_post_meta($course_id, '_stb_event_days', true);
            $data['stb_event_date'] = get_post_meta($course_id, '_stb_event_date', true);
            $data['stb_event_schedule'] = get_post_meta($course_id, '_stb_event_schedule', true);

            $terms = wp_get_post_terms($course_id, 'course-tag');
            $is_presencial = false;
            if (!empty($terms) && !is_wp_error($terms)) {
                foreach ($terms as $t) {
                    if (strtolower($t->slug) === 'presencial' || strtolower($t->name) === 'presencial') {
                        $is_presencial = true;
                        break;
                    }
                }
            }
            $data['stb_is_presencial'] = $is_presencial;
        }
        return $data;
    }

    /**
     * Guardar datos cuando Tutor LMS actualiza el curso (tutor_update_course)
     */
    public function save_tutor_course_event_meta($post_id, $params) {
        if (isset($params['stb_event_location'])) {
            update_post_meta($post_id, '_stb_event_location', sanitize_text_field($params['stb_event_location']));
        }
        if (isset($params['stb_event_days'])) {
            update_post_meta($post_id, '_stb_event_days', sanitize_text_field($params['stb_event_days']));
        }
        if (isset($params['stb_event_date'])) {
            update_post_meta($post_id, '_stb_event_date', sanitize_text_field($params['stb_event_date']));
        }
        if (isset($params['stb_event_schedule'])) {
            update_post_meta($post_id, '_stb_event_schedule', sanitize_text_field($params['stb_event_schedule']));
        }
        if (isset($params['stb_is_presencial'])) {
            $is_p = !empty($params['stb_is_presencial']) && $params['stb_is_presencial'] !== '0' && $params['stb_is_presencial'] !== 'false';
            if ($is_p) {
                wp_set_post_terms($post_id, array('presencial'), 'course-tag', true);
            }
        }
    }

    /**
     * AJAX: Obtener detalles del evento para el bloque del Course Builder
     */
    public function ajax_get_builder_event_details() {
        $course_id = isset($_GET['course_id']) ? (int)$_GET['course_id'] : 0;
        if (!$course_id) {
            wp_send_json_error(array('message' => 'ID de curso inválido'));
        }

        $terms = wp_get_post_terms($course_id, 'course-tag');
        $is_presencial = false;
        if (!empty($terms) && !is_wp_error($terms)) {
            foreach ($terms as $t) {
                if (strtolower($t->slug) === 'presencial' || strtolower($t->name) === 'presencial') {
                    $is_presencial = true;
                    break;
                }
            }
        }

        wp_send_json_success(array(
            'course_id'     => $course_id,
            'location'      => get_post_meta($course_id, '_stb_event_location', true),
            'days'          => get_post_meta($course_id, '_stb_event_days', true),
            'date'          => get_post_meta($course_id, '_stb_event_date', true),
            'schedule'      => get_post_meta($course_id, '_stb_event_schedule', true),
            'is_presencial' => $is_presencial,
        ));
    }

    /**
     * AJAX: Guardar detalles del evento desde el bloque del Course Builder
     */
    public function ajax_save_builder_event_details() {
        $course_id = isset($_POST['course_id']) ? (int)$_POST['course_id'] : 0;
        if (!$course_id || !current_user_can('edit_post', $course_id)) {
            wp_send_json_error(array('message' => 'No tienes permisos para editar este curso.'));
        }

        if (isset($_POST['location'])) {
            update_post_meta($course_id, '_stb_event_location', sanitize_text_field($_POST['location']));
        }
        if (isset($_POST['days'])) {
            update_post_meta($course_id, '_stb_event_days', sanitize_text_field($_POST['days']));
        }
        if (isset($_POST['date'])) {
            update_post_meta($course_id, '_stb_event_date', sanitize_text_field($_POST['date']));
        }
        if (isset($_POST['schedule'])) {
            update_post_meta($course_id, '_stb_event_schedule', sanitize_text_field($_POST['schedule']));
        }
        if (isset($_POST['is_presencial'])) {
            $is_presencial = !empty($_POST['is_presencial']) && $_POST['is_presencial'] !== '0' && $_POST['is_presencial'] !== 'false';
            if ($is_presencial) {
                wp_set_post_terms($course_id, array('presencial'), 'course-tag', true);
            } else {
                wp_remove_object_terms($course_id, 'presencial', 'course-tag');
            }
        }

        wp_send_json_success(array(
            'message' => 'Detalles presenciales guardados correctamente.',
            'data'    => array(
                'location'      => get_post_meta($course_id, '_stb_event_location', true),
                'days'          => get_post_meta($course_id, '_stb_event_days', true),
                'date'          => get_post_meta($course_id, '_stb_event_date', true),
                'schedule'      => get_post_meta($course_id, '_stb_event_schedule', true),
                'is_presencial' => has_term('presencial', 'course-tag', $course_id),
            )
        ));
    }

    /**
     * Renderizar badge de evento en plantilla de Tutor LMS (Fallback)
     */
    public function render_tutor_single_course_event_badge() {
        $course_id = get_the_ID();
        if (!$course_id) return;
        $location = get_post_meta($course_id, '_stb_event_location', true);
        $days = get_post_meta($course_id, '_stb_event_days', true);
        $schedule = get_post_meta($course_id, '_stb_event_schedule', true);
        $is_presencial = false;
        $tags = wp_get_post_terms($course_id, 'course-tag');
        if (!empty($tags) && !is_wp_error($tags)) {
            foreach ($tags as $t) {
                if (strtolower($t->slug) === 'presencial' || strtolower($t->name) === 'presencial') {
                    $is_presencial = true;
                    break;
                }
            }
        }
        if ($location || $days || $schedule) $is_presencial = true;
        if (!$is_presencial) return;

        echo '<div style="margin: 10px 0; display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 9999px; background: rgba(84, 180, 53, 0.15); border: 1px solid rgba(84, 180, 53, 0.35); color: #6fcc4b; font-size: 12px; font-weight: 600;">
            <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#54B435;"></span>
            📍 Modalidad Presencial
        </div>';
    }

    /**
     * Renderizar tarjeta destacada de evento en plantilla de Tutor LMS (Fallback)
     */
    public function render_tutor_single_course_event_card() {
        $course_id = get_the_ID();
        if (!$course_id) return;
        $location = get_post_meta($course_id, '_stb_event_location', true);
        $days = get_post_meta($course_id, '_stb_event_days', true);
        $schedule = get_post_meta($course_id, '_stb_event_schedule', true);
        $date = get_post_meta($course_id, '_stb_event_date', true);

        $is_presencial = false;
        $tags = wp_get_post_terms($course_id, 'course-tag');
        if (!empty($tags) && !is_wp_error($tags)) {
            foreach ($tags as $t) {
                if (strtolower($t->slug) === 'presencial' || strtolower($t->name) === 'presencial') {
                    $is_presencial = true;
                    break;
                }
            }
        }
        if ($location || $days || $schedule) $is_presencial = true;
        if (!$is_presencial || (!$location && !$days && !$schedule)) return;

        ?>
        <div class="tutor-single-course-segment stb-native-event-details-card" style="margin-top: 24px; padding: 24px; border-radius: 16px; background: #0f172a; border: 1px solid rgba(84, 180, 53, 0.3); color: #fff;">
            <h4 style="margin: 0 0 16px; font-size: 18px; font-weight: 700; color: #fff; display: flex; align-items: center; gap: 8px;">
                <span style="color: #54B435;">📍</span> Modalidad Presencial, Días y Horarios
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
                <?php if ($location) : ?>
                <div style="padding: 14px; border-radius: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
                    <div style="font-size: 11px; text-transform: uppercase; color: #6fcc4b; font-weight: 700; margin-bottom: 4px;">¿Dónde se hará el curso?</div>
                    <div style="font-size: 13px; font-weight: 600; color: #fff;"><?php echo esc_html($location); ?></div>
                </div>
                <?php endif; ?>
                <?php if ($days) : ?>
                <div style="padding: 14px; border-radius: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
                    <div style="font-size: 11px; text-transform: uppercase; color: #38bdf8; font-weight: 700; margin-bottom: 4px;">Días en los que se hará</div>
                    <div style="font-size: 13px; font-weight: 600; color: #fff;"><?php echo esc_html($days); ?></div>
                    <?php if ($date) : ?>
                    <div style="font-size: 11px; color: #94a3b8; margin-top: 4px;">Inicio: <?php echo esc_html(date_i18n('d M Y', strtotime($date))); ?></div>
                    <?php endif; ?>
                </div>
                <?php endif; ?>
                <?php if ($schedule) : ?>
                <div style="padding: 14px; border-radius: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
                    <div style="font-size: 11px; text-transform: uppercase; color: #a3e635; font-weight: 700; margin-bottom: 4px;">Horario específico</div>
                    <div style="font-size: 13px; font-weight: 700; color: #a3e635; font-family: monospace;"><?php echo esc_html($schedule); ?></div>
                </div>
                <?php endif; ?>
            </div>
        </div>
        <?php
    }
}

// Inicializar el plugin
add_action('plugins_loaded', array('STB_Academy_Core', 'get_instance'));
