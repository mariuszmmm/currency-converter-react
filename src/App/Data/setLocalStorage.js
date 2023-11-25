export const setLocalStorage = (key, data, setData) => {
  if (data.state === "ok") {
    const toLocalStore = {
      date: data.currentData.date,
      number: data.currentData.number,
      currenciesData: data.currentData.currenciesData,
    };

    localStorage.setItem(key, JSON.stringify(toLocalStore));
  };

  if (data.error && data.state === "loading") {
    setData(data.oldData ? { ...data, state: "error" } : { ...data, state: null });
  };
};