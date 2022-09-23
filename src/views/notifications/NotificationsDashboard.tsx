import { useAppDispatch, useAppSelector } from "../../store/hooks"

import { markAllNotificationsAsRead, selectUnreadNotificationsCount } from "../../store/notifications/notificationsSlice"
import NotificationsList from "./NotificatinsList"

// Displays the main Notifications dashboard
function NotificationsDashboard() {

	const dispatch = useAppDispatch()

	const unreadCount = useAppSelector(selectUnreadNotificationsCount)

	const handleMarkAllAsReadClick = () => {
		dispatch(markAllNotificationsAsRead())
	}

	return (
		<main className="max-w-2xl bg-white mx-auto p-4 md:p-8 md:rounded-xl md:shadow-xl">
			<div className="flex gap-4 mb-4 md:mb-8 items-baseline justify-between">
				<h1 className="text-veryDarkBlue text-lg md:text-xl font-extrabold">
					Notifications

					{ unreadCount > 0 && 
						<span className="ml-3 px-3 py-px rounded text-base bg-customBlue text-veryLightGrayishBlue font-extrabold">
							<span className="sr-only">
								Unread notifications count
							</span>
							
							{unreadCount}
						</span>
					}
				</h1>

				<button onClick={handleMarkAllAsReadClick} className="hover:text-customBlue">
					Mark all as read
				</button>
			</div>

			<NotificationsList />
		</main>
	)
}

export default NotificationsDashboard
