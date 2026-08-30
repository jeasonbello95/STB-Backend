<?php
/**
 * Google meet frontend settings page
 *
 * @since 4.0.0
 *
 * @package TutorPro\GoogleMeet\Views
 */

defined( 'ABSPATH' ) || exit;

use Tutor\Components\Constants\InputType;
use Tutor\Components\InputField;
use TutorPro\GoogleMeet\Settings\Settings;

$default_settings  = Settings::default_settings();
$user_settings     = maybe_unserialize( get_user_meta( get_current_user_id(), Settings::META_KEY, true ) );
$timezone_settings = array_shift( $default_settings );

$timezone_settings_options = array_map(
	function ( $value, $label ) {
		return array(
			'label' => $label,
			'value' => $value,
		);
	},
	array_keys( $timezone_settings['options'] ),
	array_values( $timezone_settings['options'] )
);

$flipped              = array_flip( array_map( fn( $val ) => trim( $val ), $timezone_settings['options'] ) );
$user_timezone_option = $user_settings[ $timezone_settings['name'] ] ?? '';
$user_timezone_option = $flipped[ $user_timezone_option ] ?? '';
?>

<div>
	<form 
		x-data="tutorForm({ id: 'google-meet-settings-form' })"
		x-bind="getFormBindings()"
		x-ref="googleMeetSettingsRef"
		@submit="handleSubmit((data) => handleSaveSettings(data))($event)"
	>
		<div class="tutor-p-5 tutor-border-b">
			<div class="tutor-text-small tutor-text-primary tutor-mb-1"><?php echo esc_html( $timezone_settings['label'] ); ?></div>
			<div class="tutor-tiny tutor-text-subdued tutor-pb-3"><?php echo esc_html( $timezone_settings['help_text'] ); ?></div>
			<?php
			InputField::make()
				->type( InputType::SELECT )
				->options( $timezone_settings_options )
				->clearable( false )
				->required( false )
				->searchable()
				->name( $timezone_settings['name'] )
				->value( $user_settings['meeting_timezone'] ?? '' )
				->on_change( '() => $el.closest("form").requestSubmit()' )
				->render();
			?>
		</div>
		<?php foreach ( $default_settings as $key => $settings ) : ?>
			<div class="tutor-p-5 <?php echo ( $key < ( count( $default_settings ) - 1 ) ? esc_attr( 'tutor-border-b' ) : '' ); ?> tutor-google-meet-frontend-settings">
				<div class="tutor-flex-1">
					<div class="tutor-text-small tutor-text-primary tutor-mb-1"><?php echo esc_html( $settings['label'] ); ?></div>
					<div class="tutor-tiny tutor-text-subdued tutor-pb-3"><?php echo esc_html( $settings['help_text'] ); ?></div>
				</div>
				<div>
					<?php
					$user_option = $user_settings[ $settings['name'] ?? '' ] ?? '';
					$user_value  = $settings['options'] ? array_find( $settings['options'], fn( $item ) => strval( $item['value'] ) === strval( $user_option ) ) : '';
					InputField::make()
						->type( InputType::SELECT )
						->options( $settings['options'] ?? array() )
						->clearable( false )
						->required( false )
						->name( $settings['name'] ?? '' )
						->value( $user_value['value'] ?? '' )
						->on_change( '() => $el.closest("form").requestSubmit()' )
						->render();
					?>
				</div>
			</div>
		<?php endforeach; ?>
	</form>
	
</div>