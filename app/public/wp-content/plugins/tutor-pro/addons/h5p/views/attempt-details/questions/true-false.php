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

use Tutor\Components\SvgIcon;
use TUTOR\Icon;

$response_result = $response_result ?? array();
?>


<div class="tutor-quiz-question-options">
	<?php if ( tutor_utils()->count( $response_result ) ) : ?>
		<?php
		foreach ( $response_result as $key => $response ) :
			$option_attr = '';
			if ( isset( $response->is_correct ) && $response->is_correct ) {
				$option_attr = 'correct';
			} elseif ( isset( $response->is_correct ) && ! $response->is_correct ) {
				$option_attr = 'incorrect';
			}
			?>
			<div class="tutor-quiz-question-option" data-option="<?php echo esc_attr( $option_attr ); ?>" data-readonly="true">
				<?php SvgIcon::make()->name( ! empty( $response->is_correct ) ? Icon::CHECK_2 : Icon::CROSS )->size( 20 )->render(); ?>
				<?php echo esc_html( $response->description ?? '' ); ?>
			</div>
		<?php endforeach; ?>
	<?php endif; ?>
</div>