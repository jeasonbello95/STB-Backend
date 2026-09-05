<?php
/**
 * Header nativo de WordPress para STB Academy
 * Renderizado desde PHP con soporte completo para wp_nav_menu(), Custom Logo y Tutor LMS.
 */
if (!defined('ABSPATH')) {
    exit;
}

$custom_logo_id = get_theme_mod('custom_logo');
$logo_url = '';
if ($custom_logo_id) {
    $logo_url = wp_get_attachment_image_url($custom_logo_id, 'full');
}
if (empty($logo_url)) {
    $logo_url = STB_PLUGIN_URL . 'dist/imagenes/LOGO-STB-ACADEMY--BLANCO.png';
}

$site_name = get_bloginfo('name') ?: 'STB Academy';
$is_logged_in = is_user_logged_in();
$current_user = wp_get_current_user();

$dashboard_url = home_url('/dashboard/');
if (function_exists('tutor_utils')) {
    $tutor_dash = tutor_utils()->get_tutor_dashboard_page_permalink();
    if ($tutor_dash) {
        $dashboard_url = $tutor_dash;
    }
}

$login_url = wp_login_url(home_url('/'));
$logout_url = wp_logout_url(home_url('/'));
?>

<!-- Header Nativo WordPress -->
<header id="stb-native-header" class="stb-wp-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-deep-950/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl">
    <!-- Línea inferior con gradiente verde/cian -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <!-- Logo / Marca oficial de WordPress -->
        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-3 group" style="text-decoration:none;">
            <?php if (!empty($logo_url)): ?>
                <img src="<?php echo esc_url($logo_url); ?>" alt="<?php echo esc_attr($site_name); ?>" class="h-9 w-auto object-contain transition-transform group-hover:scale-105" />
            <?php else: ?>
                <span class="text-xl font-black tracking-wider text-white uppercase font-display">
                    STB <span class="text-primary-400">Academy</span>
                </span>
            <?php endif; ?>
        </a>

        <?php
        // Detección precisa de la ruta activa para el menú
        $current_req_uri  = parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH) ?? '';
        $current_req_path = trim($current_req_uri, '/');

        // Definición de ítems de menú con soporte de WordPress o por defecto
        $menu_items = array(
            array('label' => 'Inicio', 'url' => home_url('/'), 'key' => 'home'),
            array('label' => 'Cursos', 'url' => home_url('/cursos'), 'key' => 'cursos'),
            array('label' => 'Eventos', 'url' => home_url('/eventos'), 'key' => 'eventos'),
            array('label' => 'STBlock', 'url' => home_url('/stblock'), 'key' => 'stblock', 'is_button' => true),
        );

        $locations = get_nav_menu_locations();
        if (isset($locations['stb_primary']) && $locations['stb_primary'] > 0) {
            $wp_items = wp_get_nav_menu_items($locations['stb_primary']);
            if (!empty($wp_items) && !is_wp_error($wp_items)) {
                $custom_items = array();
                foreach ($wp_items as $wi) {
                    if (empty($wi->menu_item_parent)) {
                        $is_stblock = strpos(strtolower($wi->title . ' ' . $wi->url), 'stblock') !== false;
                        $custom_items[] = array(
                            'label'     => $wi->title,
                            'url'       => $wi->url,
                            'key'       => sanitize_title($wi->title),
                            'is_button' => $is_stblock,
                        );
                    }
                }
                if (!empty($custom_items)) {
                    $menu_items = $custom_items;
                }
            }
        }
        ?>

        <!-- Menú de Navegación Nativo de WordPress -->
        <nav class="hidden md:flex items-center gap-8">
            <ul class="flex items-center gap-8 list-none m-0 p-0">
                <?php foreach ($menu_items as $item) : 
                    $item_url  = $item['url'];
                    $item_path = trim(parse_url($item_url, PHP_URL_PATH) ?? '', '/');
                    $is_active = false;

                    if ($item_path === '' || $item_url === home_url('/') || $item_url === home_url() || $item['key'] === 'home') {
                        $is_active = ($current_req_path === '' || is_front_page() || is_home());
                    } elseif ($item['key'] === 'cursos' || strpos($item_path, 'curso') !== false || strpos($item_path, 'course') !== false) {
                        $is_active = (strpos($current_req_path, 'curso') !== false || strpos($current_req_path, 'course') !== false || (function_exists('tutor') && is_singular(tutor()->course_post_type)));
                    } elseif ($item['key'] === 'eventos' || strpos($item_path, 'evento') !== false) {
                        $is_active = (strpos($current_req_path, 'evento') !== false);
                    } elseif (!empty($item['is_button']) || $item['key'] === 'stblock' || strpos($item_path, 'stblock') !== false) {
                        $is_active = (strpos($current_req_path, 'stblock') !== false);
                    } else {
                        $is_active = ($current_req_path === $item_path || strpos($current_req_path, $item_path . '/') === 0);
                    }
                ?>
                    <li class="relative">
                        <?php if (!empty($item['is_button'])) : ?>
                            <!-- Botón Especial STBlock con Resplandor Neón y Pulso -->
                            <a href="<?php echo esc_url($item['url']); ?>" class="relative overflow-hidden rounded-full px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group <?php echo $is_active ? 'border-2 border-primary-400 bg-gradient-to-r from-primary-500/35 via-emerald-500/25 to-primary-500/35 text-white shadow-[0_0_25px_rgba(84,180,53,0.85),inset_0_0_12px_rgba(84,180,53,0.35)] ring-2 ring-primary-400/60 scale-105' : 'border border-primary-500/50 bg-primary-500/10 text-primary-300 hover:bg-primary-500/25 hover:border-primary-400 hover:text-white hover:shadow-[0_0_20px_rgba(84,180,53,0.6)] hover:scale-105 active:scale-95'; ?>" style="text-decoration:none;">
                                <span class="w-2 h-2 rounded-full bg-primary-400 <?php echo $is_active ? 'animate-ping' : 'animate-pulse'; ?>"></span>
                                <span><?php echo esc_html($item['label']); ?></span>
                            </a>
                        <?php else : ?>
                            <!-- Enlaces Principales (Inicio, Cursos, Eventos) con Raya Verde Neón y Tipografía Cyber -->
                            <a href="<?php echo esc_url($item['url']); ?>" class="font-display text-[0.95rem] tracking-wide transition-colors relative py-1.5 px-0.5 block group <?php echo $is_active ? 'text-white font-bold' : 'text-slate-300 hover:text-white font-medium'; ?>" style="text-decoration:none;">
                                <span><?php echo esc_html($item['label']); ?></span>
                                <?php if ($is_active) : ?>
                                    <!-- Raya verde activa fija con resplandor neón -->
                                    <span class="absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-primary-400 via-emerald-400 to-cyan-400 shadow-[0_0_12px_rgba(84,180,53,0.9)]"></span>
                                <?php else : ?>
                                    <!-- Expansión suave de la raya verde al pasar el cursor (hover) -->
                                    <span class="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary-400/70 rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(84,180,53,0.6)]"></span>
                                <?php endif; ?>
                            </a>
                        <?php endif; ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        </nav>

        <!-- Acciones de Usuario y Sesión Tutor LMS -->
        <div class="hidden md:flex items-center gap-3">
            <?php if ($is_logged_in): ?>
                <div class="relative flex items-center gap-3">
                    <a href="<?php echo esc_url($dashboard_url); ?>" class="flex items-center gap-2 rounded-full border border-primary-500/40 bg-deep-900/90 py-1.5 pl-2 pr-4 text-xs font-medium text-white hover:border-primary-400 hover:bg-primary-500/10 transition-all" style="text-decoration:none;">
                        <?php echo get_avatar($current_user->ID, 28, '', '', array('class' => 'h-7 w-7 rounded-full object-cover border border-primary-400/50 inline-block')); ?>
                        <span class="max-w-[130px] truncate"><?php echo esc_html($current_user->display_name ?: $current_user->user_login); ?></span>
                    </a>
                    <a href="<?php echo esc_url($logout_url); ?>" class="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors" style="text-decoration:none;" title="Cerrar Sesión">
                        Salir
                    </a>
                </div>
            <?php else: ?>
                <a href="<?php echo esc_url($login_url); ?>" class="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-primary-400 hover:shadow-[0_0_20px_rgba(84,180,53,0.4)] transition-all" style="text-decoration:none;">
                    Acceder
                </a>
            <?php endif; ?>
        </div>

        <!-- Botón Móvil -->
        <button type="button" id="stb-mobile-toggle" class="md:hidden p-2 text-slate-200 hover:text-white" aria-label="Abrir Menú">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    </div>

    <!-- Menú Móvil Desplegable -->
    <div id="stb-mobile-menu" class="hidden md:hidden border-t border-white/10 bg-deep-950/98 px-6 py-4 space-y-3">
        <ul class="space-y-2 list-none m-0 p-0">
            <?php foreach ($menu_items as $item) : 
                $item_url  = $item['url'];
                $item_path = trim(parse_url($item_url, PHP_URL_PATH) ?? '', '/');
                $is_active = false;

                if ($item_path === '' || $item_url === home_url('/') || $item_url === home_url() || $item['key'] === 'home') {
                    $is_active = ($current_req_path === '' || is_front_page() || is_home());
                } elseif ($item['key'] === 'cursos' || strpos($item_path, 'curso') !== false || strpos($item_path, 'course') !== false) {
                    $is_active = (strpos($current_req_path, 'curso') !== false || strpos($current_req_path, 'course') !== false || (function_exists('tutor') && is_singular(tutor()->course_post_type)));
                } elseif ($item['key'] === 'eventos' || strpos($item_path, 'evento') !== false) {
                    $is_active = (strpos($current_req_path, 'evento') !== false);
                } elseif (!empty($item['is_button']) || $item['key'] === 'stblock' || strpos($item_path, 'stblock') !== false) {
                    $is_active = (strpos($current_req_path, 'stblock') !== false);
                } else {
                    $is_active = ($current_req_path === $item_path || strpos($current_req_path, $item_path . '/') === 0);
                }
            ?>
                <li>
                    <?php if (!empty($item['is_button'])) : ?>
                        <a href="<?php echo esc_url($item['url']); ?>" class="block py-2 px-4 rounded-xl text-center font-bold text-xs uppercase tracking-wider <?php echo $is_active ? 'border-2 border-primary-400 bg-primary-500/20 text-white shadow-[0_0_20px_rgba(84,180,53,0.7)]' : 'border border-primary-500/40 bg-primary-500/10 text-primary-300'; ?>" style="text-decoration:none;">
                            <?php echo esc_html($item['label']); ?>
                        </a>
                    <?php else : ?>
                        <a href="<?php echo esc_url($item['url']); ?>" class="flex items-center justify-between py-2 text-sm font-medium <?php echo $is_active ? 'text-primary-400 font-bold border-l-2 border-primary-400 pl-3' : 'text-slate-300 hover:text-white pl-3'; ?>" style="text-decoration:none;">
                            <span><?php echo esc_html($item['label']); ?></span>
                            <?php if ($is_active) : ?>
                                <span class="w-1.5 h-1.5 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(84,180,53,0.8)]"></span>
                            <?php endif; ?>
                        </a>
                    <?php endif; ?>
                </li>
            <?php endforeach; ?>
        </ul>
        <div class="pt-3 border-t border-white/10">
            <?php if ($is_logged_in): ?>
                <a href="<?php echo esc_url($dashboard_url); ?>" class="block text-center rounded-xl bg-primary-500 py-2.5 text-xs font-bold text-black uppercase tracking-wider" style="text-decoration:none;">Mi Panel (<?php echo esc_html($current_user->display_name); ?>)</a>
            <?php else: ?>
                <a href="<?php echo esc_url($login_url); ?>" class="block text-center rounded-xl bg-primary-500 py-2.5 text-xs font-bold text-black uppercase tracking-wider" style="text-decoration:none;">Acceder</a>
            <?php endif; ?>
        </div>
    </div>
</header>

<script>
document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('stb-mobile-toggle');
    var menu = document.getElementById('stb-mobile-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('hidden');
        });
    }
});
</script>
