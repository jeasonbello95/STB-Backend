<?php
/**
 * Google event API setup frontend page.
 *
 * @since 4.0.0
 *
 * @package TutorPro\GoogleMeet\Views
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\ConfirmationModal;
use TUTOR\Input;
use TutorPro\GoogleMeet\GoogleEvent\GoogleEvent;

$google_meet     = new GoogleEvent();
$credential      = $google_meet->upload_dir . "{$google_meet->username}-credential.json";
$base_path       = $data['views'] . 'pages/frontend/api/';
$banner_template = $base_path . 'banner.php';
if ( file_exists( $banner_template ) && ( $google_meet->is_app_permitted() || ! $google_meet->is_credential_loaded() ) ) {
	tutor_load_template_from_custom_path( $banner_template, $data );
}

$view = '';

if ( ! $google_meet->is_credential_loaded() ) {
	$view = 'credential-form.php';
} elseif ( ! $google_meet->is_app_permitted() ) {
	$code = Input::get( 'code', '' );
	if ( ! empty( $code ) ) {
		$save_token = $google_meet->save_token( $code );
		if ( ! $google_meet->is_app_permitted() ) {
			$view                = 'replace-account.php';
			$data['consent_url'] = $google_meet->get_consent_screen_url();
		} else {
			$view                = 'consent-screen.php';
			$data['consent_url'] = $google_meet->get_consent_screen_url();
		}
	} else {
		try {
			$view                = 'consent-screen.php';
			$data['consent_url'] = $google_meet->get_consent_screen_url();
		} catch ( \Throwable $th ) {
			if ( file_exists( $credential ) ) {
				unlink( $credential );
			}
			echo esc_html( $error_msg, 'tutor-pro' );
		}
	}
} else {
	$view                = 'replace-account.php';
	$data['consent_url'] = $google_meet->get_consent_screen_url();
}


$template = $base_path . $view;

if ( file_exists( $template ) ) {
	tutor_load_template_from_custom_path( $template, $data );
}

ConfirmationModal::make()
	->id( 'google_meet_reset_credentials_modal' )
	->title( __( 'Do You Want to Delete This?', 'tutor-pro' ) )
	->message( __( 'Are you sure you want to delete this permanently from the site? Please confirm your choice.', 'tutor-pro' ) )
	->mutation_state( 'resetMutation' )
	->confirm_handler( 'handleResetCredentials' )
	->render();
