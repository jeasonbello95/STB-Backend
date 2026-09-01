<?php
/**
 * Template Name: STB Academy Canvas (Pantalla Completa React)
 * Description: Plantilla limpia de pantalla completa que monta el Header nativo de WordPress y la app de React.
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="dark">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-ink-black text-white antialiased overflow-x-hidden'); ?>>
    <?php wp_body_open(); ?>

    <?php
    // Cargar Header nativo de WordPress
    $native_header = STB_PLUGIN_DIR . 'templates/parts/header-native.php';
    if (file_exists($native_header)) {
        include $native_header;
    }
    ?>

    <div id="root"></div>

    <?php wp_footer(); ?>
</body>
</html>
