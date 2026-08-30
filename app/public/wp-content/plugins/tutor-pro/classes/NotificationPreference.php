<?php
/**
 * User Notification Preference Manager
 *
 * @package TutorPro
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 3.1.0
 */

namespace TUTOR_PRO;

use Tutor\Cache\TutorCache;
use Tutor\Helpers\QueryHelper;
use TUTOR\Input;
use Tutor\Traits\JsonResponse;
use TUTOR\User;
use TUTOR\Icon;
use TUTOR_EMAIL\EmailData;
use TUTOR_EMAIL\EmailNotification;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * NotificationPreference Class
 *
 * @since 3.1.0
 */
class NotificationPreference {
	use JsonResponse;

	const EMAIL_GROUP_COURSE_UPDATE = 'course_updates';
	const EMAIL_GROUP_COMMUNICATION = 'communication_engagement';
	const EMAIL_GROUP_PAYMENTS      = 'payments_subscriptions';
	const EMAIL_GROUP_GIFT_COURSES  = 'gift_courses';

	/**
	 * Notification preference.
	 *
	 * @since 3.1.0
	 *
	 * @var string
	 */
	public $table_name;

	/**
	 * Register hooks and dependencies
	 *
	 * @since 3.1.0
	 *
	 * @param boolean $register_hooks register hooks or not.
	 */
	public function __construct( $register_hooks = true ) {
		global $wpdb;
		$this->table_name = $wpdb->prefix . 'tutor_notification_preferences';

		if ( ! $register_hooks ) {
			return;
		}

		add_action( 'admin_init', array( $this, 'create_table' ) );
		add_filter( 'tutor_is_notification_enabled_for_user', array( $this, 'check_notification_enabled_for_user' ), 10, 5 );
		add_action(
			'tutor_email_addon_loaded',
			function () {

				if ( ! function_exists( 'wp_get_current_user' ) ) {
					include ABSPATH . 'wp-includes/pluggable.php';
				}

				if ( class_exists( 'TUTOR_EMAIL\EmailNotification' ) && User::is_student() ) {
					add_filter( 'tutor_dashboard/nav_items/settings/nav_items', array( $this, 'register_nav' ) );
					add_action( 'wp_ajax_tutor_save_notification_preference', array( $this, 'ajax_save_notification_preference' ) );
				}
			}
		);
	}

	/**
	 * Filter is notification enabled for user
	 *
	 * @since 3.1.0
	 *
	 * @param bool   $bool is enabled or not.
	 * @param string $notification_type notification type.
	 * @param string $group_name group name.
	 * @param string $trigger_name trigger name.
	 * @param int    $user_id user id.
	 *
	 * @return bool
	 */
	public function check_notification_enabled_for_user( $bool, $notification_type, $group_name, $trigger_name, $user_id ) {
		/**
		 * If preference table not exists
		 * It means user has no preference for queried trigger, default is on.
		 *
		 * Note: This check has been added to avoid error if any check happened before table create. like before admin_init hook fire.
		 * Example: inactive student email event fire on `wp` hook which is fire before admin_init.
		 *
		 * @since 3.1.0
		 */
		$cache_key    = 'tutor_notification_preferences_table_exists';
		$table_exists = TutorCache::get( $cache_key, null );

		if ( null === $table_exists ) {
			$table_exists = QueryHelper::table_exists( $this->table_name );
			TutorCache::set( $cache_key, $table_exists );
		}

		if ( ! $table_exists ) {
			return true;
		}

		return $this->is_notification_enabled_for_user( $notification_type, $group_name, $trigger_name, $user_id );
	}

