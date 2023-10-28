import { CurrentDate } from "../CurrentDate";
import StyledLegend from "./Legend";
import Section from "./Section";
import Options from "./Options";
import Result from "./Result";
import Rates from "./Rates";
import { currencies } from "../currencies";
import { useState, useEffect } from "react";
import { StyledForm, Contents, Input, Button, Flags } from "./styled";

const Form = () => {
   const [amount, setAmount] = useState("");
   const [currencyInput, setCurrencyInput] = useState(currencies[0].symbol);
   const [currencyOutput, setCurrencyOutput] = useState(currencies[1].symbol);
   const [lastDiferentInput, setLastDiferentInput] = useState(currencies[0].symbol);
   const [lastDiferentOutput, setLastDiferentOutput] = useState(currencies[1].symbol);
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

   useEffect(() => {
      if (currencyInput === currencyOutput && lastDiferentOutput) {
         setCurrencyOutput(lastDiferentInput);
      };
      if (currencyInput === currencyOutput && lastDiferentInput) {
         setCurrencyInput(lastDiferentOutput);
      };
      if (currencyInput !== currencyOutput) {
         setLastDiferentInput(currencyInput);
         setLastDiferentOutput(currencyOutput);
      };
      setResultOutdated(true);
   }, [amount, currencyInput, currencyOutput, lastDiferentInput, lastDiferentOutput]);

   const onAmountChange = ({ target }) => {
      if (isNaN(target.value) || target.value > 999999999) return;
      setAmount(target.value);
   };

   const onAmountClick = () => setAmount("");

   const onInputChange = ({ target }) => setCurrencyInput(target.value);

   const onOutputChange = ({ target }) => setCurrencyOutput(target.value);

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