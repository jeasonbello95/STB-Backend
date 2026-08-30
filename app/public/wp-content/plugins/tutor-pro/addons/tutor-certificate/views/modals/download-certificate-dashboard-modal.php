<?php
/**
 * Dashboard: Download certificate modal template
 *
 * @package TutorPro\Addons
 * @subpackage TutorCertificate\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 *
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Alert;
use Tutor\Components\Button;
use Tutor\Components\ConfirmationModal;
use Tutor\Components\Constants\Variant;
use TUTOR\Icon;

$modal_id         = $data['modal_id'] ?? '';
$course_id        = $data['course_id'] ?? '';
$student_id       = $data['student_id'] ?? '';
$course_completed = tutor_utils()->is_completed_course( $course_id, $student_id );

$button_label = __( 'Download Certificate', 'tutor-pro' );
$message      = '';

if ( ! $course_completed ) {
	$button_label = __( 'Complete & Download', 'tutor-pro' );
	$message      = Alert::make()
		->variant( Alert::WARNING )
		->attr( 'class', 'tutor-mt-6' )
		->text( __( 'The course isn\'t complete. Downloading the certificate will automatically mark the course as complete.', 'tutor-pro' ) )
		->get();
}

$confirm_btn = Button::make()
	->variant( Variant::PRIMARY )
	->label( $button_label )
	->attr( 'class', 'tutor-download-course-certificate' )
	->attr( 'data-modal-data', esc_attr( wp_json_encode( $data ) ) )
	->get();

ConfirmationModal::make()
	->id( $modal_id )
	->title( __( 'Do you want to download the certificate?', 'tutor-pro' ) )
	->message(
		$message,
		array(
			'div'  => array( 'class' => true ),
			'span' => array(
				'class'       => true,
				'aria-hidden' => true,
			),
		)
	)
	->icon( tutor_utils()->get_themed_svg( 'images/illustrations/certificate-download.svg' ), 80, 80, ConfirmationModal::ICON_TYPE_HTML )
	->confirm_button( $confirm_btn )
	->render();
