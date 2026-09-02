<?php
/**
 * Certificate Card Single Item Component.
 *
 * Expects $certificate array with keys: title, course_url, certificate_url, is_bundle.
 *
 * @package TutorPro\Addons\Certificate
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use TUTOR\Icon;
use Tutor\Components\SvgIcon;
?>

<div class="tutor-certificate-card">
	<div class="tutor-certificate-body">
		<div class="tutor-certificate-icon">
			<?php SvgIcon::make()->name( Icon::CERTIFICATE_2 )->size( 24 )->render(); ?>
		</div>

		<div class="tutor-certificate-info">
			<?php if ( $certificate['is_bundle'] ) : ?>
				<div class="tutor-certificate-type tutor-certificate-type-bundle">
					<?php esc_html_e( 'Bundle', 'tutor-pro' ); ?>
				</div>
			<?php else : ?>
				<div class="tutor-certificate-type">
					<?php esc_html_e( 'Course', 'tutor-pro' ); ?>
				</div>
			<?php endif; ?>

			<div class="tutor-certificate-title">
				<?php echo esc_html( $certificate['title'] ); ?>
			</div>
		</div>
	</div>

	<div class="tutor-certificate-actions">
		<a href="<?php echo esc_url( $certificate['course_url'] ); ?>" class="tutor-certificate-actions-button">
			<?php esc_html_e( 'Course', 'tutor-pro' ); ?>
		</a>
		<hr class="tutor-section-separator-vertical" />
		<a href="<?php echo esc_url( $certificate['certificate_url'] ); ?>" class="tutor-certificate-actions-button">
			<?php esc_html_e( 'View Certificate', 'tutor-pro' ); ?>
		</a>
	</div>
</div>
