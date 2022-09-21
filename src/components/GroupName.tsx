interface Props {
	group: string;
}

// Displays a group's name
function GroupName({group}: Props) {
	return (
		<span className="font-extrabold text-customBlue">
			{group}
		</span>
	)
}

export default GroupName
