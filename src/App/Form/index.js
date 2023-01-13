import { CurrentTime } from "../CurrentTime";
import Legend from "./Legend";
import Section from "./Section";
import Options from "./Options";
import Result from "./Result";
import Rates from "./Rates";
import { currencies } from "../currencies";
import { useState } from "react";
import { StyledForm, Contents, Input, Button, Flags } from "./styled";

const Form = () => {
   const [amount, setAmount] = useState("");
   const [currencyInput, setCurrencyInput] = useState(currencies[0].symbol);
   const [currencyOutput, setCurrencyOutput] = useState(currencies[1].symbol);
   const [lastDiferentInput, setlastDiferentInput] = useState(currencies[0].symbol);
   const [lastDiferentOutput, setlastDiferentOutput] = useState(currencies[1].symbol);
   const [result, setResult] = useState();
   const [resultOutdated, setResultOutdated] = useState(false);

   const calculateResult = (currencyInput, currencyOutput, amount) => {

      const rateInput = currencies
         .find(({ symbol }) => symbol === currencyInput)
         .rate;

      const rateOutput = currencies
         .find(({ symbol }) => symbol === currencyOutput)
         .rate;

      const unit = currencies
         .find(({ symbol }) => symbol === currencyOutput)
         .unit;

      setResult({
         exchangeResult: amount * rateInput / rateOutput,
         unit,
      })
   };

   const flagInput = currencies
      .find(({ symbol }) => symbol === currencyInput)
      .flag;

   const flagOutput = currencies
      .find(({ symbol }) => symbol === currencyOutput)
      .flag;

   const onFormSubmit = (event) => {
      event.preventDefault();
      calculateResult(currencyInput, currencyOutput, amount);
      setResultOutdated(false);
   };

   const onSelectClick = () => {
      if (currencyInput === currencyOutput && lastDiferentOutput) {
         setCurrencyOutput(lastDiferentInput);
      };
      if (currencyInput === currencyOutput && lastDiferentInput) {
         setCurrencyInput(lastDiferentOutput);
      };
      if (currencyInput !== currencyOutput) {
         setlastDiferentInput(currencyInput);
         setlastDiferentOutput(currencyOutput);
      };
   };

   const onFormInput = () => {
      setResultOutdated(true);
   }

   const onAmountChange = ({ target }) => setAmount(target.value);

   const onInputChange = ({ target }) => setCurrencyInput(target.value);

   const onOutputChange = ({ target }) => setCurrencyOutput(target.value);

   return (
      <StyledForm onSubmit={onFormSubmit} onInput={onFormInput}>
         <Contents>
            <Legend title={"Kalkulator walutowy"} />
            <CurrentTime />
            <Section
               title={"Kwota :"}
               body={
                  <Input
                     name="amount"
                     value={amount}
                     onChange={onAmountChange}
                     type="number"
                     step="1"
                     min="1"
                     max="999999999"
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
                        onClick={onSelectClick}
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
                        onClick={onSelectClick}
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
            <Legend title={<footer>Kursy pochodzą ze strony nbp.pl z&nbsp;tabeli&nbsp;nr&nbsp;243/A/NBP/2022 z&nbsp;dnia&nbsp;2022-&nbsp;12-&nbsp;16</footer>} />
         </Contents>
      </StyledForm>
   )
};

export default Form;