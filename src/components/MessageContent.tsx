interface Props {
	message: string;
}

// Displays a message's body.
// In a real app, it would receive the message id and retrieve its content.
// That is out of the scope of this project, so it receives the message content directly
function MessageContent ({message}: Props) {
	return (
		<p className="mt-3 p-3 bg-white border-2 rounded hover:cursor-pointer hover:bg-lightGrayishBlue">
			{message}
		</p>
	)
}

export default MessageContent
