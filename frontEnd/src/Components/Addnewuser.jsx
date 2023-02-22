import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./Contex";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Addnewuser = () => {
  let { state, dispatch } = useContext(GlobalContext);

  // const navigate =useNavigate()

  //input states manages
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userName) {
      toast.error("Please enter First Name");
      return;
    }
    //   if (!lastName) {
    //     toast.error("Please enter Last Name")
    //     return
    //   }
    if (!userEmail) {
      toast.error("Please enter Email");
      return;
    }
    if (!userPassword) {
      toast.error("Please enter Password");
      return;
    }

    try {
      const response = await axios.post(
        `${state.baseUrl}/addnewuser`,
        {
          userName,
          //   lastName,
          userEmail,
          userPassword,
        },
        true
      );
      console.log(response, "response");
      toast.success("Signup Success");
      // navigate('/Login')
    } catch (e) {
      console.log("error in api call", e);
      toast.error("email or password incorrect");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="heading">
        <div className="heading-child">
          <h1>User Management</h1>
        </div>
        <div>
          <Link to="/Dashboard">Dashboard</Link> /{" "}
          <Link to="/Usermanagement">User Management</Link> / Add User
        </div>
      </div>
      <div className="new-user-parent">
        <div className="new-user">Add New User</div>
        <div className="new-user-child">
          <input
            className="input-user1"
            type="name"
            placeholder="User Name"
            value={userName}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />
          <input
            className="input-user1"
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => {
              setuserEmail(e.target.value);
            }}
          />
          <input
            className="input-user1"
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => {
              setuserPassword(e.target.value);
            }}
          />
          <button className="add-caategory">Add</button>
        </div>
      </div>
    </form>
  );
};

export default Addnewuser;
