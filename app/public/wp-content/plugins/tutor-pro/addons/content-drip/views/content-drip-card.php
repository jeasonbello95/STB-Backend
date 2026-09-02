<?php
/**
 * Content drip schedule content by date
 *
 * @package TutorPro\Addons
 * @subpackage ContentDrip\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;

?>

<div class="tutor-content-drip-card">
	<div class="tutor-content-drip-card-header">
		<?php if ( $image_path ) : ?>
			<?php tutor_utils()->render_themed_svg( $image_path ); ?>
		<?php endif; ?>
	</div>
	<div class="tutor-content-drip-card-body">
		<?php if ( $badge ) : ?>
		<div class="tutor-w-max tutor-mb-4">
			<?php echo $badge; //phpcs:ignore -- already sanitized. ?>
		</div>
		<?php endif; ?>
		<?php echo wp_kses_post( $drip_title ); ?>
		<?php echo wp_kses_post( $drip_message ); ?>
	</div>
	<div class="tutor-content-drip-card-footer">
		<?php if ( tutor_utils()->count( $this->prerequisites ) ) : ?>
			<div class="tutor-content-drip-card-footer-content">
			<?php echo $footer_content; //phpcs:ignore -- already sanitized ?>
			</div>
		<?php else : ?>
			<?php
			Button::make()
				->tag( 'a' )
				->label( $button_label )
				->attr( 'href', esc_url( get_permalink( $content_id ) ) )
				->render();
			?>
		<?php endif ?>
		<?php if ( $footer_label ) : ?>
		<p class="tutor-small tutor-text-subdued tutor-pt-5"><?php echo esc_html( $footer_label ); ?></p>
		<?php endif; ?>
	</div>
</div>
