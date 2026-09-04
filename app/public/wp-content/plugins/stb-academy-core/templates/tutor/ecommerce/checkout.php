<?php
/**
 * Checkout Template personalizado para STB Academy & Tutor LMS
 * Estilo Dark Cyber / Neon con compatibilidad total para pasarelas de pago y AJAX.
 *
 * @package STB_Academy_Core\Templates
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Tutor\Ecommerce\CheckoutController;
use Tutor\Ecommerce\CartController;
use Tutor\GDPR\Controllers\LegalConsent;
use TUTOR\Input;

$user_id = apply_filters( 'tutor_checkout_user_id', get_current_user_id() );

$tutor_toc_page_link     = tutor_utils()->get_toc_page_link();
$tutor_privacy_page_link = tutor_utils()->get_privacy_page_link();

$cart_controller = new CartController();
$get_cart        = $cart_controller->get_cart_items();
$courses         = $get_cart['courses'];
$total_count     = $courses['total_count'];
$course_list     = $courses['results'];
$subtotal        = 0;
$course_ids      = implode( ', ', array_values( array_column( $course_list, 'ID' ) ) );
$plan_id         = Input::get( 'plan', 0, Input::TYPE_INT );

$is_checkout_page = true;

?>
<div class="stb-checkout-wrapper tutor-checkout-page">
	<div class="tutor-checkout-container">
		<?php
		$echo_before_return    = true;
		$user_has_subscription = apply_filters( 'tutor_checkout_user_has_subscription', false, $plan_id, $echo_before_return );
		if ( $user_has_subscription ) {
			return;
		}
		?>

		<div class="stb-checkout-header mb-8">
			<div class="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-3.5 py-1.5 text-xs font-semibold text-primary-300 mb-3">
				<svg class="w-3.5 h-3.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
				</svg>
				<span>Proceso de Pago Seguro</span>
			</div>
			<h1 class="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
				Finalizar <span class="text-gradient">Inscripción</span>
			</h1>
			<p class="text-sm text-slate-400 mt-2 max-w-xl">
				Ingresa tus datos de estudiante y selecciona tu método de pago para comenzar a aprender de inmediato.
			</p>
		</div>

		<!-- Alerta de fallo de Nonce -->
		<?php
		$nonce_alert = get_transient( CheckoutController::PAY_NOW_ALERT_MSG_TRANSIENT_KEY . 'pay_now_nonce_alert' );
		if ( $nonce_alert ) {
			?>
			<div class="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
				<?php echo esc_html( $nonce_alert[0] ); ?>
			</div>
			<?php
			delete_transient( CheckoutController::PAY_NOW_ALERT_MSG_TRANSIENT_KEY . 'pay_now_nonce_alert' );
		}
		?>

		<form method="post" id="tutor-checkout-form" class="stb-checkout-form">
			<?php tutor_nonce_field(); ?>
			<input type="hidden" name="tutor_action" value="tutor_pay_now">

			<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
				<!-- Columna Izquierda: Detalles del Pedido y Cursos (5 Columnas) -->
				<div class="lg:col-span-5 order-2 lg:order-1" tutor-checkout-details>
					<?php
					$details_file = STB_PLUGIN_DIR . 'templates/tutor/ecommerce/checkout-details.php';
					if ( file_exists( $details_file ) ) {
						include $details_file;
					} else {
						include tutor()->path . 'templates/ecommerce/checkout-details.php';
					}
					?>
				</div>

				<!-- Columna Derecha: Datos de Facturación & Pasarelas de Pago (7 Columnas) -->
				<div class="lg:col-span-7 order-1 lg:order-2">
					<div class="tutor-checkout-billing rounded-3xl border border-white/10 bg-[#0E1420]/85 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] space-y-6">
						<div class="tutor-checkout-billing-inner space-y-6">
							<!-- Acceso para usuarios existentes si no está logueado -->
							<?php if ( ! is_user_logged_in() ) : 
								$login_url = tutor_utils()->get_option( 'enable_tutor_native_login', null ) ? '' : wp_login_url( tutor()->current_url );
								?>
								<div class="flex items-center justify-between rounded-2xl border border-primary-500/30 bg-primary-500/5 p-4 text-xs">
									<div class="flex items-center gap-2 text-slate-300">
										<svg class="w-4 h-4 text-primary-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
										</svg>
										<span>¿Ya tienes una cuenta en STB Academy?</span>
									</div>
									<a href="<?php echo esc_url( home_url( '/login?redirect_to=' . urlencode( home_url( '/checkout' ) ) ) ); ?>" class="font-bold text-primary-300 hover:text-primary-200 transition-colors py-1 px-3 rounded-lg bg-primary-500/10 border border-primary-500/20" style="text-decoration:none;">
										Iniciar Sesión
									</a>
								</div>
							<?php endif; ?>

							<!-- Sección: Datos del Estudiante / Facturación -->
							<div>
								<h3 class="text-lg font-bold text-white font-display pb-3 border-b border-white/10 flex items-center gap-2">
									<span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500/20 text-xs font-bold text-primary-400">1</span>
									<span><?php echo is_user_logged_in() ? esc_html__( 'Datos de Facturación', 'tutor' ) : esc_html__( 'Datos del Estudiante', 'tutor' ); ?></span>
								</h3>

								<div class="tutor-billing-fields mt-4">
									<?php
									$billing_fields_file = STB_PLUGIN_DIR . 'templates/tutor/ecommerce/checkout-billing-form-fields.php';
									if ( file_exists( $billing_fields_file ) ) {
										require $billing_fields_file;
									} else {
										require tutor()->path . 'templates/ecommerce/checkout-billing-form-fields.php';
									}
									?>
								</div>
							</div>

							<!-- Sección: Método de Pago -->
							<div class="tutor-payment-method-wrapper pt-4 border-t border-white/10 <?php echo esc_attr( $show_payment_methods ? '' : 'tutor-d-none' ); ?>">
								<h3 class="text-lg font-bold text-white font-display pb-3 border-b border-white/10 flex items-center gap-2 mb-4">
									<span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500/20 text-xs font-bold text-primary-400">2</span>
									<span><?php esc_html_e( 'Método de Pago', 'tutor' ); ?></span>
								</h3>

								<div class="tutor-checkout-payment-options space-y-3">
									<input type="hidden" name="payment_type">

									<?php if ( ! $show_payment_methods ) : ?>
										<input type="hidden" name="payment_method" value="free" id="tutor-temp-payment-method">
									<?php endif; ?>

									<?php
									$supported_gateways = $plan_id ? tutor_get_subscription_supported_payment_gateways() : tutor_get_all_active_payment_gateways();
									if ( empty( $supported_gateways ) ) {
										?>
										<div class="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-xs text-yellow-300">
											<?php esc_html_e( 'No hay pasarelas de pago configuradas en este momento. Por favor contacta con soporte.', 'tutor' ); ?>
										</div>
										<?php
									} else {
										foreach ( $supported_gateways as $gateway ) {
											list( 'name' => $name, 'label' => $label, 'icon' => $icon ) = $gateway;
											$is_manual = $gateway['is_manual'] ?? false;
											?>
											<label class="tutor-checkout-payment-item group relative flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-primary-500/50 hover:bg-white/10 transition-all cursor-pointer" data-payment-method="<?php echo esc_attr( $name ); ?>" data-payment-type="<?php echo $is_manual ? 'manual' : 'automate'; ?>">
												<div class="flex items-center gap-3">
													<input type="radio" value="<?php echo esc_attr( $name ); ?>" name="payment_method" class="tutor-form-check-input text-primary-500 focus:ring-primary-500 focus:ring-offset-0 bg-transparent border-white/20">
													<span class="text-sm font-semibold text-white group-hover:text-primary-300 transition-colors">
														<?php echo esc_html( $label ); ?>
													</span>
												</div>
												<?php if ( ! empty( $icon ) ) : ?>
													<img src="<?php echo esc_url( $icon ); ?>" alt="<?php echo esc_attr( $name ); ?>" class="h-6 w-auto object-contain" />
												<?php endif; ?>
												<?php if ( $is_manual ) : ?>
													<div class="tutor-d-none tutor-payment-item-instructions"><?php echo wp_kses_post( $gateway['payment_instructions'] ?? '' ); ?></div>
												<?php endif; ?>
											</label>
											<?php
										}
									}
									?>
								</div>

								<div class="tutor-payment-instructions tutor-mb-20 tutor-d-none mt-4 p-4 rounded-xl border border-primary-500/30 bg-primary-500/5 text-xs text-slate-300"></div>
							</div>

							<!-- Términos y Consentimiento Legal -->
							<div class="pt-2">
								<?php
								$consents = LegalConsent::get_consent_by_display_key( LegalConsent::DISPLAY_ON_CHECKOUT );
								if ( tutor_utils()->count( $consents ) ) :
									foreach ( $consents as $consent ) :
										LegalConsent::render_consent_field( $consent, 'tutor-mt-20' );
									endforeach;
								elseif ( null !== $tutor_toc_page_link ) : ?>
									<div class="flex items-start gap-2.5 text-xs text-slate-400">
										<input type="checkbox" id="tutor_checkout_agree_to_terms" name="agree_to_terms" class="mt-0.5 rounded border-white/20 bg-white/5 text-primary-500 focus:ring-primary-400" required>
										<label for="tutor_checkout_agree_to_terms" class="cursor-pointer">
											Acepto los <a target="_blank" href="<?php echo esc_url( $tutor_toc_page_link ); ?>" class="text-primary-400 hover:underline">Términos de Servicio</a>
											<?php if ( null !== $tutor_privacy_page_link ) : ?>
												y la <a target="_blank" href="<?php echo esc_url( $tutor_privacy_page_link ); ?>" class="text-primary-400 hover:underline">Política de Privacidad</a>
											<?php endif; ?>
											de STB Academy.
										</label>
									</div>
								<?php endif; ?>
							</div>

							<!-- Alertas y Mensajes de Error -->
							<?php
							$pay_now_errors    = get_transient( CheckoutController::PAY_NOW_ERROR_TRANSIENT_KEY . $user_id );
							$pay_now_alert_msg = get_transient( CheckoutController::PAY_NOW_ALERT_MSG_TRANSIENT_KEY . $user_id );

							delete_transient( CheckoutController::PAY_NOW_ALERT_MSG_TRANSIENT_KEY . $user_id );
							delete_transient( CheckoutController::PAY_NOW_ERROR_TRANSIENT_KEY . $user_id );
							if ( $pay_now_errors || $pay_now_alert_msg ) :
								?>
								<div class="space-y-2">
									<?php if ( ! empty( $pay_now_alert_msg ) ) : 
										list( $alert, $message ) = array_values( $pay_now_alert_msg );
										?>
										<div class="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-xs text-yellow-300">
											<?php echo esc_html( $message ); ?>
										</div>
									<?php endif; ?>

									<?php if ( is_array( $pay_now_errors ) && count( $pay_now_errors ) ) : ?>
										<div class="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-xs text-red-300 space-y-1">
											<?php foreach ( $pay_now_errors as $pay_now_err ) : ?>
												<div>• <?php echo esc_html( ucfirst( str_replace( '_', ' ', $pay_now_err ) ) ); ?></div>
											<?php endforeach; ?>
										</div>
									<?php endif; ?>
								</div>
							<?php endif; ?>

							<!-- Botón de Envío / Pagar Ahora -->
							<?php $enable_pay_now_btn = apply_filters( 'tutor_checkout_enable_pay_now_btn', true, $checkout_data ); ?>
							<div>
								<button type="submit" <?php echo $enable_pay_now_btn ? '' : 'disabled'; ?> id="tutor-checkout-pay-now-button" class="tutor-btn tutor-btn-primary w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-500 hover:bg-primary-400 text-black font-extrabold text-sm py-4 px-6 shadow-[0_0_25px_rgba(84,180,53,0.4)] transition-all transform active:scale-98 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
									</svg>
									<span><?php echo esc_html( $pay_now_btn_text ? $pay_now_btn_text : 'Completar Inscripción' ); ?></span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
<?php
if ( ! is_user_logged_in() ) {
	tutor_load_template_from_custom_path( tutor()->path . '/views/modal/login.php' );
}
?>
