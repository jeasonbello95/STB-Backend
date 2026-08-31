<?php
/**
 * Template Name: STB Academy Canvas (Pantalla Completa React)
 * Description: Plantilla limpia de pantalla completa que monta la app de React manteniendo los scripts de WordPress y Tutor LMS.
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

    <div id="root"></div>

    <?php wp_footer(); ?>
</body>
</html>
