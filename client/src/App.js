import React, { useEffect, useState } from "react";

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
        {/* <CamionPage /> */}
        {view.includes("admin") ? (
          <AdminNav view={view} changeView={changeView} />
        ) : (
          <NavBar view={view} changeView={changeView} />
        )}
        {view === "home" && <Home />}
        {view === "login" && <LogIn changeView={changeView} />}
        {view === "adminLogIn" && (
          <AdminAuth changeView={changeView} view={view} />
        )}
        {view === "admin add" && <AddUser />}
        {view === "admin page" && (
          <AdminPage changeView={changeView} view={view} />
        )}

      {view === "analyse" && <Analyse />}

        <Footer changeView={changeView} />
      </MyContext.Provider>
    </>
  );
};
export default App;
