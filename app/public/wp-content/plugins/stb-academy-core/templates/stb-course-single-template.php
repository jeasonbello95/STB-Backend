<?php
/**
 * STB Academy - Plantilla de Curso Individual (Dark Cyber Theme)
 * Compatible con Tutor LMS & Tutor Pro
 *
 * @package STB_Academy_Core
 */

defined('ABSPATH') || exit;

use Tutor\Models\CourseModel;
use Tutor\Models\EnrollmentModel;
use Tutor\Ecommerce\CartController;
use Tutor\Ecommerce\CheckoutController;
use Tutor\Ecommerce\Settings;
use Tutor\Models\CartModel;

$course_id     = get_the_ID();
$user_id       = get_current_user_id();
$is_logged_in  = is_user_logged_in();
$is_enrolled   = EnrollmentModel::is_enrolled($course_id, $user_id);
$is_completed  = tutor_utils()->is_completed_course($course_id, $user_id);
$lesson_url    = tutor_utils()->get_course_first_lesson($course_id);

// Precios y monetización
$price_info    = tutor_utils()->get_raw_course_price($course_id);
$is_purchasable= tutor_utils()->is_course_purchasable($course_id);
$is_public     = \TUTOR\Course_List::is_public($course_id);
$regular_price = $price_info ? $price_info->regular_price : 0;
$sale_price    = $price_info ? $price_info->sale_price : 0;
$display_price = $price_info ? $price_info->display_price : 0;
$is_free       = !$price_info || (empty($regular_price) && empty($sale_price) && empty($display_price));

$is_course_in_cart = CartModel::is_course_in_user_cart($user_id, $course_id);
$cart_page_url     = CartController::get_page_url();
$buy_now_link      = add_query_arg(array('course_id' => $course_id), CheckoutController::get_page_url());

// Metadata del curso
$course_rating     = tutor_utils()->get_course_rating($course_id);
$rating_avg        = isset($course_rating->rating_avg) ? (float) $course_rating->rating_avg : 5.0;
$rating_count      = isset($course_rating->rating_count) ? (int) $course_rating->rating_count : 0;
$total_enrolled    = tutor_utils()->count_enrolled_users_by_course($course_id);
$course_duration   = get_tutor_course_duration_context($course_id);
$course_level      = get_tutor_course_level($course_id);
$categories        = wp_get_post_terms($course_id, 'course-category');
$category_name     = !empty($categories) && !is_wp_error($categories) ? $categories[0]->name : 'Trading & Finanzas';

// Instructor
$instructor_id     = get_post_field('post_author', $course_id);
$instructor_name   = get_the_author_meta('display_name', $instructor_id) ?: 'STB Academy Master';
$instructor_bio    = get_the_author_meta('description', $instructor_id) ?: 'Instructor profesional y trader institucional con años de experiencia formando operadores de alto rendimiento.';
$instructor_avatar = get_avatar_url($instructor_id, array('size' => 120));

// Contenido y temas
$topics = apply_filters('tutor_get_course_topics', tutor_utils()->get_topics($course_id));
$has_video = apply_filters('tutor_course_has_video', tutor_utils()->has_video_in_single(), $course_id);

