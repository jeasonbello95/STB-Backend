<?php
/**
 * Shared notification item template.
 *
 * @since 4.0.0
 *
 * @package TutorPro\Addons\TutorNotifications
 */

defined( 'ABSPATH' ) || exit;

$is_unread = ! empty( $data['is_unread'] );
$unread_js = $is_unread ? 'true' : "notification.status === 'UNREAD'";
?>

<a
	x-bind:href="notification.topic_url || '#'"
	x-bind:data-notification-id="notification.ID || ''"
	x-on:click.prevent='handleNotificationClick($event, notification.status || "", Number(notification.ID || 0))'
	x-bind:class="{ 'is-unread': <?php echo esc_attr( $unread_js ); ?> }"
	class="tutor-dashboard-notification-item"
>
	<span class="tutor-dashboard-notification-unread-dot" x-show="<?php echo esc_attr( $unread_js ); ?>" aria-hidden="true"></span>

	<div class="tutor-dashboard-notification-item-body">
		<div class="tutor-dashboard-notification-item-icon">
			<span x-data="tutorIcon({ name: notificationTypeSelector(notification.type), width: 20, height: 20 })"></span>
		</div>

		<div class="tutor-dashboard-notification-item-content">
			<div class="tutor-small tutor-text-subdued" x-html="notification.content || ''"></div>
			<div class="tutor-tiny tutor-text-subdued" x-text="notification.created_at_readable || ''"></div>
		</div>
	</div>

	<div class="tutor-dashboard-notification-thumbnail" x-show="getNotificationImage(notification)">
		<img x-bind:src="getNotificationImage(notification)" alt="<?php esc_attr_e( 'Course image', 'tutor-pro' ); ?>">
	</div>
</a>
