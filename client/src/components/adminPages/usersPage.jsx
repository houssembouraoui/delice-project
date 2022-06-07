// zeyda but might need it

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import UsersTable from "./usersTable";

// const UsersPage = () => {
//   let { role } = useParams();
//   let [users, setUsers] = useState();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/users/${role}`)
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.errer(error));
//   }, []);

//   return (
//     <div>
//       <UsersTable role={users} />
//     </div>
//   );
// };

// export default UsersPage;