	/**
	 * Create notification preference table.
	 *
	 * @since 3.1.0
	 *
	 * @return void
	 */
	public function create_table() {
		if ( QueryHelper::table_exists( $this->table_name ) ) {
			return;
		}

		global $wpdb;
		$charset_collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE IF NOT EXISTS {$this->table_name} (
                id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                user_id BIGINT(20) UNSIGNED NOT NULL,
                notification_type VARCHAR(50) NOT NULL, -- email, push, onsite, sms
                group_name VARCHAR(50) NOT NULL, -- email_to_students, email_to_teachers, email_to_admin
                trigger_name VARCHAR(255) NOT NULL,
                opt_in TINYINT NOT NULL DEFAULT 1,
                FOREIGN KEY (user_id) REFERENCES {$wpdb->users}(id) ON DELETE CASCADE
            ) $charset_collate;";

		if ( ! function_exists( 'dbDelta' ) ) {
			require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		}

		dbDelta( $sql );
	}

	/**
	 * Register nav menu for settings
	 *
	 * @since 3.1.0
	 * @since 4.0.0 update tabs order and data structure.
	 *
	 * @param array $tabs setting navigation tabs.
	 *
	 * @return array
	 */
	public static function register_nav( $tabs ) {
		$id      = 'notifications';
		$new_tab = array(
			'id'       => $id,
			'label'    => __( 'Notifications', 'tutor-pro' ),
			'icon'     => Icon::NOTIFICATION,
			'text'     => __( 'Message, group, order', 'tutor-pro' ),
			'template' => 'notification-preference',
			'is_pro'   => true,
			'role'     => false,
		);

		$position = array_search( 'preferences', array_keys( $tabs ), true );

		if ( false === $position ) {
			$tabs[ $id ] = $new_tab;
			return $tabs;
		}

		return array_slice( $tabs, 0, $position, true )
		+ array( $id => $new_tab )
		+ array_slice( $tabs, $position, null, true );
	}

	/**
	 * Get user preferences
	 *
	 * @since 3.1.0
	 *
	 * @param integer $user_id user id.
	 *
	 * @return array
	 */
	public function get_user_preferences( $user_id = 0 ) {
		return QueryHelper::get_all(
			$this->table_name,
			array( 'user_id' => tutor_utils()->get_user_id( $user_id ) ),
			'id',
			-1
		);
	}

	/**
	 * Get enabled email triggers by group key.
	 *
	 * @since 3.1.0
	 *
	 * @param string $group_name email trigger group name.
	 *
	 * @return array
	 */
	public static function get_enabled_email_triggers( $group_name ) {
		$list = tutor_utils()->get_option( $group_name );
		if ( ! is_array( $list ) ) {
			$list = array();
		}

		$list = array_filter( $list, fn( $v, $k ) => 'on' === $v, ARRAY_FILTER_USE_BOTH );
		return $list;
	}


	/**
	 * Check user is opt-in to get notification.
	 * Default is opt-in util user explicitly disabled it.
	 *
	 * @since 3.1.0
	 *
	 * @param array  $preferences save preferences.
	 * @param string $trigger_name trigger name.
	 * @param string $group_name group name.
	 *
	 * @return boolean
	 */
	public static function is_trigger_enabled( $preferences, $trigger_name, $group_name ) {
		$is_enabled = true;
		foreach ( $preferences as $item ) {
			if ( $item->trigger_name === $trigger_name && $item->group_name === $group_name && 0 === (int) $item->opt_in ) {
				$is_enabled = false;
				break;
			}
		}

		return $is_enabled;
	}

	/**
	 * Check user is subscribed a specific notification trigger.
	 *
	 * @since 3.1.0
	 *
	 * @param string $notification_type notification type.
	 * @param string $group_name group name.
	 * @param string $trigger_name trigger name.
	 * @param int    $user_id user id. default current user id.
	 *
	 * @return bool
	 */
	public static function is_notification_enabled_for_user( $notification_type, $group_name, $trigger_name, $user_id = 0 ) {
		global $wpdb;

		$user_id    = tutor_utils()->get_user_id( $user_id );
		$table_name = $wpdb->prefix . 'tutor_notification_preferences';

		$disabled_all = QueryHelper::get_count(
			$table_name,
			array(
				'user_id'      => $user_id,
				'trigger_name' => 'disable_all',
				'opt_in'       => 1,
			)
		);

		if ( $disabled_all ) {
			return false;
		}

		$trigger_record = QueryHelper::get_row(
			$table_name,
			array(
				'user_id'           => $user_id,
				'notification_type' => $notification_type,
				'group_name'        => $group_name,
				'trigger_name'      => $trigger_name,
			),
			'id'
		);

		if ( ! $trigger_record ) {
			/**
			 * User has no preference saved yet. So default is enabled.
			 */
			return true;
		}

		return (bool) $trigger_record->opt_in;
	}

