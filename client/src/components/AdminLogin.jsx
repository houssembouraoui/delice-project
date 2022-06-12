import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const AdminLogin = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const [pass, setPass] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/admin/login").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  let authenticate = () => {
    console.log(password, email);
    if (email === data.email && password === data.password) {
      props.changeView("admin page");
      console.log(props.view);
      console.log(pass);
      return navigate("/admin");
    } else {
      setPass(false);
      console.log(props.view);
    }
  };

  return (
    <div>
      <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
        <div className=" flex w-96 ">{/* className="lazy-loaded w-32" */}</div>
        <img
          src={require("../avatars/logo.png")}
          className="lazy-loaded w-64"
        />

        <div className="bg-white w-96 shadow-xl rounded p-5">
          <h1 className="text-3xl font-medium">S’identifier</h1>

          <form className="space-y-5 mt-5">
            <input
              type="text"
              className="w-full h-12 border border-gray-800 rounded px-3"
              placeholder="E-amai ou Téléohone"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full h-12 border border-gray-800 rounded px-3"
              placeholder="Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="text-center w-full bg-blue-700 rounded-full text-white py-3 font-medium"
              onClick={() => authenticate()}
            >
              S'identifier
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
