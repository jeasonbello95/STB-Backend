<?php
/**
 * Hook Handler for Subscriptions.
 *
 * @package TutorPro\Subscription
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 3.5.0
 */

namespace TutorPro\Subscription;

use TUTOR\Course;
use Tutor\Models\CouponModel;
use Tutor\Models\EnrollmentModel;
use TutorPro\Subscription\Models\PlanModel;
use TutorPro\Subscription\Models\SubscriptionModel;

/**
 * HookHandler Class.
 *
 * @since 3.5.0
 */
class HookHandler {
	/**
	 * Register hooks and dependency
	 *
	 * @since 3.5.0
	 *
	 * @param bool $register_hooks register hooks if true.
	 */
	public function __construct( $register_hooks = true ) {
		if ( ! $register_hooks ) {
			return;
		}

		add_filter( 'tutor_coupon_details_applies_to_items_response', array( $this, 'filter_applies_to_items_response' ), 10, 2 );
		add_filter( 'tutor_coupon_applies_to', array( $this, 'filter_coupon_applies_to' ) );
		add_filter( 'tutor_enrollment_buttons', array( $this, 'filter_enrollment_buttons' ), 10, 3 );
		add_filter( 'tutor_exclude_course_enrollments', array( $this, 'exclude_course_enrollments' ), 10, 2 );
		add_filter( 'is_subscription_enrollment', fn( $bool, $enrollment_id ) => SubscriptionModel::is_subscription_enrollment( $enrollment_id ) ? true : $bool, 10, 2 );
	}


	/**
	 * Remove bundle course enrollments from enrollment list.
	 *
	 * @since 4.0.0
	 *
	 * @param array $exclude_course_ids the array of enrollment ids.
	 * @param int   $user_id user id.
	 *
	 * @return array
	 */
	public function exclude_course_enrollments( $exclude_course_ids, $user_id = 0 ) {
		global $wpdb;

		$user_id_clause = '';
		if ( $user_id ) {
			$user_id_clause = $wpdb->prepare( 'AND p.post_author = %d', $user_id );
		}

		$exclude_courses = $wpdb->get_results(
			$wpdb->prepare( //phpcs:ignore
				"SELECT p.ID FROM {$wpdb->posts} as p
						INNER JOIN {$wpdb->postmeta} as pm ON p.ID = pm.post_id 
						INNER JOIN {$wpdb->posts} as p2 ON p2.ID = p.post_parent
				WHERE p.post_type = %s AND pm.meta_key = %s AND p2.post_type = %s 
				{$user_id_clause}
				AND pm.meta_value IN 
				(SELECT pm2.meta_value FROM {$wpdb->posts} as p3
						INNER JOIN {$wpdb->postmeta} as pm2 ON p3.ID = pm2.post_id
						INNER JOIN {$wpdb->posts} as p4 ON p4.ID = p3.post_parent
 				WHERE p3.post_type = %s
				AND pm2.meta_key = %s	
				AND p4.post_type = %s)",
				'tutor_enrolled',
				SubscriptionModel::SUBSCRIPTION_ENROLLMENT_META,
				tutor()->course_post_type,
				'tutor_enrolled',
				SubscriptionModel::SUBSCRIPTION_ENROLLMENT_META,
				tutor()->bundle_post_type
			),
			ARRAY_A,
		);

		$exclude_courses    = tutor_utils()->count( $exclude_courses ) ? array_column( $exclude_courses, 'ID' ) : array();
		$exclude_course_ids = array_merge( $exclude_course_ids, $exclude_courses );

		return $exclude_course_ids;
	}

	/**
	 * Filter applies to items response for specific membership plans.
	 *
	 * @since 3.5.0
	 *
	 * @param array  $response response.
	 * @param object $coupon coupon object.
	 *
	 * @return array
	 */
	public function filter_applies_to_items_response( $response, $coupon ) {
		if ( ! in_array( $coupon->applies_to, array( CouponModel::APPLIES_TO_SPECIFIC_MEMBERSHIP_PLANS ), true ) ) {
			return $response;
		}

		$coupon_model    = new CouponModel();
		$plan_model      = new PlanModel();
		$application_ids = $coupon_model->get_coupon_applications( $coupon->coupon_code );

		$response = $plan_model->get_all( array( 'id' => $application_ids ) );

		return $response;
	}

	/**
	 * Filter coupon applies to.
	 *
	 * @since 3.5.0
	 *
	 * @param array $list list of applies to items.
	 *
	 * @return array
	 */
	public function filter_coupon_applies_to( $list ) {
		$list[ CouponModel::APPLIES_TO_ALL_MEMBERSHIP_PLANS ]      = __( 'All Membership Plans', 'tutor-pro' );
		$list[ CouponModel::APPLIES_TO_SPECIFIC_MEMBERSHIP_PLANS ] = __( 'Specific Membership Plans', 'tutor-pro' );

		return $list;
	}

	/**
	 * Filter enrollment buttons to add subscription and membership buttons.
	 *
	 * @since 3.9.3
	 *
	 * @param object $buttons buttons.
	 * @param int    $course_id course id.
	 * @param int    $user_id user id.
	 *
	 * @return object
	 */
	public function filter_enrollment_buttons( $buttons, $course_id, $user_id ) {
		$buttons->show_subscribe_now_btn = false;
		$buttons->show_membership_btn    = false;

		$subscription_model = new SubscriptionModel();
		$plan_model         = new PlanModel();
		$selling_option     = Course::get_selling_option( $course_id );
		$has_course_access  = $subscription_model->has_course_access( $course_id, $user_id );
		$is_paid_course     = Course::PRICE_TYPE_PAID === tutor_utils()->price_type( $course_id );

		if ( $has_course_access ) {
			$buttons->show_enroll_btn = EnrollmentModel::is_enrolled( $course_id, $user_id ) ? false : true;
			return $buttons;
		}

		// Membership button.
		$membership_only_mode_enabled = Settings::membership_only_mode_enabled();
		if ( $membership_only_mode_enabled || in_array( $selling_option, array( Course::SELLING_OPTION_MEMBERSHIP, Course::SELLING_OPTION_ALL ), true ) ) {
			if ( $membership_only_mode_enabled ) {
				$buttons->show_add_to_cart_btn = false;
				$buttons->show_enroll_btn      = $has_course_access ? true : false;
				$buttons->show_membership_btn  = $has_course_access ? false : true;
				return $buttons;
			}

			// Hybrid mode.
			if ( $is_paid_course ) {
				$buttons->show_membership_btn = $has_course_access ? false : true;
				$buttons->show_enroll_btn     = $has_course_access ? true : false;
			}
		}

		// Subscription button.
		if ( in_array( $selling_option, array( Course::SELLING_OPTION_SUBSCRIPTION, Course::SELLING_OPTION_BOTH, Course::SELLING_OPTION_ALL ), true ) ) {
			if ( $is_paid_course && ! $has_course_access ) {
				$active_plans                    = $plan_model->get_subscription_plans( $course_id, PlanModel::STATUS_ACTIVE );
				$buttons->show_subscribe_now_btn = count( $active_plans ) ? true : false;
			}
		}

		return $buttons;
	}
}
