<?php
/**
 * Tutor learning area gradebook.
 *
 * @package Tutor\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 2.2.0
 */

defined( 'ABSPATH' ) || exit;

use TUTOR\Icon;
use Tutor\Components\SvgIcon;
use Tutor\Components\Constants\Color;
use Tutor\Components\EmptyState;
use Tutor\Helpers\UrlHelper;

global $tutor_course_id;

$user_id = get_current_user_id();

$grades           = tutor_get_generated_gradebook( 'all', $tutor_course_id, $user_id );
$final_grade      = tutor_get_generated_gradebook( 'final', $tutor_course_id, $user_id );
$assignment_grade = tutor_get_assignment_gradebook_by_course( $tutor_course_id, $user_id );
$quiz_grade       = tutor_get_quiz_gradebook_by_course( $tutor_course_id, $user_id );
$final_stats      = ! empty( $final_grade ) ? tutor_gradebook_get_stats( $final_grade ) : null;

$passing_count = 0;
$failing_count = 0;
$total_count   = is_array( $grades ) ? count( $grades ) : 0;

$grade_names = array_fill_keys( array_column( $grades, 'grade_name' ), 0 );

if ( is_array( $grades ) ) {
	foreach ( $grades as $grade ) {
		$grade_name = $grade->grade_name;
		if ( isset( $grade_names[ $grade_name ] ) ) {
			$grade_names[ $grade_name ] += 1;
		}
	}
}

$final_grade_color = isset( $final_grade->grade_config ) ? tutor_utils()->array_get( 'grade_color', maybe_unserialize( $final_grade->grade_config ) ) : '';

?>
<div class="tutor-learning-area-gradebook tutor-p-8 tutor-sm-p-3">
	<div class="tutor-flex tutor-items-center tutor-gap-3 tutor-mb-5">
		<?php SvgIcon::make()->name( Icon::GRADEBOOK )->size( 24 )->render(); ?>
		<h3 class="tutor-h4 tutor-m-none"><?php esc_html_e( 'Gradebook', 'tutor-pro' ); ?></h3>
	</div>

	<?php if ( $total_count ) : ?>
	<!-- Overall Performance Card -->
	<div class="tutor-card tutor-p-6 tutor-mb-8">
		<div class="tutor-flex tutor-flex-wrap tutor-items-center tutor-gap-6">
			<!-- Large Grade Badge -->
			<div class="tutor-grade-badge-large tutor-h1 tutor-text-primary-inverse tutor-card-rounded-lg" style="background-color: <?php echo esc_attr( $final_grade_color ); ?>;">
				<?php echo esc_html( $final_stats['gradename'] ?? '—' ); ?>
			</div>

			<div class="tutor-flex-grow">
				<div class="tutor-small tutor-text-subdued tutor-mb-1"><?php esc_html_e( 'FINAL GRADE', 'tutor-pro' ); ?></div>
				<h4 class="tutor-h5 tutor-font-semibold tutor-m-none"><?php esc_html_e( 'Overall Performance', 'tutor-pro' ); ?></h4>
			</div>

			<div class="tutor-flex tutor-flex-column tutor-items-center tutor-gap-4 tutor-ml-auto">
				<div class="tutor-flex tutor-items-center tutor-gap-2">
					<span class="tutor-small tutor-text-subdued">
						<?php esc_html_e( 'Total : ', 'tutor-pro' ); ?>
						<span class="tutor-font-bold tutor-text-primary"><?php echo esc_html( $total_count ); ?></span> 
					</span>
				</div>
				<?php if ( ! empty( $grade_names ) ) : ?>
					<div class="tutor-flex tutor-flex-wrap tutor-gap-2">
					<?php
						$active_grades      = array_filter(
							$grade_names,
							function ( $count ) {
								return $count > 0;
							}
						);
						$total_active_grade = count( $active_grades );
						$current_index      = 0;
					?>
					<?php foreach ( $active_grades as $grade_name => $grade_count ) : ?>
						<?php ++$current_index; ?>
						<span class="tutor-small tutor-text-subdued">
							<?php
								/* translators: %s: grade name */
								echo esc_html( sprintf( _x( '%s :', '%s', 'tutor-pro' ), $grade_name, 'Tutor Grade' ) );
							?>
							<span class="tutor-font-bold tutor-text-primary"><?php echo esc_html( $grade_count ); ?></span>
							<?php echo $current_index < $total_active_grade ? ',' : ''; ?>
						</span>
					<?php endforeach; ?>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>

	<!-- Grade Items List -->
	<div class="tutor-grade-items-list tutor-card tutor-card-padding-none">
		<?php foreach ( $grades as $index => $grade ) : ?>
			<?php
				$stats            = tutor_gradebook_get_stats( $grade );
				$item_grade_color = isset( $grade->grade_config ) ? tutor_utils()->array_get( 'grade_color', maybe_unserialize( $grade->grade_config ) ) : '';
				$result_for       = strtolower( $grade->result_for );
				$content_id       = 'quiz' === $result_for ? $grade->quiz_id : $grade->assignment_id;
				$item_title       = get_the_title( $content_id );
				$item_icon        = 'quiz' === $result_for ? Icon::QUIZ : Icon::ASSIGNMENT;
				$item_type_label  = 'quiz' === $result_for ? __( 'Quiz', 'tutor-pro' ) : __( 'Assignment', 'tutor-pro' );
			?>
			<div class="tutor-grade-item tutor-p-6 <?php echo $index < $total_count - 1 ? 'tutor-border-b' : ''; ?>">
				<div class="tutor-flex tutor-items-center">
					<div class="tutor-card tutor-grade-item-icon tutor-card-rounded-lg tutor-mr-4">
						<?php SvgIcon::make()->name( $item_icon )->size( 24 )->color( Color::SECONDARY )->render(); ?>
					</div>
					<div class="tutor-flex-grow">
						<h5 class="tutor-p1 tutor-font-medium tutor-m-none"><?php echo esc_html( $item_title ); ?></h5>
						<div class="tutor-small tutor-text-subdued"><?php echo esc_html( $item_type_label ); ?></div>
					</div>
				</div>

				<div class="tutor-grade-badge-small tutor-border tutor-rounded-full" style="color: <?php echo esc_attr( $item_grade_color ); ?>; border-color: <?php echo esc_attr( $item_grade_color ); ?>;">
					<?php echo esc_html( $stats['gradename'] ?? '—' ); ?>
				</div>
			</div>
		<?php endforeach; ?>
	</div>
		<?php
	else :
		EmptyState::make()
			->title( esc_html__( 'No grade items found for this course.', 'tutor-pro' ) )
			->icon( tutor_utils()->get_themed_svg( 'images/illustrations/gradebook-empty.svg' ) )
			->attr( 'class', 'tutor-card tutor-card-rounded-2xl' )
			->render();
	endif;
	?>
</div>
