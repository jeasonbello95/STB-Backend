<?php
/**
 * Notification popover body template.
 *
 * @since 4.0.0
 *
 * @package TutorPro\Addons\TutorNotifications
 */

defined( 'ABSPATH' ) || exit;

use TUTOR\Icon;
use Tutor\Components\Button;
use Tutor\Components\EmptyState;
use Tutor\Components\Constants\Size;
use Tutor\Components\Constants\Variant;

$modal_id     = $data['modal_id'] ?? 'tutor-dashboard-notifications-modal';
$settings_url = tutor_utils()->tutor_dashboard_url( 'account/settings/?tab=notifications' ) ?? '#';
$item_path    = tutor_notifications()->path . 'templates/dashboard-notifications/item.php';

$tabs_data = array(
	array(
		'id'    => 'all',
		'label' => __( 'All', 'tutor-pro' ),
	),
	array(
		'id'    => 'unread',
		'label' => __( 'Unread', 'tutor-pro' ),
	),
);

?>

<div
	class="tutor-flex tutor-flex-column tutor-p-6"
>
	<div
		x-data='tutorTabs({
			tabs: <?php echo wp_json_encode( $tabs_data ); ?>,
			size: "sm",
			defaultTab: "all",
			urlParams: {
				enabled: false,
			}
		})'
	>
		<div class="tutor-flex tutor-justify-between tutor-items-center tutor-mb-3">
			<div class="tutor-medium tutor-font-semibold">
				<?php esc_html_e( 'Notifications', 'tutor-pro' ); ?>
			</div>

			<?php
				Button::make()
					->tag( 'a' )
					->icon_only()
					->label( __( 'Settings', 'tutor-pro' ) )
					->size( Size::X_SMALL )
					->variant( Variant::GHOST )
					->icon( Icon::SETTING )
					->attr( 'href', esc_url( $settings_url ) )
					->render();
			?>
		</div>

		<div class="tutor-notification-tabs-wrapper tutor-rounded-2xl tutor-border tutor-border-idle2 tutor-overflow-hidden">
			<div class="tutor-flex tutor-justify-between tutor-items-center tutor-p-4 tutor-border-b">
				<div x-ref="tablist" class="tutor-tabs-nav" role="tablist" aria-orientation="horizontal">
					<template x-for="tab in tabs" x-bind:key="tab.id">
					<button
							type="button"
							role="tab"
							x-bind:class="getTabClass(tab)"
							x-bind:aria-selected="isActive(tab.id)"
							x-bind:disabled="tab.disabled ? true : false"
							x-on:click="selectTab(tab.id)"
						>
							<span x-text="tab.label"></span>
							<template x-if="tab.id === 'unread'">
								<span x-text="' (' + unreadCount + ')'"></span>
							</template>
						</button>
					</template>
				</div>

				<?php
					Button::make()
						->label( __( 'Mark all as read', 'tutor-pro' ) )
						->size( Size::X_SMALL )
						->variant( Variant::LINK )
						->attr( 'x-show', '!getNotificationsQuery || getNotificationsQuery.isLoading || allNotifications.length > 0' )
						->attr( 'x-cloak', true )
						->attr( 'x-on:click', 'markAllAsRead()' )
						->render();
				?>
			</div>

			<div class="tutor-dashboard-notification-list is-popover" x-show="activeTab === 'all'" x-cloak>
				<div class="tutor-dashboard-notification-loading" x-show="getNotificationsQuery.isLoading" x-cloak>
					<span class="tutor-loading-spinner"></span>
				</div>
				<template x-if="!getNotificationsQuery.isLoading && popoverNotifications.length === 0">
					<?php
						EmptyState::make()
							->title( __( 'No Notifications Yet!', 'tutor-pro' ) )
							->subtitle( __( 'You are all caught up for now.', 'tutor-pro' ) )
						->attr( 'class', 'tutor-dashboard-notification-empty-state' )
							->render();
					?>
				</template>
				<template x-if="!getNotificationsQuery.isLoading">
					<template x-for="notification in popoverNotifications" :key="notification.ID">
					<?php
					tutor_load_template_from_custom_path(
						$item_path,
						array(),
						false
					);
					?>
					</template>
				</template>
			</div>

			<div class="tutor-dashboard-notification-list is-popover" x-show="activeTab === 'unread'" x-cloak>
				<div class="tutor-dashboard-notification-loading" x-show="getNotificationsQuery.isLoading" x-cloak>
					<span class="tutor-loading-spinner tutor-border-t"></span>
				</div>
				<template x-if="!getNotificationsQuery.isLoading && popoverUnreadNotifications.length === 0">
					<?php
						EmptyState::make()
							->title( __( 'No Unread Notifications!', 'tutor-pro' ) )
							->subtitle( __( 'All notifications are marked as read.', 'tutor-pro' ) )
							->render();
					?>
				</template>
				<template x-if="!getNotificationsQuery.isLoading">
					<template x-for="notification in popoverUnreadNotifications" :key="notification.ID">
					<?php
					tutor_load_template_from_custom_path(
						$item_path,
						array(
							'is_unread' => true,
						),
						false
					);
					?>
					</template>
				</template>
			</div>
		</div>
	</div>

	<div class="tutor-flex tutor-justify-center tutor-mt-4">
		<?php
			Button::make()
				->label( __( 'View all notifications', 'tutor-pro' ) )
				->size( Size::X_SMALL )
				->variant( Variant::LINK )
				->icon( Icon::CHEVRON_RIGHT_2, 'right' )
				->flip_rtl()
				->attr( '@click', sprintf( 'TutorCore.modal.showModal("%s")', $modal_id ) )
				->render();
		?>
	</div>
</div>
