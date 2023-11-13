import { ratesUrl, currenciesMetaDataUrl, flagUrlPatern } from "./api";
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
    const localstorage = localStorage.getItem('currenciesData');

    if (localstorage && data.stateData === "loading") {
      const localstorage = localStorage.getItem('currenciesData')
      const localData = JSON.parse(localstorage);

      setData({ ...data, oldData: localData })
    }
  }, []);

  useEffect(() => {
    const localstorage = localStorage.getItem('currenciesData');

    if (!localstorage && data.stateData === "ok") {
      const toLocalStore = {
        currenciesData: data.currentData.currenciesData,
        updateDate: data.currentData.updateDate,
      }
      localStorage.setItem("currenciesData", JSON.stringify(toLocalStore))
    }
  }, [data.stateData]);

  useEffect(() => {
    const localstorage = localStorage.getItem('currenciesData');

    if (data.stateError) {
      setData(localstorage ? { ...data, stateData: "error" } : { ...data, stateData: null })
    }

  }, [data.stateError]);

  const updateData = (updateDate, currenciesData) => {
    setData(prevData => ({
      ...prevData,
      stateData: "ok",
      currentData: { updateDate, currenciesData }
    }));
  };

  const updateDataError = () => {
    setData(prevData => ({
      ...prevData, stateError: true
    }))
  };


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

      updateData(updateDate, currenciesData);
    };

    const setTimeoutId = setTimeout(() => {
      const fetchJsonData = (url) => fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then((response) => response.json());

      const fetchcurrenciesData = fetchJsonData(ratesUrl);
      const fetchMetadata = fetchJsonData(currenciesMetaDataUrl);

      Promise.all([fetchcurrenciesData, fetchMetadata])
        .then((data) => {
          const rates = data[0];
          const metadata = data[1];

          return newData(rates, metadata);
        })
        .catch((err) => {
          console.error("BŁĄD", err)

          updateDataError();
        })
    }, 2000)

    return () => {
      clearTimeout(setTimeoutId);
    };

  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setData({ ...data, stateData: "fromCopy" })
    console.log("onFormSubmit")
  };

  return { data, onFormSubmit, }
};

