import { EntityId } from "@reduxjs/toolkit"
import { MessageNotification, NotificationType } from "../../../model/notifications"
import { useAppSelector } from "../../../store/hooks"

import { selectNotificationById } from "../../../store/notifications/notificationsSlice"
import UserName from "../../users/UserName"
import NotificationCard from "./NotificationCard"

interface Props {
	notificationId: EntityId
}

// Displays a card for a message received notification
function MessageNotificationCard({notificationId}: Props) {

	const notification = useAppSelector(state => selectNotificationById(state, notificationId))

	return (
		(notification && notification.type === NotificationType.DM_RECEIVED) ?

		<NotificationCard notificationId={notificationId}
			payload={notification => 
				<p className="mt-2 p-2 text-sm bg-white border-2 rounded">
					{(notification as MessageNotification).message}
				</p>
			}
		>				
			{notification => 
				<>
					<UserName userId={notification.from}/> sent you a private message
				</>
			} 
		</NotificationCard>

		: null
	)
}

export default MessageNotificationCard
