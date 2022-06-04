import React, { useContext } from "react";
import { Context } from "./contextBidou";
// import { MyContext } from "../App.js";

const Test = () => {
  const test = useContext(Context);
  console.log(test);

  return <>{}</>;
};

export default Test;
