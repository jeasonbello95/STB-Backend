import React, { Fragment } from 'react';
import { useNotifications } from '../context/NotificationContext';

/**
 * Bell icon markup
 * @returns Bell Icon
 */
const NotificationBell = () => {
	const allNotifications = useNotifications();
	let unreadCount = 0;

	allNotifications.forEach((notification) => {
		if (notification.status === 'UNREAD') {
			unreadCount++;
		}
		return unreadCount;
	});

	return (
		<Fragment>
			<button
				type="button"
				className="tutor-iconic-btn tutor-iconic-btn-secondary tutor-iconic-btn-lg btn-offcanvas-open tutor-position-relative"
				data-tutor-offcanvas-target="offcanvas-target-1"
			>
				<span className="tutor-icon-bell-bold" aria-hidden="true"></span>
				{unreadCount > 0 && <span className="tutor-floating-badge">{unreadCount}</span>}
			</button>
		</Fragment>
	);
};

export default NotificationBell;
