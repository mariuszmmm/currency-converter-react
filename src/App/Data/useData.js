import { ratesUrl, flagUrlPatern } from "./api";
import getSymbolFromCurrency from 'currency-symbol-map'

import { useEffect, useState } from "react";

export const useData = () => {
  const [data, setData] = useState({
    stateData: "loading",
    stateError: false,
    currentData: null,
    oldData: null,
  });

  useEffect(() => {
    if (data.stateData === "ok") {
      const toLocalStore = {
        date: data.currentData.date,
        number: data.currentData.number,
        currenciesData: data.currentData.currenciesData,
      };

      localStorage.setItem("currenciesData", JSON.stringify(toLocalStore));
    };

    if (data.stateError && data.stateData === "loading") {
      setData(data.oldData ? { ...data, stateData: "error" } : { ...data, stateData: null })
    };
  }, [data]);

  useEffect(() => {
    const localstorage = localStorage.getItem('currenciesData');

    if (localstorage) {
      const localData = JSON.parse(localstorage);
      setData(prevData => ({ ...prevData, oldData: localData }));
    }

    const newData = (data) => {
      const date = data.effectiveDate;
      const number = data.no;
      const arrayRates = data.rates;

      const objectRates = {};
      for (const obj of arrayRates) {
        objectRates[obj.code
        ] = obj;
      };

      const rates = {};
      for (const key in objectRates) {
        rates[key] =
        {
          rate: objectRates[key].mid,
          symbol: objectRates[key].code,
          currency: objectRates[key].currency
        };
      };

      const baseRate = {
        PLN: {
          rate: 1,
          symbol: "PLN",
          currency: "złoty"
        }
      };

      const ratesFull = { ...rates, ...baseRate };
      const keys = Object.keys(ratesFull);

      const units = {};
      for (const key of keys) {
        units[key] = { unit: getSymbolFromCurrency(key) }
      };

      const flagsUrl = {};
      for (const key of keys) {
        const iso3166 = (ratesFull[key].symbol).slice(0, -1);
        const url = (flagUrlPatern.replace("{iso3166}", iso3166)).toLowerCase();

        flagsUrl[key] = ["XDR"].includes(key) ? { flag: null } : { flag: url };
      };

      const currenciesData = {};
      for (const key of keys) {
        currenciesData[key] = {
          ...ratesFull[key],
          ...units[key],
          ...flagsUrl[key]
        }
      };

      setData(prevData => ({
        ...prevData,
        stateData: "ok",
        currentData: { date, number, currenciesData }
      }));
    };

    const setTimeoutId = setTimeout(() => {
      fetch(ratesUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then((response) => response.json())
        .then((data) => newData(data[0]))
        .catch((err) => {
          console.error("BŁĄD", err)

          setData(prevData => ({
            ...prevData, stateError: true
          }))
        })
    }, 2000)

    return () => {
      clearTimeout(setTimeoutId);
    };

  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setData({ ...data, stateData: "fromCopy" })
  };

  return { data, onFormSubmit, }
};

