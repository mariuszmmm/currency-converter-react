import { useState, useEffect } from "react";

export const useForm = ({ currenciesData }) => {
  const [amount, setAmount] = useState("");
  const [currencyInput, setCurrencyInput] = useState(currenciesData["PLN"].symbol);
  const [currencyOutput, setCurrencyOutput] = useState(currenciesData["EUR"].symbol);
  const [lastDiferentInput, setLastDiferentInput] = useState(currenciesData["PLN"].symbol);
  const [lastDiferentOutput, setLastDiferentOutput] = useState(currenciesData["EUR"].symbol);
  const [result, setResult] = useState();
  const [resultOutdated, setResultOutdated] = useState(false);
  // console.log(currenciesData);
  useEffect(() => {

    if (currencyInput === currencyOutput || currencyInput !== "PLN" && currencyOutput !== "PLN") {
      if (lastDiferentInput === currencyInput) { setCurrencyInput(lastDiferentOutput) };
      if (lastDiferentOutput === currencyOutput) { setCurrencyOutput(lastDiferentInput) }
    }

    if (currencyInput !== currencyOutput && currencyInput === "PLN" || currencyOutput === "PLN") {
      setLastDiferentInput(currencyInput);
      setLastDiferentOutput(currencyOutput);
    };

    setResultOutdated(true);
  }, [currencyInput, currencyOutput]);

  const calculateResult = (currencyInput, currencyOutput, amount) => {

    const rateInput = currenciesData[currencyInput].rate;
    const rateOutput = currenciesData[currencyOutput].rate;
    const currencyInputSign = currenciesData[currencyInput].symbol && currenciesData[currencyInput].unit;
    const currencyOutputSign = currenciesData[currencyOutput].symbol && currenciesData[currencyOutput].unit;

    // const currencyInputUnit = currenciesData[currencyInput].unit;
    // const currencyOutputUnit = currenciesData[currencyOutput].unit;

    setResult({
      exchangeResult: amount * rateOutput / rateInput,
      currencyInputSign,
      currencyOutputSign,
      amount
    })
  };

  const flagInput = currenciesData[currencyInput].flag;
  const flagOutput = currenciesData[currencyOutput].flag;

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currencyInput, currencyOutput, amount);
    setResultOutdated(false);
  };

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