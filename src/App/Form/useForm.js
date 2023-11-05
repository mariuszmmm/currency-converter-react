import { useState, useEffect } from "react";
import { currencies } from "./currencies";


export const useForm = () => {
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

  return {
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
  };
};