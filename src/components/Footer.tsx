import { ReactNode } from "react"

// Displays a footer element with attributions inside
function Footer() {

	// Styled link
	const FooterLink = ({children, to}: {children: ReactNode, to: string}) => {
		return (
			<a href={to} target="_blank" rel="noreferrer"
				className="text-veryDarkBlue hover:text-customBlue"
			>
				{children}
			</a>
		)
	}

	return (
		<footer className="text-center p-4 md:p-8">
			<p>
				Challenge by <FooterLink to="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</FooterLink>.
			</p>

			<p className="mt-2">
				Coded by <FooterLink to="https://github.com/simoneclr">Simone Calciolari</FooterLink>.
			</p>
		</footer>
	)
}

export default Footer
