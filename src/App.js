import Amount from "./Amount";
import Input from "./Input";
import Output from "./Output";
import Result from "./Result";
import Button from "./Button";
// import Currency from "./Currency";
import Section from "./Section";
import Rate from "./Rate";
import Legend from "./Legend";
import Form from "./Form";


function App() {
  return (
    <Form>
      <Legend title={"Kalkulator walutowy"} />
      <Section title={"Kwota :"} body={<Amount />} />
      <Section title={"Przelicz z :"} body={<Input />} />
      <Section title={"Przelicz na :"} body={<Output />} />
      <Result />
      <Button />
      <Section title={"kurs EUR :"} body={<Rate />} />
      <Section title={"kurs USD :"} body={<Rate />} />
      <Section title={"kurs GBP :"} body={<Rate />} />
      {/* <Currency /> */}
    </Form>
  );
}

export default App;
