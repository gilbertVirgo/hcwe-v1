import ScrollyLink from "./ScrollyLink";

export default ({ children, href, ...props }) => {
	return (
		<ScrollyLink className="button" href={href} {...props}>
			{children}
			<img src={require("../assets/button--arrow.svg").default} />
		</ScrollyLink>
	);
};
