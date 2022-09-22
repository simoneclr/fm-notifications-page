interface Props {
	group: string;
}

// Displays a group's name
function GroupName({group}: Props) {
	return (
		<span className="content-link">
			{group}
		</span>
	)
}

export default GroupName