	/**
	 * Exclude email list.
	 *
	 * @since 3.1.0
	 *
	 * @param array $to_emails to emails.
	 * @param array $exclude_emails exclude email.
	 *
	 * @return array excluded to email list.
	 */
	public function exclude_email( $to_emails, $exclude_emails ) {
		return array_values( array_diff( $to_emails, $exclude_emails ) );
	}


	/**
	 * Add or update trigger status
	 *
	 * @since 3.1.0
	 *
	 * @param string  $notification_type notification type.
	 * @param string  $group_name group name.
	 * @param string  $trigger_name trigger name.
	 * @param bool    $opt_in opt-in status.
	 * @param integer $user_id user id. default is current user.
	 * @return void
	 */
	public function add_or_update_trigger_status( $notification_type, $group_name, $trigger_name, $opt_in, $user_id = 0 ) {
		global $wpdb;

		$user_id    = tutor_utils()->get_user_id( $user_id );
		$table_name = $wpdb->prefix . 'tutor_notification_preferences';

		$existing_row = QueryHelper::get_row(
			$table_name,
			array(
				'user_id'      => $user_id,
				'group_name'   => $group_name,
				'trigger_name' => $trigger_name,
			),
			'id'
		);

		if ( $existing_row ) {
			QueryHelper::update(
				$table_name,
				array( 'opt_in' => $opt_in ),
				array(
					'user_id'           => $user_id,
					'notification_type' => $notification_type,
					'group_name'        => $group_name,
					'trigger_name'      => $trigger_name,
				)
			);
		} else {
			QueryHelper::insert(
				$table_name,
				array(
					'user_id'           => $user_id,
					'trigger_name'      => $trigger_name,
					'notification_type' => $notification_type,
					'group_name'        => $group_name,
					'opt_in'            => $opt_in,
				)
			);
		}
	}

	/**
	 * Prepare notification preferences data.
	 *
	 * @since 3.1.0
	 *
	 * @param int $user_id user id.
	 *
	 * @return array
	 */
	public static function prepare_notification_preferences_data( $user_id = 0 ) {
		$user_id = tutor_utils()->get_user_id( $user_id );

		$user_saved_preferences = ( new self( false ) )->get_user_preferences( $user_id );

		$is_all_disabled = false;
		foreach ( $user_saved_preferences as $item ) {
			if ( 'disable_all' === $item->trigger_name && 1 === (int) $item->opt_in ) {
				$is_all_disabled = true;
				break;
			}
		}

		$prepared_list = array();

		$prepared_list['disable_all'] = array(
			'key'   => 'disable_all',
			'label' => __( 'Disable all notification', 'tutor-pro' ),
			'value' => $is_all_disabled ? 'on' : 'off',
		);

		$prepared_list['email'] = array();

		$available_email_trigger_list = ( new EmailData() )->get_recipients();

		$enabled_student_email_triggers = self::get_enabled_email_triggers( EmailNotification::TO_STUDENTS );
		if ( isset( $enabled_student_email_triggers['welcome_student'] ) ) {
			unset( $enabled_student_email_triggers['welcome_student'] );
		}

		// For student.
		foreach ( $enabled_student_email_triggers as $key => $val ) {
			if ( ! empty( $available_email_trigger_list[ EmailNotification::TO_STUDENTS ][ $key ] ) ) {
				$item      = $available_email_trigger_list[ EmailNotification::TO_STUDENTS ][ $key ];
				$group_key = self::get_student_email_trigger_group_key( $key );
				$prepared_list['email'][ EmailNotification::TO_STUDENTS ][ $group_key ][ $key ] = array(
					'key'   => $key,
					'label' => $item['label'],
					'value' => self::is_trigger_enabled( $user_saved_preferences, $key, EmailNotification::TO_STUDENTS ) ? 'on' : 'off',
				);
			}
		}

		$student_email_group = array_keys( self::get_student_email_group_labels() );

		foreach ( $student_email_group as $group_key ) {
			if ( empty( $prepared_list['email'][ EmailNotification::TO_STUDENTS ][ $group_key ] ) ) {
				continue;
			}

			uasort(
				$prepared_list['email'][ EmailNotification::TO_STUDENTS ][ $group_key ],
				function ( $a, $b ) {
					return strnatcasecmp( $a['label'] ?? '', $b['label'] ?? '' );
				}
			);
		}

		return $prepared_list;
	}

