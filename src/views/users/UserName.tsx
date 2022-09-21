import { EntityId } from "@reduxjs/toolkit"
import { useAppSelector } from "../../store/hooks"
import { selectUserById } from "../../store/users/usersSlice"

interface Props {
	userId: EntityId
}

// Displays a user's name
function UserName({userId}: Props) {

	const user = useAppSelector(state => selectUserById(state, userId))

	return (
		user ? 

		<span className="text-veryDarkBlue font-extrabold">
			{user.name}
		</span>

		: null
	)
}

export default UserName
