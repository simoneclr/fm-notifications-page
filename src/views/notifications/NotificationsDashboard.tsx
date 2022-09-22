import { useAppDispatch, useAppSelector } from "../../store/hooks"

import { markAllNotificationsAsRead, selectUnreadNotificationsCount } from "../../store/notifications/notificationsSlice"
import NotificationsList from "./NotificatinsList"

// Displays the main Notifications dashboard
function NotificationsDashboard() {

	const dispatch = useAppDispatch()

	const newCount = useAppSelector(selectUnreadNotificationsCount)

	const handleMarkAllAsReadClick = () => {
		dispatch(markAllNotificationsAsRead())
	}

	return (
		<main className="bg-white mx-auto p-4 lg:p-8 lg:rounded-xl lg:shadow-xl">
			<div className="flex gap-4 mb-4 items-center justify-between">
				<h1 className="text-veryDarkBlue text-lg font-extrabold">
					Notifications

					<span className="ml-3 px-3 rounded bg-customBlue text-veryLightGrayishBlue font-extrabold">
						<span className="sr-only">
							Unread notifications count
						</span>
						
						{newCount}
					</span>
				</h1>

				<button onClick={handleMarkAllAsReadClick} className="text-sm hover:text-customBlue">
					Mark all as read
				</button>
			</div>

			<NotificationsList />
		</main>
	)
}

export default NotificationsDashboard
