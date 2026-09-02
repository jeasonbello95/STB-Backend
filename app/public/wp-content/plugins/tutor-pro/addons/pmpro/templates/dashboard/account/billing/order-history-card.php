<?php
/**
 * PMPro: Order card template for billing
 *
 * @package TutorPro\Addons
 * @subpackage PmPro\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Button;
use Tutor\Components\Constants\Variant;
use Tutor\Helpers\ComponentHelper;
use Tutor\Helpers\DateTimeHelper;
use Tutor\Helpers\UrlHelper;

/**
 * PMPro order object.
 *
 * @var \MemberOrder|null $order_data
 */
$order_data = $data['order_data'] ?? null;
if ( ! $order_data || ! is_object( $order_data ) ) {
	return;
}

$membership_id  = $order_data->membership_id;
$membership     = pmpro_getLevel( $membership_id );
$order_id       = $order_data->id;
$total_price    = $order_data->total;
$order_status   = $order_data->status;
$payment_method = empty( $order_data->payment_type ) ? $order_data->cardtype : $order_data->payment_type;
$order_date     = $order_data->timestamp;
$titles         = array( $membership->name );

$checkout_url = UrlHelper::add_query_params( pmpro_url( 'checkout' ), array( 'pmpro_level' => $membership_id ) );
$invoice_url  = UrlHelper::add_query_params( pmpro_url( 'invoice' ), array( 'invoice' => $order_data->code ) );

?>
<div class="tutor-billing-card">
	<div class="tutor-billing-card-left">
		<div class="tutor-billing-card-title">
			<ul class="tutor-pl-1">
				<?php foreach ( $titles as $item_title ) : ?>
					<li><span><?php echo esc_html( $item_title ); ?></span></li>
				<?php endforeach; ?>
			</ul>
		</div>
		<div class="tutor-billing-card-details">
			<div class="tutor-billing-card-id">
				#<?php echo esc_html( $order_id ); ?>
			</div>

			<span class="tutor-tiny">
				<?php echo esc_html( DateTimeHelper::get_gmt_to_user_timezone_date( gmdate( 'Y-m-d H:i:s', $order_date ) ) ); ?>
			</span>

			<span class="tutor-section-separator-vertical tutor-sm-hidden"></span>

			<div class="tutor-billing-card-payment-method">
				<?php ComponentHelper::render_payment_method_badge( $payment_method ); ?>
			</div>
		</div>
	</div>

	<div class="tutor-billing-card-right">
		<?php ComponentHelper::render_status_badge( $order_status ); ?>

		<div class="tutor-billing-card-amount">
			<?php echo wp_kses( tutor_get_formatted_price( $total_price ), tutor_price_allowed_html() ); ?>
		</div>

		<?php
		if ( 'pending' === $order_status ) {
			Button::make()
				->tag( 'a' )
				->variant( Variant::LINK )
				->attr( 'href', $checkout_url )
				->label( __( 'Pay', 'tutor-pro' ) )
				->render();
		}

		if ( 'success' === $order_status ) {
			Button::make()
				->tag( 'a' )
				->variant( Variant::LINK )
				->attr( 'href', $invoice_url )
				->attr( 'target', '_blank' )
				->label( __( 'Invoice', 'tutor-pro' ) )
				->render();
		}
		?>
	</div>
</div>
