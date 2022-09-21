import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../store/hooks";
import { selectNotificationById } from "../../../store/notifications/notificationsSlice";

import { NotificationType, PostReactionNotification } from "../../../model/notifications";
import UserName from "../../users/UserName";
import NotificationCard from "./NotificationCard";
import PostTitle from "../../../components/PostTitle";

interface Props {
	notificationId: EntityId
}

// Displays a card for a post reaction notification
function ReactionNotificationCard({notificationId}: Props) {

	const notification = useAppSelector(state => selectNotificationById(state, notificationId))

	return (
		(notification && notification.type === NotificationType.POST_REACTION) ?

		<NotificationCard notificationId={notificationId}>				
			{notification => 
				<>
					<UserName userId={notification.from}/> reacted to your post <PostTitle post={(notification as PostReactionNotification).postTitle} />
				</>
			} 
		</NotificationCard>

		: null
	)
}

export default ReactionNotificationCard
