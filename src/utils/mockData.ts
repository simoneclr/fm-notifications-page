import { EntityId, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

import { User } from "../model/users"
import { FollowNotification, GroupNotification, MessageNotification, MyNotification, NotificationType, PictureCommentNotification, PostReactionNotification } from "../model/notifications";

import AVATAR_ANGELA_GRAY from "../assets/images/avatar-angela-gray.webp"
import AVATAR_ANNA_KIM from "../assets/images/avatar-anna-kim.webp"
import AVATAR_JACOB_THOMPSON from "../assets/images/avatar-jacob-thompson.webp"
import AVATAR_KIMBERLY_SMITH from "../assets/images/avatar-kimberly-smith.webp"
import AVATAR_MARK_WEBBER from "../assets/images/avatar-mark-webber.webp"
import AVATAR_NATHAN_PETERSON from "../assets/images/avatar-nathan-peterson.webp"
import AVATAR_RIZKY_HASANUDDIN from "../assets/images/avatar-rizky-hasanuddin.webp"

import PICTURE_CHESS from "../assets/images/image-chess.webp"

const mockUsers: User[] = [
	{
		id: "angelagray",
		name: "Angela Gray",
		pfp: AVATAR_ANGELA_GRAY
	},
	{
		id: "annakim",
		name: "Anna Kim",
		pfp: AVATAR_ANNA_KIM
	},
	{
		id: "jacobthompson",
		name: "Jacob Thompson",
		pfp: AVATAR_JACOB_THOMPSON
	},
	{
		id: "kimberlysmith",
		name: "Kimberly Smith",
		pfp: AVATAR_KIMBERLY_SMITH
	},
	{
		id: "markwebber",
		name: "Mark Webber",
		pfp: AVATAR_MARK_WEBBER
	},
	{
		id: "nathanpeterson",
		name: "Nathan Peterson",
		pfp: AVATAR_NATHAN_PETERSON
	},
	{
		id: "rizkyhasanuddin",
		name: "Rizky Hasanuddin",
		pfp: AVATAR_RIZKY_HASANUDDIN
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
		picture: PICTURE_CHESS
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
