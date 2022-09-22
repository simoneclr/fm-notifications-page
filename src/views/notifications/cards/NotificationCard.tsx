import { ReactNode } from "react"
import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../../store/hooks";

import { MyNotification } from "../../../model/notifications";
import { selectNotificationById } from "../../../store/notifications/notificationsSlice";
import UserPortrait from "../../users/UserPortrait";
import TimeAgo from "../../../components/TimeAgo";

interface Props {
	notificationId: EntityId;
	children: (notification: MyNotification) => ReactNode;
	payloadSmall?: (notification: MyNotification) => ReactNode;
	payloadLarge?: (notification: MyNotification) => ReactNode;
}

/**
 * Displays a card containing a notifications info
 * @param props
 * @param props.notificationId - The notification's id
 * @param props.children - Function that renders the main notification message
 * @param props.payloadSmall - Function that renders small additional to the right of the notification
 * @param props.payloadLarge - Function that render large additional content at the bottom of the notification
*/
function NotificationCard({notificationId, children, payloadSmall, payloadLarge}: Props) {

	const notification = useAppSelector(state => selectNotificationById(state, notificationId))

	return (
		notification ?

		<div className={(notification.isNew ? "bg-veryLightGrayishBlue" : "bg-white" ) + " " +
				"p-4 rounded-lg flex items-start gap-4"}>
			<UserPortrait userId={notification.from} />

			<div className="flex flex-wrap grow">
				<span className="grow">
					{children(notification)}

					{notification.isNew && <RedDot/>}
				</span>
				
				<span className="text-sm text-grayishBlue w-full">
					<TimeAgo timestamp={notification.date} />
				</span>

				{payloadLarge && payloadLarge(notification)}
			</div>

			{payloadSmall && payloadSmall(notification)}
		</div>

		: null
	)
}

export default NotificationCard

// Displays a red dot for not-yet-read notifications
const RedDot = () => {
	return (
		<span className="mx-2 h-2 inline-block aspect-square bg-customRed rounded-full">
		</span>
	)
}
