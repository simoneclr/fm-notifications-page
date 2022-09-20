import NotificationsList from "./NotificatinsList"

// Displays the main Notifications dashboard
function NotificationsDashboard() {
	return (
		<main className="bg-white mx-auto p-4 lg:p-8 lg:rounded-xl lg:shadow-xl">
			<div className="flex gap-4 mb-4">
				<h1>Notifications</h1>
				<span>3</span>

				<div className="grow"></div>
				<span>Mark all as read</span>
			</div>

			<NotificationsList />
		</main>
	)
}

export default NotificationsDashboard
