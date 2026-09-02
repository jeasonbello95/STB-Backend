<?php
/**
 * Show google meet nav item on the learning area
 *
 * @package Tutor\Templates
 * @subpackage LearningArea
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use TUTOR\Icon;
use TutorPro\GoogleMeet\Frontend\Frontend;

global $tutor_current_content_id;

$google_meeting = $google_meeting ?? null;
$can_access     = $can_access ?? false;

if ( ! $google_meeting && ! is_a( $google_meeting, 'WP_Post' ) ) {
	return;
}

$is_completed = tutor_utils()->is_completed_lesson( $google_meeting->ID );
$content_type = Frontend::get_content_type_info( $google_meeting );

$icon_name = Icon::VIDEO_CAMERA_2;
if ( ! $can_access ) {
	$icon_name = Icon::LOCK_STROKE_2;
} elseif ( $is_completed ) {
	$icon_name = Icon::COMPLETED_COLORIZE;
}

tutor_load_template(
	'learning-area.components.sidebar-nav-item',
	array(
		'item'         => $google_meeting,
		'active'       => $tutor_current_content_id === $google_meeting->ID,
		'can_access'   => $can_access,
		'is_completed' => $is_completed,
		'type_label'   => $content_type,
		'icon'         => $icon_name,
		'status_class' => '',
	)
);
