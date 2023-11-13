import { CurrentDate } from "../CurrentDate";
import { StyledLegend } from "../Legend";
import { StyledForm, Contents } from "../styled";

export const Data = ({ children, onFormSubmit }) => {

  return (
    <StyledForm onSubmit={onFormSubmit} >
      <Contents>
        <StyledLegend title="true" >
          Kalkulator walutowy
        </StyledLegend>
        <CurrentDate />
        {children}
      </Contents>
    </StyledForm >
  )
};