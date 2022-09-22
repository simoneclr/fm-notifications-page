import { AnyAction, createEntityAdapter, createSelector, createSlice, EntityId, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { MyNotification } from "../../model/notifications";

const notificationsAdapter = createEntityAdapter<MyNotification>({
	sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const notificationsSlice = createSlice({
	name: "notifications",
	initialState: notificationsAdapter.getInitialState(),
	reducers: {
		notificationRead: {
			reducer: (
				state,
				action: PayloadAction<{notificationId: EntityId}>
			) => {
				const {notificationId} = action.payload
				
				notificationsAdapter.updateOne(state, {
					id: notificationId,
					changes: {
						isNew: false
					}
				})
			},
			prepare: (notificationId: EntityId) => {
				return {
					payload: {
						notificationId
					}
				}
			}
		}
	}
})

export default notificationsSlice.reducer

// Exported Actions
export const {
	notificationRead
} = notificationsSlice.actions

// Thunk function that marks all notifications as read
export const markAllNotificationsAsRead = (): ThunkAction<void, RootState, unknown, AnyAction> =>
	(dispatch, getState) => {
		getState().notifications.ids.forEach(id => {
			if (getState().notifications.entities[id]?.isNew) {
				dispatch(notificationRead(id))
			}
		})
	}

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
