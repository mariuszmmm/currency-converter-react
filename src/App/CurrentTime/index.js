import "./style.css";

const CurrentTime = ({ currentTime }) => (
	<p className="form__date">
		Dzisiaj jest&nbsp;
		{currentTime.toLocaleString(
			"pl", { weekday: "long", day: "numeric", month: "long" }
		)},
		{currentTime.toLocaleTimeString()}
	</p>
);

export default CurrentTime;