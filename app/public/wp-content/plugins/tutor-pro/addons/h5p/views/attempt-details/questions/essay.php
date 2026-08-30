<?php
/**
 * H5P Attempt details for Essay(read-only).
 *
 * @package TutorPro\Addons
 * @subpackage H5P\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

$response_result = $response_result ?? array();

?>
<div class="tutor-quiz-question-options">
	<div class="tutor-input-field">
		<div class="tutor-input-wrapper">
			<div
				class="tutor-input tutor-text-area tutor-input-content-clear"
			>
			<?php if ( tutor_utils()->count( $response_result ) ) : ?>
				<?php echo wp_kses_post( trim( $response_result[0]['essay_result'] ) ); ?>
			<?php endif; ?>
			</div>
		</div>
	</div>
</div>