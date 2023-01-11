import { Container } from "./styled"

const Result = ({ result, resultOutdated }) => (
   <Container
      outdated={resultOutdated}
   >
      {result !== undefined && (
         <>
            {Number((result.exchangeResult).toFixed(2)).toLocaleString("pl-PL", { minimumFractionDigits: 2 })}
            &nbsp;
            {result.unit}
         </>
      )}
   </Container>
);

export default Result;