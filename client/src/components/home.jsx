import React from "react";
import Test from "./contextTest";
import NewAddUser from "./newAddUser";

const Home = (props) => {
  return (
    <div className="create">
      <h1 className="text-3xl font-bold underline">Home Page</h1>
      <NewAddUser />
    </div>
  );
};

export default Home;
