import { Form } from "./Form";
import { useState } from "react";
import { currencies } from "./currencies"

function App() {
  const [result, setResult] = useState();

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

  const resetResult = () => {
    setResult()
  };

  return (
    <Form
      result={result}
      calculateResult={calculateResult}
      resetResult={resetResult}
    />
  );
};

export default App;