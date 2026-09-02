<?php
/**
 * H5P Attempt details Fill in the Blanks (read-only).
 *
 * @package TutorPro\Addons
 * @subpackage H5P\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

$response_result      = $response_result ?? array();
$question_description = $question_description ?? '';

$given_answer_count = 0;

$given_answer = preg_replace_callback(
	'/__________/',
	function () use ( $response_result, &$given_answer_count ) {
		$response = $response_result[ $given_answer_count ] ?? null;
		$given_answer_count++;
		return sprintf(
			"<span class='tutor-quiz-question-input' data-option='%s'>%s</span>",
			esc_attr( $response->is_correct ? 'correct' : 'incorrect' ),
			esc_html( $response->description ?? '' )
		);
	},
	$question_description,
	-1,
);

$correct_answer_count = 0;

$correct_response = $response->correct_answer ?? '';

$correct_answer = preg_replace_callback(
	'/__________/',
	function () use ( $response_result, &$correct_answer_count, $correct_response ) {
		$response = $response_result[ $correct_answer_count ] ?? null;
		$correct_answer_count++;
		return sprintf(
			"<span class='tutor-quiz-question-input' data-option='%s'>%s</span>",
			esc_attr( 'correct' ),
			esc_html( $correct_response ? $correct_response : $response->description ?? '' )
		);
	},
	$question_description,
	-1,
);

?>

<div class="tutor-quiz-question-options">
	<div class="tutor-quiz-question-option" data-readonly="true">
		<div class="tutor-quiz-review-col-title"><?php esc_html_e( 'Given Answer', 'tutor-pro' ); ?></div>
		<p><?php echo wp_kses_post( $given_answer ?? '' ); ?></p>
	</div>
	<div class="tutor-quiz-question-option" data-readonly="true">
		<div class="tutor-quiz-review-col-title"><?php esc_html_e( 'Correct Answer', 'tutor-pro' ); ?></div>
		<p><?php echo wp_kses_post( $correct_answer ?? '' ); ?></p>
	</div>
</div>