import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useContext } from "react";
import { GlobalContext } from "./Components/Contex";
import axios from "axios";
import Signup from "./Components/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Setupbusines from "./Components/Setupbusines";
import Adminlogin from "./Components/Adminlogin";
import Usermanagement from "./Components/Usermanagement";
import Addnewuser from "./Components/Addnewuser";
import Category from "./Components/Category";
import Addnewcategory from "./Components/Addnewcategory";
import Company from "./Components/Company";
import Addnwecompany from "./Components/Addnwecompany";
import Supplier from "./Components/Supplier";
import Addnewsupplier from "./Components/Addnewsupplier";
import Tax from "./Components/Tax";
import Addnewtax from "./Components/Addnewtax";
import Product from "./Components/Product";
import Addnewproduct from "./Components/Addnewproduct";
import Purchase from "./Components/Purchase";
import Order from "./Components/Order";
import Addneworder from "./Components/Addneworder";
import Addnewpurchase from "./Components/Addnewpurchase";
import Location from "./Components/Location";
import Addnewlocation from "./Components/Addnewlocation";
import Approutes from "./router/Approutes";

function App() {
  let { state, dispatch } = useContext(GlobalContext);
 

  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await axios({
          url: `${state.baseUrl}/profile`,
          method: "get",
          withCredentials: true,
        });
        if (response.status === 200) {
          console.log("response: ", response.data);
          dispatch({
            type: "USER_LOGIN",
            payload: response.data,
          });
        } else {
          dispatch({ type: "USER_LOGOUT" });
        }
      } catch (e) {
        console.log("Error in api", e);
        dispatch({
          type: "USER_LOGOUT",
        });
      }
    };
    getProfile();
  }, []);
  return (
    <>
    <Approutes/>
      
     <ToastContainer
     position="top-left"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
   />
   </>
  );
}

export default App;
