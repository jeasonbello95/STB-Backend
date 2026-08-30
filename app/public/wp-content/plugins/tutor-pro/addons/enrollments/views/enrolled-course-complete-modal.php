<?php
/**
 * Backend: Enrolled course complete modal template
 *
 * @package TutorPro\Addons
 * @subpackage Enrollments\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 *
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

$modal_id = $data['modal_id'] ?? '';
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
						<img class="tutor-d-inline-block" src="<?php echo esc_url( TUTOR_ENROLLMENTS()->url . 'assets/images/mark-as-complete.svg' ); ?>" alt="<?php esc_attr_e( 'Mark as complete', 'tutor-pro' ); ?>">
					</div>
					<div class="tutor-fs-4 tutor-fw-medium tutor-color-black tutor-mb-12"><?php esc_html_e( 'Mark this course as complete?', 'tutor-pro' ); ?></div>
					<div class="tutor-fs-6 tutor-color-muted"><?php esc_html_e( 'Marking this course as complete will not affect the course progress, but the course status will be complete & certificate will be available.', 'tutor-pro' ); ?></div>

					<form class="tutor-mt-40 tutor-mb-0" method="POST">
						<?php tutor_nonce_field(); ?>
						<input type="hidden" name="action" value="tutor_enrolled_course_complete">
						<div class="tutor-d-flex tutor-justify-center">
							<button data-modal-data="<?php echo esc_attr( wp_json_encode( $data ) ); ?>" class="tutor-confirm-mark-as-complete tutor-btn tutor-btn-primary tutor-ml-16" data-tutor-modal-submit>
								<i class="tutor-icon-mark-light tutor-mr-8"></i> <?php esc_html_e( 'Mark as Complete', 'tutor-pro' ); ?>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
