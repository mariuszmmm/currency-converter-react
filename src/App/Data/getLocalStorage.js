export const getLocalStorage = (key, setData) => {
  const localstorage = localStorage.getItem(key);

  if (localstorage) {
    const localData = JSON.parse(localstorage);
    setData(prevData => ({ ...prevData, oldData: localData }));
  };
};