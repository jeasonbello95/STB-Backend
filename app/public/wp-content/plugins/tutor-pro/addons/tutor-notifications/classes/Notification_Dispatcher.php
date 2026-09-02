<?php
/**
 * Dispatch notification events to enabled delivery channels.
 *
 * @package TutorPro\Addons
 * @subpackage Notification
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

namespace TUTOR_NOTIFICATIONS;

defined( 'ABSPATH' ) || exit;

/**
 * Notification dispatcher class.
 * 
 * @since 4.0.0
 */
class Notification_Dispatcher {

	/**
	 * On-site notification delivery.
	 * 
	 * @since 4.0.0
	 *
	 * @var Notifications
	 */
	private $onsite_notification;

	/**
	 * Push notification delivery.
	 * 
	 * @since 4.0.0
	 *
	 * @var Pusher
	 */
	private $pusher;

	/**
	 * Constructor.
	 * 
	 * @since 4.0.0
	 * 
	 * @return void
	 */
	public function __construct() {
		$this->onsite_notification = new Notifications();
		$this->pusher              = new Pusher();

		add_action( 'tutor_after_approved_instructor', array( $this, 'instructor_approval' ) );
		add_action( 'tutor_after_rejected_instructor', array( $this, 'instructor_rejected' ) );

		add_action( 'tutor_new_instructor_after', array( $this, 'new_instructor_application' ) );
		add_action( 'tutor_add_new_instructor_after', array( $this, 'new_instructor_application_push_only' ) );

		add_action( 'tutor_assignment/evaluate/after', array( $this, 'tutor_after_assignment_evaluated' ), 10, 3 );
		add_action( 'tutor_announcements/after/save', array( $this, 'tutor_announcements_notify_students' ), 10, 3 );
		add_action( 'tutor_after_answer_to_question', array( $this, 'tutor_after_answer_to_question' ) );
		add_action( 'tutor_quiz/attempt/submitted/feedback', array( $this, 'feedback_submitted_for_quiz_attempt' ), 10, 3 );
		add_action( 'tutor_enrollment/after/expired', array( $this, 'tutor_enrollment_after_expired' ), 10, 3 );

		add_action( 'tutor_after_enrolled', array( $this, 'course_enroll_email_to_student' ), 10, 3 );
		add_action( 'tutor_enrollment/before/delete', array( $this, 'tutor_student_remove_from_course_push_only' ), 10, 3 );
		add_action( 'tutor_enrollment/after/cancel', array( $this, 'tutor_student_remove_from_course' ), 10, 3 );
	}

	/**
	 * Instructor approval.
	 * 
	 * @since 4.0.0
	 *
	 * @param int $instructor_id Instructor ID.
	 *
	 * @return void
	 */
	public function instructor_approval( $instructor_id ) {
		$notification_ids = $this->onsite_notification->instructor_approval( $instructor_id );
		$this->pusher->instructor_approval( $instructor_id, $notification_ids );
	}

	/**
	 * Instructor rejected.
	 * 
	 * @since 4.0.0
	 *
	 * @param int $instructor_id Instructor ID.
	 *
	 * @return void
	 */
	public function instructor_rejected( $instructor_id ) {
		$notification_ids = $this->onsite_notification->instructor_rejected( $instructor_id );
		$this->pusher->instructor_rejected( $instructor_id, $notification_ids );
	}

	/**
	 * New instructor application.
	 * 
	 * @since 4.0.0
	 *
	 * @param int $instructor_id Instructor ID.
	 *
	 * @return void
	 */
	public function new_instructor_application( $instructor_id ) {
		$notification_ids = $this->onsite_notification->new_instructor_application( $instructor_id );
		$this->pusher->new_instructor_application( $instructor_id, $notification_ids );
	}

	/**
	 * New instructor application push-only event.
	 * 
	 * @since 4.0.0
	 *
	 * @param int $instructor_id Instructor ID.
	 *
	 * @return void
	 */
	public function new_instructor_application_push_only( $instructor_id ) {
		$this->pusher->new_instructor_application( $instructor_id );
	}

