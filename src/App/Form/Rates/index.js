import { Section } from "../Section";
import { Input } from "../styled";
import { Flags } from "../Flags";

export const Rates = ({ data, currencyOutput }) => {
   const { PLN, ...currenciesData } = data.currenciesData;
   const sortedCurrenciesData = Object.values(currenciesData).sort((a, b) => a.symbol.localeCompare(b.symbol))

   return (
      sortedCurrenciesData.map((object) => (
         <Section key={object.symbol}
            title={currencyOutput === "PLN" ? `${object.symbol} / PLN :` : `PLN / ${object.symbol} :`}
            body={
               <Flags flag={object.flag}>
                  <Input rate="true"
                     name="rate"
                     value={currencyOutput === "PLN" ? ((1 / object.rate).toFixed(4)).toString().replace('.', ',') : (object.rate.toFixed(4)).toString().replace('.', ',')}
                     disabled
                  />
               </Flags>
            }
         />
      ))
   )
};