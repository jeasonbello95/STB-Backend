<?php
require_once __DIR__ . '/wp-load.php';

header('Content-Type: text/plain; charset=utf-8');

$core = STB_Academy_Core::get_instance();

// Simulate cart query
$cart_page = get_page_by_path('cart');
if ($cart_page) {
    global $post, $wp_query;
    $post = $cart_page;
    setup_postdata($post);
    $wp_query->queried_object = $post;
    $wp_query->queried_object_id = $post->ID;
    $wp_query->is_page = true;
    $wp_query->is_singular = true;

    echo "Cart Page ID: {$post->ID}\n";
    echo "Tutor Cart Option ID: " . tutor_utils()->get_option('tutor_cart_page_id') . "\n";
    echo "is_tutor_ecommerce_page(): " . ($core->is_tutor_ecommerce_page() ? 'TRUE' : 'FALSE') . "\n";

    $template = $core->load_page_templates(get_page_template());
    echo "Resolved Page Template: {$template}\n";

    $tutor_cart_tmpl = tutor_get_template_path('ecommerce.cart');
    echo "Tutor Resolved ecommerce.cart template: {$tutor_cart_tmpl}\n";
}
