import { ReactComponent as Lg1 } from "../assets/hero--tagline-lg-1.svg";
import { ReactComponent as Lg2 } from "../assets/hero--tagline-lg-2.svg";
import { ReactComponent as Sm1 } from "../assets/hero--tagline-sm-1.svg";
import { ReactComponent as Sm2 } from "../assets/hero--tagline-sm-2.svg";
import { useState, useEffect } from "react";

export default function HeroTaglineLetters() {
	const [showFirst, setShowFirst] = useState(true);
	useEffect(() => {
		const interval = setInterval(() => {
			setShowFirst((prev) => !prev);
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Lg1
				className={
					"hero__tagline hide--md-down " + (showFirst ? "hidden" : "")
				}
			/>
			<Sm1
				className={
					"hero__tagline hide--md-up " + (showFirst ? "hidden" : "")
				}
			/>
			<Lg2
				className={
					"hero__tagline hide--md-down " + (showFirst ? "" : "hidden")
				}
			/>
			<Sm2
				className={
					"hero__tagline hide--md-up " + (showFirst ? "" : "hidden")
				}
			/>
		</>
	);
}
