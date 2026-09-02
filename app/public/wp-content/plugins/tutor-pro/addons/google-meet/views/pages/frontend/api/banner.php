<?php
/**
 * Google event API setup frontend banner template.
 *
 * @since 4.0.0
 *
 * @package TutorPro\GoogleMeet\Views
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use TUTOR\Icon;
use Tutor\Helpers\UrlHelper;

$content = sprintf(
	/* translators: 1: Google Console link, 2: Documentation link */
	_x(
		'To integrate with Google Meet, go to this %1$s to create your OAuth access credentials. During this process, copy the link below and paste it as your Redirect URI. For a more detailed guide, please refer to our %2$s.',
		'google meet instruction',
		'tutor-pro'
	),
	sprintf(
		'<a class="tutor-text-brand" href="%1$s" target="_blank" rel="noopener noreferrer">%2$s</a>',
		esc_url( 'https://console.cloud.google.com/apis/dashboard' ),
		esc_html_x( 'link', 'google meet instruction', 'tutor-pro' )
	),
	sprintf(
		'<a class="tutor-text-brand" href="%1$s" target="_blank" rel="noopener noreferrer">%2$s</a>',
		esc_url( 'https://tutorlms.com/docs/google-meet-integration-tutor-addon/' ),
		esc_html_x( 'documentation', 'google meet instruction', 'tutor-pro' )
	)
);

$redirect_url = UrlHelper::add_query_params(
	tutor_utils()->tutor_dashboard_url( 'live-classes' ),
	array(
		'nav' => 'google-meet',
		'tab' => 'set-api',
	)
);
?>

<div class="tutor-p-9 tutor-google-meet-fronted-set-api tutor-border-b">
	<div class="tutor-google-meet-setup-description">
		<h5 class="tutor-h5 tutor-pb-4 tutor-my-none"><?php echo esc_html__( 'Setup your Google Meet Integration', 'tutor-pro' ); ?> </h5>
		<div class="tutor-sm-mb-7 tutor-mb-8 tutor-p2">
		<?php echo wp_kses_post( html_entity_decode( $content ) ); ?>
		</div>
		<div class="tutor-clipboard-input-field">
			<div class="tutor-text-primary tutor-small tutor-line-clamp-2"><?php echo esc_url( $redirect_url ); ?></div>
			<?php
				Button::make()
					->label( __( 'Copy', 'tutor-pro' ) )
					->icon( Icon::COPY_2 )
					->variant( Variant::LINK )
					->size( Size::X_SMALL )
					->icon_only()
					->attrs(
						array(
							'class'  => 'tutor-copy-btn',
							'@click' => "copy('" . $redirect_url . "')",
							'x-data' => 'tutorCopyToClipboard()',
							'type'   => 'button',
						)
					)
					->render();
				?>
		</div>
	</div>
	<div class="tutor-google-meet-setup-description-image">
		<?php tutor_utils()->render_themed_svg( 'images/illustrations/meet-integration.svg' ); ?>
	</div>
</div>
	
