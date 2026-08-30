<?php
/**
 * Overview template
 *
 * @package TutorPro\Report
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 1.9.9
 */

defined( 'ABSPATH' ) || exit;

use TUTOR\Icon;
use TUTOR\Input;
use Tutor\Components\Table;
use TUTOR_REPORT\Analytics;
use Tutor\Models\CourseModel;
use Tutor\Components\StarRating;
use Tutor\Components\Nav;
use Tutor\Components\Constants\Size;
use Tutor\Components\DateFilter;

// global variables.
$user        = wp_get_current_user();
$time_period = Input::get( 'period', 'today' );

$start_date = Input::get( 'start_date', '' );
$end_date   = Input::get( 'end_date', '' );

$start_date  = $start_date ? tutor_get_formated_date( 'Y-m-d', $start_date ) : '';
$end_date    = $end_date ? tutor_get_formated_date( 'Y-m-d', $end_date ) : '';
$time_period = $start_date && $end_date ? '' : $time_period;
?>
<div class="tutor-analytics-overview tutor-mt-5">

	<?php
	/**
	 * Overview card info
	 *
	 * @since 1.9.9
	 */
	$card_template = TUTOR_REPORT()->path . 'templates/elements/box-card.php';
	$user          = wp_get_current_user();
	$data          = array(
		array(
			'icon'      => Icon::COURSES,
			'title'     => esc_html__( 'Courses', 'tutor-pro' ),
			'sub_title' => esc_html__( 'Total Course', 'tutor-pro' ),
			'value'     => CourseModel::get_courses_by_instructor( $user->ID, array( 'publish', 'private' ), 0, PHP_INT_MAX, true ),
		),
		array(
			'icon'      => Icon::PASSED,
			'title'     => esc_html__( 'Students', 'tutor-pro' ),
			'sub_title' => esc_html__( 'Total Student', 'tutor-pro' ),
			'value'     => tutor_utils()->get_total_students_by_instructor( $user->ID ),
		),
		array(
			'icon'      => Icon::STAR_LINE,
			'title'     => esc_html__( 'Reviews', 'tutor-pro' ),
			'sub_title' => esc_html__( 'Total Reviews', 'tutor-pro' ),
			'value'     => tutor_utils()->get_reviews_by_instructor( $user->ID, 0, PHP_INT_MAX, '', '', array( 'comment_approved' => 'approved' ) )->count,
		),
	);

	tutor_load_template_from_custom_path( $card_template, $data );
	?>
	<!--filter buttons tabs-->

	<div class="tutor-surface-l1 tutor-mt-7 tutor-border tutor-rounded-2xl">
		<div class="tutor-small tutor-border-b tutor-py-5 tutor-pl-6">
			<?php esc_html_e( 'Earnings Graph', 'tutor-pro' ); ?>
		</div>
		<div class="tutor-flex tutor-items-center tutor-justify-between tutor-p-6 tutor-border-b">
			<?php
			$nav_items = array(
				array(
					'label'  => __( 'Today', 'tutor-pro' ),
					'url'    => tutor_utils()->tutor_dashboard_url() . 'analytics?period=today',
					'active' => 'today' === $time_period,
				),
				array(
					'label'  => __( 'Monthly', 'tutor-pro' ),
					'url'    => tutor_utils()->tutor_dashboard_url() . 'analytics?period=monthly',
					'active' => 'monthly' === $time_period,
				),
				array(
					'label'  => __( 'Yearly', 'tutor-pro' ),
					'url'    => tutor_utils()->tutor_dashboard_url() . 'analytics?period=yearly',
					'active' => 'yearly' === $time_period,
				),
			);

			Nav::make()->items( $nav_items )->size( Size::SMALL )->render();

			DateFilter::make()
				->type( DateFilter::TYPE_RANGE )
				->hide_initial_label()
				->placement( DateFilter::PLACEMENT_BOTTOM_END )
				->clear_params( array( 'period' ) )
				->render();
			?>
		</div>

		<?php
		/**
		 * Get analytics data
		 *
		 * @since 1.9.9
		 */
		$earnings    = Analytics::get_earnings_by_user( $user->ID, $time_period, $start_date, $end_date );
		$enrollments = Analytics::get_total_students_by_user( $user->ID, $time_period, $start_date, $end_date );
		$discounts   = Analytics::get_discounts_by_user( $user->ID, $time_period, $start_date, $end_date );
		$refunds     = Analytics::get_refunds_by_user( $user->ID, $time_period, $start_date, $end_date );

		$graph_tabs = array(
			array(
				'tab_title'  => __( 'Total Earning', 'tutor-pro' ),
				'tab_value'  => empty( $earnings['total_earnings'] ) ? '-' : wp_kses( tutor_utils()->tutor_price( $earnings['total_earnings'] ), tutor_price_allowed_html() ),
				'data_attr'  => 'ta_total_earnings',
				'graph_data' => Analytics::prepare_chart_data( $earnings['earnings'] ),
			),
			array(
				'tab_title'  => __( 'Course Enrolled', 'tutor-pro' ),
				'tab_value'  => $enrollments['total_enrollments'] ?? 0,
				'data_attr'  => 'ta_total_course_enrolled',
				'graph_data' => Analytics::prepare_chart_data( $enrollments['enrollments'], false ),
			),
			array(
				'tab_title'  => __( 'Total Refund', 'tutor-pro' ),
				'tab_value'  => empty( $refunds['total_refunds'] ) ? '-' : wp_kses( tutor_utils()->tutor_price( $refunds['total_refunds'] ), tutor_price_allowed_html() ),
				'data_attr'  => 'ta_total_refund',
				'graph_data' => Analytics::prepare_chart_data( $refunds['refunds'] ),
			),
			array(
				'tab_title'  => __( 'Total Discount', 'tutor-pro' ),
				'tab_value'  => empty( $discounts['total_discounts'] ) ? '-' : wp_kses( tutor_utils()->tutor_price( $discounts['total_discounts'] ), tutor_price_allowed_html() ),
				'data_attr'  => 'ta_total_discount',
				'graph_data' => Analytics::prepare_chart_data( $discounts['discounts'] ),
			),
		);

		$graph_template = TUTOR_REPORT()->path . 'templates/elements/graph.php';
		tutor_load_template_from_custom_path( $graph_template, $graph_tabs );
		?>
	</div>

	<?php
	$popular_courses = tutor_utils()->most_popular_courses( 7, get_current_user_id() );
	$reviews         = tutor_utils()->get_reviews_by_instructor( $user->ID, $offset = 0, 7 );
	?>

	<?php if ( count( $popular_courses ) ) : ?>
	<div class="tutor-analytics-popular-courses tutor-mt-7">
		<div class="tutor-small tutor-mb-5">
			<?php esc_html_e( 'Most Popular Courses', 'tutor-pro' ); ?>
		</div>

		<?php
		$headings = array_map(
			fn( $content ) => array(
				'content' => $content,
				'class'   => 'tutor-surface-l1-hover',
			),
			array(
				esc_html__( 'Course Name', 'tutor-pro' ),
				esc_html__( 'Total Enrolled', 'tutor-pro' ),
				esc_html__( 'Rating', 'tutor-pro' ),
			)
		);

		$total_enrolled_label = sprintf(
			'<span class="tutor-analytics-popular-courses-mobile-label">%s</span>',
			esc_html__( 'Total Enrolled:', 'tutor-pro' )
		);
		$rating_label         = sprintf(
			'<span class="tutor-analytics-popular-courses-mobile-label">%s</span>',
			esc_html__( 'Rating:', 'tutor-pro' )
		);

		foreach ( $popular_courses as $course ) {
			$rating     = tutor_utils()->get_course_rating( $course->ID );
			$avg_rating = ! is_null( $rating ) ? $rating->rating_avg : 0;

			ob_start();
			StarRating::make()->rating( $avg_rating )->render();
			$rating_html = ob_get_clean();

			$course_summary = TUTOR_REPORT()->path . 'templates/elements/course-thumb-title.php';

			$contents[] = array(
				'columns' => array(
					array( 'content' => get_template_buffer( $course_summary, $course, false ) ),
					array( 'content' => $total_enrolled_label . esc_html( $course->total_enrolled ) ),
					array( 'content' => $rating_label . $rating_html ),
				),
			);
		}
		?>
		<div class="tutor-table-wrapper tutor-rounded-2xl tutor-border">
			<?php Table::make()->headings( $headings )->contents( $contents )->render(); ?>
		</div>
	</div>
	<?php endif; ?>
</div>
