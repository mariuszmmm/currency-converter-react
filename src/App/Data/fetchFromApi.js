import { ratesUrl } from "./api";
import { newData } from "./newData";

export const fetchFromApi = (setData) => {
  fetch(ratesUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json())
    .then((data) => newData(data[0], setData))
    .catch((err) => {
      console.error("ERROR !!!", err)
      setData(prevData => ({
        ...prevData, stateError: true
      }))
    });
};

