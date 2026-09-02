<?php
/**
 * Student Details Table.
 *
 * @package TutorPro\Report
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use TUTOR\Input;
use Tutor\Components\Button;
use Tutor\Models\CourseModel;
use Tutor\Components\Progress;
use Tutor\Components\Constants\Size;

$course                = $data['course'];
$course_meta_data      = tutor_utils()->get_course_meta_data( $course->ID );
$student_id            = Input::get( 'student_id', 0 );
$image                 = get_tutor_course_thumbnail_src( 'post-thumbnail', $course->ID );
$is_assignment_enabled = tutor_utils()->is_addon_enabled( 'tutor-assignments' );

$completed_lessons    = tutor_utils()->get_completed_lesson_count_by_course( $course->ID, $student_id );
$completed_assignment = $is_assignment_enabled ? tutor_utils()->get_completed_assignment( $course->ID, $student_id ) : 0;
$completed_quiz       = tutor_utils()->get_completed_quiz( $course->ID, $student_id );
$completed_count      = tutor_utils()->get_course_completed_percent( $course->ID, $student_id );

$total_lessons     = $course_meta_data['lesson'] ?? 0;
$total_assignments = $course_meta_data['tutor_assignments'] ?? 0;
$total_quiz        = $course_meta_data['tutor_quiz'] ?? 0;

?>

<!-- Course Info -->
<?php if ( 'course_info' === $data['template'] ) : ?>
	<div class="tutor-flex tutor-flex-row tutor-items-center tutor-gap-5 tutor-sm-gap-4">
		<div class="tutor-analytics-course-image-wrapper">
			<img class="tutor-analytics-course-image" src="<?php echo esc_url( $image ); ?>" alt="<?php echo esc_attr( $course->post_title ); ?>" loading="lazy" />
		</div>
		<div class="tutor-flex tutor-flex-column tutor-items-start">
			<span class="tutor-text-subdued tutor-font-regular tutor-tiny-2">
				<?php echo esc_html( tutor_i18n_get_formated_date( $course->post_date ) ); ?>
			</span> 
			<span class="tutor-analytics-student-details-course-title">
				<?php echo esc_html( $course->post_title ); ?>
			</span>
			<div class="tutor-flex tutor-flex-row tutor-items-center tutor-gap-5 tutor-sm-gap-4">
				<div class="tutor-gap-2">
					<span class="tutor-text-subdued tutor-font-regular tutor-tiny">
						<?php esc_html_e( 'Lesson', 'tutor-pro' ); ?>:
					</span>
					<span class="tutor-font-regular tutor-tiny">
						<?php echo esc_html( $completed_lessons . '/' . $total_lessons ); ?>
					</span>
				</div>         		

				<?php if ( $is_assignment_enabled ) : ?>
				<div class="tutor-gap-2">
					<span class="tutor-text-subdued tutor-font-regular tutor-tiny">
						<?php esc_html_e( 'Assignment', 'tutor-pro' ); ?>:
					</span>
					<span class="tutor-font-regular tutor-tiny">
						<?php echo esc_html( $completed_assignment . '/' . $total_assignments ); ?>
					</span>
				</div>
				<?php endif; ?>

				<div class="tutor-gap-2">
					<span class="tutor-text-subdued tutor-font-regular tutor-tiny">
						<?php esc_html_e( 'Quiz', 'tutor-pro' ); ?>:
					</span>
					<span class="tutor-font-regular tutor-tiny">
						<?php echo esc_html( $completed_quiz . '/' . $total_quiz ); ?>
					</span>
				</div>     
			</div>
		</div>
	</div>
<?php endif; ?>

<?php if ( 'progress' === $data['template'] ) : ?>
	<div class="tutor-analytics-student-details-progress">
		<div class="tutor-analytics-student-details-progress-bar">

			<?php
			Progress::make()
				->type( 'bar' )
				->value( $completed_count )
				->animated()
				->render()
			?>

			<span class="tutor-font-regular tutor-tiny tutor-text-secondary">
				<?php echo esc_html( $completed_count ); ?>%
			</span>
		</div>

		<div class="tutor-analytics-student-details-progress-button" x-data>
			<?php
			$course_progress = array(
				'completed_count'      => (int) $completed_count,
				'course'               => $course,
				'course_image'         => $image,
				'completed_lessons'    => $completed_lessons ?? 0,
				'total_lessons'        => $total_lessons ?? 0,
				'completed_assignment' => $completed_assignment ?? 0,
				'total_assignments'    => $total_assignments ?? 0,
				'completed_quiz'       => $completed_quiz ?? 0,
				'total_quiz'           => $total_quiz ?? 0,
				'topics'               => CourseModel::get_course_progress_details( $course->ID, $student_id ),
			);

			Button::make()
				->label( __( 'View Progress', 'tutor-pro' ) )
				->variant( 'primary' )
				->size( Size::X_SMALL )
				->attr( 'onclick', 'TutorCore.modal.showModal("modal-course-overview", { courseProgress: ' . wp_json_encode( $course_progress ) . '})' )
				->render();
			?>
		</div>
	</div>
<?php endif; ?>
