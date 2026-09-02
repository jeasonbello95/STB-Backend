<?php
/**
 * Template for course list tooltip on enrollment list page.
 *
 * @package TutorPro\CourseBundle
 * @subpackage Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

?>
<div class="tutor-bundle-course-list-card">
	<?php
	foreach ( $bundle_courses as $course ) :
		$course_title = get_the_title( $course->ID );
		$thumbnail    = get_tutor_course_thumbnail_src( 'medium', $course->ID );

		if ( empty( $thumbnail ) ) {
			$thumbnail = tutor()->url . 'assets/images/placeholder.svg';
		}
		$author_id       = $course->post_author;
		$instructor_name = tutor_utils()->display_name( $author_id );
		$instructor_url  = tutor_utils()->profile_url( $author_id, true );
		?>
	<div class="tutor-course-content-container tutor-d-flex tutor-p-8 tutor-align-start">
		<div class="tutor-course-thumbnail-wrapper">
			<img src="<?php echo esc_url( $thumbnail ); ?>" alt="<?php echo esc_attr( $course_title ); ?>">
		</div>
		<div class="tutor-d-flex tutor-flex-column tutor-ml-3">
			<p class="tutor-fs-7 tutor-m-0 tutor-font-medium"><?php echo esc_html( $course_title ); ?></p>
			<div class="tutor-d-inline-flex tutor-gap-1"><span class="tutor-fs-7 tutor-color-muted"><?php esc_html_e( 'by ', 'tutor-pro' ); ?></span><p class="tutor-fs-7 tutor-m-0"><?php echo esc_html( $instructor_name ); ?></p></div>
		</div>
	</div>
<?php endforeach; ?>
</div>