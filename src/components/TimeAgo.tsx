import { formatDistanceToNow, parseISO } from "date-fns";

interface Props {
	timestamp: string;
}

// Given a timestamp, displays how much time has passed since
function TimeAgo({timestamp}: Props) {
	return (
		<>
			{formatDistanceToNow(parseISO(timestamp)) + " ago"}
		</>
	)
}

export default TimeAgo
