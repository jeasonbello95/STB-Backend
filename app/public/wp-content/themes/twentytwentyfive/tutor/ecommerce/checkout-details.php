<?php
/**
 * Checkout Details Template personalizado para STB Academy
 * Renderiza el resumen de cursos, desglose de precios y caja de cupones de descuento.
 *
 * @package STB_Academy_Core\Templates
 */

use TUTOR\Input;
use Tutor\Ecommerce\Tax;
use Tutor\Models\OrderModel;
use Tutor\Ecommerce\Settings;
use Tutor\Models\CouponModel;
use Tutor\Ecommerce\CartController;
use Tutor\Ecommerce\CheckoutController;

$user_id = apply_filters( 'tutor_checkout_user_id', get_current_user_id() );

$coupon_model        = new CouponModel();
$cart_controller     = new CartController( false );
$checkout_controller = new CheckoutController( false );
$order_id            = (int) Input::sanitize_request_data( 'order_id', 0 );
$order_data          = $order_id ? OrderModel::get_valid_incomplete_order( $order_id, (int) $user_id, true ) : null;
$get_cart            = ! empty( $order_data ) ? $checkout_controller->get_courses_data_by_order_items( $order_data->items ) : $cart_controller->get_cart_items();
$courses             = $get_cart['courses'];
$total_count         = $courses['total_count'];
$course_id           = (int) Input::sanitize_request_data( 'course_id', 0 );
$course_list         = Settings::is_buy_now_enabled() && $course_id ? array( get_post( $course_id ) ) : $courses['results'];
$coupon_code         = Input::sanitize_request_data( 'coupon_code', '' );

$plan_id       = (int) Input::sanitize_request_data( 'plan' );
$plan_info     = apply_filters( 'tutor_get_plan_info', null, $plan_id );
$has_plan_info = $plan_id && $plan_info;

$object_ids = array();
$item_ids   = $has_plan_info ? array( $plan_info->id ) : array_column( $course_list, 'ID' );
$order_type = $has_plan_info ? OrderModel::TYPE_SUBSCRIPTION : OrderModel::TYPE_SINGLE_ORDER;

$has_applicable_coupon  = ! empty( $order_data ) && empty( $coupon_code ) && $coupon_model->order_has_applicable_coupon( $order_data );
$coupon_code            = $has_applicable_coupon ? $order_data->coupon_code : apply_filters( 'tutor_checkout_coupon_code', $coupon_code, $order_type, $item_ids );
$has_manual_coupon_code = ! empty( $coupon_code );

$should_calculate_tax     = Tax::should_calculate_tax();
$is_tax_included_in_price = Tax::is_tax_included_in_price();
$tax_rate                 = Tax::get_user_tax_rate( $user_id );

$checkout_data   = $checkout_controller->prepare_checkout_items( $item_ids, $order_type, $coupon_code );
$show_coupon_box = Settings::is_coupon_usage_enabled() && ! $checkout_data->is_coupon_applied;
?>

