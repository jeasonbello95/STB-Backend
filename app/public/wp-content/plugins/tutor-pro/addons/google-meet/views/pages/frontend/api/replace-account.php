<?php
/**
 * Google event API setup frontend credential form template.
 *
 * @since 4.0.0
 *
 * @package TutorPro\GoogleMeet\Views
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;

?>

<div class="tutor-p-9 tutor-google-meet-frontend-reset">
	<div class="tutor-google-meet-reset-description">
		<h5 class="tutor-h5 tutor-pb-4 tutor-my-none"><?php echo esc_html__( 'Meet Account Activated', 'tutor-pro' ); ?></h5>
		<div class="tutor-p2 tutor-text-subdued"><?php echo esc_html__( 'You are currently connected to Meet', 'tutor-pro' ); ?></div>
	</div>
	<div class="tutor-google-meet-frontend-reset-buttons tutor-flex-1">
		<?php
			Button::make()
				->label( __( 'Reset Credential', 'tutor-pro' ) )
				->variant( Variant::PRIMARY_SOFT )
				->size( Size::SMALL )
				->attr( '@click', 'TutorCore.modal.showModal("google_meet_reset_credentials_modal");' )
				->render();

			Button::make()
				->label( __( 'Change Account', 'tutor-pro' ) )
				->variant( Variant::OUTLINE )
				->tag( 'a' )
				->size( Size::SMALL )
				->attr( 'href', esc_url( $data['consent_url'] ?? '#' ) )
				->render();
		?>
	</div>
</div>