import React from "react";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import Section from "./components/Section";
import sections from "./data/sections";
import "./main.scss";
import Footer from "./components/Footer";

function App() {
	let [heroScrollDifference, setHeroScrollDifference] = React.useState(false);

	React.useEffect(() => {
		const reviewStickyTop = () => {
			let scrollDifference =
				window.innerHeight -
				document.querySelector(".hero__wrapper").offsetHeight;
			setHeroScrollDifference(scrollDifference); // Adjust threshold as needed
		};

		reviewStickyTop();

		window.addEventListener("resize", reviewStickyTop);

		return () => window.removeEventListener("resize", reviewStickyTop);
	}, []);

	return (
		<>
			<NavigationBar />
			<Hero scrollDifference={heroScrollDifference} />
			{sections.map(Section)}
			<Footer />
		</>
	);
}

export default App;
