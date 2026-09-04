<?php
/**
 * Cart Template personalizado para STB Academy & Tutor LMS
 * Estilo Dark Cyber / Neon con compatibilidad total con el controlador nativo de Tutor.
 *
 * @package STB_Academy_Core\Templates
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Tutor\Ecommerce\CartController;
use Tutor\Ecommerce\CheckoutController;
use Tutor\Ecommerce\Tax;
use Tutor\Models\CourseModel;

$cart_controller = new CartController();
$get_cart        = $cart_controller->get_cart_items();
$courses         = $get_cart['courses'];
$total_count     = $courses['total_count'];
$course_list     = $courses['results'];

$subtotal         = 0;
$tax_exempt_price = 0;

$checkout_page_url = CheckoutController::get_page_url();

?>
<div class="stb-cart-wrapper tutor-cart-page">
	<div class="tutor-cart-page-wrapper">
		<div class="stb-cart-header mb-8">
			<div class="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-3.5 py-1.5 text-xs font-semibold text-primary-300 mb-3">
				<svg class="w-3.5 h-3.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
				</svg>
				<span>Carrito de Compras</span>
			</div>
			<h1 class="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
				Tu Carrito de <span class="text-gradient">Cursos</span>
			</h1>
			<p class="text-sm text-slate-400 mt-2 max-w-xl">
				Revisa los programas seleccionados para continuar con el proceso de inscripción y pago seguro.
			</p>
		</div>

		<?php if ( is_array( $course_list ) && count( $course_list ) ) : ?>
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
				<!-- Listado de Cursos en el Carrito (8 Columnas) -->
				<div class="lg:col-span-8 space-y-4">
					<div class="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-semibold text-slate-400 uppercase tracking-wider">
						<span><?php echo esc_html( sprintf( _n( '%d Curso seleccionado', '%d Cursos seleccionados', $total_count, 'tutor' ), $total_count ) ); ?></span>
						<a href="<?php echo esc_url( home_url( '/cursos' ) ); ?>" class="text-primary-400 hover:text-primary-300 font-medium normal-case flex items-center gap-1 transition-colors">
							+ Agregar más cursos
						</a>
					</div>

					<div class="tutor-cart-course-list space-y-4">
						<?php
						foreach ( $course_list as $key => $course ) :
							$course_duration  = get_tutor_course_duration_context( $course->ID, true );
							$course_price     = tutor_utils()->get_raw_course_price( $course->ID );
							$regular_price    = $course_price->regular_price;
							$sale_price       = $course_price->sale_price;
							$display_price    = $sale_price ? $sale_price : $regular_price;
							$tutor_course_img = get_tutor_course_thumbnail_src( 'medium', $course->ID );
							if ( empty( $tutor_course_img ) ) {
								$tutor_course_img = 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80';
							}

							$subtotal += $display_price;

							$tax_collection = CourseModel::is_tax_enabled_for_single_purchase( $course->ID );
							if ( ! $tax_collection ) {
								$tax_exempt_price += $display_price;
							}

							$course_level = get_tutor_course_level( $course->ID );
							$categories   = get_tutor_course_categories( $course->ID );
							$category_name = ! empty( $categories ) ? $categories[0]->name : 'Academia';
							?>
							<div class="tutor-cart-course-item group relative flex flex-col sm:flex-row items-stretch gap-5 rounded-2xl border border-white/10 bg-[#0E1420]/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-primary-500/40 hover:shadow-[0_8px_30px_rgba(84,180,53,0.12)]">
								<!-- Portada -->
								<div class="relative h-40 sm:h-32 sm:w-48 shrink-0 rounded-xl overflow-hidden bg-slate-950 border border-white/10">
									<a href="<?php echo esc_url( get_the_permalink( $course ) ); ?>" class="block w-full h-full">
										<img src="<?php echo esc_url( $tutor_course_img ); ?>" alt="<?php echo esc_attr( $course->post_title ); ?>" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500">
									</a>
									<span class="absolute top-2 left-2 rounded-md bg-black/80 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-primary-300 border border-white/10">
										<?php echo esc_html( $category_name ); ?>
									</span>
								</div>

								<!-- Info del Curso -->
								<div class="flex flex-1 flex-col justify-between">
									<div>
										<div class="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-1.5">
											<?php if ( $course_duration ) : ?>
												<span class="flex items-center gap-1">
													<svg class="w-3.5 h-3.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<circle cx="12" cy="12" r="10" stroke-width="2"></circle>
														<polyline points="12 6 12 12 16 14" stroke-width="2"></polyline>
													</svg>
													<?php echo esc_html( tutor_utils()->clean_html_content( $course_duration ) ); ?>
												</span>
												<span>•</span>
											<?php endif; ?>
											<span class="rounded bg-white/5 px-2 py-0.5 text-primary-300 font-medium">
												<?php echo esc_html( $course_level ? $course_level : 'Todos los niveles' ); ?>
											</span>
										</div>

										<h3 class="text-base sm:text-lg font-bold text-white group-hover:text-primary-300 transition-colors leading-snug">
											<a href="<?php echo esc_url( get_the_permalink( $course ) ); ?>" style="text-decoration:none;">
												<?php echo esc_html( $course->post_title ); ?>
											</a>
										</h3>
									</div>

									<!-- Precio y Botón de Eliminar -->
									<div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
										<div class="tutor-cart-course-price flex items-baseline gap-2">
											<span class="text-xl font-extrabold text-white">
												<?php tutor_print_formatted_price( $display_price ); ?>
											</span>
											<?php if ( $regular_price && $sale_price && $sale_price !== $regular_price ) : ?>
												<span class="text-xs text-slate-500 line-through">
													<?php tutor_print_formatted_price( $regular_price ); ?>
												</span>
											<?php endif; ?>
										</div>

										<button type="button" class="tutor-btn tutor-btn-link tutor-cart-remove-button inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer" data-course-id="<?php echo esc_attr( $course->ID ); ?>" title="Eliminar del carrito">
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
											</svg>
											<span>Eliminar</span>
										</button>
									</div>
								</div>
							</div>
						<?php endforeach; ?>
					</div>
				</div>

				<!-- Resumen del Pedido (4 Columnas) -->
				<?php
				$should_calculate_tax     = Tax::should_calculate_tax();
				$is_tax_included_in_price = Tax::is_tax_included_in_price();
				$tax_rate                 = Tax::get_user_tax_rate();
				$show_tax_incl_text       = $should_calculate_tax && $tax_rate > 0 && $is_tax_included_in_price;
				$tax_amount               = 0;

				if ( $should_calculate_tax ) {
					$tax_amount        = Tax::calculate_tax( $subtotal, $tax_rate );
					$tax_exempt_amount = Tax::calculate_tax( $tax_exempt_price, $tax_rate );
					$tax_amount        = $tax_amount - $tax_exempt_amount;
				}

				$grand_total = $subtotal;
				if ( ! $is_tax_included_in_price ) {
					$grand_total += $tax_amount;
				}
				?>
				<div class="lg:col-span-4">
					<div class="sticky top-28 rounded-3xl border border-primary-500/30 bg-[#0E1420]/90 p-6 sm:p-7 backdrop-blur-2xl shadow-[0_0_40px_rgba(84,180,53,0.1)] space-y-6">
						<div class="flex items-center justify-between pb-4 border-b border-white/10">
							<h3 class="text-lg font-bold text-white font-display">Resumen del Pedido</h3>
							<span class="rounded-full bg-primary-500/10 border border-primary-500/30 px-2.5 py-0.5 text-[11px] font-bold text-primary-300">
								<?php echo esc_html( $total_count ); ?> item<?php echo $total_count !== 1 ? 's' : ''; ?>
							</span>
						</div>

						<div class="space-y-3 text-sm">
							<div class="flex items-center justify-between text-slate-300">
								<span>Subtotal</span>
								<span class="font-bold text-white"><?php tutor_print_formatted_price( $subtotal ); ?></span>
							</div>

							<?php if ( $should_calculate_tax && $tax_rate > 0 && ! $is_tax_included_in_price ) : ?>
								<div class="flex items-center justify-between text-slate-300">
									<span>Impuestos (<?php echo esc_html( $tax_rate ); ?>%)</span>
									<span class="font-bold text-white"><?php tutor_print_formatted_price( $tax_amount ); ?></span>
								</div>
							<?php endif; ?>

							<div class="pt-3 border-t border-white/10 flex items-baseline justify-between">
								<div>
									<span class="text-base font-bold text-white block">Total a Pagar</span>
									<?php if ( $show_tax_incl_text ) : ?>
										<span class="text-[10px] text-slate-400">(Incl. IVA <?php echo esc_html( tutor_get_formatted_price( $tax_amount ) ); ?>)</span>
									<?php endif; ?>
								</div>
								<span class="text-2xl sm:text-3xl font-black text-primary-400">
									<?php tutor_print_formatted_price( $grand_total ); ?>
								</span>
							</div>
						</div>

						<!-- Botón de Proceder al Checkout -->
						<div class="pt-2">
							<a data-cy="tutor-native-checkout-button" class="tutor-btn tutor-btn-primary w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-500 hover:bg-primary-400 text-black font-extrabold text-sm py-4 px-6 shadow-[0_0_25px_rgba(84,180,53,0.4)] transition-all transform active:scale-98 <?php echo esc_attr( $checkout_page_url ? '' : 'tutor-checkout-page-not-configured opacity-50 cursor-not-allowed' ); ?>" href="<?php echo esc_url( $checkout_page_url ? $checkout_page_url : '#' ); ?>" style="text-decoration:none;">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
								</svg>
								<span>Proceder al Pago Seguro</span>
							</a>
						</div>

						<!-- Insignias de Confianza -->
						<div class="pt-4 border-t border-white/10 space-y-2 text-[11px] text-slate-400">
							<div class="flex items-center gap-2">
								<svg class="w-4 h-4 text-primary-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
								</svg>
								<span>Acceso inmediato e ilimitado de por vida</span>
							</div>
							<div class="flex items-center gap-2">
								<svg class="w-4 h-4 text-primary-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
								</svg>
								<span>Garantía de satisfacción y soporte 24/7</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		<?php else : ?>
			<!-- Estado Vacío (Empty State estilo React) -->
			<div class="tutor-cart-empty-state rounded-3xl border border-white/10 bg-[#0E1420]/60 p-12 sm:p-16 text-center max-w-xl mx-auto backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
				<div class="relative mx-auto h-32 w-32 mb-6 flex items-center justify-center">
					<div class="absolute inset-0 rounded-full bg-primary-500/10 blur-xl"></div>
					<img src="<?php echo esc_url( home_url( '/imagenes/explora-cursos.png' ) ); ?>" alt="Carrito Vacío" class="h-28 w-auto object-contain relative z-10 drop-shadow-[0_0_20px_rgba(84,180,53,0.3)]" onerror="this.src='<?php echo esc_url( tutor()->url . 'assets/images/empty-cart.svg' ); ?>';" />
				</div>

				<h3 class="text-2xl font-bold text-white font-display mb-2">Tu Carrito está Vacío</h3>
				<p class="text-sm text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
					Actualmente no tienes ningún curso en tu carrito. Explora nuestros programas formativos y encuentra tu próxima meta tecnológica.
				</p>

				<a href="<?php echo esc_url( home_url( '/cursos' ) ); ?>" class="inline-flex items-center gap-2 rounded-2xl bg-primary-500 hover:bg-primary-400 text-black font-extrabold text-xs uppercase tracking-wider py-4 px-8 shadow-[0_0_25px_rgba(84,180,53,0.4)] transition-all transform active:scale-98" style="text-decoration:none;">
					<span>Explorar Catálogo de Cursos</span>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
					</svg>
				</a>
			</div>
		<?php endif; ?>
	</div>
</div>
