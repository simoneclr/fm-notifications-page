import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "../../store/hooks";

import { selectUserById } from "../../store/users/usersSlice";

interface Props {
	userId: EntityId;
}

// Displays a user's portrait
function UserPortrait({userId}: Props) {

	const user = useAppSelector(state => selectUserById(state, userId))

	return (
		user ?

		<img src={user.pfp} alt={user.name + "'s profile picture"}
			className="w-12"	
		/>

		: null
	)
}

export default UserPortrait
