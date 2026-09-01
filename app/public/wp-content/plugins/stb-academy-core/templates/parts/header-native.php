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

        <!-- Menú de Navegación Nativo de WordPress (wp_nav_menu) -->
        <nav class="hidden md:flex items-center gap-8">
            <?php
            if (has_nav_menu('stb_primary')) {
                wp_nav_menu(array(
                    'theme_location' => 'stb_primary',
                    'container'      => false,
                    'menu_class'     => 'flex items-center gap-7 list-none m-0 p-0',
                    'fallback_cb'    => false,
                    'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                    'depth'          => 2,
                ));
            } else {
                // Menú por defecto si aún no se ha asignado menú en WordPress
                ?>
                <ul class="flex items-center gap-7 list-none m-0 p-0">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>" class="text-slate-300 hover:text-white text-sm font-medium transition-colors" style="text-decoration:none;">Inicio</a></li>
                    <li><a href="<?php echo esc_url(home_url('/cursos')); ?>" class="text-slate-300 hover:text-white text-sm font-medium transition-colors" style="text-decoration:none;">Cursos</a></li>
                    <li><a href="<?php echo esc_url(home_url('/eventos')); ?>" class="text-slate-300 hover:text-white text-sm font-medium transition-colors" style="text-decoration:none;">Eventos</a></li>
                    <li><a href="<?php echo esc_url(home_url('/stblock')); ?>" class="rounded-full border border-primary-500/50 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold text-primary-300 hover:bg-primary-500/20 hover:border-primary-400 transition-all" style="text-decoration:none;">STBlock</a></li>
                </ul>
                <?php
            }
            ?>
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
        <?php
        if (has_nav_menu('stb_primary')) {
            wp_nav_menu(array(
                'theme_location' => 'stb_primary',
                'container'      => false,
                'menu_class'     => 'space-y-2 list-none m-0 p-0',
                'fallback_cb'    => false,
            ));
        } else {
            ?>
            <ul class="space-y-2 list-none m-0 p-0">
                <li><a href="<?php echo esc_url(home_url('/')); ?>" class="block py-1.5 text-slate-300 hover:text-primary-400 font-medium text-sm" style="text-decoration:none;">Inicio</a></li>
                <li><a href="<?php echo esc_url(home_url('/cursos')); ?>" class="block py-1.5 text-slate-300 hover:text-primary-400 font-medium text-sm" style="text-decoration:none;">Cursos</a></li>
                <li><a href="<?php echo esc_url(home_url('/eventos')); ?>" class="block py-1.5 text-slate-300 hover:text-primary-400 font-medium text-sm" style="text-decoration:none;">Eventos</a></li>
                <li><a href="<?php echo esc_url(home_url('/stblock')); ?>" class="block py-1.5 text-primary-400 font-medium text-sm" style="text-decoration:none;">STBlock</a></li>
            </ul>
            <?php
        }
        ?>
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
