<?php
/**
 * Show zoom nav item on the learning area
 *
 * @package Tutor\Templates
 * @subpackage LearningArea
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use TUTOR\Icon;
use TUTOR_ZOOM\Zoom;

global $tutor_current_content_id;

$zoom_meeting = $zoom_meeting ?? null;
$can_access   = $can_access ?? false;

if ( ! $zoom_meeting && ! is_a( $zoom_meeting, 'WP_Post' ) ) {
	return;
}

$is_completed = tutor_utils()->is_completed_lesson( $zoom_meeting->ID );
$content_type = Zoom::get_content_type_info( $zoom_meeting );

$icon_name = Icon::VIDEO_CAMERA_2;
if ( ! $can_access ) {
	$icon_name = Icon::LOCK_STROKE_2;
} elseif ( $is_completed ) {
	$icon_name = Icon::COMPLETED_COLORIZE;
}

tutor_load_template(
	'learning-area.components.sidebar-nav-item',
	array(
		'item'         => $zoom_meeting,
		'active'       => $tutor_current_content_id === $zoom_meeting->ID,
		'can_access'   => $can_access,
		'is_completed' => $is_completed,
		'type_label'   => $content_type,
		'icon'         => $icon_name,
		'status_class' => '',
	)
);
