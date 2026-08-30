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

$course = $data;
$image  = get_tutor_course_thumbnail_src( 'post-thumbnail', $course->ID );
?>
<div class="tutor-flex tutor-flex-row tutor-items-center tutor-gap-5 tutor-sm-gap-4">
	<div class="tutor-course-image-wrapper">
		<img src="<?php echo esc_url( $image ); ?>" alt="<?php echo esc_attr( $course->post_title ); ?>" loading="lazy" />
	</div>
	<div class="tutor-flex tutor-flex-column tutor-items-start tutor-gap-2">
		<a href="<?php echo esc_url( get_the_permalink( $course->ID ) ); ?>" class="tutor-analytics-courses-list-course-title">
			<?php echo esc_html( $course->post_title ); ?>
		</a>
	</div>
</div>
