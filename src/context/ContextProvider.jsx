import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };
  return (
    <Context.Provider value={{ texts, onAddText }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
