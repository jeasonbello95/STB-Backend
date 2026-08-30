<?php
/**
 * Handle Email Change
 *
 * @package TutorPro\Auth
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 3.8.2
 */

namespace TUTOR_PRO;

use Tutor\Components\Badge;
use Tutor\Components\Button;
use Tutor\Components\Constants\Variant;
use TUTOR\Input;
use Tutor\Traits\JsonResponse;
use TUTOR\User;
use TUTOR_PRO\Mailer;

defined( 'ABSPATH' ) || exit;

/**
 * Class ChangeEmail
 *
 * @since 3.8.2
 */
class ChangeEmail {
	use JsonResponse;

	const ENABLE_CHANGE_EMAIL = 'enable_change_email';

	/**
	 * User meta key (UMK) related to email change
	 *
	 * @since 3.8.2
	 */
	const PENDING_EMAIL_UMK       = 'tutor_pending_new_email';
	const PENDING_EMAIL_TOKEN_UMK = 'tutor_pending_new_email_token';

	/**
	 * Register hooks.
	 *
	 * @since 3.8.2
	 *
	 * @return void
	 */
	public function __construct() {
		add_filter( 'tutor/options/extend/attr', array( $this, 'add_settings' ) );

		if ( ! self::is_enabled() ) {
			return;
		}

		add_action( 'tutor_beside_account_email_field', array( $this, 'add_change_email_markup' ) );
		add_action( 'tutor_after_change_email_field', array( $this, 'show_verify_pending' ) );
		add_action( 'wp_ajax_tutor_change_email', array( $this, 'ajax_change_email' ) );
		add_action( 'template_redirect', array( $this, 'verify_email_change_confirmation_link' ) );
	}

	/**
	 * Check option is enabled
	 *
	 * @since 3.8.2
	 *
	 * @return boolean
	 */
	public static function is_enabled() {
		return tutils()->get_option( self::ENABLE_CHANGE_EMAIL, false );
	}

	/**
	 * Add change email settings
	 *
	 * @since 3.8.2
	 *
	 * @param array $attr attribute.
	 *
	 * @return array
	 */
	public function add_settings( $attr ) {
		$option = array(
			'key'     => self::ENABLE_CHANGE_EMAIL,
			'type'    => 'toggle_switch',
			'label'   => __( 'Enable Email Update', 'tutor-pro' ),
			'default' => 'off',
			'desc'    => __( 'Allow students and instructors to change their email directly from their profile', 'tutor-pro' ),
		);

		tutor_utils()->add_option_after(
			'enable_tutor_native_login',
			$attr['advanced']['blocks'][3]['fields'],
			$option
		);

		return $attr;
	}

	/**
	 * Add change email markup
	 *
	 * @since 3.8.2
	 *
	 * @since 4.0.0 Hook args removed
	 *
	 * @return void
	 */
	public function add_change_email_markup() {
		$user_id       = get_current_user_id();
		$pending_email = self::get_pending_email( $user_id );
		if ( ! empty( $pending_email ) ) {
			return;
		}

		if ( ! User::is_admin() ) {
			Button::make()
			->label( __( 'Change', 'tutor-pro' ) )
			->variant( Variant::PRIMARY )
			->attr( 'type', 'button' )
			->attr( '@click', "TutorCore.modal.showModal('change-email-modal')" )
			->render();
			?>
			<?php
			include tutor_auth()->views . 'change-email-modal.php';
		}
	}

	/**
	 * Show verification pending email
	 *
	 * @since 4.0.0 Hook args removed
	 *
	 * @return void
	 */
	public function show_verify_pending() {
		$user_id = get_current_user_id();
		$email   = self::get_pending_email( $user_id );
		if ( ! $email ) {
			return;
		}
		?>
		<div class="tutor-flex tutor-gap-3 tutor-items-center -tutor-mt-2">
			<span class="tutor-text-tiny">
				<?php echo esc_html( $email ); ?>
			</span>
			<span>
			<?php
			Badge::make()->label( __( 'Verification Pending', 'tutor-pro' ) )->variant( Badge::WARNING )->render();
			?>
			</span>
		</div>
		<?php
	}

	/**
	 * Get pending email
	 *
	 * @since 3.8.2
	 *
	 * @param int $user_id user id.
	 *
	 * @return string
	 */
	public static function get_pending_email( $user_id ) {
		return get_user_meta( $user_id, self::PENDING_EMAIL_UMK, true );
	}

	/**
	 * Get verification token
	 *
	 * @since 3.8.2
	 *
	 * @param int $user_id user id.
	 *
	 * @return string
	 */
	public static function get_verification_token( $user_id ) {
		return get_user_meta( $user_id, self::PENDING_EMAIL_TOKEN_UMK, true );
	}

	/**
	 * Check if user has pending email
	 *
	 * @since 3.8.2
	 *
	 * @param int $user_id user id.
	 *
	 * @return boolean
	 */
	public static function has_pending_email( $user_id ) {
		return (bool) self::get_pending_email( $user_id );
	}

