import "./style.css";

const CurrentTime = ({ currentTime }) => (
	<p className="form__date">Dzisiaj jest {currentTime.toLocaleString("pl", { weekday: "long", day: "numeric", month: "long" })}, {currentTime.toLocaleTimeString()}</p>
);

export default CurrentTime;