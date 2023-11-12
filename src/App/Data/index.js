import { CurrentDate } from "../CurrentDate";
import { StyledForm, Contents } from "../styled";
import StyledLegend from "../Legend";

const Data = ({ stateData }) => {

   return (
      <StyledForm >
         <Contents>
            <StyledLegend>
               Kalkulator walutowy
            </StyledLegend>
            <CurrentDate />
            <StyledLegend>
               {stateData === "loading" ?
                  "Trwa ładowanie danych ..."
                  :
                  "Wystąpił błąd, spróbuj póżniej"}
            </StyledLegend>
         </Contents>
      </StyledForm>
   )
};

export default Data;