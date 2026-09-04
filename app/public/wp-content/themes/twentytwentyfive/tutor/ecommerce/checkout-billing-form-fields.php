<?php
/**
 * Billing form fields template personalizado para STB Academy
 * Campos de facturación y registro con inputs estilizados en modo oscuro.
 *
 * @package STB_Academy_Core\Templates
 */

use Tutor\Ecommerce\BillingController;

$billing_controller = new BillingController( false );
$billing_info       = $billing_controller->get_billing_info();

$billing_first_name = $billing_info->billing_first_name ?? tutor_utils()->input_old( 'billing_first_name', '' );
$billing_last_name  = $billing_info->billing_last_name ?? tutor_utils()->input_old( 'billing_last_name', '' );
$billing_email      = $billing_info->billing_email ?? tutor_utils()->input_old( 'billing_email', '' );
$billing_phone      = $billing_info->billing_phone ?? tutor_utils()->input_old( 'billing_phone', '' );
$billing_zip_code   = $billing_info->billing_zip_code ?? tutor_utils()->input_old( 'billing_zip_code', '' );
$billing_address    = $billing_info->billing_address ?? tutor_utils()->input_old( 'billing_address', '' );
$billing_country    = $billing_info->billing_country ?? tutor_utils()->input_old( 'billing_country', '' );
$billing_state      = $billing_info->billing_state ?? tutor_utils()->input_old( 'billing_state', '' );
$billing_city       = $billing_info->billing_city ?? tutor_utils()->input_old( 'billing_city', '' );

$country_info = tutor_get_country_info_by_name( $billing_country );
$states       = $country_info && isset( $country_info['states'] ) ? $country_info['states'] : array();
?>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
	<!-- Nombre -->
	<div>
		<label class="block text-xs font-semibold text-slate-300 mb-1.5">
			<?php esc_html_e( 'Nombre', 'tutor' ); ?> <span class="text-primary-400">*</span>
		</label>
		<input class="tutor-form-control w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all" type="text" name="billing_first_name" placeholder="Tu nombre" value="<?php echo esc_attr( $billing_first_name ); ?>" required>
	</div>

	<!-- Apellido -->
	<div>
		<label class="block text-xs font-semibold text-slate-300 mb-1.5">
			<?php esc_html_e( 'Apellido', 'tutor' ); ?> <span class="text-primary-400">*</span>
		</label>
		<input class="tutor-form-control w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all" type="text" name="billing_last_name" placeholder="Tu apellido" value="<?php echo esc_attr( $billing_last_name ); ?>" required>
	</div>

	<!-- Correo Electrónico -->
	<div class="sm:col-span-2">
		<label class="block text-xs font-semibold text-slate-300 mb-1.5">
			<?php esc_html_e( 'Correo Electrónico', 'tutor' ); ?> <span class="text-primary-400">*</span>
		</label>
		<input class="tutor-form-control w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all" type="email" name="billing_email" placeholder="ejemplo@correo.com" value="<?php echo esc_attr( $billing_email ); ?>" required>
	</div>

	<!-- País -->
	<div class="sm:col-span-2">
		<label class="block text-xs font-semibold text-slate-300 mb-1.5">
			<?php esc_html_e( 'País / Región', 'tutor' ); ?> <span class="text-primary-400">*</span>
		</label>
		<select name="billing_country" class="tutor-form-control w-full rounded-xl border border-white/10 bg-[#0E1420] px-3.5 py-2.5 text-xs text-white focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all cursor-pointer" required>
			<option value="" class="bg-[#0E1420] text-slate-400"><?php esc_html_e( 'Selecciona tu país', 'tutor' ); ?></option>
			<?php
			$countries = array_column( tutor_get_country_list(), 'name' );
			foreach ( $countries as $name ) :
				?>
				<option value="<?php echo esc_attr( $name ); ?>" class="bg-[#0E1420] text-white" <?php selected( $billing_country, $name ); ?>>
					<?php echo esc_html( $name ); ?>
				</option>
			<?php endforeach; ?>
		</select>
	</div>

	<!-- Estado / Provincia -->
	<div>
		<label class="block text-xs font-semibold text-slate-300 mb-1.5">
			<?php esc_html_e( 'Estado / Provincia', 'tutor' ); ?>
		</label>
		<select name="billing_state" class="tutor-form-control w-full rounded-xl border border-white/10 bg-[#0E1420] px-3.5 py-2.5 text-xs text-white focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all cursor-pointer">
			<?php if ( empty( $states ) ) : ?>
				<option value="" class="bg-[#0E1420] text-slate-400"><?php esc_html_e( 'N/A', 'tutor' ); ?></option>
			<?php endif; ?>
			<?php if ( $billing_country && ( $states ) ) : ?>
				<option value="" class="bg-[#0E1420] text-slate-400"><?php esc_html_e( 'Selecciona tu estado', 'tutor' ); ?></option>
			<?php endif; ?>
			<?php
			foreach ( $states as $state ) :
				?>
				<option value="<?php echo esc_attr( $state['name'] ); ?>" class="bg-[#0E1420] text-white" <?php selected( $billing_state, $state['name'] ); ?>>
					<?php echo esc_html( $state['name'] ); ?>
				</option>
			<?php endforeach; ?>
		</select>
	</div>

	<!-- Ciudad -->
	<div>
		<label class="block text-xs font-semibold text-slate-300 mb-1.5">
			<?php esc_html_e( 'Ciudad', 'tutor' ); ?> <span class="text-primary-400">*</span>
		</label>
		<input class="tutor-form-control w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all" type="text" name="billing_city" placeholder="Tu ciudad" value="<?php echo esc_attr( $billing_city ); ?>" required>
	</div>

	<!-- Código Postal -->
	<div>
		<label class="block text-xs font-semibold text-slate-300 mb-1.5">
			<?php esc_html_e( 'Código Postal', 'tutor' ); ?>
		</label>
		<input class="tutor-form-control w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all" type="text" name="billing_zip_code" placeholder="Código postal" value="<?php echo esc_attr( $billing_zip_code ); ?>">
	</div>

	<!-- Teléfono -->
	<div>
		<label class="block text-xs font-semibold text-slate-300 mb-1.5">
			<?php esc_html_e( 'Teléfono / WhatsApp', 'tutor' ); ?>
		</label>
		<input class="tutor-form-control w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all" type="text" name="billing_phone" placeholder="+1 234 567 890" value="<?php echo esc_attr( $billing_phone ); ?>">
	</div>

	<!-- Dirección -->
	<div class="sm:col-span-2">
		<label class="block text-xs font-semibold text-slate-300 mb-1.5">
			<?php esc_html_e( 'Dirección', 'tutor' ); ?>
		</label>
		<input class="tutor-form-control w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 transition-all" type="text" name="billing_address" placeholder="Calle, número, departamento" value="<?php echo esc_attr( $billing_address ); ?>">
	</div>
</div>
