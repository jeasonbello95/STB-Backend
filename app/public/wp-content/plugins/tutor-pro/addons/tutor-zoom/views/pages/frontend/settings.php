<?php
/**
 * Zoom Addon - Set Api Page.
 *
 * @package TutorPro\Addons
 * @subpackage Zoom\Views
 * @author Themeum <support@themeum.com>
 * @link https://themeum.com
 * @since 4.0.0
 */

defined( 'ABSPATH' ) || exit;


use Tutor\Components\InputField;


$zoom_settings_options = $data['zoom_obj']->get_zoom_settings_options();

$index = 0;
?>

<form  x-data="tutorForm({ id: 'google-meet-settings-form' })"
		x-bind="getFormBindings()"
		@submit="handleSubmit((data) => handleSaveSettings({tutor_zoom_settings: data}))($event)">
	<?php
	foreach ( $zoom_settings_options as $key => $option ) :
		++$index;
		$setting = $data['zoom_obj']->get_settings( $key );
		?>
	<div class="tutor-p-5 <?php echo ( $index < ( count( $zoom_settings_options ) ) ? esc_attr( 'tutor-border-b' ) : '' ); ?> tutor-flex tutor-items-center tutor-justify-between">
		<div class="tutor-flex-1">
			<div class="tutor-text-small tutor-text-primary"><?php echo esc_html( $option['label'] ); ?></div>
			<div class="tutor-tiny tutor-text-subdued tutor-pb-3"><?php echo esc_html( $option['desc'] ); ?></div>
		</div>
		<div>
			<?php
			InputField::make()
				->type( $option['type'] )
				->options( $option['options'] ?? array() )
				->clearable( false )
				->required( false )
				->name( $key )
				->attr( 'x-bind', "register('$key')" )
				->attr( '@change', '() => $el.closest("form").requestSubmit()' )
				->on_change( isset( $option['options'] ) ? '() => $el.closest("form").requestSubmit()' : '' )
				->value( $data['zoom_obj']->get_settings( $key ) )
				->checked( $data['zoom_obj']->get_settings( $key ) )
				->render();
			?>
		</div>
	</div>
	<?php endforeach; ?>
</form>