import "./style.css";
import { useCurrentTime } from "./useCurrentTime";
import { formatCurrentTime } from "./formatCurrentTime";

export const CurrentTime = () => {
	const currentTime = useCurrentTime();

	return (
		<p className="form__date">
			Dzisiaj jest
			{" "}
			{formatCurrentTime(currentTime)}
		</p>
	)
};