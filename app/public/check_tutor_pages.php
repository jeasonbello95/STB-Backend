<?php
require_once __DIR__ . '/wp-load.php';

header('Content-Type: text/plain; charset=utf-8');

$tutor_option = get_option('tutor_option', array());
echo "tutor_cart_page_id: " . ($tutor_option['tutor_cart_page_id'] ?? 'unset') . "\n";
echo "tutor_checkout_page_id: " . ($tutor_option['tutor_checkout_page_id'] ?? 'unset') . "\n";

$cart_page = get_page_by_path('cart');
$checkout_page = get_page_by_path('checkout');

if ($cart_page && empty($tutor_option['tutor_cart_page_id'])) {
    $tutor_option['tutor_cart_page_id'] = $cart_page->ID;
}
if ($checkout_page && empty($tutor_option['tutor_checkout_page_id'])) {
    $tutor_option['tutor_checkout_page_id'] = $checkout_page->ID;
}

update_option('tutor_option', $tutor_option);
echo "Updated tutor_option: cart_id = {$tutor_option['tutor_cart_page_id']}, checkout_id = {$tutor_option['tutor_checkout_page_id']}\n";
