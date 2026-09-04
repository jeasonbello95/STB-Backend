<?php
/**
 * Template Name: STB Academy eCommerce (Carrito & Checkout)
 * Description: Plantilla oficial en modo oscuro para las vistas de Carrito, Checkout y Pagos de Tutor LMS.
 */

if (!defined('ABSPATH')) {
    exit;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="dark" data-tutor-theme="dark">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="<?php echo esc_url(home_url('/imagenes/favicon.png')); ?>" />
    <link rel="shortcut icon" type="image/png" href="<?php echo esc_url(home_url('/imagenes/favicon.png')); ?>" />
    <link rel="apple-touch-icon" href="<?php echo esc_url(home_url('/imagenes/favicon.png')); ?>" />
    <?php wp_head(); ?>
</head>
<body <?php body_class('stb-ecommerce-body bg-[#070A0F] text-white antialiased min-h-screen flex flex-col selection:bg-primary-500 selection:text-black'); ?>>
    <?php wp_body_open(); ?>

    <!-- Luces ambientales de fondo (Efecto Neon React) -->
    <div class="fixed inset-0 bg-grid-pattern bg-grid opacity-15 pointer-events-none z-0"></div>
    <div class="fixed left-1/4 top-20 h-96 w-96 rounded-full bg-primary-500/10 blur-[140px] pointer-events-none z-0"></div>
    <div class="fixed right-1/4 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none z-0"></div>

    <!-- Header oficial nativo -->
    <?php
    $header_path = STB_PLUGIN_DIR . 'templates/parts/header-native.php';
    if (file_exists($header_path)) {
        include $header_path;
    }
    ?>

    <!-- Contenedor Principal eCommerce -->
    <main class="stb-ecommerce-main flex-grow pt-28 pb-20 relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Barra de Retorno y Estado -->
            <div class="mb-6 flex items-center justify-between">
                <a href="<?php echo esc_url(home_url('/cursos')); ?>" class="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-primary-300 transition-colors group" style="text-decoration:none;">
                    <svg class="w-4 h-4 transition-transform group-hover:-translate-x-1 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    <span>Explorar más cursos</span>
                </a>

                <div class="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                    <span class="inline-block w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                    <span class="text-slate-300 font-medium">Checkout Seguro SSL 256-bit</span>
                </div>
            </div>

            <!-- Contenido dinámico de Tutor LMS (Cart o Checkout) -->
            <div class="stb-ecommerce-content">
                <?php
                if (have_posts()) {
                    while (have_posts()) {
                        the_post();
                        the_content();
                    }
                }
                ?>
            </div>
        </div>
    </main>

    <!-- Footer oficial nativo -->
    <?php
    $footer_path = STB_PLUGIN_DIR . 'templates/parts/footer-native.php';
    if (file_exists($footer_path)) {
        include $footer_path;
    }
    ?>

    <?php wp_footer(); ?>
</body>
</html>
