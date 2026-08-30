<?php
/**
 * Shared quiz answer explanation.
 *
 * @package TutorPro\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

global $wp_embed;
use TUTOR\Icon;
use TUTOR\Input;
use Tutor\Components\SvgIcon;

$answer_explanation = $answer_explanation ?? '';
$question_id        = $question_id ?? 0;
$panel_id           = 'tutor-quiz-explanation-panel-' . (int) $question_id;
$trigger_id         = 'tutor-quiz-explanation-trigger-' . (int) $question_id;

?>

<div
	class="tutor-quiz-explanation"
	data-attempt-details
	x-data="{ open: false }"
	x-init="$el.closest('.tutor-quiz-questions')?.removeAttribute('inert')"
	x-bind:class="{ 'is-open': open }"
	x-cloak
>
	<button
		id="<?php echo esc_attr( $trigger_id ); ?>"
		type="button"
		class="tutor-quiz-explanation-trigger"
		x-on:click="open = !open"
		x-bind:aria-expanded="open ? 'true' : 'false'"
		aria-controls="<?php echo esc_attr( $panel_id ); ?>"
	>
		<span>
			<?php SvgIcon::make()->name( Icon::BULB_2 )->size( 24 )->render(); ?>
		</span>
		<span class="tutor-quiz-explanation-title">
			<?php esc_html_e( 'Answer Explanation', 'tutor-pro' ); ?>
		</span>
		<span class="tutor-quiz-explanation-chevron" aria-hidden="true">
			<?php SvgIcon::make()->name( Icon::CHEVRON_DOWN )->size( 20 )->render(); ?>
		</span>
	</button>
	<div
		id="<?php echo esc_attr( $panel_id ); ?>"
		class="tutor-quiz-explanation-panel"
		role="region"
		aria-labelledby="<?php echo esc_attr( $trigger_id ); ?>"
		x-show="open"
		x-collapse.duration.300ms
	>
		<div class="tutor-quiz-explanation-body">
			<?php
			add_filter( 'wp_kses_allowed_html', Input::class . '::allow_iframe', 10, 2 );
			echo wp_kses_post( $wp_embed->autoembed( wpautop( (string) $answer_explanation ) ) );
			remove_filter( 'wp_kses_allowed_html', Input::class . '::allow_iframe', 10 );
			?>
		</div>
	</div>
</div>
