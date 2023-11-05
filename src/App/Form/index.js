import { CurrentDate } from "../CurrentDate";
import StyledLegend from "./Legend";
import Section from "./Section";
import Options from "./Options";
import Result from "./Result";
import Rates from "./Rates";
import { StyledForm, Contents, Input, Button, Flags } from "./styled";
import { useForm } from "./useForm";

const Form = () => {

   const {
      amount,
      currencyInput,
      currencyOutput,
      result,
      resultOutdated,
      flagInput,
      flagOutput,
      onFormSubmit,
      onAmountChange,
      onAmountClick,
      onInputChange,
      onOutputChange
   } = useForm();


   return (
      <StyledForm onSubmit={onFormSubmit}>
         <Contents>
            <StyledLegend>
               Kalkulator walutowy
            </StyledLegend>
            <CurrentDate />
            <Section
               title={"Kwota :"}
               body={
                  <Input
                     name="amount"
                     value={amount}
                     onChange={onAmountChange}
                     onClick={onAmountClick}
                     type="text"
                     placeholder=" Wpisz kwotę "
                     required
                     autoFocus
                  />
               }
            />
            <Section
               title={"Przelicz z :"}
               body={
                  <Flags flag={flagInput}>
                     <Input as="select"
                        name="currencyInput"
                        value={currencyInput}
                        onChange={onInputChange}
                     >
                        <Options />
                     </Input>
                  </Flags>
               }
            />
            <Section
               title={"Przelicz na :"}
               body={
                  <Flags flag={flagOutput}>
                     <Input as="select"
                        name="currencyOutput"
                        value={currencyOutput}
                        onChange={onOutputChange}
                     >
                        <Options />
                     </Input>
                  </Flags>
               }
            />
            <Result
               result={result}
               resultOutdated={resultOutdated}
            />
            <Button>Przelicz</Button>
            <Rates />
            <StyledLegend>
               Kursy pochodzą ze strony nbp.pl z&nbsp;tabeli nr&nbsp;209/A/NBP/2023 z&nbsp;dnia&nbsp;2023-10-27
            </StyledLegend>
         </Contents>
      </StyledForm>
   )
};

export default Form;