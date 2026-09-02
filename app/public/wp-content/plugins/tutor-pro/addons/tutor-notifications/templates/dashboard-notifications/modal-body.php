<?php
/**
 * Notification modal body template.
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

$item_path = tutor_notifications()->path . 'templates/dashboard-notifications/item.php';

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

<div class="tutor-dashboard-notification-modal">
	<div x-data='tutorTabs({
		tabs: <?php echo wp_json_encode( $tabs_data ); ?>,
		defaultTab: "all",
		urlParams: {
			enabled: false,
		}
	})'>
		<div class="tutor-flex tutor-justify-between tutor-items-center tutor-p-6 tutor-border-b tutor-sticky tutor-top-0 tutor-z-positive tutor-surface-l1">
			<div class="tutor-tabs-nav" x-ref="tablist" role="tablist" aria-orientation="horizontal">
				<template x-for="tab in tabs" :key="tab.id">
					<button
						type="button"
						role="tab"
						:class='getTabClass(tab)'
						x-bind:aria-selected="isActive(tab.id)"
						@click="selectTab(tab.id)"
					>
						<span x-text="tab.label"></span>
						<template x-if="tab.id === 'unread'">
							<span x-text="' (' + unreadCount + ')'"></span>
						</template>
					</button>
				</template>
			</div>

			<div class="tutor-flex tutor-gap-4">
				<?php
					Button::make()
						->label( __( 'Mark all as read', 'tutor-pro' ) )
						->size( Size::X_SMALL )
						->variant( Variant::LINK )
						->attr( 'class', 'tutor-p-0' )
						->attr( 'x-show', '!getNotificationsQuery || getNotificationsQuery.isLoading || allNotifications.length > 0' )
						->attr( 'x-cloak', true )
						->attr( 'x-on:click', 'markAllAsRead()' )
						->render();
				?>
				<?php
					Button::make()
						->label( __( 'Close modal', 'tutor-pro' ) )
						->icon_only()
						->icon( Icon::CROSS_2 )
						->size( Size::X_SMALL )
						->variant( Variant::LINK_GRAY )
						->attr( 'x-on:click', 'close()' )
						->render();
				?>
			</div>
		</div>

		<div class="tutor-dashboard-notification-list is-modal" x-show="activeTab === 'all'" x-cloak>
			<div class="tutor-dashboard-notification-loading" x-show="getNotificationsQuery.isLoading" x-cloak>
				<span class="tutor-loading-spinner"></span>
			</div>
			<template x-if="!getNotificationsQuery.isLoading && allNotifications.length === 0">
				<?php
					EmptyState::make()
						->title( __( 'No Notifications Yet!', 'tutor-pro' ) )
						->subtitle( __( 'You are all caught up for now.', 'tutor-pro' ) )
						->attr( 'class', 'tutor-dashboard-notification-empty-state' )
						->render();
				?>
			</template>
			<template x-if="!getNotificationsQuery.isLoading">
				<template x-for="notification in allNotifications" :key="notification.ID">
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

		<div class="tutor-dashboard-notification-list is-modal" x-show="activeTab === 'unread'" x-cloak>
			<div class="tutor-dashboard-notification-loading" x-show="getNotificationsQuery.isLoading" x-cloak>
				<span class="tutor-loading-spinner tutor-border-t"></span>
			</div>
			<template x-if="!getNotificationsQuery.isLoading && unreadNotifications.length === 0">
				<?php
					EmptyState::make()
						->title( __( 'No Unread Notifications!', 'tutor-pro' ) )
						->subtitle( __( 'All notifications are marked as read.', 'tutor-pro' ) )
						->render();
				?>
			</template>
			<template x-if="!getNotificationsQuery.isLoading">
				<template x-for="notification in unreadNotifications" :key="notification.ID">
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
