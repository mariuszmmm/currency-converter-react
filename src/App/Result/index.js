import "./style.css";

const Result = ({ result, resultOutdated }) => (

   <div className={`form__result ${resultOutdated ? "form__result--invalid" : ""}`}>
      {result !== undefined && (
         <>
            {result.exchangeResult.toFixed(2)}&nbsp;{result.unit}
         </>
      )}
   </div>
);

export default Result;