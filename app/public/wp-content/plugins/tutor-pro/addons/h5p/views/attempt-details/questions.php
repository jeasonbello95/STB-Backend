<?php
/**
 * H5P Questions Template (read-only).
 *
 * @package TutorPro\Addons
 * @subpackage H5P\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

use Tutor\Components\Badge;
use Tutor\Components\SvgIcon;
use TUTOR\Icon;

defined( 'ABSPATH' ) || exit;

$question             = $data['question'] ?? null;
$question_title       = $question->question_title ?? '';
$index                = isset( $data['index'] ) ? $data['index'] + 1 : 0;
$response_result      = $data['response_results'] ?? null;
$statement            = $data['statement'] ?? null;
$question_description = $statement->activity_description ?? '';
$is_correct           = (int) $question->is_correct ?? 0;
$is_instructor_review = $data['is_instructor_review'] ?? false;
$review_field_name    = $data['review_field_name'] ?? '';
$attempt_id           = $attempt_answer->quiz_attempt_id ?? 0;
$template_path        = $data['template_path'] ?? '';
$question_type        = $data['question_type'] ?? '';
$badge                = array();

if ( $is_correct ) {
	$badge = array(
		'label'   => __( 'Correct', 'tutor-pro' ),
		'variant' => Badge::SUCCESS,
	);
}

if ( ! $is_correct ) {
	$badge = array(
		'label'   => __( 'Incorrect', 'tutor-pro' ),
		'variant' => Badge::ERROR,
	);
}


?>

<div class="tutor-quiz-question" data-question="<?php echo esc_attr( $question_type ); ?>">
	<div class="tutor-quiz-question-header">
		<div class="tutor-quiz-question-number">
			<?php echo esc_html( $index ); ?>
		</div>
		<div class="tutor-quiz-question-title">
			<?php echo esc_html( wp_unslash( $question_title ) ); ?>
			<?php
			if ( ! empty( $question_description ) && 'fill_in_the_blank' !== $question_type ) {
				$description = apply_filters( 'tutor_filter_quiz_question_description', wp_unslash( $question_description ) );
				if ( $description ) {
					$markup = "<div class='tutor-p2 tutor-text-secondary'>{$description}</div>";
					echo wp_kses_post( $markup );
				}
			}
			?>
		</div>
		<div class="tutor-quiz-question-header-actions">
			<?php if ( tutor_utils()->count( $badge ) ) : ?>
				<div class="tutor-quiz-question-header-status">
					<?php
						$badge_label   = (string) ( $badge['label'] ?? '' );
						$badge_variant = (string) ( $badge['variant'] ?? '' );

						Badge::make()
							->label( $badge_label )
							->variant( $badge_variant )
							->rounded()
							->render();
					?>
				</div>
			<?php endif; ?>
			<?php if ( $is_instructor_review && $attempt_id && $review_field_name ) : ?>
				<div class="tutor-quiz-question-header-divider" aria-hidden="true"></div>

				<div class="tutor-quiz-question-review-actions">
					<input
						type="hidden"
						name="<?php echo esc_attr( $review_field_name ); ?>"
						value="<?php echo esc_attr( $is_correct ); ?>"
						x-bind="register('<?php echo esc_attr( $review_field_name ); ?>')"
					/>

					<label
						class="tutor-quiz-question-review-action"
						data-review-status="correct"
						title="<?php esc_attr_e( 'Mark as correct', 'tutor-pro' ); ?>"
						@click="setValue('<?php echo esc_attr( $review_field_name ); ?>', 'correct', { shouldDirty: true })"
					>
						<input
							class="tutor-quiz-question-review-input"
							type="radio"
							name="<?php echo esc_attr( $review_field_name ); ?>"
							value="correct"
							:checked="watch('<?php echo esc_attr( $review_field_name ); ?>') === 'correct'"
							tabindex="-1"
							aria-hidden="true"
						/>
						<?php SvgIcon::make()->name( Icon::CHECK_2 )->size( 20 )->render(); ?>
					</label>

					<label
						class="tutor-quiz-question-review-action"
						data-review-status="incorrect"
						title="<?php esc_attr_e( 'Mark as incorrect', 'tutor-pro' ); ?>"
						@click="setValue('<?php echo esc_attr( $review_field_name ); ?>', 'incorrect', { shouldDirty: true })"
					>
						<input
							class="tutor-quiz-question-review-input"
							type="radio"
							name="<?php echo esc_attr( $review_field_name ); ?>"
							value="incorrect"
							:checked="watch('<?php echo esc_attr( $review_field_name ); ?>') === 'incorrect'"
							tabindex="-1"
							aria-hidden="true"
						/>
						<?php SvgIcon::make()->name( Icon::CROSS )->size( 20 )->render(); ?>
					</label>
				</div>
			<?php endif; ?>
		</div>
	</div>
	<?php
	if ( file_exists( $template_path ) ) {
		include $template_path;
	} else {
		include __DIR__ . '/questions/default.php';
	}
	?>
</div>