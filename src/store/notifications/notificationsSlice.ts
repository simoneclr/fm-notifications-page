import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { MyNotification } from "../../model/notifications";

const notificationsAdapter = createEntityAdapter<MyNotification>({
	sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const notificationsSlice = createSlice({
	name: "notifications",
	initialState: notificationsAdapter.getInitialState(),
	reducers: {}
})

export default notificationsSlice.reducer

export const {
	selectAll: selectAllNotificatoins,
	selectById: selectNotificationById,
	selectIds: selectNotificationsIds
} = notificationsAdapter.getSelectors((state: RootState) => state.notifications)

// Select the count of notifications that have not been read yet
export const selectUnreadNotificationsCount = createSelector(
	[selectAllNotificatoins],
	(notifications) => notifications.filter(notification => notification.isNew).length
)
