import "./style.css";

const Result = ({ result }) => (

  <div className="form__result">
    {result !== undefined && (
      <>
        {result.exchangeResult.toFixed(2)}&nbsp;{result.unit}
      </>
    )}
  </div>
);

export default Result;