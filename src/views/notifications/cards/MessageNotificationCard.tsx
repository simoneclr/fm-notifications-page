import { EntityId } from "@reduxjs/toolkit"
import { useAppSelector } from "../../../store/hooks"

import MessageContent from "../../../components/MessageContent"
import { MessageNotification, NotificationType } from "../../../model/notifications"
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
			payloadLarge={notification => 
				<MessageContent message={(notification as MessageNotification).message} />
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
