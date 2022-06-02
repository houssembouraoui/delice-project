import axios from "axios";
import React, { createContext, useState } from "react";

export const Context = createContext();
export const Provider = ({ children }) => {
  const [userValue, setUserValue] = useState("ahi just to see if it's working");
  let state = {
    userValue,
    setUserValue,
  };

  return <Context.Provider value={state}> {children} </Context.Provider>;
};
