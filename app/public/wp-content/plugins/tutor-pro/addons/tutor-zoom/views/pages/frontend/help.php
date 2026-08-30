<?php
/**
 * Zoom Addon - Help Page.
 *
 * @package TutorPro\Addons
 * @subpackage Zoom\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Accordion;

$themeum_url = 'https://tutorlms.com/docs/tutor-lms-settings-email/';

$items = array(
	array(
		'title'   => __( 'How Do I Connect Zoom With My LMS Website?', 'tutor-pro' ),
		'content' => sprintf(
			/* translators: %s: navigation path in WP admin */
			__(
				'To connect Zoom with your eLearning website powered by Tutor LMS, first create an app on Zoom. Then create a JWT app, copy the API credentials, and paste them into %s.',
				'tutor-pro'
			),
			'<strong>' . esc_html__( 'WP Admin > Tutor LMS Pro > Zoom > Set API', 'tutor-pro' ) . '</strong>'
		),
	),
	array(
		'title'   => __( 'How Do I Create a Live Lesson on Tutor LMS?', 'tutor-pro' ),
		'content' => sprintf(
			/* translators: %s: Zoom Meeting title and Zoom Live Lesson title */
			__(
				'You can create a live lesson from the course editor. Inside the course builder, use the %1$s section to schedule a general meeting, or create a lesson-specific meeting by selecting %2$s inside any topic.',
				'tutor-pro'
			),
			'<strong>' . esc_html__( 'Zoom Meeting', 'tutor-pro' ) . '</strong>',
			'<strong>' . esc_html__( 'Zoom Live Lesson', 'tutor-pro' ) . '</strong>'
		),
	),
	array(
		'title'   => __( 'How Do I Notify Students About Live Lessons?', 'tutor-pro' ),
		'content' => sprintf(
			'%s <a href="%s" target="_blank">%s</a>',
			__( 'You can notify students about live lessons using Email Notifications and Announcements. Docs for Email Notifications can be found ', 'tutor-pro' ),
			esc_url( $themeum_url ),
			__( 'here', 'tutor-pro' )
		),
	),
	array(
		'title'   => __( 'Is Zoom Free to Use?', 'tutor-pro' ),
		'content' => __( 'Zoom follows a freemium model. It is free for small-scale usage, but for medium to large websites, upgrading to a premium plan is recommended.', 'tutor-pro' ),
	),
	array(
		'title'   => __( 'What Equipment Do I Need to Hold a Live Class?', 'tutor-pro' ),
		'content' => __( 'You will need a microphone, a computer running Windows or macOS, and preferably a webcam to conduct an effective live class.', 'tutor-pro' ),
	),
);

/**
 * Allow addons to modify accordion items.
 */
$items = apply_filters( 'tutor_zoom_faq_items', $items );

$accordion = Accordion::make();

foreach ( $items as $item ) {
	$accordion->add_item(
		esc_html( $item['title'] ),
		wp_kses_post( $item['content'] )
	);
}

?>


<div class="tutor-zoom-frontend-help-page">
	<?php
		$accordion->render();
	?>
</div>