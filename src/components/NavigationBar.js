import React from "react";
import navLinks from "../data/navLinks";
import ScrollyLink from "./ScrollyLink";

export default () => {
	let [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<nav className="nav__wrapper wrapper">
				<div className="nav__container container">
					<ul className="nav__icons">
						<li>
							<img
								className="nav__logo"
								src={require("../assets/nav--logo.svg").default}
							/>
						</li>

						<li
							className="clickable"
							onClick={() => setIsOpen(!isOpen)}
						>
							{isOpen ? (
								<img
									className="nav__toggle hide--sm-up"
									src={
										require("../assets/nav--close.svg")
											.default
									}
								/>
							) : (
								<img
									className="nav__close hide--sm-up"
									src={
										require("../assets/nav--toggle.svg")
											.default
									}
								/>
							)}
						</li>
					</ul>
					<ul className="nav__links--sm-up">
						{navLinks.map((link, index) => (
							<li key={index} className="nav__link">
								<ScrollyLink href={link.href}>
									{link.text}
								</ScrollyLink>
							</li>
						))}
					</ul>
				</div>
			</nav>
			<ul className={"nav__links--sm-down " + (isOpen ? "is-open" : "")}>
				{navLinks.map((link, index) => (
					<li
						key={index}
						className="nav__link"
						onClick={() => setIsOpen(false)}
					>
						<ScrollyLink href={link.href}>{link.text}</ScrollyLink>
					</li>
				))}
			</ul>
		</>
	);
};
