import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../store/hooks";
import { selectNotificationById } from "../../../store/notifications/notificationsSlice";

import { NotificationType } from "../../../model/notifications";
import UserName from "../../users/UserName";
import NotificationCard from "./NotificationCard";

interface Props {
	notificationId: EntityId
}

// Displays a card for a follow notification
function FollowNotificationCard({notificationId}: Props) {

	const notification = useAppSelector(state => selectNotificationById(state, notificationId))

	return (
		(notification && notification.type === NotificationType.FOLLOW) ?

		<NotificationCard notificationId={notificationId}>				
			{notification => 
				<>
					<UserName userId={notification.from}/> followed you
				</>
			} 
		</NotificationCard>

		: null
	)
}

export default FollowNotificationCard
