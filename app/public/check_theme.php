<?php
require_once __DIR__ . '/wp-load.php';

header('Content-Type: text/plain; charset=utf-8');

echo "Active Theme: " . get_stylesheet() . "\n";
echo "Theme Directory: " . get_stylesheet_directory() . "\n";
echo "Template Directory: " . get_template_directory() . "\n";
