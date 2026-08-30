<?php
/**
 * Payment gateways modal for subscription.
 *
 * @package TutorPro\Subscription
 * @subpackage Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 3.4.0
 */

use Tutor\Components\Alert;
use Tutor\Components\Button;
use Tutor\Components\SvgIcon;
use Tutor\Components\Constants\Color;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use Tutor\Components\InputField;
use Tutor\Ecommerce\BillingController;
use Tutor\Models\BillingModel;
use TUTOR\Icon;

$data = isset( $data ) ? $data : null;
if ( is_null( $data ) ) {
	return;
}

$order_id                = (int) $data['order_id'];
$modal_id                = $data['modal_id'] ?? '';
$tutor_toc_page_link     = tutor_utils()->get_toc_page_link();
$tutor_privacy_page_link = tutor_utils()->get_privacy_page_link();
$form_id                 = 'payment-gateway-form';

$default_values        = BillingController::get_default_values();
$country_state_options = BillingController::get_country_state_options();

$country_options = $country_state_options->country_options;
$state_mapping   = $country_state_options->state_options;

$billing_country = $default_values['billing_country'] ?? '';
$initial_states  = $state_mapping[ $billing_country ] ?? array();

$billing_model         = new BillingModel();
$has_billing_info      = $billing_model->has_complete_billing_info( $default_values );
$billing_display_lines = $billing_model->get_formatted_billing_display_data( $default_values, $country_options );

?>
<form 
	id="<?php echo esc_attr( $form_id ); ?>"
	method="POST"
	x-data="{
		...tutorForm({ 
			id: '<?php echo esc_attr( $form_id ); ?>', 
			defaultValues: <?php echo esc_attr( wp_json_encode( $default_values ) ); ?>,
			stateOptions: <?php echo esc_attr( wp_json_encode( $state_mapping ) ); ?>,
			mode: 'onSubmit', 
			shouldFocusError: true,
		}),
		editBilling: <?php echo $has_billing_info ? 'false' : 'true'; ?>,
	}"
	x-bind="getFormBindings()"
	x-init="$watch('values.billing_country', () => !isResetting && setValue('billing_state', '', { shouldDirty: true }))"
	@submit.prevent="handleSubmit(async(data) => { 
		$el.submit();
		await new Promise(() => {});  
	})($event)"
