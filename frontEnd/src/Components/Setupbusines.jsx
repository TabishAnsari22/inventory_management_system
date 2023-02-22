import * as React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { GlobalContext } from "./Contex";
import { useContext } from "react";
import { useNavigate } from 'react-router';


const Setupbusines = () => {
  let { state } = useContext(GlobalContext);
  const navigate =useNavigate()

  const [BusinessName, setBusinessName] = useState("");
  const [AddresName, setAddresName] = useState("");
  const [ContactName, setContactName] = useState("");
  const [EmailName, setEmailName] = useState("");
  const [TimezoneName, setTimezoneName] = useState("");
  const [CurrencyName, setCurrencyName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!BusinessName) {
      toast.error("Please enter Business Name");
      return;
    }
    if (!AddresName) {
      toast.error("Please enter Addres Name ");
      return;
    }
    if (!ContactName) {
      toast.error("Please enter Contact");
      return;
    }
    if (!EmailName) {
      toast.error("Please enter Email");
      return;
    }
    if (!TimezoneName) {
      toast.error("Please enter Timezone");
      return;
    }
    if (!CurrencyName) {
      toast.error("Please enter Currency");
      return;
    }

    try {
      const response = await axios.post(
        `${state.baseUrl}/setupp`,
        {
          BusinessName,
          AddresName,
          ContactName,
          EmailName,
          TimezoneName,
          CurrencyName,
        },
        true
      );
      console.log(response, "response");
      // localStorage.setItem("BusinessName", JSON.stringify(BusinessName));
      // localStorage.setItem("AddresName", JSON.stringify(AddresName));
      // localStorage.setItem("ContactName", JSON.stringify(ContactName));
      // localStorage.setItem("EmailName", JSON.stringify(EmailName));
      // localStorage.setItem("TimezoneName", JSON.stringify(TimezoneName));
      // localStorage.setItem("CurrencyName", JSON.stringify(CurrencyName));

      // toast.success("Signup Success")
        navigate('/Login')
    } catch (e) {
      console.log("error in api call", e);
      toast.error("email or password incorrect");
    }
  };
  return (
    <div>
      <div className="parentAll">
        <form onSubmit={handleSubmit} className="setup-parent">
          <div className="top-child">
            <div className="top-child-heading">
              <h1>Set Up</h1>
            </div>
          </div>
          <div className="bottom-child">
            <div className="bottom-child-h">
              <h3>Set Up Store</h3>
            </div>
            <div className="bottom-child1">
              <input
                className="input-user"
                type="text"
                placeholder="Business Name"
                value={BusinessName}
                onChange={(e) => {
                  setBusinessName(e.target.value);
                }}
              />
            </div>
            <div className="bottom-child1">
              <input
                className="input-user"
                type="text"
                placeholder="Address"
                value={AddresName}
                onChange={(e) => {
                  setAddresName(e.target.value);
                }}
              />
            </div>
            <div className="bottom-child1">
              <input
                className="input-user"
                type="Number"
                placeholder="Contact No"
                value={ContactName}
                onChange={(e) => {
                  setContactName(e.target.value);
                }}
              />
            </div>
            <div className="bottom-child1">
              <input
                className="input-user"
                type="text"
                placeholder="Email"
                value={EmailName}
                onChange={(e) => {
                  setEmailName(e.target.value);
                }}
              />
            </div>
            <div className="bottom-child1">
              <input
                className="input-user"
                type="timezone"
                placeholder="Select Timezone"
                value={TimezoneName}
                onChange={(e) => {
                  setTimezoneName(e.target.value);
                }}
              />
            </div>
            <div className="bottom-child1">
              <input
                className="input-user"
                type="currency"
                placeholder="Select Currency"
                value={CurrencyName}
                onChange={(e) => {
                  setCurrencyName(e.target.value);
                }}
              />
            </div>
            <div className="bottom-child1">
              <button className="btn-submit" type="Submit">
                Submit
              </button>
            </div>
          </div>
        </form>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Setupbusines;
