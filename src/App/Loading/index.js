import { useState, useEffect } from "react";

export const Loading = () => {
  const [load, setLoad] = useState(" ");

  useEffect(() => {
    const intervalId = setInterval(() => {
      load.length > 6 ? setLoad(" ") : setLoad(load + ". ")
    }, 250);

    return () => {
      clearInterval(intervalId);
    };
  }, [load]);

  return <span>{load}</span>;
};