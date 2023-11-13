const Options = ({ data }) => {

   return (
      Object.values(data.currenciesData).map((currency) =>
         <option
            key={currency.symbol}
            value={currency.symbol}
         >
            {window.innerWidth > 570 && currency.currency
               ?
               `${currency.currency} / ${currency.symbol}`
               :
               `${currency.symbol}`
            }
         </option>
      )
   )
};

export default Options;