	/**
	 * Assignment graded.
	 * 
	 * @since 4.0.0
	 *
	 * @param int $assignment_submission_id Assignment submission ID.
	 * @param int $max_mark Maximum mark.
	 * @param int $mark Mark.
	 *
	 * @return void
	 */
	public function tutor_after_assignment_evaluated( $assignment_submission_id, $max_mark = null, $mark = null ) {
		$notification_ids = $this->onsite_notification->tutor_after_assignment_evaluated( $assignment_submission_id );
		$this->pusher->tutor_after_assignment_evaluate( $assignment_submission_id, $notification_ids );
	}

	/**
	 * Announcement notifications.
	 * 
	 * @since 4.0.0
	 *
	 * @param int          $announcement_id Announcement ID.
	 * @param array|object $announcement Announcement.
	 * @param string       $action_type Action type.
	 *
	 * @return void
	 */
	public function tutor_announcements_notify_students( $announcement_id, $announcement, $action_type ) {
		$notification_ids = $this->onsite_notification->tutor_announcements_notify_students( $announcement_id, $announcement, $action_type );
		$this->pusher->tutor_announcements_notify_students( $announcement_id, $announcement, $action_type, $notification_ids );
	}

	/**
	 * After answering questions.
	 * 
	 * @since 4.0.0
	 *
	 * @param int $answer_id Answer ID.
	 *
	 * @return void
	 */
	public function tutor_after_answer_to_question( $answer_id ) {
		$notification_ids = $this->onsite_notification->tutor_after_answer_to_question( $answer_id );
		$this->pusher->tutor_after_answer_to_question( $answer_id, $notification_ids );
	}

	/**
	 * Feedback submitted for quiz attempt.
	 * 
	 * @since 4.0.0
	 *
	 * @param int $attempt_id Attempt ID.
	 * @param mixed $quiz_attempt Quiz attempt.
	 * @param mixed $answers Answers.
	 *
	 * @return void
	 */
	public function feedback_submitted_for_quiz_attempt( $attempt_id, $quiz_attempt = null, $answers = null ) {
		$notification_ids = $this->onsite_notification->feedback_submitted_for_quiz_attempt( $attempt_id );
		$this->pusher->feedback_submitted_for_quiz_attempt( $attempt_id, $notification_ids );
	}

	/**
	 * Enrollment expired.
	 * 
	 * @since 4.0.0
	 *
	 * @param int $enrol_id Enrollment ID.
	 * @param int $course_id Course ID.
	 * @param int $student_id Student ID.
	 *
	 * @return void
	 */
	public function tutor_enrollment_after_expired( $enrol_id, $course_id = null, $student_id = null ) {
		$this->pusher->tutor_enrollment_after_expired( $enrol_id );
	}

	/**
	 * Course enrolled.
	 * 
	 * @since 4.0.0
	 *
	 * @param int $course_id Course ID.
	 * @param int $student_id Student ID.
	 * @param int $enrol_id Enrollment ID.
	 *
	 * @return void
	 */
	public function course_enroll_email_to_student( $course_id, $student_id, $enrol_id ) {
		$notification_ids = $this->onsite_notification->tutor_student_course_enrolled( $course_id, $student_id, $enrol_id );
		$this->pusher->course_enroll_email_to_student( $course_id, $student_id, $enrol_id, 'completed', $notification_ids );
	}

	/**
	 * Student removed from course.
	 * 
	 * @since 4.0.0
	 *
	 * @param int $enrol_id Enrollment ID.
	 * @param mixed $status_from Previous enrollment status.
	 * @param mixed $status_to New enrollment status.
	 *
	 * @return void
	 */
	public function tutor_student_remove_from_course( $enrol_id, $status_from = null, $status_to = null ) {
		$notification_ids = $this->onsite_notification->tutor_student_remove_from_course( $enrol_id );
		$this->pusher->tutor_student_remove_from_course( $enrol_id, $notification_ids );
	}

	/**
	 * Student removed from course push-only event.
	 * 
	 * @since 4.0.0
	 *
	 * @param int $enrol_id Enrollment ID.
	 * @param mixed $status_from Previous enrollment status.
	 * @param mixed $status_to New enrollment status.
	 *
	 * @return void
	 */
	public function tutor_student_remove_from_course_push_only( $enrol_id, $status_from = null, $status_to = null ) {
		$this->pusher->tutor_student_remove_from_course( $enrol_id );
	}
}
