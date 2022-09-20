import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
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
	selectById: selectNotificationById,
	selectIds: selectNotificationsIds
} = notificationsAdapter.getSelectors((state: RootState) => state.notifications)
