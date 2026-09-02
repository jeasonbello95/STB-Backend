<?php
/**
 * Dashboard Subscription History Card
 *
 * @package Tutor\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use TUTOR\Dashboard;
use Tutor\Helpers\ComponentHelper;
use Tutor\Helpers\DateTimeHelper;
use Tutor\Helpers\UrlHelper;
use TutorPro\Subscription\Models\PlanModel;
use TutorPro\Subscription\Models\SubscriptionModel;

if ( ! isset( $subscription ) ) {
	return;
}

$plan        = $controller->plan_model->get_plan( $subscription->plan_id );
$plan_access = '';
if ( $controller->plan_model->is_membership_plan( $plan ) ) {
	$plan_access = $controller->plan_model->get_type_label( $plan->plan_type, __( 'Access', 'tutor-pro' ) );
} else {
	$object_id = $controller->plan_model->get_object_id_by_plan( $subscription->plan_id );
	if ( $object_id ) :
		$plan_access = $controller->plan_model->get_type_label( $plan->plan_type );
	endif;
}


$details_url           = SubscriptionModel::get_subscription_details_url( $subscription->id );
$show_badge            = $subscription->is_trial_enabled || SubscriptionModel::STATUS_ACTIVE !== $subscription->status;
$badge_text            = $subscription->is_trial_enabled && SubscriptionModel::STATUS_ACTIVE === $subscription->status ? 'trial' : $subscription->status;
$active_payment_method = $controller->subscription_model->get_active_payment_method( $subscription );

$back_url = UrlHelper::add_query_params(
	Dashboard::get_account_page_url( 'billing' ),
	array(
		'tab' => 'subscriptions',
	)
);
?>

<div class="tutor-billing-card">
	<div class="tutor-billing-card-left">
		<div class="tutor-billing-card-title">
			<?php echo esc_html( $subscription->plan_name ); ?>:
			<?php
			if ( $controller->plan_model->is_membership_plan( $plan ) ) {
				$is_category_plan = PlanModel::TYPE_CATEGORY === $plan->plan_type;
				?>
				<div class="tutor-billing-card-title-access">
					<?php echo esc_html( $plan_access ); ?>
					<?php
					if ( $is_category_plan ) {
						$categories     = $controller->plan_model->get_plan_categories( $plan->id );
						$category_links = array();
						foreach ( $categories as $category ) {
							$category_links[] = '<a href="' . esc_url( get_term_link( $category ) ) . '" target="_blank" class="tutor-color-primary">' . esc_html( $category->name ) . '</a>';
						}
						?>
					<div class="tutor-plan-categories-popover">
						<ul>
						<?php
						foreach ( $categories as $category ) {
							printf( '<li><a target="_blank" href="%s">%s</a></li>', esc_url( get_term_link( $category ) ), esc_html( $category->name ) );
						}
						?>
						</ul>
					</div>
						<?php
					}
					?>
				</div>
				<?php
			} else {
				$object_id = $controller->plan_model->get_object_id_by_plan( $subscription->plan_id );
				if ( $object_id ) :
					?>
					<a class="tutor-billing-card-title-access" target="_blank" href="<?php echo esc_url( get_the_permalink( $object_id ) ); ?>"><?php echo esc_html( get_the_title( $object_id ) ); ?></a>
					<?php
				endif;
			}
			?>
		</div>
		<div class="tutor-billing-card-details">
			<div class="tutor-billing-card-id">
				#<?php echo esc_html( $subscription->id ); ?>
			</div>

			<?php if ( SubscriptionModel::STATUS_ACTIVE === $subscription->status && ! empty( $subscription->next_payment_date_gmt ) ) : ?>
				<div class="tutor-tiny">
					<?php esc_html_e( 'Next Payment -', 'tutor-pro' ); ?>
					<span class="tutor-text-success">
						<?php
						echo esc_html(
							PlanModel::PAYMENT_ONETIME === $plan->payment_type
												? __( 'N/A', 'tutor-pro' )
												: DateTimeHelper::get_gmt_to_user_timezone_date( $subscription->next_payment_date_gmt )
						);
						?>
					</span>
				</div>
				<?php else : ?>
				<span class="tutor-tiny">
					<?php echo esc_html( empty( $subscription->next_payment_date_gmt ) ? '' : DateTimeHelper::get_gmt_to_user_timezone_date( $subscription->next_payment_date_gmt ) ); ?>
				</span>

				<span class="tutor-section-separator-vertical tutor-sm-hidden"></span>

				<div class="tutor-billing-card-payment-method">
					<?php ComponentHelper::render_payment_method_badge( $active_payment_method ); ?>
				</div>
			<?php endif; ?>
		</div>
	</div>

	<div class="tutor-billing-card-right">
		<?php
		if ( $show_badge ) {
			SubscriptionModel::render_subscription_status_badge( $badge_text );
		}
		?>

		<div class="tutor-billing-card-amount">
			<?php $controller->subscription_model->formatted_subscription_price( $subscription ); ?>
		</div>

		<a class="tutor-btn tutor-btn-link" href="<?php echo esc_url( UrlHelper::add_query_params( $details_url, array( 'back_url' => $back_url ) ) ); ?>">
			<?php esc_html_e( 'Details', 'tutor-pro' ); ?>
		</a>
	</div>
</div>
