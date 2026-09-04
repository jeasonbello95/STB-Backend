<?php
/**
 * Twenty Twenty-Five Theme Override: Single Course
 * 
 * @package STB_Academy_Core
 */

defined('ABSPATH') || exit;

if (defined('STB_PLUGIN_DIR') && file_exists(STB_PLUGIN_DIR . 'templates/stb-course-single-template.php')) {
    include STB_PLUGIN_DIR . 'templates/stb-course-single-template.php';
} else {
    tutor_load_template('single-course');
}
