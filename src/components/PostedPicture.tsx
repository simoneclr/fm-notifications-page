interface Props {
	src: string;
}

// Displays a picture posted by the user.
// In a real app, it would receive the picture id and retrieve its url.
// That is out of the scope of this project, so it receives the image url directly
function PostedPicture ({src}: Props) {
	return (
		<img src={src} alt=""	
			className="w-12 aspect-square rounded-lg hover:cursor-pointer hover:outline 
				outline-lightGrayishBlue outline-2 outline-offset-1"
		/>
	)
}

export default PostedPicture
