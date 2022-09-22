interface Props {
	post: string;
}

// Displays a post's title
function PostTitle({post}: Props) {
	return (
		<span className="content-link">
			{post}
		</span>
	)
}

export default PostTitle
