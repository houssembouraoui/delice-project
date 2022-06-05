import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminAuth from "./components/AdminAuth.jsx";
import Home from "./components/home.jsx";
import LogIn from "./components/login.jsx";
import NavBar from "./layouts/navBar.jsx";
import AddUser from "./components/addUser.jsx";
import axios from "axios";
import AdminPage from "./components/adminPage.jsx";
import Analyse from "./components/analyse.jsx";
import UserNav from "./layouts/userNav.jsx";
import Nav from "./layouts/newNav.jsx";
import Test from "./components/contextTest.jsx";
import { Context } from "./components/contextBidou.js";
import Header from "./components/header/Header.jsx";
import CamionTable from "./components/receptorAgent/CamionTable.jsx";
import CamionPage from "./components/receptorAgent/CamionPage.jsx";
import NewAdminNav from "./layouts/adminNav.jsx";
import NewFooter from "./layouts/newFooter.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import NewUserLogin from "./components/newUserLogin.jsx";

export const MyContext = React.createContext();

const App = () => {
  let [view, setView] = useState("home");
  let [test, setTest] = useState("hello world");

  let changeView = (view) => {
    setView(view);
  };

  return (
    <>
      <MyContext.Provider value={test}>
        <Header />
        <NewAdminNav changeView={changeView} />
        {/* <CamionPage /> */}
        {view.includes("admin") ? (
          <NewAdminNav view={view} changeView={changeView} />
        ) : (
          <NavBar view={view} changeView={changeView} />
        )}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/userLogin"
              element={<LogIn changeView={changeView} />}
            />

            <Route
              exact
              path="/adminLogin"
              element={<AdminLogin changeView={changeView} view={view} />}
            />
            <Route exact path="addUser" element={<AddUser />} />

            <Route
              exact
              path="/admin"
              element={<AdminPage changeView={changeView} view={view} />}
            />
            <Route exact path="/analyse" element={<Analyse />} />
          </Routes>
        </BrowserRouter>
        <NewFooter changeView={changeView} />
      </MyContext.Provider>
    </>
  );
};
export default App;
