import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminAuth from "./components/AdminAuth.jsx";
import Home from "./components/home.jsx";
import NavBar from "./layouts/navBar.jsx";
import AddUser from "./components/addUser.jsx";
import axios from "axios";
import AdminPage from "./components/adminPages/adminPage.jsx";
import Analyse from "./components/analyse.jsx";
import UserNav from "./layouts/userNav.jsx";
import Nav from "./layouts/newNav.jsx";
import Test from "./components/contextTest.jsx";
import { Context } from "./components/contextBidou.js";
import Header from "./components/header/Header.jsx";
import CamionTable from "./components/receptorAgent/CamionTable.jsx";
import CamionPage from "./components/receptorAgent/CamionPage.jsx";
import NewAdminNav from "./layouts/adminNav.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import NewUserLogin from "./components/userLogin.jsx";
import UsersPage from "./components/adminPages/usersPage.jsx";
import UsersTable from "./components/adminPages/usersTable.jsx";
import UpdateUser from "./components/adminPages/updateUser.jsx";
import NewAddUser from "./components/newAddUser.jsx";
import AnalysePage from "./components/analyseAgent/analysePage.jsx";
import InvoiceTemplate from "./components/facture/invoiceTemplate.jsx";
import UpdateFacture from "./components/facture/updateFacture.jsx";
import FactureList from "./components/facture/factureList.jsx";
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
        {view.includes("admin") && (
          <NewAdminNav view={view} changeView={changeView} />
        )}
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            exact
            path="/userLogin"
            element={<NewUserLogin changeView={changeView} />}
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
          <Route exact path="/admin/:role" element={<UsersTable />} />
          <Route exact path="/admin/update" element={<UpdateUser />} />
          <Route exact path="/newAddUser" element={<NewAddUser />} />
          <Route exact path="/camion" element={<CamionPage />} />
          <Route exact path="/analysepage" element={<AnalysePage />} />
          <Route exact path="/invoice" element={<InvoiceTemplate />} />
          <Route exact path="/invoice/update" element={<UpdateFacture />} />
          <Route exact path="/invoice/list" element={<FactureList />} />
        </Routes>
      </MyContext.Provider>
    </>
  );
};
export default App;
