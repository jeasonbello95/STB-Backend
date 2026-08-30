<?php
/**
 * Backend: Download certificate modal template
 *
 * @package TutorPro\Addons
 * @subpackage TutorCertificate\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 *
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Helpers\UrlHelper;

$modal_id         = $data['modal_id'] ?? '';
$course_id        = $data['course_id'] ?? '';
$student_id       = $data['student_id'] ?? '';
$course_completed = tutor_utils()->is_completed_course( $course_id, $student_id );

$button_label = __( 'Download Certificate', 'tutor-pro' );
if ( ! $course_completed ) {
	$button_label = __( 'Complete & Download', 'tutor-pro' );
}
?>

<div id="<?php echo esc_attr( $modal_id ); ?>" class="tutor-modal">
	<div class="tutor-modal-overlay"></div>
	<div class="tutor-modal-window">
		<div class="tutor-modal-content tutor-modal-content-white">
			<button class="tutor-iconic-btn tutor-modal-close-o" data-tutor-modal-close>
				<span class="tutor-icon-times" aria-hidden="true"></span>
			</button>

			<div class="tutor-modal-body tutor-text-center">
				<div class="tutor-my-44">
					<div class="tutor-mb-24">
						<img class="tutor-d-inline-block" src="<?php echo esc_url( UrlHelper::themed_asset( 'images/illustrations/certificate-download.svg' ) ); ?>" alt="<?php esc_attr_e( 'Mark as complete', 'tutor-pro' ); ?>">
					</div>
					<div class="tutor-fs-4 tutor-fw-medium tutor-color-black tutor-mb-12"><?php esc_html_e( 'Do you want to download the certificate?', 'tutor-pro' ); ?></div>
					<?php
					if ( ! $course_completed ) {
						tutor_alert(
							__( 'The course isn\'t complete. Downloading the certificate will automatically mark the course as complete.', 'tutor-pro' ),
						);
					}
					?>

					<form class="tutor-mt-40 tutor-mb-0" method="POST">
						<?php tutor_nonce_field(); ?>
						<input type="hidden" name="action" value="tutor_download_course_certificate">
						<div class="tutor-d-flex tutor-justify-center">
							<button data-modal-data="<?php echo esc_attr( wp_json_encode( $data ) ); ?>" class="tutor-download-course-certificate tutor-btn tutor-btn-primary tutor-ml-16" data-tutor-modal-submit>
								<i class="tutor-icon-mark-light tutor-mr-8"></i> <?php echo esc_html( $button_label ); ?>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
