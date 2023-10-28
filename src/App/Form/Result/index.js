import { Container } from "./styled"

const resultText = (result) => `${Number((result.exchangeResult).toFixed(2)).toLocaleString("pl-PL", { minimumFractionDigits: 2 })}`;

const Result = ({ result, resultOutdated }) => (
   <Container
      outdated={resultOutdated}
   >
      {result && (
         <>
            {resultText(result)}
            &nbsp;
            {result.unit}
         </>
      )}
   </Container>
);

export default Result;