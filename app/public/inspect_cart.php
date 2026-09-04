<?php
require_once __DIR__ . '/wp-load.php';

header('Content-Type: text/plain; charset=utf-8');

echo "=== ALL PAGES IN WORDPRESS ===\n";
$pages = get_posts(array(
    'post_type'   => 'page',
    'post_status' => 'any',
    'numberposts' => -1,
));

foreach ($pages as $p) {
    echo "ID: {$p->ID} | Title: {$p->post_title} | Slug: {$p->post_name} | Status: {$p->post_status} | Template: " . get_post_meta($p->ID, '_wp_page_template', true) . "\n";
}

echo "\n=== TUTOR MONETIZATION SETTINGS ===\n";
$tutor_option = get_option('tutor_option', array());
echo "Monetize by: " . ($tutor_option['monetize_by'] ?? 'none') . "\n";

echo "\n=== TUTOR CART / CHECKOUT / ENROLLMENT URLS ===\n";
echo "Cart page ID (WooCommerce): " . get_option('woocommerce_cart_page_id') . "\n";
echo "Checkout page ID (WooCommerce): " . get_option('woocommerce_checkout_page_id') . "\n";
echo "Tutor Dashboard page ID: " . ($tutor_option['tutor_dashboard_page_id'] ?? 'none') . "\n";
echo "Tutor Instructor Reg page ID: " . ($tutor_option['instructor_register_page'] ?? 'none') . "\n";
echo "Tutor Student Reg page ID: " . ($tutor_option['student_register_page'] ?? 'none') . "\n";

echo "\n=== TUTOR CART & CHECKOUT TEMPLATES ===\n";
$tutor_dir = WP_PLUGIN_DIR . '/tutor/templates/';
$tutor_pro_dir = WP_PLUGIN_DIR . '/tutor-pro/templates/';

function search_files($dir, $pattern) {
    $results = array();
    if (!is_dir($dir)) return $results;
    $files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir));
    foreach ($files as $file) {
        if ($file->isFile() && preg_match($pattern, $file->getFilename())) {
            $results[] = $file->getPathname();
        }
    }
    return $results;
}

$cart_templates = array_merge(
    search_files($tutor_dir, '/(cart|checkout|enroll|single-course|purchase|pricing)/i'),
    search_files($tutor_pro_dir, '/(cart|checkout|enroll|single-course|purchase|pricing)/i')
);

foreach ($cart_templates as $tmpl) {
    echo "- Template: " . str_replace(WP_PLUGIN_DIR, '', $tmpl) . "\n";
}
