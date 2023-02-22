import React from 'react'
import { Link } from "react-router-dom";

const Addneworder = () => {
  return (
    <div>
         <div className='main'>
         <div className="heading">
            <div className='heading-child'>
                <h1>Order Management</h1>
            </div>
            <div>
            <Link to="/Dashboard">Dashboard</Link> / <Link to="/Order">Order Management</Link> / Add Order
            </div>
            <div className="category-child">
                <div className="category-heading">
                    <h4>Add New Order</h4>
                </div>
                <div className="category-input-main">
                    <input className='input-user1' type="text" placeholder='Customer Name'/>
                    <input className='input-user1' type="text" placeholder='Product Name'/>
                    <input className='input-user1' type="text" placeholder='Mfg'/>
                    <input className='input-user1' type="text" placeholder='Batch No'/>
                    <input className='input-user1' type="Date" placeholder='Expire Date'/>
                    <input className='input-user1' type="Number" placeholder='Quantity'/>
                    <input className='input-user1' type="Number" placeholder='Unit Price'/>
                    <input className='input-user1' type="Number" placeholder='Total Price'/>
                    <button className='add-caategory'>Add</button>
                </div>

            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Addneworder
