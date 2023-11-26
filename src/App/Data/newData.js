import { flagUrlPatern } from "./api";
import getSymbolFromCurrency from "currency-symbol-map";

export const newData = (data, setData) => {
  const date = data.effectiveDate;
  const number = data.no;
  const arrayRates = data.rates;

  const objectRates = {};
  for (const obj of arrayRates) {
    objectRates[obj.code] = obj;
  };

  const rates = {};
  for (const key in objectRates) {
    rates[key] =
    {
      rate: objectRates[key].mid,
      code: objectRates[key].code,
      currency: objectRates[key].currency
    };
  };

  const baseRate = {
    PLN: {
      rate: 1,
      code: "PLN",
      currency: "złoty"
    }
  };

  const ratesWithBaseRate = { ...rates, ...baseRate };
  const keys = Object.keys(ratesWithBaseRate);

  const symbols = {};
  for (const key of keys) {
    symbols[key] = { symbol: getSymbolFromCurrency(key) };
  };

  const flagsUrl = {};
  for (const key of keys) {
    const iso3166 = (ratesWithBaseRate[key].code).slice(0, -1);
    const flagUrl = (flagUrlPatern.replace("{iso3166}", iso3166)).toLowerCase();

    flagsUrl[key] = ["XDR"].includes(key) ? { flag: null } : { flag: flagUrl };
  };

  const currenciesData = {};
  for (const key of keys) {
    currenciesData[key] = {
      ...ratesWithBaseRate[key],
      ...symbols[key],
      ...flagsUrl[key]
    };
  };

  setData((prevData) => ({
    ...prevData,
    state: "ok",
    currentData: { date, number, currenciesData }
  }));
};