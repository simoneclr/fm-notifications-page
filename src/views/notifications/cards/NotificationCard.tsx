import { ReactNode } from "react"
import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../store/hooks";

import { MyNotification } from "../../../model/notifications";
import { selectNotificationById } from "../../../store/notifications/notificationsSlice";
import UserPortrait from "../../users/UserPortrait";
import TimeAgo from "../../../components/TimeAgo";

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

		<div className="p-4 bg-veryLightGrayishBlue rounded-lg flex items-start gap-4">
			<UserPortrait userId={notification.from} />

			<div className="flex flex-wrap">
				<span className="grow">
					{children(notification)}
				</span>
				
				<span className="text-sm text-grayishBlue w-full">
					<TimeAgo timestamp={notification.date} />
				</span>
			</div>
		</div>

		: null
	)
}

export default NotificationCard
