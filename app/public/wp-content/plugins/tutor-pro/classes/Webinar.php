<?php
/**
 * Webinar class for tutor-pro
 *
 * @package TutorPro
 *
 * @since 4.0.0
 */

namespace TUTOR_PRO;

defined( 'ABSPATH' ) || exit;

use Tutor\Helpers\DateTimeHelper;
use Tutor\Helpers\UrlHelper;
use TUTOR\Icon;
use TUTOR_ZOOM\Zoom;
use TutorPro\GoogleMeet\Models\EventsModel;
use WP_Query;

/**
 * Webinar class.
 *
 * @since 4.0.0
 */
class Webinar {

	/**
	 * Subpage slug.
	 *
	 * @since 4.0.0
	 *
	 * @var string
	 */
	const SUBPAGE_SLUG = 'live-classes';

	/**
	 * Whether zoom addon is enabled.
	 *
	 * @since 4.0.0z
	 *
	 * @var bool
	 */
	private $zoom_enabled;

	/**
	 * Whether meet addon is enabled.
	 *
	 * @since 4.0.0
	 *
	 * @var bool
	 */
	private $meet_enabled;

	/**
	 * Webinars list.
	 *
	 * @since 4.0.0
	 *
	 * @var array
	 */
	private $webinars;

	/**
	 * Tutor Zoom Object.
	 *
	 * @since 4.0.0
	 *
	 * @var \TUTOR_ZOOM\Zoom
	 */
	private $tutor_zoom;

	/**
	 * Webinar class constructor.
	 *
	 * @since 4.0.0
	 *
	 * @param bool $register_hook whether to call hooks or not.
	 *
	 * @return void
	 */
	public function __construct( $register_hook = true ) {
		$this->zoom_enabled = tutor_utils()->is_addon_enabled( 'tutor-zoom' );
		$this->meet_enabled = tutor_utils()->is_addon_enabled( 'google-meet' );
		$this->tutor_zoom   = class_exists( '\TUTOR_ZOOM\Zoom' ) && $this->zoom_enabled ? new Zoom( false ) : null;

		$this->webinars = array();

		if ( ! $register_hook ) {
			return;
		}

		add_filter( 'tutor_learning_area_sub_page_nav_item', array( $this, 'add_subpage_nav_item' ), 10, 2 );
		add_filter( 'tutor_learning_area_active_subpage', array( $this, 'set_active_subpage' ) );
	}

	/**
	 * Add Nav Item to tutor subpage.
	 *
	 * @since 4.0.0
	 *
	 * @param array  $nav_items the array of nav items.
	 * @param string $base_url the base url.
	 *
	 * @return array
	 */
	public function add_subpage_nav_item( $nav_items, $base_url ): array {

		$nav_items[ self::SUBPAGE_SLUG ] = array(
			'title'    => __( 'Live Classes', 'tutor-pro' ),
			'icon'     => Icon::VIDEO_CAMERA_2,
			'url'      => UrlHelper::add_query_params( $base_url, array( 'subpage' => self::SUBPAGE_SLUG ) ),
			'template' => tutor_pro()->path . 'templates/learning-area/subpages/webinar.php',
		);

		return $nav_items;
	}

