import Button from "./Button";

export default ({ scrollDifference }) => {
	return (
		<header
			className="hero__wrapper wrapper"
			style={{
				top: scrollDifference < 0 ? scrollDifference + "px" : "0",
			}}
		>
			<div className="hero__container container">
				<div className="hero__text container container--grid">
					<h1 className="hero__tagline--hidden">
						Hope for London
						<br />
						Hope for You
					</h1>
					<img
						src={require("../assets/hero--tagline-1.svg").default}
						alt="Hope for London, Hope for You"
						className="hero__tagline"
					/>

					<p>
						A new church family in the heart of the city, welcoming
						people from every background to find life in Jesus.
					</p>
					<Button href="#sundays">Find out more</Button>
				</div>
			</div>
		</header>
	);
};
