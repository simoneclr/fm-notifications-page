interface Props {
	post: string;
}

// Displays a post's title
function PostTitle({post}: Props) {
	return (
		<span className="font-extrabold">
			{post}
		</span>
	)
}

export default PostTitle
