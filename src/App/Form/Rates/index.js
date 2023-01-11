import Section from "../Section";
import { currencies } from "../../currencies";
import { Input } from "../styled"

const currenciesWithOutPLN = currencies.filter(({ symbol }) => symbol !== "PLN");

const Rates = () => {
   return (
      currenciesWithOutPLN.map((currency) => (
         <Section key={currency.symbol}
            title={`Kurs ${currency.symbol} :`}
            body={
               <Input
                  name="rate"
                  defaultValue={currency.rate}
                  disabled
               />
            }
         />
      ))
   )
};

export default Rates;