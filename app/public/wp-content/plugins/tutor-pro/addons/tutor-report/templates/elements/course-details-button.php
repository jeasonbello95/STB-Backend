<?php
/**
 * Template parts
 *
 * @package TutorPro\Report
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use TUTOR\Icon;
use Tutor\Components\SvgIcon;

$course             = $data;
$course_details_url = tutor_utils()->tutor_dashboard_url() . 'analytics/course-details?course_id=' . $course->ID;
?>

<div class="tutor-analytics-list-buttons">
	<a href="<?php echo esc_url( $course_details_url ); ?>" class="tutor-btn tutor-btn-primary tutor-btn-x-small">
		<span class="tutor-text-primary-inverse">
			<?php esc_html_e( 'Details', 'tutor-pro' ); ?>
		</span>
	</a>
	<a href="<?php echo esc_url( get_permalink( $course->ID ) ); ?>" class="tutor-btn tutor-btn-secondary tutor-btn-x-small tutor-btn-icon" target="_blank" rel="noopener noreferrer">
		<?php SvgIcon::make()->name( Icon::EYE_LINE )->render(); ?>
	</a>
</div>
