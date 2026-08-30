<?php
/**
 * H5P Attempt details (read-only).
 *
 * @package TutorPro\Addons
 * @subpackage H5P\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

$is_correct = $is_correct ?? false;
$statement  = $statement ?? new stdClass();

?>
<div class="tutor-quiz-question-options">
	<div class="tutor-quiz-question-option" data-option="<?php echo esc_attr( $is_correct ? 'correct' : 'incorrect' ); ?>" data-readonly="true">
		<?php echo esc_html( $statement->result_raw_score . '/' . $statement->result_max_score ); ?>
	</div>
</div>