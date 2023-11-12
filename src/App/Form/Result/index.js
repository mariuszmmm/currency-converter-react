import { Container, AmountInfo, ResultInfo } from "./styled"

const resultText = (number) => `${Number((number).toFixed(2)).toLocaleString("pl-PL", { minimumFractionDigits: 2 })}`;

const Result = ({ result, resultOutdated }) => (

   <Container outdated={resultOutdated}>
      <AmountInfo>
         {result && (
            <>
               {resultText(Number(result.amount))}
               &nbsp;&nbsp;
               {result.currencyInputSign}&nbsp;=
            </>
         )}
      </AmountInfo>
      <ResultInfo>
         {result && (
            <>
               {resultText(result.exchangeResult)}
               &nbsp;&nbsp;
               {result.currencyOutputSign}
            </>
         )}
      </ResultInfo>
   </Container >
);

export default Result;