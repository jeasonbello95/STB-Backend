<?php
/**
 * Google event API setup consent screen template.
 *
 * @since 4.0.0
 *
 * @package TutorPro\GoogleMeet\Views
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use Tutor\Components\SvgIcon;
use TUTOR\Icon;

?>

<div class="tutor-google-meet-consent-screen-frontend tutor-p-9">
	<div class="tutor-google-meet-consent-screen-content">
		<h4 class="tutor-h4 tutor-font-medium tutor-pb-4"><?php echo esc_html__( 'This App is not Permitted Yet', 'tutor-pro' ); ?></h4>
		<p class="tutor-p2 tutor-text-secondary">
		<?php
			echo esc_html__( 'Press the button to grant access to your google classroom. Please allow all required permission to make this app working perfectly.', 'tutor-pro' );
		?>
		</p>
		<div class="tutor-consent-screen-buttons">
			<?php
				Button::make()
					->tag( 'a' )
					->label( __( 'Go to Google’s Consent Screen', 'tutor-pro' ) )
					->attr( 'href', $data['consent_url'] )
					->size( Size::SMALL )
					->render();
				Button::make()
					->size( Size::SMALL )
					->label( __( 'Reset Credential', 'tutor-pro' ) )
					->variant( Variant::OUTLINE )
					->attr( '@click', 'TutorCore.modal.showModal("google_meet_reset_credentials_modal");' )
					->render();
			?>
		</div>
	</div>
	<div class="tutor-google-meet-consent-screen-icon">
		<div>
			<?php
			SvgIcon::make()->name( Icon::GOOGLE_CALENDER_COLORIZE )->size( 40 )->render();
			?>
		</div>
		<p class="tutor-tiny tutor-text-subdued">
			<?php esc_html_e( 'Google Calender', 'tutor-pro' ); ?>
		</p>
	</div>
</div>