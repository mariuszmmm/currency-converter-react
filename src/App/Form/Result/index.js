import { Container, AmountInfo, ResultInfo } from "./styled"

const resultText = (number) => `${Number((number).toFixed(2)).toLocaleString("pl-PL", { minimumFractionDigits: 2 })}`;

export const Result = ({ result, resultOutdated }) => (
  <Container outdated={resultOutdated}>
    {result &&
      <>
        <AmountInfo>
          {resultText(Number(result.amount))}
          &nbsp;&nbsp;
          {result.currencyInputSign}&nbsp;=
        </AmountInfo>
        <ResultInfo>
          {resultText(result.exchangeResult)}
          &nbsp;&nbsp;
          {result.currencyOutputSign}
        </ResultInfo>
      </>
    }
  </Container >
);