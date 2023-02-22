import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addnewcategory from "../Components/Addnewcategory";
import Addnewlocation from "../Components/Addnewlocation";
import Addneworder from "../Components/Addneworder";
import Addnewproduct from "../Components/Addnewproduct";
import Addnewpurchase from "../Components/Addnewpurchase";
import Addnewsupplier from "../Components/Addnewsupplier";
import Addnewtax from "../Components/Addnewtax";
import Addnewuser from "../Components/Addnewuser";
import Addnwecompany from "../Components/Addnwecompany";
import Adminlogin from "../Components/Adminlogin";
import Category from "../Components/Category";
import Company from "../Components/Company";
import Dashboard from "../Components/Dashboard";
import Location from "../Components/Location";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import Order from "../Components/Order";
import Product from "../Components/Product";
import Purchase from "../Components/Purchase";
import Setupbusines from "../Components/Setupbusines";
import Signup from "../Components/Signup";
import Supplier from "../Components/Supplier";
import Tax from "../Components/Tax";
import Usermanagement from "../Components/Usermanagement";
import Protactiveroutes from "./Protectiverouting";

const Approutes = () => {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Setupbusines" element={<Setupbusines />} />
          <Route element={<Protactiveroutes />} >
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/Usermanagement" element={<Usermanagement />} />
          <Route path="/Addnewuser" element={<Addnewuser />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Addnewcategory" element={<Addnewcategory />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Addnwecompany" element={<Addnwecompany />} />
          <Route path="/Supplier" element={<Supplier />} />
          <Route path="/Addnewsupplier" element={<Addnewsupplier />} />
          <Route path="/Tax" element={<Tax />} />
          <Route path="/Addnewtax" element={<Addnewtax />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Addnewproduct" element={<Addnewproduct />} />
          <Route path="/Addnewpurchase" element={<Addnewpurchase />} />
          <Route path="/Purchase" element={<Purchase />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Addneworder" element={<Addneworder />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Addnewlocation" element={<Addnewlocation />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Approutes;
