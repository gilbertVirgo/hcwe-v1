import footerSections from "../data/footerSections";

export default () => {
	return (
		<footer className="wrapper footer__wrapper">
			<div className="footer__container container container--grid">
				{footerSections.map((section, index) => (
					<div
						key={index}
						className="footer__section group group--vt g1"
					>
						<h3 className="footer__section-title">
							{section.title}
						</h3>
						<ul className="footer__links group group--vt g0-5">
							{section.links.map((link, linkIndex) => (
								<li key={linkIndex} className="footer__link">
									<a href={link.href}>{link.text}</a>
								</li>
							))}
						</ul>
					</div>
				))}
				<div className="footer__section footer__extra-info">
					<div
						className="group group--hz g1"
						style={{ alignItems: "center" }}
					>
						<img src={require("../assets/nav--logo.svg").default} />
						<p>Hope Church, West End</p>
					</div>
					<p>
						Website designed by{" "}
						<a
							className="text--primary"
							href="mailto:gilbertjvirgo@gmail.com"
						>
							Gilbert Virgo
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};
