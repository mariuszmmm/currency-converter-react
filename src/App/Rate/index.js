import Section from "../Section";
import { currencies } from "../currencies"

const Rate = () => {
   return (
      currencies.map((currency) => {
         if (currency.symbol !== "PLN") {
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
         }
      })
   )
};

export default Rate;