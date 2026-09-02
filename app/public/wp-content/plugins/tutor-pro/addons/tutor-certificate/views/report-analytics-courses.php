<?php
/**
 * View certificate button
 *
 * @package TutorPro\Addon
 * @subpackage Certificate
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 3.9.5
 */

defined( 'ABSPATH' ) || exit;

?>

<div class="tutor-d-flex tutor-align-center tutor-gap-1">
	<span class="tutor-icon-circle-mark-o tutor-color-primary"></span>
	<a href="<?php echo esc_url( $certificate_url ); ?>" class="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block">
		<?php esc_html_e( 'View', 'tutor-pro' ); ?>
	</a>
</div>
