import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "./Contex";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const Navbar = () => {
  let { state, dispatch } = useContext(GlobalContext);

  const logouthandler = async () => {
    try {
      let response = await axios.post(
        `${state.baseUrl}/logout`,
        {},

        {
          withCredentials: true,
        }
      );
      console.log("response", response.data);

      dispatch({ type: "USER_LOGOUT" });
    } catch (e) {
      console.log("Error in api", e);
    }
  };

  return (
    <>
      <nav className="nav_2">
        {state.isLogin === true ? (
          <div className="iconMain">
            {/* <Link to="/" onClick={logouthandler}>
              <button className="navBtn">Logout</button>
            </Link> */}
            <Link to="/Dashboard">
              <button className="navBtn">Dashboard</button>
            </Link>
          </div>
        ) : null}

        {state.isLogin === false ? (
          <div className="iconMain">
            {/* <Link to="/login">
              <button className="navBtn"> Login</button>
            </Link>
            <Link to="/signup">
              <button className="navBtn">Signup</button>
            </Link>
            <Link to="/Dashboard">
              <button className="navBtn">Dashboard</button>
            </Link> */}
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
