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

function App() {
  let { state, dispatch } = useContext(GlobalContext);
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
  />;

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
    <Router>
      <Navbar />
      <Routes>
        {state?.isLogin === true ? (
          <>
            {/* <Route path="/Setupinventory" element={<Setupinventory/> } /> */}
            <Route path="/Dashboard" element={<Dashboard /> } />
          </>
        ) : null}

        {state?.isLogin === false ? (
          <>
            <Route path="/Dashboard" element={<Dashboard /> } />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
            <Route path="/Setupbusines" element={<Setupbusines />} />
            <Route path="/Adminlogin" element={<Adminlogin />} />
            <Route path="/Usermanagement" element={<Usermanagement/>} />
            <Route path="/Addnewuser" element={<Addnewuser/>} />
            <Route path="/Category" element={<Category/>} />
            <Route path="/Addnewcategory" element={<Addnewcategory />} />                       
            <Route path="/Company" element={<Company/>} />                       
            <Route path="/Addnwecompany" element={<Addnwecompany />} />                       
            <Route path="/Supplier" element={<Supplier />} />                       
            <Route path="/Addnewsupplier" element={<Addnewsupplier />} />                       
            <Route path="/Tax" element={<Tax />} />                       
            <Route path="/Addnewtax" element={<Addnewtax />} />                       
            <Route path="/Product" element={<Product/>} />     
            <Route path="/Addnewproduct" element={<Addnewproduct />} />     
            <Route path="/Addnewpurchase" element={<Addnewpurchase />} />     
            <Route path="/Purchase" element={<Purchase />} />     
            <Route path="/Order" element={<Order />} />     
            <Route path="/Addneworder" element={<Addneworder/> } />     
            <Route path="/Location" element={<Location /> } />     
            <Route path="/Addnewlocation" element={<Addnewlocation /> } />     

          </>
        ) : null}

        {state?.isLogin === null ? (
          <>
            <Route
              path="*"
              element={
                <div className="image_container234">
                  {/* <img src={lodingimg} alt="loding_image" /> */}
                </div>
              }
            />
          </>
        ) : null}
      </Routes>
    </Router>
  );
}

export default App;