<div class="tutor-checkout-details sticky top-28 rounded-3xl border border-white/10 bg-[#0E1420]/80 p-6 sm:p-7 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,0,0,0.4)] space-y-6">

	<?php do_action( 'tutor_before_checkout_order_details', $course_list ); ?>

	<div class="tutor-checkout-details-inner space-y-5">
		<div class="flex items-center justify-between pb-3 border-b border-white/10">
			<h4 class="text-base font-bold text-white font-display">
				<?php esc_html_e( 'Resumen de Compra', 'tutor' ); ?>
			</h4>
			<span class="rounded-full bg-primary-500/10 border border-primary-500/30 px-2.5 py-0.5 text-[11px] font-bold text-primary-300">
				<?php echo esc_html( $total_count ); ?> item<?php echo $total_count !== 1 ? 's' : ''; ?>
			</span>
		</div>

		<!-- Lista de items en el checkout -->
		<div class="tutor-checkout-courses space-y-3">
			<?php
			if ( $plan_info ) {
				$plan_item_template = apply_filters( 'tutor_checkout_plan_item_template', null, $plan_info );
				if ( file_exists( $plan_item_template ) ) {
					require $plan_item_template;
				}
			} else {
				if ( is_array( $course_list ) && count( $course_list ) && isset( $checkout_data->items ) ) :
					foreach ( $checkout_data->items as $item ) :
						$course           = get_post( $item->item_id );
						$course_thumbnail = get_tutor_course_thumbnail_src( 'thumbnail', $course->ID );
						if ( empty( $course_thumbnail ) ) {
							$course_thumbnail = 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=400&q=80';
						}
						array_push( $object_ids, $item->item_id );
						?>
						<div class="tutor-checkout-course-item flex items-center gap-3.5 p-3 rounded-2xl border border-white/5 bg-white/5" data-course-id="<?php echo esc_attr( $item->item_id ); ?>">
							<img src="<?php echo esc_url( $course_thumbnail ); ?>" alt="<?php echo esc_attr( $course->post_title ); ?>" class="h-14 w-14 rounded-xl object-cover border border-white/10 shrink-0" />
							<div class="flex-1 min-w-0">
								<h5 class="text-xs font-bold text-white truncate group-hover:text-primary-300">
									<a href="<?php echo esc_url( get_the_permalink( $course ) ); ?>" style="text-decoration:none;">
										<?php echo esc_html( $course->post_title ); ?>
									</a>
								</h5>
								<div class="text-xs font-black text-primary-400 mt-1">
									<?php echo esc_html( tutor_get_formatted_price( $item->sale_price ? $item->sale_price : $item->regular_price ) ); ?>
								</div>
							</div>
						</div>
						<?php
					endforeach;
				endif;
			}
			?>
		</div>

		<!-- Desglose de Totales -->
		<div class="pt-4 border-t border-white/10 space-y-2.5 text-xs">
			<div class="flex items-center justify-between text-slate-300">
				<span>Subtotal</span>
				<span class="font-bold text-white"><?php echo esc_html( tutor_get_formatted_price( $checkout_data->subtotal ) ); ?></span>
			</div>

			<?php if ( $checkout_data->is_coupon_applied ) : ?>
				<div class="flex items-center justify-between text-primary-400 bg-primary-500/10 p-2.5 rounded-xl border border-primary-500/20">
					<div class="flex items-center gap-1.5 font-bold">
						<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
						</svg>
						<span>Cupón: <?php echo esc_html( $coupon_code ); ?></span>
					</div>
					<span class="font-black">-<?php echo esc_html( tutor_get_formatted_price( $checkout_data->discount_amount ) ); ?></span>
				</div>
			<?php endif; ?>

			<?php if ( $should_calculate_tax && $tax_rate > 0 && ! $is_tax_included_in_price ) : ?>
				<div class="flex items-center justify-between text-slate-300">
					<span>Impuestos (<?php echo esc_html( $tax_rate ); ?>%)</span>
					<span class="font-bold text-white"><?php echo esc_html( tutor_get_formatted_price( $checkout_data->tax_amount ) ); ?></span>
				</div>
			<?php endif; ?>

			<div class="pt-3 border-t border-white/10 flex items-baseline justify-between">
				<span class="text-sm font-bold text-white">Total Final</span>
				<span class="text-2xl font-black text-primary-400">
					<?php echo esc_html( tutor_get_formatted_price( $checkout_data->total ) ); ?>
				</span>
			</div>
		</div>

		<!-- Caja para aplicar Cupones de Descuento -->
		<?php if ( $show_coupon_box ) : ?>
			<div class="tutor-coupon-box pt-3 border-t border-white/10">
				<div class="flex gap-2">
					<input type="text" name="coupon_code" placeholder="Código de Cupón" class="tutor-form-control flex-1 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 uppercase tracking-wider font-mono" value="<?php echo esc_attr( $coupon_code ); ?>" />
					<button type="button" id="tutor-apply-coupon-btn" class="tutor-btn tutor-btn-secondary rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs px-4 py-2.5 transition-colors cursor-pointer shrink-0">
						Aplicar
					</button>
				</div>
			</div>
		<?php endif; ?>
	</div>
</div>
