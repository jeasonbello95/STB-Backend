<?php
/**
 * Dashboard: Enrolled course complete modal template
 *
 * @package TutorPro\Addons
 * @subpackage Enrollments\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 *
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\ConfirmationModal;
use Tutor\Components\Constants\Variant;

$modal_id = $data['modal_id'] ?? '';

$confirm_btn = Button::make()
	->variant( Variant::PRIMARY )
	->label( __( 'Mark as Complete', 'tutor-pro' ) )
	->attr( 'class', 'tutor-confirm-mark-as-complete' )
	->attr( 'data-modal-data', esc_attr( wp_json_encode( $data ) ) )
	->get();

ConfirmationModal::make()
	->id( $modal_id )
	->title( __( 'Mark Course as complete?', 'tutor-pro' ) )
	->message( __( 'Marking this course as complete will not affect the course progress, but the course status will be complete & certificate will be available.', 'tutor-pro' ) )
	->icon( tutor_utils()->get_themed_svg( 'images/illustrations/mark-as-complete.svg' ), 80, 80, ConfirmationModal::ICON_TYPE_HTML )
	->confirm_button( $confirm_btn )
	->render();
