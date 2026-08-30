<?php
/**
 * Tutor learning area assignment.
 *
 * @package Tutor\Templates
 * @subpackage LearningArea
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Alert;
use Tutor\Components\Badge;
use Tutor\Components\SvgIcon;
use TUTOR\Icon;
use Tutor\Components\Button;
use TUTOR\Input;
use TUTOR_ASSIGNMENTS\Assignments;

global $tutor_course_id;
$assignment = $assignment ?? null;
$user_id    = get_current_user_id();
if ( ! $assignment || ! is_a( $assignment, 'WP_Post' ) ) {
	return;
}

$assignment_id = $assignment->ID;

$is_submitting = tutor_utils()->is_assignment_submitting( $assignment_id );
$user_action   = Input::get( 'action' );
$is_updating   = Input::get( 'update-assignment', 0, Input::TYPE_INT );
$is_expired    = Assignments::is_expired( $assignment_id, $user_id, $tutor_course_id );

if ( $is_submitting && Assignments::ACTION === $user_action ) {
	require __DIR__ . '/assignment-submit.php';
	return;
}

if ( $is_submitting && $is_expired ) {
	wp_delete_comment( $is_submitting );
}

if ( $is_submitting && ! $user_action && ! $is_expired ) {
	$is_updating = $is_submitting;
}

if ( $is_updating ) {
	require __DIR__ . '/assignment-submit.php';
	return;
}


$status_badge = Assignments::get_assignment_status_badge( $assignment_id, $user_id );
$attachments  = tutor_utils()->get_attachments( $assignment_id, '_tutor_assignment_attachments' );

$next_prev_content = tutor_utils()->get_course_prev_next_contents_by_id( $assignment_id );
$next_content_url  = $next_prev_content->next_id ? get_the_permalink( $next_prev_content->next_id ) : '';


$assignment_attempt   = Assignments::get_assignment_attempt( $assignment_id, $user_id );
$submitted_assignment = tutor_utils()->is_assignment_submitted( get_the_ID() );

$is_reviewed_by_instructor = false;

if ( $submitted_assignment ) {
	$is_reviewed_by_instructor = get_comment_meta( $submitted_assignment[0]->comment_ID, 'evaluate_time', true );
}

$is_retry_allowed  = (int) tutor_utils()->get_assignment_option( $assignment_id, 'is_retry_allowed', 1 );
$attempts_allowed  = (int) tutor_utils()->get_assignment_option( $assignment_id, 'attempts_allowed', 5 );
$attempt_detail_id = Input::get( 'view_attempt_detail', 0, Input::TYPE_INT );

$next_button = '';
if ( $next_content_url ) {
	$next_button = Button::make()
		->label( tutor_utils()->count( $submitted_assignment ) ? __( 'Continue Lesson', 'tutor-pro' ) : __( 'Skip Assignment', 'tutor-pro' ) )
		->tag( 'a' )
		->attr( 'class', tutor_utils()->count( $submitted_assignment ) ? '' : 'tutor-btn-ghost' )
		->attr( 'href', $next_content_url )
		->get();
}

if ( $attempt_detail_id ) {
	$submitted_assignment = array(
		...array_filter(
			$submitted_assignment,
			function ( $val ) use ( $attempt_detail_id ) {
				return $attempt_detail_id === (int) $val->comment_ID;
			}
		),
	);

	require_once __DIR__ . '/attempt-details.php';
	return;
}

?>
<div class="tutor-assignment" x-data="tutorAssignment">
	<?php ob_start(); ?>
	<div class="tutor-assignment-overview">
		<div class="tutor-assignment-info">
			<?php
			if ( ! $submitted_assignment ) {
				Badge::make()
					->label( $status_badge['label'] )
					->variant( Badge::DISABLED )
					->attr( 'class', 'tutor-w-max' )
					->render();
			}

			?>
			<h4 class="tutor-h4 tutor-sm-text-medium tutor-mt-1">
				<?php echo esc_html( $assignment->post_title ); ?>
			</h4>
			<?php
			if ( $submitted_assignment && ! $is_reviewed_by_instructor ) {
				Alert::make()
					->text( __( "Your assignment is being reviewed. You'll be notified once grading is complete", 'tutor-pro' ) )
					->variant( Alert::WARNING )
					->icon( Icon::WARNING_LINE )
					->render();
			}
			if ( ( $is_expired && $is_reviewed_by_instructor ) || ( $is_expired && ! $submitted_assignment ) ) {
				Alert::make()
					->text( __( 'You have missed the submission deadline. Please contact the instructor for more information.', 'tutor-pro' ) )
					->variant( Alert::WARNING )
					->icon( Icon::WARNING_LINE )
					->render();
			}
			?>
			<div class="tutor-table-wrapper tutor-table-column-borders tutor-table-bordered tutor-assignment-info-table tutor-mb-2">
				<?php Assignments::render_assignment_summary( $assignment_id, $user_id ); ?>
			</div>
			<?php
			if ( $submitted_assignment ) {
				require __DIR__ . '/attempt-list.php';
			}
			?>
		</div>

		<?php
		$total_attempts = is_array( $submitted_assignment ) ? count( $submitted_assignment ) : 0;
		$can_resubmit   = Assignments::is_resubmission_allowed( $assignment_id, $user_id, $submitted_assignment );
		if ( $can_resubmit && $total_attempts <= $attempts_allowed ) {
			?>
		<form id="tutor_assignment_start_form" class="tutor-flex tutor-items-center tutor-justify-end tutor-mt-6 tutor-pb-7 tutor-mb-4 tutor-border-b">
			<?php
			Button::make()
			->label( __( 'Resubmit', 'tutor-pro' ) )
			->icon( Icon::RELOAD_4 )
			->attr( 'id', 'tutor_assignment_start_btn' )
			->attr( ':disabled', 'startAssignmentMutation?.isPending' )
			->attr( ':class', "{ 'tutor-btn-loading': startAssignmentMutation?.isPending }" )
			->attr( '@click', "startAssignmentMutation.mutate('{$assignment_id}')" )
			->disabled( $is_expired ? true : false )
			->render();
			?>
		</form>
		<?php } ?>

		<?php if ( ! empty( $assignment->post_content ) ) : ?>
		<div class="tutor-assignment-description">
			<div class="tutor-small tutor-text-subdued tutor-sm-text-tiny">
				<?php esc_html_e( 'Assignment Description', 'tutor-pro' ); ?>
			</div>
			<div class="tutor-medium tutor-text-secondary tutor-sm-text-small">
				<?php echo wp_kses_post( $assignment->post_content ); ?>
			</div>
		</div>
		<?php endif; ?>
		<?php if ( is_array( $attachments ) && count( $attachments ) > 0 ) : ?>
		<div class="tutor-assignment-attachments">
			<div class="tutor-small tutor-text-subdued tutor-sm-text-tiny">
				<?php esc_html_e( 'Attachments', 'tutor-pro' ); ?>
			</div>
			<div class="tutor-medium tutor-sm-text-small">
				<?php esc_html_e( 'Download resources and materials for this assignment', 'tutor-pro' ); ?>
			</div>
			<div class="tutor-assignment-attachments-cards">
				<?php foreach ( $attachments as $attachment ) : ?>
				<div class="tutor-card tutor-attachment-card">
					<div class="tutor-attachment-card-icon" aria-hidden="true">
						<?php SvgIcon::make()->name( Icon::RESOURCES )->size( 24 )->render(); ?>
					</div>
					<div class="tutor-attachment-card-body">
						<div class="tutor-attachment-card-title">
							<?php echo esc_html( $attachment->name ?? $attachment->title ?? '' ); ?>
						</div>
						<span class="tutor-attachment-card-meta">
							<?php echo esc_html( $attachment->size ?? '' ); ?>
						</span>
					</div>
					<div class="tutor-attachment-card-actions">
						<a href="<?php echo esc_url( $attachment->url ?? '#' ); ?>" class="tutor-btn tutor-btn-ghost tutor-btn-x-small tutor-btn-icon" target="_blank" rel="noopener noreferrer" download aria-label="<?php esc_attr_e( 'Download', 'tutor-pro' ); ?>">
							<?php SvgIcon::make()->name( Icon::DOWNLOAD_2 )->size( 16 )->render(); ?>
						</a>
					</div>
				</div>
				<?php endforeach; ?>
			</div>
		</div>
		<?php endif; ?>
		<div class="tutor-learning-area-footer">
			<?php
			if ( $submitted_assignment ) :
				echo $next_button; // phpcs:ignore --already escaped.
				?>
				<?php else : ?>
					<?php
					echo $next_button; // phpcs:ignore --already escaped.
					?>
					<?php if ( ! $is_expired ) : ?>
						<form id="tutor_assignment_start_form"
							class="tutor-flex tutor-flex-column tutor-gap-6"
						>
							<?php
							$btn = Button::make()
							->label( __( 'Start Assignment', 'tutor-pro' ) )
							->attr( 'id', 'tutor_assignment_start_btn' )
							->attr( 'x-bind', "handleStart({$assignment_id})" );
							if ( $is_expired ) {
								$btn->disabled();
							}
							$btn->render();
							?>
						</form>
					<?php endif; ?>
			<?php endif; ?>
		</div>
	</div>
	<?php echo apply_filters( 'tutor_learning_area_content', ob_get_clean() ); //phpcs:ignore --already sanitized ?> 
</div>
