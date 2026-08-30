<?php
/**
 * Zoom modal template for edit modal.
 *
 * @package TutorPro\Templates
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Constants\InputType;
use Tutor\Components\InputField;

$timezones                 = tutor_global_timezone_lists();
$timezone_settings_options = array_map(
	function ( $value, $label ) {
		return array(
			'label' => $label,
			'value' => $value,
		);
	},
	array_keys( $timezones ),
	array_values( $timezones )
);


$meeting_title_err      = __( 'Meeting Title is required', 'tutor-pro' );
$meeting_summary_err    = __( 'Meeting Summary is required', 'tutor-pro' );
$meeting_start_date_err = __( 'Meeting Start Date is required', 'tutor-pro' );
$meeting_start_time_err = __( 'Meeting Start Time is required', 'tutor-pro' );
$meeting_duration_err   = __( 'Meeting Duration is required', 'tutor-pro' );
$meeting_password_err   = __( 'Meeting Password is required', 'tutor-pro' );


?>
<div class="tutor-zoom-edit-modal-content">
	<form
		id='<?php echo esc_attr( $data['edit_meeting_form_id'] ?? '' ); ?>'
		x-data="tutorForm({ id: 'tutor-zoom-meeting-edit-form' })"
		x-bind="getFormBindings()"
		@submit="handleSubmit((data) => handleZoomUpdateMeeting(data))($event)"
	>
		<?php
			InputField::make()
				->name( 'meeting_title' )
				->label( __( 'Meeting Name', 'tutor-pro' ) )
				->placeholder( __( 'Enter Meeting Name', 'tutor-pro' ) )
				->attr( 'x-bind', "register('meeting_title', { required: '$meeting_title_err' })" )
				->attr( 'class', 'tutor-pb-5' )
				->render();
			InputField::make()
				->name( 'meeting_summary' )
				->label( __( 'Meeting Summary', 'tutor-pro' ) )
				->type( InputType::TEXTAREA )
				->placeholder( __( 'Type your summary...', 'tutor-pro' ) )
				->attr( 'class', 'tutor-pb-5' )
				->attr( 'x-bind', "register('meeting_summary', { required: '$meeting_summary_err' })" )
				->render();
		?>
		<p class="tutor-small tutor-font-medium tutor-mb-3"><?php esc_html_e( 'Meeting Time', 'tutor-pro' ); ?></p>
		<div class="date-time-content tutor-mb-5">
			<p class="tutor-small tutor-font-medium tutor-mb-3"><?php esc_html_e( 'Start Date', 'tutor-pro' ); ?></p>
			<div class="tutor-zoom-settings-duration tutor-flex">
				<?php
					InputField::make()
						->type( InputType::DATE )
						->name( 'meeting_date' )
						->attr( 'x-bind', "register('meeting_date', { required: '$meeting_start_date_err' })" )
						->render();
					InputField::make()
						->name( 'meeting_time' )
						->type( InputType::TIME )
						->attr( 'x-bind', "register('meeting_time', { required: '$meeting_start_time_err' })" )
						->render();
				?>
			</div>
			<p class="tutor-small tutor-font-medium tutor-mb-3"><?php esc_html_e( 'Duration', 'tutor-pro' ); ?></p>
			<div class="tutor-zoom-settings-duration tutor-flex">
				<?php
					InputField::make()
						->name( 'meeting_duration' )
						->type( InputType::NUMBER )
						->value( 60 )
						->attr( 'x-bind', "register('meeting_duration', { required: '$meeting_duration_err' })" )
						->render();
					InputField::make()
						->name( 'meeting_duration_unit' )
						->type( InputType::SELECT )
						->options(
							array(
								array(
									'label' => __( 'Minutes', 'tutor-pro' ),
									'value' => 'min',
								),
								array(
									'label' => __( 'Hours', 'tutor-pro' ),
									'value' => 'hr',
								),
							)
						)
						->value( 'minutes' )
						->attr( 'x-bind', "register('meeting_duration_unit')" )
						->render();
					?>
			</div>
			<?php
				InputField::make()
					->label( __( 'Timezone', 'tutor-pro' ) )
					->name( 'meeting_timezone' )
					->type( InputType::SELECT )
					->options( $timezone_settings_options )
					->value( $timezone_settings_options[0]['value'] ?? '' )
					->render();
			?>
		</div>
		<p class="tutor-small tutor-font-medium tutor-mb-3"><?php esc_html_e( 'Meeting Host', 'tutor-pro' ); ?></p>
		<div class="host-content">
			<?php
				InputField::make()
					->name( 'meeting_host_name' )
					->label( __( 'Host', 'tutor-pro' ) )
					->disabled()
					->value( 'Helllo(asdas)' )
					->attr( 'x-bind', "register('meeting_host_name')" )
					->render();
				InputField::make()
					->name( 'meeting_password' )
					->label( __( 'Password', 'tutor-pro' ) )
					->type( InputType::PASSWORD )
					->attr( 'x-bind', "register('meeting_password', { required: '$meeting_password_err' })" )
					->render();
				InputField::make()
					->name( 'auto_recording' )
					->type( InputType::SELECT )
					->label( __( 'Auto Recording', 'tutor-pro' ) )
					->options(
						array(
							array(
								'label' => __( 'No Recordings', 'tutor-pro' ),
								'value' => 'none',
							),
							array(
								'label' => __( 'Local', 'tutor-pro' ),
								'value' => 'local',
							),
							array(
								'label' => __( 'Cloud', 'tutor-pro' ),
								'value' => 'cloud',
							),
						)
					)
					->value( 'none' )
					->attr( 'x-bind', "register('auto_recording')" )
					->render();
				?>
		</div>
	</form>
</div>
