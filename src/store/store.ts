import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import usersSlice from './users/usersSlice';
import notificationsSlice from './notifications/notificationsSlice';

import { getMockNotifications, getMockUsers } from '../utils/mockData';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    notifications: notificationsSlice
  },
  preloadedState: {
    users: getMockUsers(),
    notifications: getMockNotifications()
  }
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
