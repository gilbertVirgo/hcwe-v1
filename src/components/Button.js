export default ({ children, ...props }) => {
	return (
		<a className="button" {...props}>
			{children}
			<img src={require("../assets/button--arrow.svg").default} />
		</a>
	);
};
