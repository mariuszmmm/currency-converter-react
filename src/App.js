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

 
  return (
    <Form
      result={result}
      calculateResult={calculateResult}

    />
  );
}

export default App;