	/**
	 * Set active subpage for live classes.
	 *
	 * @since 4.0.0
	 *
	 * @param string $active_menu active menu string.
	 * @return string
	 */
	public function set_active_subpage( $active_menu ) {
		if ( empty( $active_menu ) ) {
			$uri   = isset( $_SERVER['REQUEST_URI'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REQUEST_URI'] ) ) : '';
			$slugs = array( '/sample-course/zoom-lessons/', '/sample-course/meet-lessons/' );

			foreach ( $slugs as $slug ) {
				if ( strpos( $uri, $slug ) !== false ) {
					$active_menu = self::SUBPAGE_SLUG;
					break;
				}
			}
		}

		return $active_menu;
	}

	/**
	 * Whether any of the addon is enabled.
	 *
	 * @since 4.0.0
	 *
	 * @return boolean
	 */
	public function is_addon_enabled(): bool {
		return $this->zoom_enabled || $this->meet_enabled;
	}

	/**
	 * Get zoom meetings of current course.
	 *
	 * @since 4.0.0
	 *
	 * @param integer $user_id the user id.
	 * @param integer $course_id the course id.
	 * @param string  $search the search string.
	 *
	 * @return array
	 */
	private function get_zoom_meetings( int $user_id, int $course_id, string $search ): array {

		$zoom_meetings = array();

		if ( $this->tutor_zoom ) {
			$zoom_meetings = $this->tutor_zoom->get_meetings(
				null,
				null,
				null,
				array(
					'search'      => $search,
					'post_parent' => $course_id,
				),
			);
		}

		return $zoom_meetings;
	}

	/**
	 * Check if webinar is of current month.
	 *
	 * @since 4.0.0
	 *
	 * @param string $start_date the start date to compare with.
	 * @param string $date the date to compare with.
	 *
	 * @return bool
	 */
	private function check_month( $start_date, $date = 'now' ): bool {

		$now   = DateTimeHelper::create( $date )->format( 'F' );
		$start = DateTimeHelper::create( $start_date )->format( 'F' );

		if ( $now !== $start ) {
			return false;
		}

		return true;
	}

	/**
	 * Get the meeting start date.
	 *
	 * @since 4.0.0
	 *
	 * @param string $meeting_start_date the start date time in string.
	 *
	 * @return string
	 */
	public static function get_start_date( $meeting_start_date ): string {

		// Remove the time from the dates.
		$start_date = DateTimeHelper::create( $meeting_start_date )->format( 'Y-m-d' );
		$today_date = DateTimeHelper::create( 'now' )->format( 'Y-m-d' );

		$start_date = DateTimeHelper::create( $start_date )->get();
		$today_date = DateTimeHelper::create( $today_date )->get();

		$interval = date_diff( $start_date, $today_date, true );

		$start_date = '';

		if ( $interval->days ) {
			$start_date = tutor_i18n_get_formated_date( $meeting_start_date, 'j M, Y' );
		} else {
			$start_date = __( 'Today', 'tutor-pro' );
		}

		return $start_date;
	}

	/**
	 * Zoom meetings for webinars.
	 *
	 * @since 4.0.0
	 *
	 * @param integer $user_id the user id.
	 * @param integer $course_id the course id.
	 * @param array   $args filtering arguments list.
	 *
	 * @return void
	 */
	public function webinar_zoom_meetings( int $user_id = 0, int $course_id = 0, array $args = array() ) {
		$search        = $args['search'] ?? '';
		$date          = $args['date'] ?? 'now';
		$zoom_meetings = $this->get_zoom_meetings( $user_id, $course_id, $search );
		$tutor_course  = get_post( $course_id ) ?? null;

		if ( tutor_utils()->count( $zoom_meetings ) ) {
			foreach ( $zoom_meetings as $zoom_meeting ) {

				$start_date = self::get_start_date( $zoom_meeting->meeting_starts_at );

				if ( ! $this->check_month( $zoom_meeting->meeting_starts_at, $date ) ) {
					continue;
				}

				$meeting_details = get_post_meta( $zoom_meeting->ID, '_tutor_zm_data', true );
				$meeting_details = json_decode( $meeting_details );

				$this->webinars[] = array(
					'group_heading'     => $start_date,
					'start_date'        => $zoom_meeting->meeting_starts_at,
					'date_text'         => $start_date,
					'time_text'         => tutor_i18n_get_formated_date( $zoom_meeting->meeting_starts_at, 'g:i A' ),
					'lesson_title'      => $zoom_meeting->post_title ?? '',
					'course_name'       => $tutor_course->post_title ?? '',
					'show_live_tag'     => true,
					'event_tag_text'    => $zoom_meeting->is_expired ? __( 'Expired', 'tutor-pro' ) : __( 'Live Session', 'tutor-pro' ),
					'event_tag_icon'    => $zoom_meeting->is_expired ? '' : Icon::ZOOM_COLORIZE,
					'event_tag_variant' => $zoom_meeting->is_expired ? 'expired' : '',
					'action_text'       => $zoom_meeting->is_expired ? __( 'Details', 'tutor-pro' ) : __( 'Join', 'tutor-pro' ),
					'action_url'        => $zoom_meeting->is_expired ? get_post_permalink( $zoom_meeting->ID ) : $meeting_details->join_url ?? '',
				);
			}
		}
	}

	/**
	 * Google meetings for webinars.
	 *
	 * @since 4.0.0
	 *
	 * @param integer $course_id the course id.
	 * @param array   $topics the topics of course.
	 * @param array   $args filtering arguments list.
	 *
	 * @return void
	 */
	public function webinar_google_meetings( int $course_id = 0, array $topics = array(), array $args = array() ) {

		$search = $args['search'] ?? '';
		$date   = $args['date'] ?? 'now';
		$query  = new WP_Query(
			array(
				'post_type'       => EventsModel::POST_TYPE,
				'post_status'     => 'publish',
				'post_parent__in' => array( $course_id ),
				's'               => $search,
			)
		);

		$google_meetings = $query->get_posts();
		$tutor_course    = get_post( $course_id ) ?? null;

		if ( tutor_utils()->count( $google_meetings ) ) {
			foreach ( $google_meetings as $meeting ) {
				$meeting_start = get_post_meta( $meeting->ID, EventsModel::POST_META_KEYS[0], true );
				$meeting_end   = get_post_meta( $meeting->ID, EventsModel::POST_META_KEYS[1], true );
				$meeting_link  = get_post_meta( $meeting->ID, EventsModel::POST_META_KEYS[3], true );

				$now        = DateTimeHelper::now()->to_date_time_string();
				$is_expired = strtotime( $meeting_end ) < strtotime( $now );
				$start_date = self::get_start_date( $meeting_start );

				if ( ! $this->check_month( $meeting_start, $date ) ) {
					continue;
				}

				$this->webinars[] = array(
					'group_heading'     => $start_date,
					'start_date'        => $meeting_start,
					'date_text'         => $start_date,
					'time_text'         => tutor_i18n_get_formated_date( $meeting_start, 'g:i A' ),
					'lesson_title'      => $meeting->post_title ?? '',
					'course_name'       => $tutor_course->post_title ?? '',
					'show_live_tag'     => true,
					'event_tag_text'    => $is_expired ? __( 'Expired', 'tutor-pro' ) : __( 'Live Session', 'tutor-pro' ),
					'event_tag_icon'    => $is_expired ? '' : Icon::GOOGLE_MEET_COLORIZE,
					'event_tag_variant' => $is_expired ? 'expired' : '',
					'action_text'       => $is_expired ? __( 'Details', 'tutor-pro' ) : __( 'Join', 'tutor-pro' ),
					'action_url'        => $is_expired ? get_post_permalink( $meeting->ID ) : $meeting_link,
				);

			}
		}
	}

	/**
	 * Get the list of webinars.
	 *
	 * @since 4.0.0
	 *
	 * @return array
	 */
	public function get_webinars_list(): array {
		// Sort the webinars based on date for grouping.
		if ( count( $this->webinars ) ) {
			usort(
				$this->webinars,
				function ( $webinar_a, $webinar_b ) {
					$date_a = DateTimeHelper::create( $webinar_a['start_date'] );
					$date_b = DateTimeHelper::create( $webinar_b['start_date'] );

					return $date_b <=> $date_a;
				}
			);
		}

		return $this->webinars;
	}
}
