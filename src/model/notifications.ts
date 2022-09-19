import { EntityId } from "@reduxjs/toolkit";

enum NotificationType {
	POST_REACTION,
	FOLLOW,
	GROUP_JOINED,
	GROUP_LEFT,
	DM_RECEIVED,
	PICTURE_COMMENT
}

interface MyNotification {
	id: EntityId;
	type: NotificationType;
	from: EntityId;
	date: string;
	isNew: boolean;
}

interface PostReactionNotification extends MyNotification {
	// In a real app, this would be an id pointing to the post in question
	// That is out of the scope of this project; for simplicty, put the name directly here
	postTitle: string;
}

interface FollowNotification extends MyNotification {}

interface GroupNotification extends MyNotification {
	// In a real app, this would be an id pointing to the group in question
	// That is out of the scope of this project; for simplicty, put the name directly here
	groupName: string;
}

interface MessageNotification extends MyNotification {
	message: string;
}

interface PictureCommentNotification extends MyNotification {
	// In a real app, this would be an id pointing to the picture in question
	// That is out of the scope of this project; for simplicity, put the img url directly here
	picture: string;
}

export {
	NotificationType
}

export type {
	MyNotification,
	PostReactionNotification,
	FollowNotification,
	GroupNotification,
	MessageNotification,
	PictureCommentNotification
}
