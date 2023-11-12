import Form from './Form';
import Data from './Data';
import { useData } from './Data/useData';

const App = () => {
  const { stateData, error } = useData();
  const data = useData();

  return (
    <>
      {stateData === "ok" ?
        <Form data={data}/>
        :
        <Data stateData={stateData} />}
    </>
  )
};

export default App;