import { EntityId } from "@reduxjs/toolkit";

interface User {
	id: EntityId;
	name: string;
	pfp: string;
}

export type {
	User
}
