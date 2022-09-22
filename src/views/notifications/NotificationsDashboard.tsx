import { useAppSelector } from "../../store/hooks"

import { selectUnreadNotificationsCount } from "../../store/notifications/notificationsSlice"
import NotificationsList from "./NotificatinsList"

// Displays the main Notifications dashboard
function NotificationsDashboard() {

	const newCount = useAppSelector(selectUnreadNotificationsCount)

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

				<span>Mark all as read</span>
			</div>

			<NotificationsList />
		</main>
	)
}

export default NotificationsDashboard
