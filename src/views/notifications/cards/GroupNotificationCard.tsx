import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../store/hooks";
import { selectNotificationById } from "../../../store/notifications/notificationsSlice";

import { GroupNotification, NotificationType } from "../../../model/notifications";
import UserName from "../../users/UserName";
import NotificationCard from "./NotificationCard";
import GroupName from "../../../components/GroupName";

interface Props {
	notificationId: EntityId
}

// Displays a card for a group notification
function GroupNotificationCard({notificationId}: Props) {

	const notification = useAppSelector(state => selectNotificationById(state, notificationId))

	const getText = (type: NotificationType) => {
		switch (type) {
			case NotificationType.GROUP_JOINED: return " has joined your group ";
			case NotificationType.GROUP_LEFT: return " left the group "
		}
	}

	return (
		(notification && 
			(notification.type === NotificationType.GROUP_JOINED || notification.type === NotificationType.GROUP_LEFT)	
		) ?

		<NotificationCard notificationId={notificationId}>				
			{notification => 
				<>
					<UserName userId={notification.from}/> 
					{getText(notification.type)} 
					<GroupName group={(notification as GroupNotification).groupName}/>
				</>
			} 
		</NotificationCard>

		: null
	)
}

export default GroupNotificationCard
