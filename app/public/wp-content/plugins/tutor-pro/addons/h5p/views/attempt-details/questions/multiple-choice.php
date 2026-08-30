<?php
/**
 * H5P Attempt details True/False (read-only).
 *
 * @package TutorPro\Addons
 * @subpackage H5P\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

$response_result = $response_result ?? array();
$question        = $question ?? new stdClass();
$index           = $index ?? 0;

?>

<div class="tutor-quiz-question-options">
	<?php if ( tutor_utils()->count( $response_result ) ) : ?>
		<?php
		foreach ( $response_result as $key => $response ) :
			$option_attr = '';
			$is_selected = false;
			if ( isset( $response->is_correct ) && $response->is_correct ) {
				$option_attr = 'correct';
				$is_selected = true;
			} elseif ( isset( $response->is_correct ) && ! $response->is_correct ) {
				$option_attr = 'incorrect';
				$is_selected = true;
			} elseif ( isset( $response->is_solution ) && $response->is_solution ) {
				$option_attr = 'solution';
				$is_selected = true;
			}
			?>
			<div class="tutor-quiz-question-option" data-option="<?php echo esc_attr( $option_attr ); ?>" data-readonly="true">
				<div class="tutor-input-field">
					<div class="tutor-input-wrapper">
						<input
							type="<?php echo esc_attr( 'checkbox' ); ?>"
							class="<?php echo esc_attr( 'tutor-checkbox' ); ?>"
							<?php checked( $is_selected ); ?>
							disabled
						>
						<label for="<?php echo esc_attr( 'attempt-review-' . $question->question_id . '-' . $index ); ?>">
							<?php echo esc_html( $response->description ?? '' ); ?>
						</label>
					</div>
				</div>
			</div>
		<?php endforeach; ?>
	<?php endif; ?>
</div>