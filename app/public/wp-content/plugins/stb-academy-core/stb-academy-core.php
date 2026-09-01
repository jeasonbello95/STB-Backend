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
     * Encola los assets de React sólo en la portada o rutas de STB Academy
     */
    public function enqueue_react_assets() {
        if ($this->is_stb_react_route()) {
            $assets = $this->get_vite_assets();

            if (!empty($assets['css']) && file_exists(STB_PLUGIN_DIR . $assets['css'])) {
                wp_enqueue_style(
                    'stb-react-styles',
                    STB_PLUGIN_URL . $assets['css'],
                    array(),
                    filemtime(STB_PLUGIN_DIR . $assets['css'])
                );
            }

            if (!empty($assets['js']) && file_exists(STB_PLUGIN_DIR . $assets['js'])) {
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
                ));
            }
        }
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
     * Registra la plantilla Canvas para páginas completas
     */
    public function register_page_templates($templates) {
        $templates['stb-canvas-template.php'] = 'STB Academy Canvas (Pantalla Completa React)';
        return $templates;
    }

    /**
     * Intercepta la portada y rutas de React para renderizar la app en pantalla completa con Header nativo
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
    }

    /**
     * Endpoint para iniciar sesión en WordPress / Tutor LMS desde React
     */
    public function rest_auth_login($request) {
        $params = $request->get_json_params();
        $username = isset($params['username']) ? trim($params['username']) : '';
        $password = isset($params['password']) ? $params['password'] : '';
        $remember = !empty($params['remember']);

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
     * Endpoint para registrar nuevos estudiantes desde React
     */
    public function rest_auth_register($request) {
        $params = $request->get_json_params();
        $name = isset($params['name']) ? sanitize_text_field($params['name']) : '';
        $email = isset($params['email']) ? sanitize_email($params['email']) : '';
        $phone = isset($params['phone']) ? sanitize_text_field($params['phone']) : '';
        $password = isset($params['password']) ? $params['password'] : '';

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

        // Iniciar sesión inmediatamente
        wp_set_current_user($user_id);
        wp_set_auth_cookie($user_id, true);

        $dashboard_url = home_url('/dashboard/');
        if (function_exists('tutor_utils') && tutor_utils()->get_tutor_dashboard_page_permalink()) {
            $dashboard_url = tutor_utils()->get_tutor_dashboard_page_permalink();
        }

        return new WP_REST_Response(array(
            'success'     => true,
            'message'     => 'Registro completado con éxito.',
            'user'        => array(
                'id'       => $user_id,
                'name'     => $name,
                'email'    => $email,
                'avatar'   => get_avatar_url($user_id),
            ),
            'redirectUrl' => $dashboard_url,
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
            'posts_per_page' => 50,
            'orderby'        => 'date',
            'order'          => 'DESC',
        );

        $query = new WP_Query($args);
        $courses = array();

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $post_id = get_the_ID();

                // Precio en Tutor LMS
                $is_paid = get_post_meta($post_id, '_tutor_course_price_type', true) === 'paid';
                $price_val = get_post_meta($post_id, '_tutor_course_price', true);
                $price_formatted = 'Gratis';
                if ($is_paid && !empty($price_val)) {
                    $price_formatted = '$' . number_format((float)$price_val, 2, ',', '.');
                }

                // Nivel y Duración
                $level_raw = get_post_meta($post_id, '_course_level', true);
                $levels_map = array(
                    'all_levels'   => 'Todos los niveles',
                    'beginner'     => 'Principiante',
                    'intermediate' => 'Intermedio',
                    'expert'       => 'Avanzado',
                );
                $level = isset($levels_map[$level_raw]) ? $levels_map[$level_raw] : 'Principiante';

                $duration_hours = get_post_meta($post_id, '_course_duration_hours', true);
                $duration_minutes = get_post_meta($post_id, '_course_duration_minutes', true);
                $duration = '8 semanas';
                if (!empty($duration_hours)) {
                    $duration = $duration_hours . 'h ' . ($duration_minutes ? $duration_minutes . 'm' : '');
                }

                // Categoría de Tutor LMS
                $categories = get_the_terms($post_id, 'course-category');
                $category = 'Programación';
                if (!empty($categories) && !is_wp_error($categories)) {
                    $category = $categories[0]->name;
                }

                // Imagen destacada
                $image_url = get_the_post_thumbnail_url($post_id, 'large');
                if (!$image_url) {
                    $image_url = 'https://images.pexels.com/photos/4709290/pexels-photo-4709290.jpeg?auto=compress&cs=tinysrgb&w=940';
                }

                $courses[] = array(
                    'id'          => (string)$post_id,
                    'title'       => get_the_title(),
                    'slug'        => get_post_field('post_name', $post_id),
                    'description' => wp_strip_all_tags(get_the_excerpt()),
                    'price'       => $price_formatted,
                    'tag'         => 'Tutor LMS',
                    'image'       => $image_url,
                    'category'    => $category,
                    'duration'    => $duration,
                    'level'       => $level,
                    'permalink'   => get_permalink($post_id),
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
}

// Inicializar el plugin
add_action('plugins_loaded', array('STB_Academy_Core', 'get_instance'));
