<?php
/**
 * Google lesson card for live classes page.
 *
 * @package TutorPro\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 *
 * @var array $data passed from meetings.php
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\Constants\Positions;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use Tutor\Components\Popover;
use Tutor\Components\PreviewTrigger;
use Tutor\Components\SvgIcon;
use Tutor\Helpers\DateTimeHelper;
use TUTOR\Icon;
use TutorPro\GoogleMeet\Models\EventsModel;
use TutorPro\GoogleMeet\Utilities\Utilities;

// Optional props with defaults.
$show_live_tag     = $data['show_live_tag'] ?? true;
$event_tag_text    = $data['event_tag_text'] ?? __( 'Live Session', 'tutor-pro' );
$event_tag_icon    = $data['event_tag_icon'] ?? Icon::GOOGLE_MEET_COLORIZE;
$event_tag_variant = $data['event_tag_variant'] ?? '';
$action_url        = $data['action_url'] ?? '';
$action_text       = $data['action_text'] ?? __( 'Open', 'tutor-pro' );

$badge_classes = array( 'tutor-event-badge' );

if ( ! empty( $event_tag_variant ) ) {
	$badge_classes[] = 'tutor-event-badge-' . $event_tag_variant;
}

$badge_classes   = array_filter( array_map( 'sanitize_html_class', $badge_classes ) );
$event           = get_post( $data['post_id'] );
$details         = json_decode( get_post_meta( $event->ID, EventsModel::POST_META_KEYS[2], true ) );
$start_date_time = DateTimeHelper::create( $details->start_datetime, $details->timezone );
$end_date_time   = DateTimeHelper::create( $details->end_datetime, $details->timezone );
$attendees       = $details->attendees;
$meeting_details = array(
	'post-id'                           => $data['post_id'],
	'event_id'                          => $data['event_id'],
	'attendees'                         => $attendees,
	'object_id'                         => $data['object_id'],
	'meeting_title'                     => $event->post_title ?? '',
	'meeting_summary'                   => $event->post_content ?? '',
	'meeting_timezone'                  => $details->timezone ?? '',
	'meeting_start_date'                => $start_date_time->format( 'Y-m-d' ) ?? '',
	'meeting_end_date'                  => $end_date_time->format( 'Y-m-d' ) ?? '',
	'meeting_start_time'                => $start_date_time->format( 'h:i A' ) ?? '',
	'meeting_end_time'                  => $end_date_time->format( 'h:i A' ) ?? '',
	'meeting_attendees_enroll_students' => 'No' === $attendees ? false : true,
);

?>
<div class="tutor-upcoming-lesson-card">
	<div class="tutor-upcoming-lesson-card-header">
		<div class="tutor-upcoming-lesson-card-meta">
			<span class="tutor-upcoming-lesson-card-icon">
				<?php SvgIcon::make()->name( Icon::CALENDAR_2 )->render(); ?>
			</span>
			<span class="tutor-upcoming-lesson-card-date"><?php echo esc_html( $data['date_text'] ); ?></span>
			<?php if ( ! empty( $data['time_text'] ) ) : ?>
				<span class="tutor-upcoming-lesson-card-separator">•</span>
				<span class="tutor-upcoming-lesson-card-time"><?php echo esc_html( $data['time_text'] ); ?></span>
			<?php endif; ?>
		</div>
		<?php if ( $show_live_tag ) : ?>
			<div class="tutor-upcoming-lesson-card-live-tag">
				<div class="tutor-upcoming-lesson-card-live-tag-badge">
					<div class="<?php echo esc_attr( implode( ' ', $badge_classes ) ); ?>">
						<?php if ( ! empty( $event_tag_icon ) ) : ?>
							<span class="tutor-event-badge-icon">
								<?php SvgIcon::make()->name( $event_tag_icon )->render(); ?>
							</span>
						<?php endif; ?>
						<span class="tutor-event-badge-text"><?php echo esc_html( $event_tag_text ); ?></span>
					</div>
				</div>
			</div>
		<?php endif; ?>
	</div>
	<?php if ( ! empty( $data['lesson_title'] ) ) : ?>
		<?php if ( 'expired' === $data['current_tab'] ) : ?>
		<a target="_blank" href="<?php echo esc_url( $action_url ); ?>" class="tutor-upcoming-lesson-card-title"><?php echo esc_html( $data['lesson_title'] ); ?></a>
		<?php else : ?>
		<div class="tutor-small tutor-font-medium"><?php echo esc_html( $data['lesson_title'] ); ?></div>
		<?php endif; ?>
	<?php endif; ?>
	<?php if ( $data['course_id'] ) : ?>
	<div class="tutor-upcoming-lesson-card-course">
		<span class="tutor-upcoming-lesson-card-course-label">
			<?php echo esc_html__( 'Course:', 'tutor-pro' ); ?>
		</span>
		<?php PreviewTrigger::make()->id( $data['course_id'] )->render(); ?>
	</div>
	<?php endif; ?>
	<div class="tutor-upcoming-lesson-card-action">
		<?php
		if ( 'expired' !== $event_tag_variant ) {
			Button::make()
				->tag( 'a' )
				->label( $data['action_text'] )
				->attr( 'href', $data['action_url'] )
				->icon( Icon::VIDEO_FILL )
				->size( Size::X_SMALL )
				->attr( 'class', 'tutor-flex-1' )
				->variant( Variant::PRIMARY )
				->render();
		} else {
			Button::make()
				->tag( 'button' )
				->label( __( 'Expired', 'tutor-pro' ) )
				->icon( Icon::VIDEO_FILL )
				->size( Size::X_SMALL )
				->attr( 'class', 'tutor-flex-1' )
				->variant( Variant::SECONDARY )
				->disabled()
				->render();
		}

		Popover::make()
			->body(
				$data['info_card'] ?? '',
				Utilities::allowed_info_popover_tags()
			)
			->placement( Positions::BOTTOM_END )
			->trigger(
				Button::make()
				->label( __( 'Info', 'tutor-pro' ) )
				->icon( Icon::CHEVRON_DOWN, 'right' )
				->variant( Variant::OUTLINE )
				->size( Size::X_SMALL )
				->attr( 'x-ref', 'trigger' )
				->attr( '@click', 'toggle()' )
				->get()
			)
			->render();

		Popover::make()
			->placement( Positions::BOTTOM_END )
			->trigger(
				Button::make()
					->label( __( 'More options', 'tutor-pro' ) )
					->variant( Variant::GHOST )
					->size( Size::X_SMALL )
					->icon( Icon::ELLIPSES )
					->icon_only()
					->attr( 'x-ref', 'trigger' )
					->attr( '@click', 'toggle()' )
					->get()
			)
			->menu_item(
				array(
					'tag'     => 'button',
					'content' => 'Edit',
					'icon'    => SvgIcon::make()->name( Icon::EDIT_2 )->size( 20 )->get(),
					'attr'    => array(
						'@click' =>
						sprintf(
							'TutorCore.modal.showModal("%s", { postId: "%s" }); TutorCore.form.reset("%s", %s)',
							$data['edit_modal_id'],
							$data['post_id'],
							'tutor-google-meet-meeting-edit-form',
							wp_json_encode( $meeting_details ),
						),
					),
				)
			)
			->menu_item(
				array(
					'tag'     => 'button',
					'content' => 'Delete',
					'icon'    => SvgIcon::make()->name( Icon::DELETE_2 )->size( 20 )->get(),
					'attr'    => array(
						'@click' =>
						sprintf(
							'TutorCore.modal.showModal("%s", { eventId: "%s", postId: "%s" })',
							$data['delete_modal_id'],
							$data['event_id'],
							$data['post_id']
						),
					),
				)
			)
			->menu_min_width( '120px' )
			->render();
		?>
	</div>
</div>
