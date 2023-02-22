import * as React from 'react';
import axios from 'axios';
import { useContext } from "react";
import { useNavigate } from 'react-router';
import { GlobalContext } from "./Contex";


const Adminlogin = () => {


    let { state, dispatch } = useContext(GlobalContext);
    const navigate =useNavigate()



    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        try {
            let response = await axios.post(`${state.baseUrl}/adminlogin`, {
                email: data.get('email'),
                password: data.get('password')
            }, {
                withCredentials: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    "Content-Type": "application/json"
                }
            })
            console.log("response", response.data);
            navigate('/Dashboard')

            // dispatch({ type: "USER_LOGIN", payload: response.data.profile })


        } catch (e) {
            console.log("Error in api", e);

        }
    };









  return (
    <div>
        <div className="admin-parentAll">
            <div className="admin-heading"><h1 className='adminheading'>Inventory Management System</h1></div>
            <form onSubmit={handleSubmit} className="admin-parent">
                <div className="admin-child-top">
                    <h2>Admin Login</h2>
                </div>
                <div className="admin-child-buttom">
                    <div className="bottom-child1">
                        <input className='input-user' id="email" name="email" type="text" placeholder='Email Address' />
                    </div>
                    <div className="bottom-child1">
                        <input className='input-user' name="password" id="password" type="password" placeholder='Password' />
                    </div>
                    <div className="bottom-child1">
                        <button className='btn-submit'  type='submit'> Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Adminlogin
