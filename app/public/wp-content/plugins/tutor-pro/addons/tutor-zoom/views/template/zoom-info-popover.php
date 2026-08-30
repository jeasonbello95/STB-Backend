<?php
/**
 * Zoom lesson card info popover content.
 *
 * @package TutorPro\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use TUTOR\Icon;
?>

<div>
	<div class="tutor-border-b tutor-px-5 tutor-py-4">
		<div>
			<div class="tutor-tiny tutor-text-subdued"><?php echo esc_html__( 'Meeting Link', 'tutor-pro' ); ?></div>
			<div class="tutor-zoom-info-link">
				<div class="tutor-text-primary tutor-small tutor-line-clamp-2"><?php echo esc_url( $data['meet_link'] ); ?></div>
				<?php
				Button::make()
					->icon( Icon::COPY_2 )
					->variant( Variant::LINK )
					->size( Size::X_SMALL )
					->attrs(
						array(
							'x-on:click' => "copy('" . esc_url( $data['meet_link'] ) . "')",
							'x-data'     => 'tutorCopyToClipboard()',
							'type'       => 'button',
						)
					)
					->render();
				?>
			</div>
		</div>
		<div class="tutor-pt-5">
			<div class="tutor-tiny tutor-text-subdued"><?php echo esc_html__( 'Password', 'tutor-pro' ); ?></div>
			<div class="tutor-zoom-info-link">
				<div class="tutor-text-primary tutor-small"><?php echo esc_html( $data['password'] ); ?></div>
				<?php
				Button::make()
					->icon( Icon::COPY_2 )
					->variant( Variant::LINK )
					->size( Size::X_SMALL )
					->attrs(
						array(
							'x-on:click' => "copy('" . $data['password'] . "')",
							'x-data'     => 'tutorCopyToClipboard()',
							'type'       => 'button',
						)
					)
					->render();
				?>
			</div>
		</div>
		
	</div>
	<div class="tutor-px-5 tutor-py-4">
		<div class="tutor-tiny tutor-text-subdued"><?php echo esc_html__( 'Host Email', 'tutor-pro' ); ?></div>
		<div class="tutor-google-meet-info-host-email">
			<div class="tutor-text-primary tutor-small"><?php echo esc_url( $data['host_email'] ); ?></div>
		</div>
	</div>
</div>