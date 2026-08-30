<?php
/**
 * Assignment Confirm Submission Modal
 *
 * @package Tutor\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use Tutor\Components\SvgIcon;
use TUTOR\Icon;

?>

<div class="tutor-modal-body">
	<div class="tutor-flex tutor-flex-column tutor-surface-base tutor-border tutor-gap-4 tutor-p-5 tutor-rounded-md">
		<div class="tutor-flex tutor-gap-4 tutor-justify-between tutor-items-center tutor-text-subdued">
			<span class="tutor-small tutor-text-secondary">
				<?php esc_html_e( 'Written Response', 'tutor-pro' ); ?>
			</span>
			<span class="tutor-small tutor-font-medium tutor-flex tutor-items-center tutor-gap-3" x-show="payload?.assignment_content">
				<?php SvgIcon::make()->name( Icon::COMPLETED )->size( 16 )->render(); ?>
				<?php esc_html_e( 'Included', 'tutor-pro' ); ?>
			</span>
			<span class="tutor-small tutor-font-medium tutor-flex tutor-items-center tutor-gap-3" x-show="!payload?.assignment_content">
				<?php SvgIcon::make()->name( Icon::CROSS_CIRCLE )->size( 16 )->render(); ?>
				<?php esc_html_e( 'Not Included', 'tutor-pro' ); ?>
			</span>
		</div>
		<div class="tutor-flex tutor-gap-4 tutor-justify-between tutor-items-center tutor-text-subdued">
			<span class="tutor-small tutor-text-secondary">
				<?php esc_html_e( 'File Attached', 'tutor-pro' ); ?>
			</span>
			<span class="tutor-small tutor-font-medium tutor-flex tutor-items-center tutor-gap-2">
				<?php
				printf(
					// translators: %s - number of files.
					esc_html__( '%s file(s)', 'tutor-pro' ),
					'<span x-text="payload?.file_count"></span>'
				);
				?>
			</span>
		</div>
	</div>
	<div class="tutor-flex tutor-items-center tutor-justify-between tutor-gap-5 tutor-mt-8">
		<?php
			Button::make()
				->label( __( 'Cancel', 'tutor-pro' ) )
				->variant( Variant::SECONDARY )
				->size( Size::SMALL )
				->attr( 'class', 'tutor-flex-1' )
				->attr( '@click', sprintf( "TutorCore.modal.closeModal('%s')", esc_attr( $data['modal_id'] ?? '' ) ) )
				->render();
			Button::make()
				->label( __( 'Confirm Submission', 'tutor-pro' ) )
				->size( Size::SMALL )
				->attr( 'class', 'tutor-flex-1' )
				->attr( ':class', "submitAssignmentMutation?.isPending ? 'tutor-btn-loading' : ''" )
				->attr( 'type', 'submit' )
				->attr( 'form', $data['assignment_submit_form_id'] ?? '' )
				->render();
		?>
	</div>
</div>
