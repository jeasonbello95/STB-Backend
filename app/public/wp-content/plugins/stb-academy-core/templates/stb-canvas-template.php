<?php
/**
 * Template Name: STB Academy Canvas (Pantalla Completa React)
 * Description: Plantilla limpia de pantalla completa que monta la app de React con su Header oficial interactivo.
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="dark">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="<?php echo esc_url(home_url('/imagenes/favicon.png')); ?>" />
    <link rel="shortcut icon" type="image/png" href="<?php echo esc_url(home_url('/imagenes/favicon.png')); ?>" />
    <link rel="apple-touch-icon" href="<?php echo esc_url(home_url('/imagenes/favicon.png')); ?>" />
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-ink-black text-white antialiased overflow-x-hidden'); ?>>
    <?php wp_body_open(); ?>

    <div id="root"></div>

    <?php wp_footer(); ?>
</body>
</html>
