export const setLocalStorage = (key, data, setData) => {
  if (data.stateData === "ok") {
    const toLocalStore = {
      date: data.currentData.date,
      number: data.currentData.number,
      currenciesData: data.currentData.currenciesData,
    };

    localStorage.setItem(key, JSON.stringify(toLocalStore));
  };

  if (data.stateError && data.stateData === "loading") {
    setData(data.oldData ? { ...data, stateData: "error" } : { ...data, stateData: null });
  };
};