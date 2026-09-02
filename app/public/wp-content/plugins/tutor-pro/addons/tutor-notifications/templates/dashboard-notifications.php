<?php
/**
 * Dashboard notifications trigger and containers.
 *
 * @since 4.0.0
 *
 * @package TutorPro\Addons\TutorNotifications
 */

defined( 'ABSPATH' ) || exit;

use TUTOR\Icon;
use Tutor\Components\Button;
use Tutor\Components\Modal;
use Tutor\Components\Constants\Positions;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;

$popover_body_template   = tutor_notifications()->path . 'templates/dashboard-notifications/popover-body.php';
$modal_body_template     = tutor_notifications()->path . 'templates/dashboard-notifications/modal-body.php';
$offcanvas_body_template = tutor_notifications()->path . 'templates/dashboard-notifications/offcanvas-body.php';

?>

<div
	class="tutor-dashboard-notification"
	x-data='tutorNotification()'
>
	<div
		class="tutor-sm-hidden"
		x-data="tutorPopover({ 
			placement: '<?php echo esc_attr( Positions::BOTTOM_END ); ?>' 
		})">
		<div class="tutor-dashboard-notification-trigger-wrap">
			<?php
				Button::make()
					->label( __( 'Show notifications', 'tutor-pro' ) )
					->variant( Variant::OUTLINE )
					->size( Size::X_SMALL )
					->icon_only()
					->icon( Icon::NOTIFICATION )
					->attr( 'x-ref', 'trigger' )
					->attr( 'x-on:click', 'toggle()' )
					->render();
			?>
			<span class="tutor-dashboard-notification-badge" x-show="unreadCount > 0" x-cloak></span>
		</div>
		<div
			x-ref="content"
			x-show="open"
			x-cloak
			x-transition.right.top
			class="tutor-popover tutor-popover-bottom-end"
			x-on:click.outside="handleClickOutside()"
		>
			<?php
			tutor_load_template_from_custom_path(
				$popover_body_template,
				array(
					'modal_id' => 'tutor-dashboard-notifications-modal',
				)
			);
			?>
		</div>
	</div>

	<div class="tutor-dashboard-notification-trigger-wrap" data-menu-trigger>
		<?php
			Button::make()
				->variant( Variant::GHOST )
				->size( Size::X_SMALL )
				->icon_only()
				->icon( Icon::NOTIFICATION )
				->attr( 'class', 'tutor-dashboard-notification-trigger' )
				->attr( 'x-on:click', 'openOffcanvas()' )
				->attr( 'aria-label', __( 'Open notifications', 'tutor-pro' ) )
				->render();
		?>
		<span class="tutor-dashboard-notification-badge" x-show="unreadCount > 0" x-cloak></span>
	</div>

	<?php
		Modal::make()
			->id( 'tutor-dashboard-notifications-modal' )
			->closeable( false )
			->template( $modal_body_template )
			->width( '560px' )
			->render();
	?>

	<?php
		tutor_load_template_from_custom_path( $offcanvas_body_template );
	?>
</div>
