import { StyledLegend } from "./Legend";
import { Button } from "./styled";
import { useData } from "./Data/useData";
import { Form } from './Form';
import { Data } from './Data';
import { Loading } from "./Loading"

const App = () => {
  const { data, onFormSubmit } = useData();

  return (
    <>
      {data.stateData === "ok" || data.stateData === "fromCopy" ?
        <Form
          data={data.stateData === "ok" ? data.currentData : data.oldData}
        />
        :
        <Data onFormSubmit={onFormSubmit}>
          <StyledLegend error={data.stateError}>
            {data.stateData === "loading" ?
              <p>Trwa ładowanie danych <Loading /></p>
              :
              data.stateData === "error" ?
                <>
                  <p>Wystąpił błąd przy pobieraniu danych.</p>
                  <p>Czy chcesz użyć kopi z&nbsp;
                    {new Date(data.oldData.date).toLocaleDateString()}r&nbsp;?
                  </p>
                  <Button> OK </Button>
                </>
                :
                <>
                  <p>Niestety wystąpił błąd pobierania danych.</p>
                  <p>Spróbuj później.</p>
                </>
            }
          </StyledLegend>
        </Data>
      }
    </>
  )
};

export default App;