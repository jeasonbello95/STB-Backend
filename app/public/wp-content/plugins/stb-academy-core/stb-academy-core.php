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

        // Prevención de errores TypeError en addon de suscripciones de Tutor Pro para invitados
        add_action('init', array($this, 'prevent_subscription_null_errors'), 1);
        add_filter('is_course_purchasable', array($this, 'safe_is_course_purchasable_precheck'), 1, 2);
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

                $courses[] = array(
                    'id'                => (string)$post_id,
                    'title'             => html_entity_decode(get_the_title()),
                    'slug'              => get_post_field('post_name', $post_id),
                    'description'       => wp_strip_all_tags(get_the_excerpt() ?: get_the_content()),
                    'price'             => $price_formatted,
                    'price_raw'         => $price_number,
                    'is_free'           => $is_free,
                    'tag'               => 'Tutor LMS',
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
                    if (document.body) {
                        document.body.setAttribute('data-tutor-theme', 'dark');
                        document.body.classList.add('dark');
                    }
                } catch(e) {}
            })();
        </script>
        <style>
            :root, html, body {
                color-scheme: dark !important;
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
            .stb-top-back-btn {
                cursor: pointer;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
            }
            .stb-top-back-btn:hover {
                background: rgba(0, 240, 255, 0.15) !important;
                border-color: rgba(0, 240, 255, 0.5) !important;
                color: #00F0FF !important;
                transform: translateX(-2px);
                box-shadow: 0 0 12px rgba(0, 240, 255, 0.25) !important;
            }
            .stb-top-back-btn:hover svg {
                stroke: #00F0FF !important;
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
     * Previene errores de tipo null en array_filter dentro del SubscriptionModel de Tutor Pro
     */
    public function prevent_subscription_null_errors() {
        if (class_exists('\Tutor\Cache\TutorCache')) {
            \Tutor\Cache\TutorCache::set('get_user_active_subscriptions_0', array());
            \Tutor\Cache\TutorCache::set('get_user_active_subscriptions_', array());
        }
    }

    /**
     * Asegura que el cache de suscripciones esté inicializado antes de comprobar si el curso es comprable
     */
    public function safe_is_course_purchasable_precheck($is_purchasable, $course_id) {
        if (!is_user_logged_in() && class_exists('\Tutor\Cache\TutorCache')) {
            \Tutor\Cache\TutorCache::set('get_user_active_subscriptions_0', array());
            \Tutor\Cache\TutorCache::set('get_user_active_subscriptions_', array());
        }
        return $is_purchasable;
    }
}

// Inicializar el plugin
add_action('plugins_loaded', array('STB_Academy_Core', 'get_instance'));
