import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../store/hooks";

import { selectNotificationById } from "../../store/notifications/notificationsSlice";
import UserName from "../users/UserName";
import NotificationCard from "./cards/NotificationCard";

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
				{notification => <UserName userId={notification.from}/>} 
			</NotificationCard>
		</li>

		: null
	)
}

export default NotificatinsListItem