	/**
	 * Clear user meta related to email change
	 *
	 * @since 3.8.2
	 *
	 * @param int $user_id user id.
	 *
	 * @return void
	 */
	private static function clear_user_meta( $user_id ) {
		delete_user_meta( $user_id, self::PENDING_EMAIL_UMK );
		delete_user_meta( $user_id, self::PENDING_EMAIL_TOKEN_UMK );
	}

	/**
	 * Send change email confirmation email
	 *
	 * @since 3.8.2
	 *
	 * @param int $user_id user id.
	 *
	 * @return bool
	 */
	private function send_confirmation_email( $user_id ) {
		$user = get_user_by( 'id', $user_id );

		$token     = self::get_verification_token( $user_id );
		$new_email = self::get_pending_email( $user_id );

		if ( ! $user || ! $token || ! $new_email ) {
			return;
		}

		$link = add_query_arg(
			array(
				'change-email' => $user->user_email,
				'token'        => $token,
			),
			home_url()
		);

		/* translators: %s: site name */
		$subject = sprintf( __( '[%s] Confirm your new email address', 'tutor-pro' ), get_bloginfo( 'name' ) );

		$data = array(
			'{testing_email_notice}' => '',
			'{display_name}'         => tutor_utils()->display_name( $user->ID ),
			'{site_name}'            => get_bloginfo( 'name' ),
			'{link}'                 => $link,
			'{footer_text}'          => tutor_pro_email_global_footer(),
			'{additional_footer}'    => __( 'This is an automated email. Please do not reply to this email.', 'tutor-pro' ),
			'{current_year}'         => gmdate( 'Y' ),
		);

		$email_body = Mailer::prepare_template( tutor_auth()->templates . 'email/change-email.php', $data );
		return Mailer::send_mail( $new_email, $subject, $email_body );
	}

	/**
	 * Change email via ajax
	 *
	 * @since 3.8.2
	 *
	 * @return void
	 */
	public function ajax_change_email() {
		tutor_utils()->check_nonce();

		$new_email              = Input::post( 'new_email' );
		$new_email_confirmation = Input::post( 'new_email_confirmation' );
		$current_password       = Input::post( 'current_password' );

		$user_id = get_current_user_id();
		$user    = get_user_by( 'id', $user_id );

		if ( ! $user || User::is_admin( $user_id ) ) {
			$this->response_bad_request( __( 'Invalid request', 'tutor-pro' ) );
		}

		if ( $new_email !== $new_email_confirmation ) {
			$this->response_bad_request( __( 'New email and confirm new email do not match', 'tutor-pro' ) );
		}

		if ( ! wp_check_password( $current_password, $user->user_pass, $user_id ) ) {
			$this->response_bad_request( __( 'Current password is incorrect', 'tutor-pro' ) );
		}

		if ( ! is_email( $new_email ) ) {
			$this->response_bad_request( __( 'Invalid email', 'tutor-pro' ) );
		}

		// Check email already taken.
		$has_user = get_user_by( 'email', $new_email );
		if ( $has_user ) {
			$this->response_bad_request( __( 'Email already taken', 'tutor-pro' ) );
		}

		// Check already has pending email change request.
		if ( self::has_pending_email( $user_id ) ) {
			$this->response_bad_request( __( 'You already have a pending email change request', 'tutor-pro' ) );
		}

		$token = wp_generate_password( 64, false );
		update_user_meta( $user_id, self::PENDING_EMAIL_UMK, $new_email );
		update_user_meta( $user_id, self::PENDING_EMAIL_TOKEN_UMK, $token );

		if ( ! $this->send_confirmation_email( $user_id ) ) {
			self::clear_user_meta( $user_id );
			$this->response_bad_request( __( 'Failed to send email. Please try again', 'tutor-pro' ) );
		}

		$this->response_success( __( 'Email change request sent successfully. Please check your new email for verification link', 'tutor-pro' ) );
	}

	/**
	 * Verify email change confirmation link
	 *
	 * @since 3.8.2
	 *
	 * @return void
	 */
	public function verify_email_change_confirmation_link() {
		if ( ! Input::has( 'change-email' ) || ! Input::has( 'token' ) ) {
			return;
		}

		// User current email.
		$current_email = Input::get( 'change-email' );
		$token         = Input::get( 'token' );

		if ( ! is_user_logged_in() ) {
			$redirect_back = add_query_arg(
				array(
					'change-email' => $current_email,
					'token'        => $token,
				),
				home_url()
			);
			wp_safe_redirect( wp_login_url( $redirect_back ) );
			exit;
		}

		$user = wp_get_current_user();

		$pending_email = self::get_pending_email( $user->ID );
		$saved_token   = self::get_verification_token( $user->ID );

		if ( ! is_email( $pending_email ) || ! $saved_token ) {
			wp_die( esc_html__( 'Invalid email or token', 'tutor-pro' ) );
		}

		if ( $token !== $saved_token ) {
			wp_die( esc_html__( 'Invalid token', 'tutor-pro' ) );
		}

		wp_update_user(
			array(
				'ID'         => $user->ID,
				'user_email' => $pending_email,
			)
		);

		self::clear_user_meta( $user->ID );

		tutor_utils()->redirect_to(
			tutor_utils()->tutor_dashboard_url( 'account/settings/?tab=security' ),
			__( 'Email changed successfully', 'tutor-pro' )
		);
	}
}
