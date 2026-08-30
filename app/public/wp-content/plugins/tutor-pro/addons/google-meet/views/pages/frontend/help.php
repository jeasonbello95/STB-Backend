<?php
/**
 * Google meet Frontend FAQ page
 *
 * @since 4.0.0
 *
 * @package TutorPro\GoogleMeet\Views
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Accordion;

$dashboard_url     = 'https://console.cloud.google.com/apis/dashboard';
$documentation_url = 'https://tutorlms.com/docs/google-meet-integration-tutor-addon/';

$items = array(
	array(
		'title'   => esc_html__( 'How do I connect Google Meet with my LMS Website?', 'tutor-pro' ),
		'content' => sprintf(
			/* translators: 1: Google Cloud Console link, 2: Documentation link */
			_x(
				'To integrate Google Meet, you must generate %1$s via the Google Developer Console. During this setup, copy the URL from the \'Set API\' tab and paste it into Google as your Authorized Redirect URI. For %2$s, please refer to our official documentation.',
				'google meet instruction',
				'tutor-pro'
			),
			sprintf(
				'<a class="tutor-text-brand" href="%1$s" target="_blank">%2$s</a>',
				esc_url( $dashboard_url ),
				esc_html_x( 'OAuth Access Credentials', 'google meet instruction', 'tutor-pro' )
			),
			sprintf(
				'<a class="tutor-text-brand" href="%1$s" target="_blank">%2$s</a>',
				esc_url( $documentation_url ),
				esc_html_x( 'step-by-step instructions', 'google meet instruction', 'tutor-pro' )
			),
		),
	),
	array(
		'title'   => esc_html__( 'How do I create a Live Lesson on Tutor LMS?', 'tutor-pro' ),
		'content' => _x( 'You can schedule a live lesson directly from the Course Builder. Scroll to the new Google Meet section to create a course-wide meeting, or navigate to a specific topic and select the \'Google Meet Live Lesson\' option to attach a meeting directly to that curriculum item.', 'google meet live lesson FAQ', 'tutor-pro' ),
	),
	array(
		'title'   => __( 'How do I notify students about live lessons?', 'tutor-pro' ),
		'content' => __( 'You can notify students about live lessons using Email Notifications of Tutor LMS and from the Google Meet settings on Tutor LMS frontend and backend.', 'tutor-pro' ),
	),
	array(
		'title'   => __( 'Do I need a Google account to integrate Google Meet with Tutor LMS?', 'tutor-pro' ),
		'content' => __( 'Yes, an active Google Account is required to configure the API credentials and to act as the primary host for the scheduled live meetings.', 'tutor-pro' ),
	),
	array(
		'title'   => __( 'What Equipment Do I Need To Hold a Live Class?', 'tutor-pro' ),
		'content' => __( 'You will need a Microphone, a PC running Windows or Mac OS, and preferably a Webcam to effectively hold a live class.', 'tutor-pro' ),
	),

);

$accordion = Accordion::make();

foreach ( $items as $item ) {
	$accordion->add_item(
		esc_html( $item['title'] ),
		wp_kses_post( $item['content'] )
	);
}
?>


<div class="tutor-p-6">
	<?php
		$accordion->render();
	?>
</div>