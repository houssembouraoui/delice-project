import axios from "axios";
import React, { createContext, useState } from "react";

export const Context = createContext();
export const Provider = ({ children }) => {
  const [userValue, setUserValue] = useState("user value");
  const [role, setRole] = useState("current role");
  const [tableData, setTableData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [row, setRow] = useState({});
  let state = {
    userValue,
    setUserValue,
    role,
    setRole,
    tableData,
    setTableData,
    userId,
    setUserId,
    row,
    setRow,
  };

  return <Context.Provider value={state}> {children} </Context.Provider>;
};
