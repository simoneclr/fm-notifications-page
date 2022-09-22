import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../store/hooks";
import { selectNotificationById } from "../../../store/notifications/notificationsSlice";

import { NotificationType, PictureCommentNotification } from "../../../model/notifications";
import UserName from "../../users/UserName";
import NotificationCard from "./NotificationCard";

interface Props {
	notificationId: EntityId
}

// Displays a card for a picture comment notification
function PictureNotificationCard({notificationId}: Props) {

	const notification = useAppSelector(state => selectNotificationById(state, notificationId))

	return (
		(notification && notification.type === NotificationType.PICTURE_COMMENT) ?

		<NotificationCard notificationId={notificationId}
			payload={notification =>
				<img src={(notification as PictureCommentNotification).picture} alt=""
					className="w-12 aspect-square"
				/>
			}
		>				
			{ notification =>
				<>					
					<UserName userId={notification.from}/> commented on your picture 
				</>
			} 
		</NotificationCard>

		: null
	)
}

export default PictureNotificationCard
