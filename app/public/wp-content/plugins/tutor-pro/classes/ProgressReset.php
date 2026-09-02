<?php
/**
 * Manage Course Progress Reset
 *
 * @package TutorPro
 * @subpackage Frontend
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 3.9.0
 */

namespace TUTOR_PRO;

use TUTOR\Icon;
use TUTOR\Input;
use Tutor\Models\EnrollmentModel;
use Tutor\Traits\JsonResponse;
use TUTOR\User;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Progress Reset Class
 *
 * @since 3.9.0
 */
class ProgressReset {

	use JsonResponse;

	/**
	 * Register hooks
	 *
	 * @since 3.9.0
	 *
	 * @return void
	 */
	public function __construct() {
		add_filter( 'tutor/options/extend/attr', array( $this, 'setting_field' ), 11 );
		add_action( 'wp_ajax_tutor_reset_student_course_progress', array( $this, 'ajax_reset_student_course_progress' ) );
		add_filter( 'tutor_enrollment_action_dropdown_items', array( $this, 'add_reset_progress_button' ), 10, 6 );
	}

	/**
	 * Settings field.
	 *
	 * @since 3.9.0
	 *
	 * @param array $attr attr.
	 *
	 * @return array
	 */
	public function setting_field( $attr ) {
		$attr['general']['blocks'][3]['fields'][] = array(
			'key'         => 'instructor_can_reset_course_progress',
			'type'        => 'toggle_switch',
			'label'       => __( 'Allow Instructors to Reset Student Progress', 'tutor-pro' ),
			'label_title' => '',
			'default'     => 'off',
			'desc'        => __( 'Enable to allow instructors to reset a student’s course progress.', 'tutor-pro' ),
		);

		return $attr;
	}

	/**
	 * Can reset students progress.
	 *
	 * @since 3.9.0
	 *
	 * @param int $user_id The user ID.
	 *
	 * @return bool
	 */
	public static function can_reset_progress( $user_id = 0 ) {
		$can_instructor_reset = (bool) tutor_utils()->get_option( 'instructor_can_reset_course_progress' );
		if ( User::is_admin( $user_id ) || ( User::is_only_instructor( $user_id ) && $can_instructor_reset ) ) {
			return true;
		}
		return false;
	}

	/**
	 * Reset course progress.
	 *
	 * @since 3.9.0
	 *
	 * @return void
	 */
	public function ajax_reset_student_course_progress() {
		tutor_utils()->check_nonce();

		$course_id  = Input::post( 'course_id', 0, Input::TYPE_INT );
		$student_id = Input::post( 'student_id', 0, Input::TYPE_INT );

		if ( ! $course_id || ! $student_id || ! EnrollmentModel::is_enrolled( $course_id, $student_id, false ) ) {
			$this->response_bad_request( __( 'Invalid request', 'tutor-pro' ) );
		}

		if ( $this->can_reset_progress() ) {
			tutor_utils()->delete_course_progress( $course_id, $student_id );
			$this->json_response( __( 'Progress has been successfully reset.', 'tutor-pro' ) );
		} else {
			$this->response_bad_request( tutor_utils()->error_message() );
		}
	}

	/**
	 * Add reset progress button to enrollment action dropdown.
	 *
	 * @since 4.0.0
	 *
	 * @param array  $items The items.
	 * @param int    $enrollment_id id The enrollment id.
	 * @param int    $course_id id The course id.
	 * @param int    $student_id id The student id.
	 * @param int    $progress The progress.
	 * @param string $context The context.
	 *
	 * @return array
	 */
	public function add_reset_progress_button( $items, $enrollment_id, $course_id, $student_id, $progress, $context ) {
		if ( $progress && $this->can_reset_progress() ) {
			$modal_id       = 'tutor-reset-progress-' . $enrollment_id;
			$modal_template = 'dashboard' === $context
								? tutor_pro()->path . 'views/modals/reset-progress-dashboard-modal.php'
								: tutor_pro()->path . 'views/modals/reset-progress-modal.php';

			$items['reset_progress'] = array(
				'label' => __( 'Reset Progress', 'tutor-pro' ),
				'icon'  => 'dashboard' === $context ? Icon::REFRESH : 'tutor-icon-refresh-o',
				'modal' => array(
					'id'       => $modal_id,
					'template' => $modal_template,
					'data'     => array(
						'modal_id'   => $modal_id,
						'course_id'  => $course_id,
						'student_id' => $student_id,
					),
				),
			);
		}
		return $items;
	}
}
