const Options = ({ data }) => {

   return (
      Object.values(data.currenciesData).map((currency) =>
         <option
            key={currency.symbol}
            value={currency.symbol}
         >
            {currency.currency ? 
            currency.currency.length > 17 ? 
            `${currency.currency.slice(0, 17)}.../` : `${currency.currency} /`: ""} {currency.symbol}
         </option>
      )
   )
};

export default Options;