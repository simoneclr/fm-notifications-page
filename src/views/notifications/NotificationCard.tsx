import { ReactNode } from "react"
import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../store/hooks";

import { MyNotification } from "../../model/notifications";
import { selectNotificationById } from "../../store/notifications/notificationsSlice";

interface Props {
	notificationId: EntityId;
	children: (notification: MyNotification) => ReactNode
	payload?: (notification: MyNotification) => ReactNode
}

// Displays a card containing a notifications info
function NotificationCard({notificationId, children, payload}: Props) {

	const notification = useAppSelector(state => selectNotificationById(state, notificationId))

	return (
		notification ?

		<div className="p-4 bg-veryLightGrayishBlue rounded-lg">
			<h2>{children(notification)}</h2>
			<h3>{notification.date}</h3>
		</div>

		: null
	)
}

export default NotificationCard
