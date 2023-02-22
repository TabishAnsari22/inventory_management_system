import React from 'react'
import { Link } from "react-router-dom";

const Addnewtax = () => {
  return (
    <div>
            <div className='main'>
         <div className="heading">
            <div className='heading-child'>
                <h1>Tax Management</h1>
            </div>
            <div>
            <Link to="/Dashboard">Dashboard</Link> / <Link to="/Tax">Tax Management</Link> / Add Tax 
            </div>
            <div className="category-child">
                <div className="category-heading">
                    <h4>Add New Tax</h4>
                </div>
                <div className="category-input-main">
                    <input className='input-user1' type="text" placeholder='Tax Name'/>
                    <input className='input-user1' type="text" placeholder='Tax Percentage'/>
                    <button className='add-caategory'>Add</button>
                </div>

            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Addnewtax