>

	<?php tutor_nonce_field( true ); ?>
	<input type="hidden" name="tutor_action" value="tutor_pay_incomplete_order">
	<input type="hidden" name="order_id" value="<?php echo esc_attr( $order_id ); ?>">

	<div class="tutor-flex tutor-items-center tutor-justify-between tutor-px-7 tutor-pt-6 tutor-pb-4">
		<h5 class="tutor-h5 tutor-font-semibold">
			<?php echo esc_html__( 'Checkout', 'tutor-pro' ); ?>
		</h5>
		<?php
		Button::make()
			->label( __( 'Close modal', 'tutor-pro' ) )
			->variant( Variant::GHOST )
			->size( Size::X_SMALL )
			->icon( Icon::CROSS_2 )
			->icon_only()
			->attr( 'type', 'button' )
			->attr( '@click', "TutorCore.modal.closeModal('{$modal_id}')" )
			->render();
		?>
	</div>

	<div class="tutor-payment-modal-contents">
		<?php if ( $has_billing_info ) : ?>
			<div class="tutor-payment-form-contents tutor-surface-base tutor-border tutor-rounded-lg" x-show="!editBilling" x-cloak>
				<div class="tutor-flex tutor-p-6 tutor-items-center tutor-justify-between">
					<div class="tutor-flex tutor-items-center tutor-gap-2">
						<span class="tutor-icon tutor-icon-md tutor-text-primary">
							<?php
								SvgIcon::make()
									->name( Icon::MAP_PIN )
									->color( Color::BRAND )
									->size( 20 )
									->render();
							?>
						</span>
						<h6 class="tutor-medium tutor-mb-none tutor-font-semibold">
							<?php echo esc_html__( 'Billing Address', 'tutor-pro' ); ?>
						</h6>
					</div>
					<?php
						Button::make()
							->variant( Variant::LINK )
							->size( Size::SMALL )
							->label( __( 'Edit', 'tutor-pro' ) )
							->attr( 'type', 'button' )
							->attr( '@click', 'editBilling = true' )
							->render();
					?>
				</div>
				<hr class="tutor-my-none" style="border-color: var(--tutor-border-idle);">
				<div class="tutor-p-6 tutor-flex tutor-flex-column tutor-gap-1">
					<?php foreach ( $billing_display_lines as $key => $line ) : ?>
						<div class="<?php echo 'name' === $key ? 'tutor-mb-2 tutor-small tutor-font-semibold' : 'tutor-small tutor-text-secondary'; ?>">
								<?php echo esc_html( $line ); ?>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		<?php endif; ?>

		<div 
			class="tutor-payment-form tutor-flex tutor-flex-column tutor-gap-2 tutor-surface-base tutor-p-6 tutor-border tutor-rounded-lg"
			x-show="<?php echo $has_billing_info ? 'editBilling' : 'true'; ?>"
			x-cloak
		>
			<?php
			tutor_load_template(
				'ecommerce.billing-form-fields',
				array(
					'show_close_button' => $has_billing_info,
					'close_action'      => 'editBilling = false',
					'country_options'   => $country_options,
					'initial_states'    => $initial_states,
				)
			);
			?>
		</div>

		<h6 class="tutor-medium tutor-font-semibold tutor-mt-6 tutor-mb-none">
			<?php echo esc_html__( 'Select Payment Method', 'tutor-pro' ); ?>
		</h6>

		<div class="tutor-mt-4">
			<?php
			$supported_gateways = tutor_get_subscription_supported_payment_gateways();
			if ( empty( $supported_gateways ) ) {
				Alert::make()
					->variant( Alert::WARNING )
					->text( __( 'No payment method found. Please contact the site administrator.', 'tutor-pro' ) )
					->render();
			} else {
				?>
				<div class="tutor-payment-modal-payments">
					<?php
					foreach ( $supported_gateways as $gateway ) {
						list('name' => $name, 'label' => $label, 'icon' => $icon) = $gateway;
						?>
						<div class="tutor-input-field">
							<div class="tutor-input-wrapper">
								<input 
									type="radio"
									id="<?php echo esc_attr( 'payment_method_' . $name ); ?>"
									name="payment_method"
									class="tutor-radio tutor-radio-md"
									value="<?php echo esc_attr( $name ); ?>"
									x-bind="register('payment_method', { required: true })"
									<?php echo count( $supported_gateways ) === 1 ? 'checked' : ''; ?> required
								>
								<label for="<?php echo esc_attr( 'payment_method_' . $name ); ?>" class="tutor-label tutor-flex-1">
									<?php if ( ! empty( $icon ) ) : ?>
										<img src="<?php echo esc_url( $icon ); ?>" alt="<?php echo esc_attr( $name ); ?>" width="20px" height="20px" />
									<?php endif; ?>
									<?php echo esc_html( $label ); ?>
								</label>
							</div>
						</div>
						<?php
					}
					?>
				</div>
				<?php
			}
			?>
			<div class="tutor-input-field">
				<div 
					class="tutor-error-text"
					x-cloak 
					x-show="errors.payment_method" 
					x-text="errors?.payment_method?.message" 
					role="alert" 
					aria-live="polite">
				</div>
			</div>
		</div>

		<?php if ( null !== $tutor_toc_page_link ) : ?>
			<div class="tutor-mt-6">
				<?php
				$terms_label = sprintf(
					'%s <a target="_blank" href="%s" class="tutor-text-brand">%s</a>%s',
					esc_html__( "I agree with the website's", 'tutor-pro' ),
					esc_url( $tutor_toc_page_link ),
					esc_html__( 'Terms of Use', 'tutor-pro' ),
					null !== $tutor_privacy_page_link
						? sprintf(
							' %s <a target="_blank" href="%s" class="tutor-text-brand">%s</a>',
							esc_html__( 'and', 'tutor-pro' ),
							esc_url( $tutor_privacy_page_link ),
							esc_html__( 'Privacy Policy', 'tutor-pro' )
						)
						: ''
				);

				InputField::make()
					->type( 'checkbox' )
					->id( 'agree_to_terms' )
					->name( 'agree_to_terms' )
					->label_html( $terms_label )
					->required( true )
					->attr( 'x-bind', "register('agree_to_terms', { required: true })" )
					->attr( 'class', 'tutor-payment-terms-checkbox' )
					->render();
				?>
			</div>
			<?php
		endif;
		?>
	</div>

	<div class="tutor-flex tutor-justify-end tutor-px-6 tutor-py-5 tutor-border-t">
		<?php
		Button::make()
			->variant( Variant::PRIMARY )
			->label( __( 'Pay Now', 'tutor-pro' ) )
			->size( Size::SMALL )
			->attr( 'type', 'submit' )
			->attr( ':disabled', 'isSubmitting' )
			->attr( ':class', '{ "tutor-btn-loading": isSubmitting }' )
			->render();
		?>
	</div>
</form>
