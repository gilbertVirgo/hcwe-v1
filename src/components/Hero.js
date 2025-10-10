import React, { useMemo, useState, useEffect } from "react";
import Button from "./Button";
import Bowser from "bowser";
import HeroTaglineLetters from "./HeroTaglineLetters";

const noiseImages = [
	require("../assets/noise-1.png"),
	require("../assets/noise-2.png"),
	require("../assets/noise-3.png"),
	require("../assets/noise-4.png"),
];

const Hero = ({ scrollDifference }) => {
	const isSafari = useMemo(() => {
		if (typeof window === "undefined") return false;
		const browser = Bowser.getParser(window.navigator.userAgent);
		return browser.getBrowserName() === "Safari";
	}, []);

	const [noiseIdx, setNoiseIdx] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setNoiseIdx((prev) => (prev + 1) % noiseImages.length);
		}, 1000 / 15);
		return () => clearInterval(interval);
	}, []);

	return (
		<header
			className={`hero__wrapper wrapper${
				isSafari ? " hero__wrapper--safari-override" : ""
			}`}
			style={{
				top: scrollDifference < 0 ? scrollDifference + "px" : "0",
			}}
		>
			<div className="hero__noise-overlay">
				{noiseImages.map((src, idx) => (
					<div
						className="hero__noise-image"
						key={idx}
						src={src}
						alt="noise"
						draggable={false}
						style={{
							opacity: noiseIdx === idx ? 0.25 : 0,
							backgroundImage: `url(${src})`,
						}}
					/>
				))}
			</div>

			<div className="hero__container container">
				<div className="hero__text container container--grid">
					<h1 className="hidden">
						Hope Church West End: Hope for London, Hope for You
					</h1>
					{/* Large tagline images */}
					<HeroTaglineLetters />

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
export default Hero;