	/**
	 * Get student email trigger group key.
	 *
	 * @since 3.1.0
	 *
	 * @param string $trigger_key trigger key.
	 *
	 * @return string
	 */
	private static function get_student_email_trigger_group_key( $trigger_key ) {
		$course_update_triggers = array(
			'course_enrolled',
			'remove_from_course',
			'enrollment_expired',
			'completed_course',
			'quiz_completed',
			'new_quiz_published',
			'assignment_graded',
			'feedback_submitted_for_quiz',
			'new_lesson_published',
			'new_assignment_published',
		);

		if ( in_array( $trigger_key, $course_update_triggers, true ) ) {
			return self::EMAIL_GROUP_COURSE_UPDATE;
		}

		$communication_engagement_triggers = array(
			'lesson_comment_replied',
			'after_question_answered',
			'new_announcement_posted',
			'announcement_updated',
			'inactive_student',
		);

		if ( in_array( $trigger_key, $communication_engagement_triggers, true ) ) {
			return self::EMAIL_GROUP_COMMUNICATION;
		}

		$payments_subscription_triggers = array(
			'new_order',
			'order_status_updated',
			'subscription_trial_activated',
			'subscription_activated',
			'subscription_hold',
			'subscription_renewed',
			'subscription_expired',
			'subscription_cancelled',
		);

		if ( in_array( $trigger_key, $payments_subscription_triggers, true ) ) {
			return self::EMAIL_GROUP_PAYMENTS;
		}

		$gift_courses_triggers = array(
			'gifted_a_course',
			'received_a_gifted_course',
		);

		if ( in_array( $trigger_key, $gift_courses_triggers, true ) ) {
			return self::EMAIL_GROUP_GIFT_COURSES;
		}
	}

	/**
	 * Get student email group labels.
	 *
	 * @since 3.1.0
	 *
	 * @return array
	 */
	public static function get_student_email_group_labels() {
		return array(
			self::EMAIL_GROUP_COURSE_UPDATE => __( 'Course Updates', 'tutor-pro' ),
			self::EMAIL_GROUP_COMMUNICATION => __( 'Communication & Engagement', 'tutor-pro' ),
			self::EMAIL_GROUP_PAYMENTS      => __( 'Payments & Subscriptions', 'tutor-pro' ),
			self::EMAIL_GROUP_GIFT_COURSES  => __( 'Gift Courses', 'tutor-pro' ),
		);
	}

	/**
	 * Save notification preference
	 *
	 * @since 3.1.0
	 *
	 * @return void
	 */
	public function ajax_save_notification_preference() {
		tutor_utils()->check_nonce();

		$inputs = Input::sanitize_array( $_POST['tutor_notification_preference'] ?? [] );//phpcs:ignore
		$user_id = get_current_user_id();

		$disable_all = isset( $inputs['disable_all'] ) && 'on' === $inputs['disable_all'] ? 1 : 0;
		$this->add_or_update_trigger_status( 'all', 'all', 'disable_all', $disable_all, $user_id );

		foreach ( $inputs['email'] as $group_name => $triggers ) {
			foreach ( $triggers as $trigger_name => $status ) {
				$this->add_or_update_trigger_status( 'email', $group_name, $trigger_name, 'on' === $status ? 1 : 0 );
			}
		}

		$this->json_response( __( 'Preference saved successfully', 'tutor-pro' ) );
	}
}
