import { theme } from "../../../theme";

export const Options = ({ data }) => {
  const dataSortedByCurrency = Object.values(data.currenciesData).sort((a, b) => a.currency.localeCompare(b.currency));
  const dataSortedByCode = Object.values(data.currenciesData).sort((a, b) => a.code.localeCompare(b.code));
  const windowMobileMax = (window.innerWidth > theme.breakpoint.mobileMax ? true : false);
  const currencies = windowMobileMax ? dataSortedByCurrency : dataSortedByCode;

  return (
    currencies.map((currency) =>
      <option
        key={currency.code}
        value={currency.code}
      >
        {windowMobileMax && currency.currency
          ?
          `${currency.currency} / ${currency.code}`
          :
          `${currency.code}`
        }
      </option>
    )
  )
};