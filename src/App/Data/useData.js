import { useEffect, useState } from "react";
import { setLocalStorage } from "./setLocalStorage";
import { getLocalStorage } from "./getLocalStorage";
import { fetchFromApi } from "./fetchFromApi";

export const useData = () => {
  const [data, setData] = useState({
    stateData: "loading",
    stateError: false,
    currentData: null,
    oldData: null,
  });

  useEffect(() => {
    setLocalStorage("currenciesData", data, setData);
  }, [data]);

  useEffect(() => {
    getLocalStorage("currenciesData", setData);

    const setTimeoutId = setTimeout(() => {
      fetchFromApi(setData);
    }, 2000)

    return () => {
      clearTimeout(setTimeoutId);
    };
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setData({ ...data, stateData: "fromCopy" });
  };

  return { data, onFormSubmit };
};

