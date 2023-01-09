import "./style.css";
import { useState, useEffect } from "react";

const formatCurrentTime = (currentTime) => currentTime.toLocaleString(undefined, {
	weekday: "long",
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
	day: "numeric",
	month: "long"
});

export const CurrentTime = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<p className="form__date">
			Dzisiaj jest
			{" "}
			{formatCurrentTime(currentTime)}
		</p>
	)
};