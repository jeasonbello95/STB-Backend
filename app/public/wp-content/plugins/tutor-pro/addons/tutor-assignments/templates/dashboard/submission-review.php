<?php
/**
 * Template for displaying Assignments Review Form
 *
 * @package Tutor\Templates
 * @subpackage Dashboard\Assignments
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\EmptyState;
use Tutor\Components\InputField;
use Tutor\Components\PreviewTrigger;
use Tutor\Components\SvgIcon;
use TUTOR\Icon;
use TUTOR\Input;

$assignment_id           = Input::get( 'assignment', 0, Input::TYPE_INT );
$assignment_submitted_id = Input::get( 'view_assignment', 0, Input::TYPE_INT );
$empty_state_class       = 'tutor-surface-l1 tutor-border tutor-rounded-2xl';

if ( ! $assignment_submitted_id ) {
	EmptyState::make()
		->title( __( "Sorry, but you are looking for something that isn't here.", 'tutor-pro' ) )
		->attr( 'class', $empty_state_class )
		->icon( tutor_utils()->get_themed_svg( 'images/illustrations/lesson-empty.svg' ) )
		->render();

	return;
}

$submitted_assignment = tutor_utils()->get_assignment_submit_info( $assignment_submitted_id );
if ( ! $submitted_assignment ) {
	EmptyState::make()
		->title( __( 'Assignments submission not found or not completed.', 'tutor-pro' ) )
		->attr( 'class', $empty_state_class )
		->icon( tutor_utils()->get_themed_svg( 'images/illustrations/lesson-empty.svg' ) )
		->render();

	return;
}

$course_id = $submitted_assignment->comment_parent;
if ( ! tutor_utils()->can_user_edit_course( get_current_user_id(), $course_id ) ) {
	EmptyState::make()
		->title( __( 'You do not have permission to review this assignment.', 'tutor-pro' ) )
		->attr( 'class', $empty_state_class )
		->icon( tutor_utils()->get_themed_svg( 'images/illustrations/lesson-empty.svg' ) )
		->render();
	return;
}

$max_mark            = tutor_utils()->get_assignment_option( $submitted_assignment->comment_post_ID, 'total_mark' );
$given_mark          = get_comment_meta( $assignment_submitted_id, 'assignment_mark', true );
$instructor_note     = get_comment_meta( $assignment_submitted_id, 'instructor_note', true );
$comment_author      = get_user_by( 'login', $submitted_assignment->comment_author );
$student_profile_url = tutor_utils()->profile_url( $comment_author->ID, false );
?>

<div 
	class="tutor-dashboard-assignment-review" 
	x-data="tutorAssignmentReview({ assignment_submitted_id: <?php echo esc_attr( $assignment_submitted_id ); ?>, assignment_id: <?php echo esc_attr( $assignment_id ); ?> })"
>
	<div class="tutor-mb-6">
		<a 
			href="<?php echo esc_url( tutor_utils()->get_tutor_dashboard_page_permalink( 'assignments' ) ); ?>" 
			class="tutor-btn tutor-btn-secondary tutor-btn-small tutor-gap-2"
		>
			<?php SvgIcon::make()->name( Icon::ARROW_LEFT_2 )->flip_rtl()->render(); ?>
			<?php esc_html_e( 'Back', 'tutor-pro' ); ?>
		</a>
	</div>

	<div class="tutor-tiny tutor-text-secondary tutor-mb-2 tutor-flex tutor-gap-2">
		<span><?php esc_html_e( 'Course: ', 'tutor-pro' ); ?></span>
		<?php PreviewTrigger::make()->id( $course_id )->render(); ?>
	</div>

	<h4 class="tutor-h4 tutor-font-medium tutor-mb-4">
		<?php echo esc_html( get_the_title( $assignment_id ) ); ?>
	</h4>

	<div class="tutor-flex tutor-sm-flex-column tutor-gap-8 tutor-sm-gap-2 tutor-mb-5">
		<div class="tutor-flex tutor-gap-2 tutor-tiny">
			<div class="tutor-text-subdued">
				<?php esc_html_e( 'Student', 'tutor-pro' ); ?>:
			</div>
			<a href="<?php echo esc_url( $student_profile_url ); ?>" class="tutor-font-medium tutor-text-brand">
				<?php echo esc_html( $comment_author->display_name ); ?>
			</a>
		</div>
		<div class="tutor-flex tutor-gap-2 tutor-tiny">
			<div class="tutor-text-subdued">
				<?php esc_html_e( 'Submitted Date', 'tutor-pro' ); ?>:
			</div>
			<div>
				<?php echo esc_html( tutor_utils()->convert_date_into_wp_timezone( $submitted_assignment->comment_date_gmt ) ); ?>
			</div>
		</div>
	</div>

	<div class="tutor-card tutor-mb-5">
		<div class="tutor-small tutor-text-subdued tutor-mb-4">
			<?php esc_html_e( 'Assignment Submission:', 'tutor-pro' ); ?>
		</div>
		<div class="tutor-p1 tutor-dashboard-assignment-submission">
			<?php echo wp_kses_post( stripslashes( $submitted_assignment->comment_content ) ); ?>
		</div>

		<?php
		$attached_files = get_comment_meta( $submitted_assignment->comment_ID, 'uploaded_attachments', true );
		$attached_files = json_decode( $attached_files, true );
		if ( tutor_utils()->count( $attached_files ) ) :
			?>
			<div class="tutor-grid tutor-grid-cols-2 tutor-sm-grid-cols-1 tutor-gap-4 tutor-mt-8">
				<?php
				$upload_dir     = wp_get_upload_dir();
				$upload_baseurl = trailingslashit( tutor_utils()->array_get( 'baseurl', $upload_dir ) );
				$upload_basedir = trailingslashit( tutor_utils()->array_get( 'basedir', $upload_dir ) );
				foreach ( $attached_files as $attached_file ) {
					?>
					<div class="tutor-card tutor-attachment-card">
						<div class="tutor-attachment-card-icon" aria-hidden="true">
							<?php SvgIcon::make()->name( Icon::RESOURCES )->size( 24 )->render(); ?>
						</div>

						<div class="tutor-attachment-card-body">
							<div class="tutor-attachment-card-title">
								<?php echo esc_html( tutor_utils()->array_get( 'name', $attached_file ) ); ?>
							</div>

							<div class="tutor-attachment-card-meta">
								<?php echo esc_html( tutor_utils()->get_readable_filesize( $upload_basedir . $attached_file['uploaded_path'] ?? '' ) ); ?>
							</div>
						</div>

						<div class="tutor-attachment-card-actions">
							<a 
								href="<?php echo esc_url( $upload_baseurl . tutor_utils()->array_get( 'uploaded_path', $attached_file ) ); ?>" 
								class="tutor-btn tutor-btn-ghost tutor-btn-x-small tutor-btn-icon" 
								target="_blank" 
								rel="noopener noreferrer"
							>
								<?php SvgIcon::make()->name( Icon::DOWNLOAD_2 )->size( 16 )->render(); ?>
							</a>
						</div>
					</div>
					<?php
				}
				?>
			</div>
		<?php endif; ?>
	</div>

	<div class="tutor-card">
		<div class="tutor-small tutor-text-subdued tutor-mb-4">
			<?php esc_html_e( 'Evaluation', 'tutor-pro' ); ?>
		</div>
		<form 
			id="assignment-evaluation-form"
			x-data="tutorForm({ 
				id: 'assignment-evaluation-form', 
				mode: 'onBlur',
				defaultValues: {
					assignment_mark: '<?php echo esc_js( $given_mark ? $given_mark : '' ); ?>',
					instructor_note: '<?php echo esc_js( $instructor_note ); ?>'
				}
			})"
			x-bind="getFormBindings()"
			@submit.prevent="handleSubmit((data) => handleFormSubmit(data))($event)"
		>
			<div class="tutor-flex tutor-flex-column tutor-gap-5">
				<div class="tutor-point-wrapper">
					<label for="assignment_mark"><?php esc_html_e( 'Obtained Marks', 'tutor-pro' ); ?></label>
					<?php
					InputField::make()
						->type( 'number' )
						->id( 'assignment_mark' )
						->name( 'assignment_mark' )
						->placeholder( __( 'Obtained Marks', 'tutor-pro' ) )
						->attr( 'x-bind', "register('assignment_mark', { required: '" . esc_js( __( 'Points are required', 'tutor-pro' ) ) . "', min: 0, max: " . (int) $max_mark . ' } )' )
						->render();
					?>
					<div class="tutor-help-text">
						<?php
						/* translators: %s: Maximum mark. */
						printf( esc_html__( 'Evaluate this assignment out of %s', 'tutor-pro' ), esc_html( $max_mark ) )
						?>
					</div>
				</div>

				<div class="tutor-feedback-wrapper">
					<label for="assignment_mark"><?php esc_html_e( 'Feedback', 'tutor-pro' ); ?></label>
					<?php
					InputField::make()
						->type( 'textarea' )
						->id( 'instructor_note' )
						->name( 'instructor_note' )
						->placeholder( __( 'Provide feedback for the student...', 'tutor-pro' ) )
						->attr( 'rows', 5 )
						->attr( 'x-bind', "register('instructor_note')" )
						->render();
					?>
				</div>
			</div>

			<div class="tutor-text-right tutor-mt-6">
				<button 
					type="submit" 
					class="tutor-btn tutor-btn-primary"
					:disabled="evaluationMutation?.isPending"
					:class="{ 'tutor-btn-loading': evaluationMutation?.isPending }"
				>
					<span><?php esc_html_e( 'Evaluate this Submission', 'tutor-pro' ); ?></span>
				</button>
			</div>
		</form>
	</div>
</div>
