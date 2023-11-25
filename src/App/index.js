import { StyledLegend } from "./styled";
import { useData } from "./Data/useData";
import { Form } from './Form';
import { Data } from './Data';
import { Loading } from "./Loading"
import { Error } from "./Error"

const App = () => {
  const {
    data: { stateData, stateError, currentData, oldData }, onFormSubmit
  } = useData();

  return (
    <>
      {["ok", "fromCopy"].includes(stateData) ?
        <Form
          data={stateData === "ok" ? currentData : oldData}
        />
        :
        <Data onFormSubmit={onFormSubmit}>
          <StyledLegend error={stateError}>
            {stateData === "loading" ?
              <Loading />
              :
              <Error oldData={oldData} />
            }
          </StyledLegend>
        </Data>
      }
    </>
  )
};

export default App;