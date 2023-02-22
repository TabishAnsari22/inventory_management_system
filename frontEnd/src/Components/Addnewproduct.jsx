import React from 'react'
import { Link } from "react-router-dom";

const Addnewproduct = () => {
  return (
    <div>

<div className='main'>
         <div className="heading">
            <div className='heading-child'>
                <h1>Product Management</h1>
            </div>
            <div>
            <Link to="/Dashboard">Dashboard</Link> / <Link to="/Product">Product Management</Link> / Add Product
            </div>
            <div className="category-child">
                <div className="category-heading">
                    <h4>Add New Product</h4>
                </div>
                <div className="category-input-main">
                    <input className='input-user1' type="text" placeholder='Product Name'/>
                    <input className='input-user1' type="text" placeholder='Product Manufacture By'/>
                    <input className='input-user1' type="text" placeholder='category'/>
                    <input className='input-user1' type="text" placeholder='Select Location Rack'/>
                    <button className='add-caategory'>Add</button>
                </div>

            </div>
        </div>
      
    </div>
      
    </div>
  )
}

export default Addnewproduct
