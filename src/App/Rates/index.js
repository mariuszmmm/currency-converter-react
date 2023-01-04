import Section from "../Section";
import { currencies } from "../currencies";

const currenciesWithOutPLN = currencies.filter(({ symbol }) => symbol !== "PLN");

const Rates = () => (
   currenciesWithOutPLN.map((currency) => {
      return (
         <Section key={currency.symbol}
            title={`Kurs ${currency.symbol} :`}
            body={
               <input
                  name="rate"
                  defaultValue={currency.rate}
                  className="form__field js-rateEUR"
                  disabled
               />
            }
         />
      )
   })
);

export default Rates;