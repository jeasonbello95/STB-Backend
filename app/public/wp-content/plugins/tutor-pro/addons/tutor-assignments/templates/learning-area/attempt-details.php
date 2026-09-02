<?php
/**
 * Tutor learning area assignment attempt details page.
 *
 * @package Tutor\Templates
 * @subpackage LearningArea
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use Tutor\Helpers\UrlHelper;
use TUTOR\Icon;
use Tutor\Components\SvgIcon;

$back_url        = get_permalink( $assignment_id );
$submission      = $submitted_assignment[0] ?? null;
$attached_files  = json_decode( get_comment_meta( $submission->comment_ID, 'uploaded_attachments', true ) );
$upload_dir      = wp_get_upload_dir();
$instructor_note = get_comment_meta( $submission->comment_ID, 'instructor_note', true ) ?? '';
?>

<div class="tutor-assignment" x-data="tutorAssignment">
	<div class="tutor-mb-5">
		<a href="<?php echo esc_url( $back_url ); ?>" class="tutor-btn tutor-btn-secondary">
			<?php SvgIcon::make()->name( Icon::ARROW_LEFT_2 )->flip_rtl()->render(); ?>
			<?php esc_html_e( 'Back', 'tutor-pro' ); ?>
		</a>
	</div>
	<div class="tutor-assignment-overview">
		<div class="tutor-assignment-info">
			<h4 class="tutor-h4 tutor-sm-text-medium tutor-mt-1">
				<?php echo esc_html( $assignment->post_title ); ?>
			</h4>
			<div>
			<?php
				require_once __DIR__ . '/single-attempt.php';
			?>
			</div>
		</div>
		<?php if ( $submission->comment_content ) : ?>
		<div class="tutor-assignment-description">
			<div class="tutor-flex tutor-items-center tutor-justify-between">
				<div class="tutor-small tutor-text-subdued tutor-sm-text-tiny">
					<?php esc_html_e( 'Your Submission', 'tutor-pro' ); ?>
				</div>
				<div>
				<?php
				if ( ! $is_evaluated ) {
					Button::make()
					->icon( Icon::EDIT_2 )
					->label( __( 'Edit', 'tutor-pro' ) )
					->tag( 'a' )
					->size( Size::X_SMALL )
					->attr(
						'href',
						UrlHelper::add_query_params(
							$back_url,
							array( 'update-assignment' => $attempt_detail_id )
						)
					)
					->variant( Variant::OUTLINE )
					->render();
				}
				?>
				</div>
			</div>
			<div class="tutor-medium tutor-assignment-description-content tutor-text-secondary tutor-sm-text-small">
				<?php echo wp_kses_post( $submission->comment_content ); ?>
			</div>
			<?php if ( tutor_utils()->count( $attached_files ) ) : ?>
			<div class="tutor-assignment-attachments-cards tutor-pt-4">
				<?php foreach ( $attached_files as $attachment ) : ?>
				<div class="tutor-card tutor-attachment-card">
					<div class="tutor-attachment-card-icon" aria-hidden="true">
						<?php SvgIcon::make()->name( Icon::RESOURCES )->size( 24 )->render(); ?>
					</div>
					<div class="tutor-attachment-card-body">
						<div class="tutor-attachment-card-title">
							<?php echo esc_html( $attachment->name ?? $attachment->title ?? '' ); ?>
						</div>
						<span class="tutor-attachment-card-meta">
							<?php echo esc_html( tutor_utils()->get_readable_filesize( trailingslashit( $upload_dir['basedir'] ) . $attachment->uploaded_path ) ?? '' ); ?>
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
			<?php endif; ?>
		</div>
		<?php endif; ?>
		<?php if ( ! empty( $instructor_note ) ) : ?>
		<div class="tutor-assignment-feedback tutor-p-5 tutor-surface-brand-tertiary tutor-border tutor-border-brand-secondary tutor-rounded-lg">
			<p class="tutor-small tutor-text-subdued tutor-pb-4"><?php esc_html_e( 'Instructor Feedback', 'tutor-pro' ); ?></p>
			<p class="tutor-p1"><?php echo wp_kses_post( $instructor_note ); ?></p>
		</div>
		<?php endif; ?>
		<div class="tutor-learning-area-footer">
		<?php
      echo $next_button; // phpcs:ignore --already escaped.
		?>
		</div>
	</div>
</div>