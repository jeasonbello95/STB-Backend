import React, { Fragment } from 'react';
import { useNotifications, useNotificationsUpdate } from '../context/NotificationContext';

/**
 * Notification Header Component
 * @returns Notification header with context menu
 */
const NotificationHeader = () => {
	const { toggleStatusAsRead, toggleStatusAsUnread } = useNotificationsUpdate();
	const allNotifications = useNotifications();
	let notificationCount = true;

	const notificationTitle = notifications_data.notification_title;
	const markAsRead = notifications_data.mark_as_read;
	const markAsUnread = notifications_data.mark_as_unread;

	allNotifications.forEach((notification) => {
		if (notification.length === 0) {
			notificationCount = false;
		}
		return notificationCount;
	});

	return (
		<Fragment>
			<div className="tutor-offcanvas-header">
				<div className="tutor-fs-5 tutor-fw-medium tutor-color-black">{notificationTitle}</div>
				<div className="tutor-d-flex tutor-align-center">
					<div className="tutor-dropdown-parent">
						{notificationCount && (
							<button type="button" className="tutor-iconic-btn tutor-iconic-btn" action-tutor-dropdown="toggle">
								<i className="tutor-icon-kebab-menu" aria-hidden="true"></i>
							</button>
						)}
						<ul className="tutor-dropdown tutor-dropdown-dark tutor-mt-12">
							<li>
								<a className='tutor-dropdown-item' href="#" onClick={toggleStatusAsRead}>
									<span className="tutor-icon-open-envelope tutor-mr-8"></span>
									<span>{markAsRead}</span>
								</a>
							</li>
							<li>
								<a className='tutor-dropdown-item' href="#" onClick={toggleStatusAsUnread}>
									<span className="tutor-icon-message-unread tutor-mr-8"></span>
									<span>{markAsUnread}</span>
								</a>
							</li>
						</ul>
					</div>
					<button
						type="button"
						className="tutor-iconic-btn tutor-iconic-btn-secondary tutor-ml-12"
						data-tutor-offcanvas-close
						aria-label="Close"
					>
						<i className="tutor-icon-times"></i>
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default NotificationHeader;
