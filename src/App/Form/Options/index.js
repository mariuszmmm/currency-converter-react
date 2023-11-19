export const Options = ({ data }) => {
   const dataSortedByCurrency = Object.values(data.currenciesData).sort((a, b) => a.currency.localeCompare(b.currency))
   const dataSortedByCode = Object.values(data.currenciesData).sort((a, b) => a.code.localeCompare(b.code))
   const windowFull = window.innerWidth > 700 ? true : false;
   const currencies = windowFull ? dataSortedByCurrency : dataSortedByCode

   return (
      currencies.map((currency) =>
         <option
            key={currency.code}
            value={currency.code}
         >
            {windowFull && currency.currency
               ?
               `${currency.currency} / ${currency.code}`
               :
               `${currency.code}`
            }
         </option>
      )
   )
};