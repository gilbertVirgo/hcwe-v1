export default ({ children, href }) => {
	let handleClick = (e) => {
		e.preventDefault();

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
			1000
		);
	};

	return (
		<a href={href} onClick={handleClick}>
			{children}
		</a>
	);
};
