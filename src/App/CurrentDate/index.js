import { useCurrentDate } from "./useCurrentDate";
import { formatCurrentDay, formatCurrentTime } from "./formatCurrentDate";
import { Date, ContainerDate } from "./styled";

export const CurrentDate = () => {
   const currentDate = useCurrentDate();

   return (
      <ContainerDate>
         <Date>
            Dzisiaj jest
            {" "}
            {formatCurrentDay(currentDate)}
         </Date>
         <Date>
            {formatCurrentTime(currentDate)}
         </Date>
      </ContainerDate>
   )
};