// Progreso si está inscrito
$course_progress   = $is_enrolled ? tutor_utils()->get_course_completed_percent($course_id, $user_id, true) : null;
$completed_percent = $course_progress ? $course_progress['completed_percent'] : 0;

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="dark">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php the_title(); ?> | STB Academy</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
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
        body.stb-native-body {
            font-family: var(--font-sans) !important;
            background-color: #05090F !important;
            color: #f1f5f9 !important;
        }
        .font-display, h1, h2, h3, h4, .stb-font-display {
            font-family: var(--font-display) !important;
        }
        .stb-course-main-wrapper {
            padding-top: 73px !important;
            padding-bottom: 5rem !important;
        }
        body.admin-bar .stb-course-main-wrapper {
            padding-top: 105px !important;
        }
        @media screen and (max-width: 782px) {
            .stb-course-main-wrapper {
                padding-top: 73px !important;
            }
            body.admin-bar .stb-course-main-wrapper {
                padding-top: 119px !important;
            }
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
        /* Visual React STB: Cuadrícula y degradados idénticos al Inicio */
        .bg-grid-pattern {
            background-image: linear-gradient(rgba(84,180,53,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(84,180,53,0.06) 1px, transparent 1px);
        }
        .bg-grid {
            background-size: 40px 40px;
        }
        .text-gradient {
            background: linear-gradient(90deg, #6fcc4b 0%, #00e5ff 45%, #54b435 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        /* Tarjetas Glassmorphism de la App React */
        .stb-react-card {
            background: rgba(7, 19, 13, 0.6) !important;
            backdrop-filter: blur(24px) !important;
            -webkit-backdrop-filter: blur(24px) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.45) !important;
            position: relative;
        }
        .stb-react-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(84, 180, 53, 0.4), rgba(0, 229, 255, 0.3), transparent);
            pointer-events: none;
            z-index: 1;
        }
        /* Tarjeta de compra lateral */
        .stb-pricing-card {
            background: rgba(5, 9, 15, 0.85) !important;
            backdrop-filter: blur(28px) !important;
            -webkit-backdrop-filter: blur(28px) !important;
            border: 1px solid rgba(84, 180, 53, 0.35) !important;
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(84, 180, 53, 0.12) !important;
            position: relative;
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .stb-pricing-card:hover {
            border-color: rgba(84, 180, 53, 0.55) !important;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7), 0 0 45px rgba(84, 180, 53, 0.2) !important;
        }
        /* Botones oficiales React */
        .stb-btn-glow {
            background: linear-gradient(135deg, #6FCC4B 0%, #54B435 100%) !important;
            color: #05090F !important;
            font-weight: 800 !important;
            border: none !important;
            box-shadow: 0 0 25px rgba(84, 180, 53, 0.45) !important;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .stb-btn-glow:hover {
            background: linear-gradient(135deg, #7ee055 0%, #6FCC4B 100%) !important;
            box-shadow: 0 0 35px rgba(84, 180, 53, 0.7) !important;
            transform: translateY(-2px);
            color: #000000 !important;
        }
        .stb-btn-secondary {
            background: rgba(255, 255, 255, 0.05) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            border: 1px solid rgba(255, 255, 255, 0.15) !important;
            color: #f1f5f9 !important;
            font-weight: 700 !important;
            transition: all 0.3s ease !important;
        }
        .stb-btn-secondary:hover {
            background: rgba(84, 180, 53, 0.12) !important;
            border-color: rgba(84, 180, 53, 0.5) !important;
            color: #54B435 !important;
            box-shadow: 0 0 20px rgba(84, 180, 53, 0.2) !important;
            transform: translateY(-2px);
        }
    </style>
</head>
<body <?php body_class('stb-native-body min-h-screen text-slate-100 antialiased selection:bg-[#54B435]/30 selection:text-[#54B435]'); ?> style="background-color: #05090F;">

<?php
// Render Header Nativo STB Academy
include STB_PLUGIN_DIR . 'templates/parts/header-native.php';
?>

<!-- Ambient Background (Exact replica of React AmbientBackground) -->
<div class="stb-ambient-wrapper">
    <div class="stb-ambient-base"></div>
    <div class="stb-blob-green"></div>
    <div class="stb-blob-blue"></div>
    <div class="stb-blob-cyan"></div>
    <div class="stb-ambient-grid"></div>
    <div class="stb-ambient-vignette"></div>
</div>

<div class="stb-course-main-wrapper relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Breadcrumbs -->
        <nav class="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6 uppercase tracking-wider" style="margin-top: 24px;">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="hover:text-[#54B435] transition-colors">Inicio</a>
            <span>/</span>
            <a href="<?php echo esc_url(home_url('/cursos')); ?>" class="hover:text-[#54B435] transition-colors">Cursos</a>
            <span>/</span>
            <span class="text-slate-200 truncate max-w-xs sm:max-w-md"><?php the_title(); ?></span>
        </nav>

        <!-- Course Header Hero Section -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            <!-- Left Hero Info -->
            <div class="lg:col-span-8 flex flex-col justify-center">
                <!-- Badges Row -->
                <div class="flex flex-wrap items-center gap-2.5 mb-4">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#54B435]/15 text-[#54B435] border border-[#54B435]/30">
                        <span class="w-1.5 h-1.5 rounded-full bg-[#54B435] animate-pulse mr-1.5"></span>
                        <?php echo esc_html($category_name); ?>
                    </span>
                    <?php if ($course_level) : ?>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-white/10">
                            Nivel: <?php echo esc_html($course_level); ?>
                        </span>
                    <?php endif; ?>
                    <?php if ($course_duration) : ?>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-white/10">
                            ⏱️ <?php echo esc_html($course_duration); ?>
                        </span>
                    <?php endif; ?>
                </div>

                <!-- Course Title -->
                <h1 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                    <?php the_title(); ?>
                </h1>

                <!-- Course Excerpt / Subtitle -->
                <?php if (has_excerpt()) : ?>
                    <p class="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
                        <?php echo esc_html(get_the_excerpt()); ?>
                    </p>
                <?php endif; ?>

                <!-- Meta bar: Author, Rating, Enrolled -->
                <div class="flex flex-wrap items-center gap-6 py-3 border-y border-white/10 text-sm text-slate-300">
                    <!-- Instructor -->
                    <div class="flex items-center gap-2.5">
                        <img src="<?php echo esc_url($instructor_avatar); ?>" alt="<?php echo esc_attr($instructor_name); ?>" class="w-8 h-8 rounded-full border border-white/20 object-cover" />
                        <span>Por <strong class="text-white"><?php echo esc_html($instructor_name); ?></strong></span>
                    </div>

                    <!-- Ratings -->
                    <div class="flex items-center gap-1.5">
                        <div class="flex text-amber-400 text-sm">
                            <?php
                            $full_stars = floor($rating_avg);
                            for ($i = 0; $i < 5; $i++) {
                                echo $i < $full_stars ? '★' : '☆';
                            }
                            ?>
                        </div>
                        <span class="font-bold text-white"><?php echo number_format($rating_avg, 1); ?></span>
                        <?php if ($rating_count > 0) : ?>
                            <span class="text-slate-400 text-xs">(<?php echo esc_html($rating_count); ?> valoraciones)</span>
                        <?php endif; ?>
                    </div>

                    <!-- Enrolled Count -->
                    <?php if ($total_enrolled > 0) : ?>
                        <div class="flex items-center gap-1.5 text-slate-300">
                            <span>👥 <strong><?php echo esc_html($total_enrolled); ?></strong> estudiantes</span>
                        </div>
                    <?php endif; ?>

                    <!-- Last Update -->
                    <div class="text-xs text-slate-400">
                        Actualizado: <?php echo get_the_modified_date('M Y'); ?>
                    </div>
                </div>
            </div>

            <!-- Right Hero Media (Thumbnail / Video Preview Frame) -->
            <div class="lg:col-span-4">
                <div class="relative rounded-2xl overflow-hidden border border-white/10 stb-react-card shadow-2xl group">
                    <?php if ($has_video) : ?>
                        <div class="aspect-video relative flex items-center justify-center bg-slate-900">
                            <?php tutor_course_video(); ?>
                        </div>
                    <?php else : ?>
                        <?php
                        $course_thumb_src = get_the_post_thumbnail_url($course_id, 'full');
                        if (empty($course_thumb_src) && function_exists('tutor_utils')) {
                            $course_thumb_src = tutor_utils()->get_course_thumbnail_src($course_id);
                        }
                        if (empty($course_thumb_src)) {
                            $course_thumb_src = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80';
                        }
                        ?>
                        <div class="aspect-video relative overflow-hidden bg-slate-900">
                            <img src="<?php echo esc_url($course_thumb_src); ?>" alt="<?php the_title_attribute(); ?>" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div class="absolute inset-0 bg-gradient-to-t from-[#05090F] via-transparent to-transparent opacity-70"></div>
                            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                                <span class="flex items-center gap-1.5 text-[#54B435] font-bold">
                                    <span class="w-2 h-2 rounded-full bg-[#54B435] animate-pulse"></span>
                                    STB MASTERCLASS
                                </span>
                                <span class="text-slate-300">HD 1080p</span>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <!-- Course Main Body (2 Columns Layout) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <!-- Left Main Column: Tabs, Curriculum, Instructor, Reviews (8 cols) -->
            <main class="lg:col-span-8 space-y-8">
                
                <!-- Course Tab Buttons -->
                <div class="flex items-center gap-2 border-b border-white/10 pb-px overflow-x-auto no-scrollbar">
                    <button type="button" onclick="stbSwitchTab('tab-info')" id="btn-tab-info" class="stb-tab-btn font-display px-5 py-3 text-sm font-bold border-b-2 border-[#54B435] text-[#54B435] transition-all">
                        Información General
                    </button>
                    <button type="button" onclick="stbSwitchTab('tab-curriculum')" id="btn-tab-curriculum" class="stb-tab-btn font-display px-5 py-3 text-sm font-semibold border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all">
                        Temario del Curso
                    </button>
                    <button type="button" onclick="stbSwitchTab('tab-instructor')" id="btn-tab-instructor" class="stb-tab-btn font-display px-5 py-3 text-sm font-semibold border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all">
                        Instructor
                    </button>
                    <button type="button" onclick="stbSwitchTab('tab-reviews')" id="btn-tab-reviews" class="stb-tab-btn font-display px-5 py-3 text-sm font-semibold border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all">
                        Reseñas
                    </button>
                </div>

                <!-- Tab 1: Course Info & Description -->
                <div id="tab-info" class="stb-tab-content space-y-8">
                    
                    <!-- What you will learn / Highlights -->
                    <?php
                    $benefits = tutor_course_benefits();
                    if (!empty($benefits)) :
                    ?>
                    <div class="p-6 sm:p-8 rounded-2xl stb-react-card relative overflow-hidden">
                        <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#54B435]/40 to-transparent"></div>
                        <h3 class="font-display text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span class="text-[#54B435]">✓</span> Lo que aprenderás en este programa
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                            <?php foreach ($benefits as $benefit) : ?>
                                <div class="flex items-start gap-2.5 text-sm text-slate-300">
                                    <span class="text-[#54B435] font-bold shrink-0 mt-0.5">✦</span>
                                    <span><?php echo esc_html($benefit); ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <?php endif; ?>

                    <!-- Main Course Description -->
                    <div class="p-6 sm:p-8 rounded-2xl stb-react-card relative overflow-hidden">
                        <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        <h3 class="font-display text-xl font-bold text-white mb-4">Descripción del Curso</h3>
                        <div class="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-4 font-sans">
                            <?php the_content(); ?>
                        </div>
                    </div>

                    <!-- Requirements & Audience Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Requirements -->
                        <?php
                        $requirements = tutor_course_requirements();
                        if (!empty($requirements)) :
                        ?>
                        <div class="p-6 rounded-2xl stb-react-card relative overflow-hidden">
                            <h4 class="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
                                <span>📋</span> Requisitos Previos
                            </h4>
                            <ul class="space-y-2 text-sm text-slate-300">
                                <?php foreach ($requirements as $req) : ?>
                                    <li class="flex items-start gap-2">
                                        <span class="text-slate-400">•</span>
                                        <span><?php echo esc_html($req); ?></span>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                        <?php endif; ?>

                        <!-- Target Audience -->
                        <?php
                        $target_audience = tutor_course_target_audience();
                        if (!empty($target_audience)) :
                        ?>
                        <div class="p-6 rounded-2xl stb-react-card relative overflow-hidden">
                            <h4 class="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
                                <span>🎯</span> ¿A quién va dirigido?
                            </h4>
                            <ul class="space-y-2 text-sm text-slate-300">
                                <?php foreach ($target_audience as $target) : ?>
                                    <li class="flex items-start gap-2">
                                        <span class="text-[#54B435] font-bold">›</span>
                                        <span><?php echo esc_html($target); ?></span>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                        <?php endif; ?>
                    </div>
                </div>

                <!-- Tab 2: Curriculum / Temario -->
                <div id="tab-curriculum" class="stb-tab-content space-y-4 hidden">
                    <div class="flex items-center justify-between p-4 rounded-xl stb-react-card text-xs font-mono text-slate-300">
                        <span>Plan de Estudios Oficial</span>
                        <span>Módulos de Formación Institucional</span>
                    </div>

                    <!-- Native Tutor Curriculum Wrapper with Dark Cyber Accordion -->
                    <div class="tutor-course-topics-wrap tutor-accordion">
                        <?php if ($topics && $topics->have_posts()) : ?>
                            <?php
                            $topic_index = 0;
                            while ($topics->have_posts()) :
                                $topics->the_post();
                                $topic_index++;
                                $topic_id = get_the_ID();
                                $topic_contents = tutor_utils()->get_course_contents_by_topic($topic_id, -1);
                                $contents_count = $topic_contents ? $topic_contents->post_count : 0;
                            ?>
                            <div class="rounded-xl border border-white/10 stb-react-card overflow-hidden mb-3 transition-all hover:border-[#54B435]/40">
                                <button type="button" class="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none" onclick="stbToggleAccordion('topic-<?php echo esc_attr($topic_id); ?>')">
                                    <div class="flex items-center gap-3">
                                        <span class="w-6 h-6 rounded-full bg-[#54B435]/15 text-[#54B435] text-xs font-bold flex items-center justify-center border border-[#54B435]/30">
                                            <?php echo esc_html($topic_index); ?>
                                        </span>
                                        <span class="font-display font-bold text-white text-base"><?php the_title(); ?></span>
                                    </div>
                                    <div class="flex items-center gap-3 text-xs text-slate-400 font-mono">
                                        <span><?php echo esc_html($contents_count); ?> lecciones</span>
                                        <span id="icon-topic-<?php echo esc_attr($topic_id); ?>" class="text-sm transform transition-transform">▼</span>
                                    </div>
                                </button>

                                <div id="topic-<?php echo esc_attr($topic_id); ?>" class="<?php echo $topic_index === 1 ? '' : 'hidden'; ?> px-5 pb-4 border-t border-white/5 space-y-2 pt-3">
                                    <?php if ($topic_contents && $topic_contents->have_posts()) : ?>
                                        <?php while ($topic_contents->have_posts()) : $topic_contents->the_post(); 
                                            global $post;
                                            $is_preview = get_post_meta($post->ID, '_is_preview', true);
                                            $video_info = tutor_utils()->get_video_info();
                                            $playtime   = $video_info ? $video_info->playtime : '';
                                        ?>
                                        <div class="flex items-center justify-between py-2.5 px-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-sm">
                                            <div class="flex items-center gap-3 text-slate-300">
                                                <span class="text-slate-500 text-xs">▶</span>
                                                <span class="font-medium"><?php the_title(); ?></span>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <?php if ($is_preview) : ?>
                                                    <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                                                        Vista Previa
                                                    </span>
                                                <?php endif; ?>
                                                <?php if ($playtime) : ?>
                                                    <span class="text-xs text-slate-400 font-mono"><?php echo esc_html($playtime); ?></span>
                                                <?php endif; ?>
                                            </div>
                                        </div>
                                        <?php endwhile; wp_reset_postdata(); ?>
                                    <?php else : ?>
                                        <div class="text-xs text-slate-500 py-2">Próximamente disponible.</div>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <?php endwhile; wp_reset_postdata(); ?>
                        <?php else : ?>
                            <div class="p-6 rounded-xl stb-react-card text-center text-slate-400">
                                El temario está en estructuración para este curso.
                            </div>
                        <?php endif; ?>
                    </div>
                </div>

                <!-- Tab 3: Instructor Profile -->
                <div id="tab-instructor" class="stb-tab-content space-y-6 hidden">
                    <div class="p-6 sm:p-8 rounded-2xl stb-react-card relative overflow-hidden flex flex-col sm:flex-row items-start gap-6">
                        <img src="<?php echo esc_url($instructor_avatar); ?>" alt="<?php echo esc_attr($instructor_name); ?>" class="w-20 h-20 rounded-2xl border-2 border-[#54B435]/40 object-cover shadow-lg" />
                        <div class="flex-1 space-y-2">
                            <h3 class="font-display text-xl font-bold text-white"><?php echo esc_html($instructor_name); ?></h3>
                            <div class="text-xs font-mono text-[#54B435]">Instructor Oficial STB Academy</div>
                            <p class="text-sm text-slate-300 leading-relaxed">
                                <?php echo esc_html($instructor_bio); ?>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Tab 4: Reviews -->
                <div id="tab-reviews" class="stb-tab-content space-y-6 hidden">
                    <div class="p-6 sm:p-8 rounded-2xl stb-react-card relative overflow-hidden">
                        <div class="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
                            <div class="text-center sm:text-left">
                                <div class="font-display text-5xl font-extrabold text-white mb-1"><?php echo number_format($rating_avg, 1); ?></div>
                                <div class="flex text-amber-400 text-lg mb-1">
                                    ★★★★★
                                </div>
                                <div class="text-xs text-slate-400">Puntuación promedio del curso</div>
                            </div>
                            <div class="text-center sm:text-right text-sm text-slate-300">
                                <span class="text-[#54B435] font-bold">100% Calificaciones verificadas</span> de alumnos reales.
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <!-- Right Column: Sticky Action / Purchase Sidebar Card (4 cols) -->
            <aside class="lg:col-span-4">
                <div class="sticky top-28 space-y-6">
                    
                    <!-- Pricing & Purchase Card -->
                    <div class="stb-pricing-card p-6 sm:p-7 rounded-2xl relative overflow-hidden">
                        
                        <!-- Top Accent Line -->
                        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-[#54B435] to-cyan-500"></div>

                        <!-- Price Section -->
                        <div class="mb-6">
                            <div class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Inversión / Acceso</div>
                            <div class="flex items-baseline gap-3">
                                <?php if ($is_free) : ?>
                                    <span class="font-display text-4xl font-extrabold text-white">Gratis</span>
                                <?php else : ?>
                                    <span class="font-display text-4xl font-extrabold text-white">
                                        <?php tutor_print_formatted_price($display_price); ?>
                                    </span>
                                    <?php if ($regular_price && $sale_price && $sale_price !== $regular_price) : ?>
                                        <del class="text-lg text-slate-500 font-mono">
                                            <?php tutor_print_formatted_price($regular_price); ?>
                                        </del>
                                    <?php endif; ?>
                                <?php endif; ?>
                            </div>
                        </div>

                        <!-- CTA Actions -->
                        <div class="space-y-3 mb-6">
                            <?php if ($is_enrolled) : ?>
                                <!-- Enrolled: Continue Button & Progress -->
                                <?php if ($completed_percent > 0) : ?>
                                    <div class="space-y-1.5 mb-3">
                                        <div class="flex justify-between text-xs font-mono text-slate-300">
                                            <span>Progreso del Curso</span>
                                            <span class="text-[#54B435] font-bold"><?php echo esc_html($completed_percent); ?>%</span>
                                        </div>
                                        <div class="h-2 rounded-full bg-slate-800 overflow-hidden">
                                            <div class="h-full bg-gradient-to-r from-emerald-500 to-[#54B435] rounded-full" style="width: <?php echo esc_attr($completed_percent); ?>%;"></div>
                                        </div>
                                    </div>
                                <?php endif; ?>

                                <a href="<?php echo esc_url($lesson_url ?: '#'); ?>" class="stb-btn-glow group relative w-full py-4 px-6 rounded-xl font-black text-slate-950 uppercase tracking-wider text-base flex items-center justify-center gap-3 transition-all" style="text-decoration:none;">
                                    <span class="relative z-10 text-xl leading-none">▶</span>
                                    <span class="relative z-10"><?php echo $completed_percent > 0 ? 'Continuar Aprendiendo' : 'Comenzar a Aprender'; ?></span>
                                    <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                    </svg>
                                </a>

                            <?php elseif ($is_purchasable && !$is_free) : ?>
                                <!-- Purchasable: Add to Cart & Buy Now -->
                                <?php if ($is_course_in_cart) : ?>
                                    <a href="<?php echo esc_url($cart_page_url ?: '/cart/'); ?>" class="w-full py-4 px-6 rounded-xl font-bold text-cyan-300 bg-cyan-500/20 border border-cyan-500/50 hover:bg-cyan-500/30 transition-all flex items-center justify-center gap-2.5 text-sm shadow-[0_0_20px_rgba(0,240,255,0.25)]" style="text-decoration:none;">
                                        <span>🛒</span>
                                        <span>Ver Carrito de Compras</span>
                                        <span class="text-xs">›</span>
                                    </a>
                                <?php else : ?>
                                    <button type="button" class="stb-btn-glow group relative w-full py-4 px-6 rounded-xl font-black text-slate-950 uppercase tracking-wider text-base flex items-center justify-center gap-3 tutor-native-add-to-cart cursor-pointer" data-course-id="<?php echo esc_attr($course_id); ?>" data-course-single>
                                        <span class="flex h-2.5 w-2.5 relative">
                                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                                            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
                                        </span>
                                        <span class="relative z-10">Añadir al Carrito</span>
                                        <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                        </svg>
                                    </button>
                                <?php endif; ?>

                                <a href="<?php echo esc_url($buy_now_link); ?>" class="stb-btn-secondary w-full py-3.5 px-6 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-sm" style="text-decoration:none;">
                                    <span>⚡</span>
                                    <span>Comprar Ahora con 1-Click</span>
                                </a>

                            <?php else : ?>
                                <!-- Free Enrollment -->
                                <form class="tutor-enrol-course-form" method="post">
                                    <?php wp_nonce_field(tutor()->nonce_action, tutor()->nonce); ?>
                                    <input type="hidden" name="tutor_course_id" value="<?php echo esc_attr($course_id); ?>">
                                    <input type="hidden" name="tutor_course_action" value="_tutor_course_enroll_now">
                                    <button type="submit" class="stb-btn-glow group relative w-full py-4 px-6 rounded-xl font-black text-slate-950 uppercase tracking-wider text-base flex items-center justify-center gap-3 tutor-enroll-course-button cursor-pointer">
                                        <span class="flex h-2.5 w-2.5 relative">
                                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                                            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
                                        </span>
                                        <span class="relative z-10">Inscribirme al Curso Gratis</span>
                                        <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                        </svg>
                                    </button>
                                </form>
                            <?php endif; ?>
                        </div>

                        <!-- 100% Satisfaction Guarantee -->
                        <div class="text-center text-xs text-slate-400 mb-6 pb-6 border-b border-white/10 flex items-center justify-center gap-2">
                            <span>🛡️</span>
                            <span>Acceso inmediato y seguro a todos los contenidos</span>
                        </div>

                        <!-- Course Specs List -->
                        <div class="space-y-3.5 text-sm">
                            <div class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Este curso incluye:</div>
                            
                            <?php if ($course_duration) : ?>
                            <div class="flex items-center justify-between text-slate-300">
                                <span class="flex items-center gap-2">⏱️ Duración:</span>
                                <span class="font-bold text-white"><?php echo esc_html($course_duration); ?></span>
                            </div>
                            <?php endif; ?>

                            <?php if ($course_level) : ?>
                            <div class="flex items-center justify-between text-slate-300">
                                <span class="flex items-center gap-2">🎓 Nivel de habilidad:</span>
                                <span class="font-bold text-white"><?php echo esc_html($course_level); ?></span>
                            </div>
                            <?php endif; ?>

                            <div class="flex items-center justify-between text-slate-300">
                                <span class="flex items-center gap-2">📱 Dispositivos:</span>
                                <span class="font-bold text-white">Acceso Móvil y PC</span>
                            </div>

                            <div class="flex items-center justify-between text-slate-300">
                                <span class="flex items-center gap-2">♾️ Disponibilidad:</span>
                                <span class="font-bold text-white">Acceso de por Vida</span>
                            </div>

                            <div class="flex items-center justify-between text-slate-300">
                                <span class="flex items-center gap-2">🏆 Certificación:</span>
                                <span class="font-bold text-[#54B435]">Certificado Oficial</span>
                            </div>
                        </div>

                        <!-- Share Button -->
                        <div class="mt-6 pt-6 border-t border-white/10">
                            <button type="button" onclick="navigator.clipboard.writeText(window.location.href); alert('¡Enlace del curso copiado al portapapeles!');" class="w-full py-2.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 flex items-center justify-center gap-2 transition-colors">
                                <span>🔗</span>
                                <span>Compartir este Curso</span>
                            </button>
                        </div>

                    </div>

                </div>
            </aside>

        </div>

    </div>
</div>

<script>
function stbSwitchTab(tabId) {
    document.querySelectorAll('.stb-tab-content').forEach(function(el) {
        el.classList.add('hidden');
    });
    document.querySelectorAll('.stb-tab-btn').forEach(function(btn) {
        btn.classList.remove('border-[#54B435]', 'text-[#54B435]');
        btn.classList.add('border-transparent', 'text-slate-400');
    });

    var activeTab = document.getElementById(tabId);
    if (activeTab) activeTab.classList.remove('hidden');

    var activeBtn = document.getElementById('btn-' + tabId);
    if (activeBtn) {
        activeBtn.classList.remove('border-transparent', 'text-slate-400');
        activeBtn.classList.add('border-[#54B435]', 'text-[#54B435]');
    }
}

function stbToggleAccordion(contentId) {
    var content = document.getElementById(contentId);
    var icon = document.getElementById('icon-' + contentId);
    if (content) {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
            content.classList.add('hidden');
            if (icon) icon.style.transform = 'rotate(0deg)';
        }
    }
}
</script>

<?php
// Render Footer Nativo STB Academy
include STB_PLUGIN_DIR . 'templates/parts/footer-native.php';
wp_footer();
?>
</body>
</html>
