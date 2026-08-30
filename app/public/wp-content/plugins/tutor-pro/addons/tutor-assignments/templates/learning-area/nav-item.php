<?php
/**
 * Show lesson nav item on the learning area
 *
 * @package Tutor\Templates
 * @subpackage LearningArea
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use TUTOR_ASSIGNMENTS\Assignments;

global $tutor_current_content_id,
$tutor_course_id;

$assignment = $assignment ?? null;
$can_access = $can_access ?? false;

if ( ! $assignment && ! is_a( $assignment, 'WP_Post' ) ) {
	return;
}

Assignments::render_sidebar_nav( $assignment, $tutor_course_id, $can_access, $tutor_current_content_id );
