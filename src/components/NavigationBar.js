export default () => {
	return (
		<nav className="nav__wrapper wrapper">
			<div className="nav__container container">
				<ul className="nav__icons">
					<li>
						<img
							className="nav__logo"
							src={require("../assets/nav--logo.svg").default}
						/>
					</li>

					<li>
						<div className="nav__toggle hide--sm-up">☰</div>
					</li>
				</ul>
				<ul className="nav__links">
					<li className="nav__link">
						<a href="#sundays">Sundays</a>
					</li>
					<li className="nav__link">
						<a href="#about">About</a>
					</li>
					<li className="nav__link">
						<a href="#team">Team</a>
					</li>
					<li className="nav__link">
						<a href="#contact">Contact</a>
					</li>
					<li className="nav__link">
						<a href="#directions">Directions</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
