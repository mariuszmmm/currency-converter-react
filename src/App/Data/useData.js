import { ratesUrl, currenciesMetaDataUrl, flagUrlPatern } from "./api";
import { useEffect, useState } from "react";
import getSymbolFromCurrency from 'currency-symbol-map'

export const useData = () => {
  const [data, setData] = useState({
    updateDate: null,
    currenciesData: {},
    stateData: "loading",
  });

  // const saveToLocalStorage = (name, data) => {
  //   localStorage.setItem(name, JSON.stringify(data));
  // }

  useEffect(() => {
    const newData = (rates, metadata) => {
      const updateDate = rates.meta.last_updated_at;

      const ratesData = {};
      for (const key in rates.data) {
        ratesData[key] =
        {
          rate: rates.data[key].value,
          symbol: rates.data[key].code,
        }
      };

      const keysRatesData = Object.keys(ratesData);
      const keysMetadata = Object.keys(metadata);
      const keys = keysMetadata.filter(key => keysRatesData.includes(key))

      const units = {};
      for (const key of keys) {
        units[key] = { unit: getSymbolFromCurrency(key) }
      };

      const flagsUrl = {};
      for (const key of keys) {
        const iso3166 = (metadata[key].countries)[0]['iso3166-2'];
        const url = (flagUrlPatern.replace("{iso3162-2}", iso3166)).toLowerCase();

        flagsUrl[key] = { flag: url };
      };

      const currenciesData = {};
      for (const key of keys) {
        currenciesData[key] = {
          ...ratesData[key],
          ...metadata[key],
          ...units[key],
          ...flagsUrl[key]
        }
      };

      setData({
        ...data,
        updateDate,
        currenciesData,
        stateData: "ok",
      });
    };

    setTimeout(() => {
      const fetchcurrenciesData = fetch(ratesUrl)
        .then((response) => response.json())

      const fetchMetadata = fetch(currenciesMetaDataUrl)
        .then((response) => response.json())

      Promise.all([fetchcurrenciesData, fetchMetadata])
        .then(data => {
          const rates = data[0];
          const metadata = data[1];
          return newData(rates, metadata);
        })
        .catch((error) => {
          console.error("BŁĄD", error)
          setData({
            ...data, stateData: "error"
          })
        });

    }, 1000)
  }, []);

  // console.log("data", data)
  return data
};


