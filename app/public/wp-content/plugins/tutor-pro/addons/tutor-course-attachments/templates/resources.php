<?php
/**
 * Tutor learning area resources.
 *
 * @package TutorPro/Addons
 * @subpackage CourseAttachment
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\EmptyState;
use Tutor\Components\SvgIcon;
use TUTOR\Icon;

global $tutor_course_id;

$attachments    = tutor_utils()->get_attachments( $tutor_course_id );
$open_mode_view = 'view' === apply_filters( 'tutor_pro_attachment_open_mode', null );

?>

<div class="tutor-learning-area-resources tutor-py-8">
	<h4 class="tutor-h4 tutor-mb-5 tutor-flex tutor-items-center tutor-gap-4">
		<?php SvgIcon::make()->name( Icon::RESOURCES )->size( 24 )->render(); ?>
		<?php esc_html_e( 'Resources', 'tutor-pro' ); ?>
	</h4>
	<div class="tutor-resources-wrapper tutor-flex tutor-flex-column tutor-border tutor-surface-l1 tutor-rounded-md tutor-gap-4 tutor-p-6">
		<?php if ( is_array( $attachments ) && count( $attachments ) ) : ?>
			<?php foreach ( $attachments as $attachment ) : ?>
				<div class="tutor-card tutor-attachment-card">
					<div class="tutor-attachment-card-icon" aria-hidden="true">
						<?php SvgIcon::make()->name( Icon::RESOURCES )->size( 24 )->render(); ?>
					</div>

					<div class="tutor-attachment-card-body">
						<div class="tutor-attachment-card-title">
							<?php
								printf(
									// translators: %1$s: file name, %2$s: file extension.
									'%1$s (%2$s)',
									esc_html( $attachment->title ),
									esc_html( strtoupper( $attachment->ext ) )
								);
							?>
						</div>
						<span class="tutor-attachment-card-meta">
							<?php
							/* translators: %s: file size */
							printf( esc_html__( 'Size: %s', 'tutor-pro' ), esc_html( $attachment->size ) );
							?>
						</span>
					</div>

					<div class="tutor-attachment-card-actions tutor-opacity-100">
						<a href="<?php echo esc_url( $attachment->url ); ?>" class="tutor-btn tutor-btn-ghost tutor-btn-x-small tutor-btn-icon" rel="noopener" <?php echo esc_attr( $open_mode_view ? 'target="_blank"' : "download={$attachment->name}" ); ?>>
							<?php SvgIcon::make()->name( $open_mode_view ? Icon::LINK_EXTERNAL : Icon::DOWNLOAD_2 )->size( 20 )->render(); ?>
						</a>
					</div>
				</div>
			<?php endforeach; ?>
		<?php else : ?>
			<?php
				EmptyState::make()
					->title( __( 'No Resources Available!', 'tutor-pro' ) )
					->icon( tutor_utils()->get_themed_svg( 'images/illustrations/resources-empty.svg' ) )
					->render();
			?>
		<?php endif; ?>
</div>
