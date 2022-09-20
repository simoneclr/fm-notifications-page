import { EntityId, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

import { User } from "../model/users"
import { FollowNotification, GroupNotification, MessageNotification, MyNotification, NotificationType, PictureCommentNotification, PostReactionNotification } from "../model/notifications";


const mockUsers: User[] = [
	{
		id: "angelagray",
		name: "Angela Gray",
		pfp: "avatar-angela-gray.webp"
	},
	{
		id: "annakim",
		name: "Anna Kim",
		pfp: "avatar-anna-kim.webp"
	},
	{
		id: "jacobthompson",
		name: "Jacob Thompson",
		pfp: "avatar-jacob-thompson.webp"
	},
	{
		id: "kimberlysmith",
		name: "Kimberly Smith",
		pfp: "avatar-kimberly-smith.webp"
	},
	{
		id: "markwebber",
		name: "Mark Webber",
		pfp: "avatar-mark-webber.webp"
	},
	{
		id: "nathanpeterson",
		name: "Nathan Peterson",
		pfp: "avatar-nathan-peterson.webp"
	},
	{
		id: "rizkyhasanuddin",
		name: "Rizky Hasanuddin",
		pfp: "avatar-rizky-hasanuddin.webp"
	}
]

const mockNotifications: MyNotification[] = [
	{
		id: nanoid(),
		type: NotificationType.POST_REACTION,
		from: "markwebber",
		date: sub(new Date(), {minutes: 1}).toISOString(),
		isNew: true,
		postTitle: "My first tournament today!"
	} as PostReactionNotification,
	{
		id: nanoid(),
		type: NotificationType.FOLLOW,
		from: "angelagray",
		date: sub(new Date(), {minutes: 5}).toISOString(),
		isNew: true,
	} as FollowNotification,
	{
		id: nanoid(),
		type: NotificationType.GROUP_JOINED,
		from: "jacobthompson",
		date: sub(new Date(), {days: 1}).toISOString(),
		isNew: true,
		groupName: "Chess Club"
	} as GroupNotification,
	{
		id: nanoid(),
		type: NotificationType.DM_RECEIVED,
		from: "rizkyhasanuddin",
		date: sub(new Date(), {days: 5}).toISOString(),
		isNew: false,
		message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and	I'm already having lots of fun and improving my game."
	} as MessageNotification,
	{
		id: nanoid(),
		type: NotificationType.PICTURE_COMMENT,
		from: "kimberlysmith",
		date: sub(new Date(), {weeks: 1}).toISOString(),
		isNew: false,
		picture: "image-chess.webp"
	} as PictureCommentNotification,
	{
		id: nanoid(),
		type: NotificationType.POST_REACTION,
		from: "nathanpeterson",
		date: sub(new Date(), {weeks: 2}).toISOString(),
		isNew: false,
		postTitle: "5 end-game strategies to increase your win rate"
	} as PostReactionNotification,	
	{
		id: nanoid(),
		type: NotificationType.GROUP_LEFT,
		from: "annakim",
		date: sub(new Date(), {weeks: 2}).toISOString(),
		isNew: false,
		groupName: "Chess Club"
	} as GroupNotification,
]

export const getMockUsers = () => {
	let res: {
		ids: EntityId[],
		entities: {[id: EntityId]: User}
	} = {
		ids: mockUsers.map(user => user.id),
		entities: {}
	}

	mockUsers.forEach(user => {
		res.entities[user.id] = user
	})
	
	return res
}

export const getMockNotifications = () => {
	let res: {
		ids: EntityId[],
		entities: {[id: EntityId]: MyNotification}
	} = {
		ids: mockNotifications.map(notificaton => notificaton.id),
		entities: {}
	}

	mockNotifications.forEach(notification => {
		res.entities[notification.id] = notification
	})
	
	return res
}
