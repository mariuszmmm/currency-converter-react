import { useEffect } from "react";
import Section from "../Section";
import { Input, Flags } from "../styled";

const Rates = ({ data, currencyOutput }) => {
   const { PLN, ...currenciesData } = data.currenciesData;

   return (
      Object.values(currenciesData).map((currency) => (
         <Section key={currency.symbol}
            title={`Kurs ${currency.symbol}/PLN :`}
            body={
               <Flags flag={currency.flag}>
                  <Input
                     name="rate"
                     value={currencyOutput === "PLN" ? (1 / currency.rate).toFixed(6) : currency.rate.toFixed(6)}
                     disabled
                  />
               </Flags>
            }
         />
      ))
   )
};

export default Rates;