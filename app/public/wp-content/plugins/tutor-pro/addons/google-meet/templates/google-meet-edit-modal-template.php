<?php
/**
 * Google meet edit modal template.
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

$meeting_title_err                 = __( 'Meeting Title is required', 'tutor-pro' );
$meeting_summary_err               = __( 'Meeting Summary is required', 'tutor-pro' );
$meeting_start_date_err            = __( 'Meeting Start Date is required', 'tutor-pro' );
$meeting_start_time_err            = __( 'Meeting Start Time is required', 'tutor-pro' );
$meeting_end_date_err              = __( 'Meeting End Date is required', 'tutor-pro' );
$meeting_end_time_err              = __( 'Meeting End Time is required', 'tutor-pro' );
$meeting_start_date_is_greater_err = __( 'Meeting Start Date is greater than End Date', 'tutor-pro' );
$meeting_start_time_is_greater_err = __( 'Meeting Start Time is greater than End Time', 'tutor-pro' );

?>

<div class="tutor-google-meet-edit-modal-content">
	<form 
		id='<?php echo esc_attr( $data['edit_meeting_form_id'] ); ?>'
		x-data="tutorForm({ id: '<?php echo esc_attr( $data['edit_meeting_form_id'] ); ?>'})"
		x-bind="getFormBindings()"
		@submit="handleSubmit((data) => handleGoogleMeetUpdateMeeting(data))($event)"
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
			<div class="tutor-google-meet-edit-date tutor-flex">
				<?php
					InputField::make()
						->type( InputType::DATE )
						->name( 'meeting_start_date' )
						->attr(
							'x-bind',
							"register('meeting_start_date', { required: '$meeting_start_date_err', 
							validate: (value) => {
								const endDate = new Date(watch('meeting_end_date'));
								const startDate = new Date(value);
								return startDate <= endDate ? true : '$meeting_start_date_is_greater_err';
							} })"
						)
						->render();
					InputField::make()
						->name( 'meeting_start_time' )
						->type( InputType::TIME )
						->attr(
							'x-bind',
							"register('meeting_start_time', { required: '$meeting_start_time_err',
							validate: (value) => {
								const endTime = watch('meeting_end_time');
								const startDate = new Date( watch('meeting_start_date') + ' ' + value);
								const endDate = new Date( watch('meeting_end_date') + ' ' + endTime);
								return startDate <= endDate ? true : '$meeting_start_time_is_greater_err';
							} 
						 })"
						)
						->render();
					?>
			</div>
			<p class="tutor-small tutor-font-medium tutor-mb-3"><?php esc_html_e( 'End Date', 'tutor-pro' ); ?></p>
			<div class="tutor-google-meet-edit-date tutor-flex">
				<?php
					InputField::make()
						->type( InputType::DATE )
						->name( 'meeting_end_date' )
						->attr(
							'x-bind',
							"register('meeting_end_date', { required: '$meeting_end_date_err',
							validate: (value) => {
								const endDate = new Date(value);
								const startDate = new Date(watch('meeting_start_date'));
								return startDate <= endDate ? true : '$meeting_start_date_is_greater_err';
							}
						 })"
						)
						->render();
					InputField::make()
						->name( 'meeting_end_time' )
						->type( InputType::TIME )
						->attr(
							'x-bind',
							"register('meeting_end_time', { required: '$meeting_end_time_err',
							validate: (value) => {
								const startTime = watch('meeting_start_time');
								const startDate = new Date( watch('meeting_start_date') + ' ' + startTime);
								const endDate = new Date( watch('meeting_end_date') + ' ' + value);
								return startDate <= endDate ? true : '$meeting_start_time_is_greater_err';
							} 
						 })"
						)
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
					->attr( 'class', 'tutor-pb-5' )
					->attr( 'x-bind', "register('meeting_timezone')" )
					->render();
				InputField::make()
					->name( 'meeting_attendees_enroll_students' )
					->type( InputType::CHECKBOX )
					->attr( 'x-bind', "register('meeting_attendees_enroll_students')" )
					->label( __( 'Add Enrolled Students as Attendees', 'tutor-pro' ) )
					->render()
			?>
		</div>
	</form>
</div>