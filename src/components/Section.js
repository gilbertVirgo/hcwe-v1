import Button from "./Button";

let renderMedia = (media) => {
	switch (media.type) {
		case "image":
			return (
				<img
					src={media.src}
					alt={media.alt || ""}
					className="section__image"
				/>
			);
		case "iframe":
			return (
				<iframe
					src={media.src}
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="section__iframe"
				></iframe>
			);
	}
};

export default (props) => {
	return (
		<section className="section__wrapper wrapper" id={`${props.id}`}>
			<div className="section__container container container--grid">
				<div className="section__media">{renderMedia(props.media)}</div>
				<div className="section__text group group--vt g1-5">
					<h2>{props.title}</h2>
					<div className="group group--vt g0-5"> {props.body}</div>
					<div className="section__buttons button-group">
						{props.buttons &&
							props.buttons.map((button, index) => (
								<Button key={index} href={button.link}>
									{button.text}
								</Button>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};
