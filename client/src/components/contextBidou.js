import axios from "axios";
import React, { createContext, useState } from "react";

export const Context = createContext();
export const Provider = ({ children }) => {
  const [userValue, setUserValue] = useState("ahi just to see if it's working");
  const [role, setRole] = useState("current role");
  const [tableData, setTableData] = useState([]);
  let state = {
    userValue,
    setUserValue,
    role,
    setRole,
    tableData,
    setTableData,
  };

  return <Context.Provider value={state}> {children} </Context.Provider>;
};
