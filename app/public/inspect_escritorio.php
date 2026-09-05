<?php
require_once __DIR__ . '/wp-load.php';

header('Content-Type: text/plain; charset=utf-8');

function inspect_url($user_id) {
    if ($user_id) {
        wp_set_current_user($user_id);
    }
    
    // Check page ID 10
    $page = get_post(10);
    echo "Page 10 title: {$page->post_title}\n";
    echo "Page 10 content:\n" . $page->post_content . "\n";
    echo "Template used by page 10: " . get_page_template_slug(10) . "\n";
    
    // Check what tutor renders for dashboard
    ob_start();
    tutor_load_template('dashboard');
    $out = ob_get_clean();
    echo "Dashboard template output length: " . strlen($out) . " bytes\n";
    echo "Dashboard output preview (first 1000 chars):\n" . substr(strip_tags($out), 0, 1000) . "\n";
}

echo "=== GUEST (NO USER) ===\n";
inspect_url(0);

echo "\n=== ADMIN (USER 1) ===\n";
inspect_url(1);

echo "\n=== STUDENT (USER 2) ===\n";
inspect_url(2);
