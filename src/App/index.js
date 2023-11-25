import { StyledLegend } from "./styled";
import { useData } from "./Data/useData";
import { Form } from './Form';
import { Data } from './Data';
import { Loading } from "./Loading"
import { Error } from "./Error"

const App = () => {
  const {
    data: { state, error, currentData, oldData }, onFormSubmit
  } = useData();

  return (
    <>
      {["ok", "fromCopy"].includes(state) ?
        <Form
          data={state === "ok" ? currentData : oldData}
        />
        :
        <Data onFormSubmit={onFormSubmit}>
          <StyledLegend error={error}>
            {state === "loading" ?
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