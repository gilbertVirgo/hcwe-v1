export default ({ children, href, ...props }) => {
	let handleClick = (e) => {
		if (href.startsWith("#")) e.preventDefault();

		let targetSection = document.querySelector(href);

		targetSection.scrollIntoView({
			behavior: "smooth",
		});

		targetSection.classList.add("is-focused");

		let scrollListener = () => {
			targetSection.classList.remove("is-focused");
		};

		setTimeout(
			() =>
				window.addEventListener("scroll", scrollListener, {
					once: true,
				}),
			1500
		);
	};

	return (
		<a {...props} href={href} onClick={handleClick}>
			{children}
		</a>
	);
};
