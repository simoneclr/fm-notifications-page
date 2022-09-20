import { useAppSelector } from "../../store/hooks"

import { selectNotificationsIds } from "../../store/notifications/notificationsSlice"
import NotificatinsListItem from "./NotificationListItem"

// Displays a list of current notifications
function NotificationsList() {
	
	const notificationsIds = useAppSelector(selectNotificationsIds)

	return (
		<ul className="flex flex-col gap-4 items-stretch">
			{
				notificationsIds.map(id => <NotificatinsListItem key={id} notificationId={id} />)
			}
		</ul>
	)
}

export default NotificationsList
