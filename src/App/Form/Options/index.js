export const Options = ({ data }) => {
   const dataSortedByCurrency = Object.values(data.currenciesData).sort((a, b) => a.currency.localeCompare(b.currency))
   const dataSortedBySymbol = Object.values(data.currenciesData).sort((a, b) => a.symbol.localeCompare(b.symbol))
   const windowFull = window.innerWidth > 570 ? true : false;
   const currencies = windowFull ? dataSortedByCurrency : dataSortedBySymbol

   return (
      currencies.map((currency) =>
         <option
            key={currency.symbol}
            value={currency.symbol}
         >
            {windowFull && currency.currency
               ?
               `${currency.currency} / ${currency.symbol}`
               :
               `${currency.symbol}`
            }
         </option>
      )
   )
};