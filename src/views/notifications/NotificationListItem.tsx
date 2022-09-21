import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../store/hooks";

import { MyNotification, NotificationType } from "../../model/notifications";
import { selectNotificationById } from "../../store/notifications/notificationsSlice";
import { 
	MessageNotificationCard, 
	FollowNotificationCard, 
	GroupNotificationCard,
	PictureNotificationCard,
	ReactionNotificationCard
} from "./cards"

interface Props {
	notificationId: EntityId;
}

// Dislays a single notification as part of a list of notifications
function NotificatinsListItem({notificationId}: Props) {

	const notification = useAppSelector(state => selectNotificationById(state, notificationId))

	const getNotificationCard = (notification: MyNotification) => {

		const {id, type} = notification

		switch (type) {
			case NotificationType.DM_RECEIVED: return <MessageNotificationCard notificationId={id}/>;
			case NotificationType.FOLLOW: return <FollowNotificationCard notificationId={id}/>;
			case NotificationType.GROUP_JOINED:
			case NotificationType.GROUP_LEFT: return <GroupNotificationCard notificationId={id}/>;
			case NotificationType.PICTURE_COMMENT: return <PictureNotificationCard notificationId={id}/>;
			case NotificationType.POST_REACTION: return <ReactionNotificationCard notificationId={id}/>;
			default: return null;
		}
	}

	return (
		notification ?

		<li>
			{getNotificationCard(notification)}
		</li>

		: null
	)
}

export default NotificatinsListItem
