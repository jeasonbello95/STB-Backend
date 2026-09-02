<?php
/**
 * Template for certificate verification
 *
 * @since 4.0.0
 *
 * @author Themeum
 * @link https://themeum.com
 * @package TutorPro/Addons
 * @subpackage Certificate
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\InputField;
use TUTOR_CERT\Certificate;

tutor_utils()->tutor_custom_header();

$cert_obj = new Certificate( true );
?>
<div class="tutor-certificate-verification" x-data="tutorCertificateVerification">
	<div class="tutor-certificate-verification-wrapper">
		<div class="tutor-certificate-verification-content">

			<div class="tutor-certificate-verification-header">
				<img src="<?php echo esc_url( TUTOR_CERT()->url . 'assets/images/verify.svg' ); ?>" alt="verify">
				<h2><?php esc_html_e( 'Verify Certificate', 'tutor-pro' ); ?></h2>
			</div>

			<div class="tutor-certificate-verification-body">
				<?php
				InputField::make()
				->label( __( 'Certificate ID', 'tutor-pro' ) )
				->name( 'certificate_id' )
				->id( 'certificate_id' )
				->placeholder( __( 'Enter certificate ID (e.g., CERT-2024-ABC123)', 'tutor-pro' ) )
				->render();

				Button::make()
				->tag( 'button' )
				->attr( 'type', 'button' )
				->attr( 'class', 'tutor-btn-block tutor-mt-6' )
				->label( __( 'Verify Certificate', 'tutor-pro' ) )
				->attr( ':class', "{ 'tutor-btn-loading': verifyCertificateMutation?.isPending }" )
				->attr( ':disabled', 'verifyCertificateMutation?.isPending' )
				->attr( '@click', 'handleVerifyCertificate()' )
				->render();
				?>
			</div>

		</div>

		<div class="tutor-certificate-verification-footer">
			<?php
			echo wp_kses(
				sprintf(
					/* translators: %s is the site title wrapped in a strong tag. */
					__( 'Certificates issued by %s include a unique verification ID and QR code.', 'tutor-pro' ),
					'<strong>' . esc_html( ucwords( get_bloginfo( 'name' ) ) ) . '</strong>'
				),
				array(
					'strong' => array(),
				)
			);
			?>
		</div>
	</div>
</div>
<?php
tutor_utils()->tutor_custom_footer();
