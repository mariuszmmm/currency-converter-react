import { useCurrentTime } from "./useCurrentTime";
import { formatCurrentTime } from "./formatCurrentTime";
import { Date } from "./styled";

export const CurrentTime = () => {
	const currentTime = useCurrentTime();

	return (
		<Date>
			Dzisiaj jest
			{" "}
			{formatCurrentTime(currentTime)}
		</Date>
	)
};