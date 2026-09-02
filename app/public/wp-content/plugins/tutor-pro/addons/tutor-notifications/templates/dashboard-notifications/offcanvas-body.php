<?php
/**
 * Notification off-canvas body template for small screens.
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
	class="tutor-dashboard-notification-offcanvas"
	x-cloak
	x-bind:class="{ 'is-open': isOffcanvasOpen }"
	x-on:keydown.escape.window="closeOffcanvas()"
>
	<div
		class="tutor-dashboard-notification-offcanvas-backdrop"
		x-show="isOffcanvasOpen"
		x-cloak
		x-on:click="closeOffcanvas()"
		x-transition:enter="tutor-dashboard-fade-enter"
		x-transition:enter-start="tutor-dashboard-fade-enter-start"
		x-transition:enter-end="tutor-dashboard-fade-enter-end"
		x-transition:leave="tutor-dashboard-fade-leave"
		x-transition:leave-start="tutor-dashboard-fade-leave-start"
		x-transition:leave-end="tutor-dashboard-fade-leave-end"
	></div>

	<div
		class="tutor-dashboard-notification-offcanvas-panel"
		x-show="isOffcanvasOpen"
		x-cloak
		x-transition:enter="tutor-dashboard-offcanvas-enter"
		x-transition:enter-start="tutor-dashboard-offcanvas-enter-start"
		x-transition:enter-end="tutor-dashboard-offcanvas-enter-end"
		x-transition:leave="tutor-dashboard-offcanvas-leave"
		x-transition:leave-start="tutor-dashboard-offcanvas-leave-start"
		x-transition:leave-end="tutor-dashboard-offcanvas-leave-end"
	>
		<div class="tutor-dashboard-notification-offcanvas-header">
			<div class="tutor-dashboard-notification-offcanvas-header-slot">
				<?php
					Button::make()
						->icon_only()
						->label( __( 'Back', 'tutor-pro' ) )
						->variant( Variant::GHOST )
						->icon( Icon::ARROW_LEFT_2, 'left', 20 )
						->flip_rtl()
						->attr( 'x-on:click', 'closeOffcanvas()' )
						->render();
				?>
			</div>
			<h4 class="tutor-h4 tutor-dashboard-notification-offcanvas-title">
				<?php esc_html_e( 'Notifications', 'tutor-pro' ); ?>
			</h4>
			<div class="tutor-dashboard-notification-offcanvas-header-slot tutor-text-right">
				<?php
					Button::make()
						->tag( 'a' )
						->icon_only()
						->label( __( 'Settings', 'tutor-pro' ) )
						->variant( Variant::GHOST )
						->icon( Icon::SETTING, 'left', 20 )
						->attr( 'href', esc_url( $settings_url ) )
						->render();
				?>
			</div>
		</div>

		<div
			class="tutor-dashboard-notification-offcanvas-content"
			x-data='tutorTabs({
				tabs: <?php echo wp_json_encode( $tabs_data ); ?>,
				defaultTab: "all",
				urlParams: {
					enabled: false,
				}
			})'
		>
			<div class="tutor-flex tutor-justify-between tutor-items-center tutor-px-6 tutor-py-4 tutor-border-b">
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
			</div>

			<div class="tutor-dashboard-notification-list is-offcanvas" x-show="activeTab === 'all'" x-cloak>
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

			<div class="tutor-dashboard-notification-list is-offcanvas" x-show="activeTab === 'unread'" x-cloak>
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
</div>
