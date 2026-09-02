<?php
/**
 * Change email form
 *
 * @package Tutor\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Alert;
use Tutor\Components\Button;
use Tutor\Components\Constants\InputType;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;
use Tutor\Components\InputField;
use TUTOR\Icon;

$form_id        = 'tutor-change-email-form';
$default_values = array(
	'new_email'              => '',
	'new_email_confirmation' => '',
	'current_password'       => '',
);
?>

<div class="tutor-modal-body tutor-p-none tutor-border-t" x-data="tutorChangeEmail">
	<form
		id="<?php echo esc_attr( $form_id ); ?>"
		x-data='tutorForm({ 
			id: "<?php echo esc_attr( $form_id ); ?>",
			mode: "onChange",
			defaultValues: <?php echo wp_json_encode( $default_values ); ?>,
		})'
		x-bind="getFormBindings()"
		@submit="handleSubmit((data) => handleChangeEmail(data, '<?php echo esc_attr( $form_id ); ?>'))($event)"
		class="tutor-p-6 tutor-flex tutor-flex-column tutor-gap-6"
	>
		<?php
			InputField::make()
				->type( InputType::EMAIL )
				->label( __( 'New Email', 'tutor-pro' ) )
				->name( 'new_email' )
				->id( 'new_email' )
				->placeholder( __( 'Enter new email', 'tutor-pro' ) )
				->required()
				->attr( 'x-bind', "register('new_email', { required: true })" )
				->render();

			InputField::make()
				->type( InputType::EMAIL )
				->label( __( 'Confirm New Email', 'tutor-pro' ) )
				->name( 'new_email_confirmation' )
				->id( 'new_email_confirmation' )
				->placeholder( __( 'Confirm new email', 'tutor-pro' ) )
				->required()
				->attr( 'x-bind', "register('new_email_confirmation', { required: true })" )
				->render();

			InputField::make()
				->type( InputType::PASSWORD )
				->label( __( 'Current Password', 'tutor-pro' ) )
				->name( 'current_password' )
				->id( 'current_password' )
				->placeholder( __( 'Enter current password', 'tutor-pro' ) )
				->required()
				->attr( 'x-bind', "register('current_password', { required: true })" )
				->render();
		?>

		<?php
			Alert::make()
				->variant( Alert::WARNING )
				->icon( Icon::WARNING_LINE )
				->text( esc_html__( 'This will update your login email address for all future logins.', 'tutor-pro' ) )
				->attr( 'class', 'tutor-rounded-md' )
				->render();
		?>

	</form>
	<div class="tutor-modal-footer tutor-justify-end tutor-flex tutor-gap-5 tutor-py-5 tutor-border-t">
		<?php
		Button::make()
			->label( __( 'Cancel', 'tutor-pro' ) )
			->variant( Variant::SECONDARY )
			->size( Size::SMALL )
			->attr( '@click', "TutorCore.modal.closeModal('change-email-modal')" )
			->render();

		Button::make()
			->label( __( 'Update Email', 'tutor-pro' ) )
			->variant( Variant::PRIMARY )
			->size( Size::SMALL )
			->attr( 'form', $form_id )
			->attr( 'type', 'submit' )
			->attr( ':class', "{ 'tutor-btn-loading': changeEmailMutation?.isPending }" )
			->attr( ':disabled', 'changeEmailMutation?.isPending' )
			->render();
		?>
	</div>
</div>
