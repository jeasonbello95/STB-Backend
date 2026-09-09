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
    <style>
        :root {
            --font-sans: 'Inter', system-ui, sans-serif;
            --font-display: 'Space Grotesk', 'Inter', system-ui, sans-serif;
            --tutor-surface-base: #05090F !important;
        }
        html,
        html[data-tutor-theme="dark"],
        body,
        body[data-tutor-theme="dark"],
        body.stb-ecommerce-body {
            background-color: #05090F !important;
            color: #ffffff !important;
        }
        /* ================= AMBIENT BACKGROUND (REPLICA 1:1 REACT) ================= */
        .stb-ambient-wrapper {
            position: fixed;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            overflow: hidden;
            background-color: #05090F !important;
        }
        .stb-ambient-base {
            position: absolute;
            inset: 0;
            background: radial-gradient(ellipse at top left, rgba(20, 83, 45, 0.35), transparent 55%),
                        radial-gradient(ellipse at bottom right, rgba(15, 52, 96, 0.4), transparent 55%);
        }
        .stb-blob-green {
            position: absolute;
            top: -15%;
            left: -10%;
            width: 560px;
            height: 560px;
            border-radius: 9999px;
            background-color: rgba(84, 180, 53, 0.25);
            filter: blur(130px);
            -webkit-filter: blur(130px);
            animation: stbFloatGreen 26s ease-in-out infinite;
        }
        .stb-blob-blue {
            position: absolute;
            bottom: -20%;
            right: -12%;
            width: 640px;
            height: 640px;
            border-radius: 9999px;
            background-color: rgba(18, 34, 58, 0.75);
            filter: blur(150px);
            -webkit-filter: blur(150px);
            animation: stbFloatBlue 22s ease-in-out infinite 1s;
        }
        .stb-blob-cyan {
            position: absolute;
            top: 40%;
            left: 55%;
            width: 420px;
            height: 420px;
            border-radius: 9999px;
            background-color: rgba(0, 229, 255, 0.15);
            filter: blur(130px);
            -webkit-filter: blur(130px);
            animation: stbFloatCyan 18s ease-in-out infinite 2s;
        }
        .stb-ambient-grid {
            position: absolute;
            inset: 0;
            background-image: linear-gradient(rgba(84, 180, 53, 0.06) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(84, 180, 53, 0.06) 1px, transparent 1px);
            background-size: 40px 40px;
            mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
            -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
        }
        .stb-ambient-vignette {
            position: absolute;
            inset: 0;
            background: radial-gradient(ellipse at center, transparent 55%, rgba(0, 0, 0, 0.65) 100%);
        }
        @keyframes stbFloatGreen {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(60px, -50px); }
            66% { transform: translate(-40px, 40px); }
        }
        @keyframes stbFloatBlue {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(-70px, 60px); }
            66% { transform: translate(50px, -40px); }
        }
        @keyframes stbFloatCyan {
            0%, 100% { transform: translate(0, 0); }
            33% { transform: translate(40px, -60px); }
            66% { transform: translate(-60px, 30px); }
        }
    </style>
    <?php wp_head(); ?>
</head>
<body <?php body_class('stb-ecommerce-body bg-[#05090F] text-white antialiased min-h-screen flex flex-col selection:bg-primary-500 selection:text-black'); ?> style="background-color: #05090F;">
    <?php wp_body_open(); ?>

    <!-- Luces ambientales de fondo (Efecto Neon React 1:1) -->
    <div class="stb-ambient-wrapper">
        <div class="stb-ambient-base"></div>
        <div class="stb-blob-green"></div>
        <div class="stb-blob-blue"></div>
        <div class="stb-blob-cyan"></div>
        <div class="stb-ambient-grid"></div>
        <div class="stb-ambient-vignette"></div>
    </div>

    <!-- Header oficial nativo -->
    <?php
    $header_path = STB_PLUGIN_DIR . 'templates/parts/header-native.php';
    if (file_exists($header_path)) {
        include $header_path;
    }
    ?>

    <!-- Contenedor Principal eCommerce -->
    <main class="stb-ecommerce-main flex-grow relative z-10">
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
