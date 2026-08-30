<?php
/**
 * Zoom Addon - Set Api Page.
 *
 * @package TutorPro\Addons
 * @subpackage Zoom\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Constants\InputType;
use Tutor\Components\InputField;

$zoom_url            = 'https://marketplace.zoom.us/develop/create';
$content             = esc_html__( 'Please set your API Credentials. Without valid credentials, Zoom integration will not work. Create credentials by following', 'tutor-pro' );
$content            .= sprintf( ' <a class="tutor-text-brand" target="_blank" href="%s" rel="noreferrer noopener">%s</a>.', $zoom_url, esc_html__( 'this link', 'tutor-pro' ) );
$account_id_error    = __( 'Account ID is required', 'tutor-pro' );
$client_id_error     = __( 'Client ID is required', 'tutor-pro' );
$client_secret_error = __( 'Client Secret is required', 'tutor-pro' );
$account_id          = $data['zoom_obj']->get_api( 'account_id' );
$api_key             = $data['zoom_obj']->get_api( 'api_key' );
$api_secret          = $data['zoom_obj']->get_api( 'api_secret' );
$default_value       = array(
	'account_id' => $account_id ? $account_id : '',
	'api_key'    => $api_key ? $api_key : '',
	'api_secret' => $api_secret ? $api_secret : '',
);
?>


<div class="tutor-zoom-frontend-set-api">
	<div class="tutor-p-9 tutor-zoom-frontend-set-api-banner tutor-border-b">
		<div class="banner-content">
			<h4 class="tutor-h4 tutor-pb-4">
			<?php esc_html_e( 'Setup your Zoom Integration', 'tutor-pro' ); ?>
			</h4>
			<div class="tutor-p2">
				<?php echo wp_kses_post( $content ); ?>
			</div>
		</div>
		<div class="tutor-zoom-set-api-image">
			<?php tutor_utils()->render_themed_svg( 'images/illustrations/zoom-integration.svg' ); ?>
		</div>
	</div>
	<div>
		<form 
			id='tutor-zoom-frontend-set-api-form'
			x-data='tutorForm({
				defaultValues: <?php echo wp_json_encode( $default_value ); ?>,
				id: "tutor-zoom-frontend-set-api-form",
				mode: "onBlur", 
				shouldFocusError: true
			});'
			x-bind="getFormBindings()"
			@submit="handleSubmit((data) => handleSetApi(data))($event)"
		>
			<div class="tutor-p-6 tutor-border-b">
				<?php
					InputField::make()
						->name( 'account_id' )
						->label( __( 'Account ID', 'tutor-pro' ) )
						->placeholder( __( 'Enter Your Zoom Account ID', 'tutor-pro' ) )
						->attr( 'x-bind', "register('account_id', { required: '$account_id_error' })" )
						->render()
				?>
			</div>
			<div class="tutor-p-6 tutor-border-b">
				<?php
					InputField::make()
						->name( 'api_key' )
						->label( __( 'Client ID', 'tutor-pro' ) )
						->placeholder( __( 'Enter Your Zoom Client ID', 'tutor-pro' ) )
						->attr( 'x-bind', "register('api_key', { required: '$client_id_error' })" )
						->render()
				?>
			</div>
			<div class="tutor-p-6">
				<?php
					InputField::make()
						->name( 'api_secret' )
						->label( __( 'Client Secret', 'tutor-pro' ) )
						->placeholder( __( 'Enter Your Zoom Client Secret', 'tutor-pro' ) )
						->attr( 'x-bind', "register('api_secret', { required: '$client_secret_error' })" )
						->render()
				?>
			</div>
		</form>
	</div>
</div>
