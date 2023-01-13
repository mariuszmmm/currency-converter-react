import Section from "../Section";
import { currencies } from "../../currencies";
import { Input, Flags } from "../styled";

const currenciesWithOutPLN = currencies.filter(({ symbol }) => symbol !== "PLN");

const Rates = () => {
   return (
      currenciesWithOutPLN.map((currency) => (
         <Section key={currency.symbol}
            title={`Kurs ${currency.symbol} :`}
            body={
               <Flags flag={currency.flag}>
                  <Input
                     name="rate"
                     defaultValue={currency.rate}
                     disabled
                  />
               </Flags>
            }
         />
      ))
   )
};

export default Rates;