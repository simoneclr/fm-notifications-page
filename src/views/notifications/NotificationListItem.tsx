import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../store/hooks";

import { selectNotificationById } from "../../store/notifications/notificationsSlice";
import NotificationCard from "./NotificationCard";

interface Props {
	notificationId: EntityId;
}

// Dislays a single notification as part of a list of notifications
function NotificatinsListItem({notificationId}: Props) {

	const notification = useAppSelector(state => selectNotificationById(state, notificationId))

	return (
		notification ?

		<li>
			<NotificationCard notificationId={notification.id}>				
				{notification => <span>{notification.from}</span>} 
			</NotificationCard>
		</li>

		: null
	)
}

export default NotificatinsListItem
