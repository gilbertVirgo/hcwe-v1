export default [
	{
		id: "sundays",
		title: "Sundays",
		media: {
			type: "image",
			src: require("../assets/section--sundays.jpg"),
		},
		body: (
			<>
				<p>
					We meet every Sunday at 10:30am in Covent Garden to worship,
					hear God’s Word, and share life together.
				</p>
				<p>Stay afterward for coffee and conversation.</p>
			</>
		),
		buttons: [{ text: "Find us", link: "#directions" }],
	},
	{
		id: "about",
		title: "About us",
		media: {
			type: "image",
			src: require("../assets/section--about.jpg"),
		},
		body: (
			<>
				<p>
					<em>Hope Church, West End</em> is a new congregation formed
					from <em>Mosaic Multicultural Church</em> and{" "}
					<em>Hope Community Church</em>, welcoming people of all ages
					and backgrounds across London.
				</p>
			</>
		),
	},
	{
		id: "team",
		title: "Our Team",
		media: {
			type: "image",
			src: require("../assets/section--team.jpg"),
		},
		body: (
			<>
				<p>
					Pastor Alex Brito leads Hope Church with a heart for London.
				</p>
				<p>
					Alongside a committed team, he seeks to help people
					encounter Jesus and find lasting hope.
				</p>
			</>
		),
	},
	{
		id: "contact",
		title: "Get in touch",
		media: {
			type: "image",
			src: require("../assets/section--contact.jpg"),
		},
		body: (
			<>
				<p>
					We’d love to hear from you — whether you’re new to faith,
					new to London, or looking for a church family.
				</p>
			</>
		),
		buttons: [
			{
				text: "Send us a message",
				link: "mailto:alex@thelondonproject.co.uk",
			},
		],
	},
	{
		id: "directions",
		title: "Find us",
		media: {
			type: "iframe",
			src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9453394853454!2d-0.1253464!3d51.514218799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876050288dce4fb%3A0x4ad6ebc4920700d8!2sNeal%20Street%20Espresso!5e0!3m2!1sen!2suk!4v1757939546151!5m2!1sen!2suk",
		},
		body: (
			<>
				<p>
					We meet at 34 Neal St, London WC2H 9PS — right in Covent
					Garden.
				</p>
				<p>
					Nearest tubes: Covent Garden (Piccadilly line) and Leicester
					Square (Northern & Piccadilly lines). Easy to reach by bus
					or on foot.
				</p>
			</>
		),
		buttons: [
			{
				text: "Get directions",
				link: "https://www.google.com/maps?daddr=34+Neal+St,+London+WC2H+9PS",
			},
		],
	},
];
