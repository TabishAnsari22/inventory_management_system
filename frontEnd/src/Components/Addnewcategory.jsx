import React from 'react'
import { Link } from "react-router-dom";

const Addnewcategory = () => {
  return (
    <div className='main'>
         <div className="heading">
            <div className='heading-child'>
                <h1>User Management</h1>
            </div>
            <div>
            <Link to="/Dashboard">Dashboard</Link> / <Link to="/Category">Category Management</Link> / Add Category
            </div>
            <div className="category-child">
                <div className="category-heading">
                    <h4>Add New Category</h4>
                </div>
                <div className="category-input-main">
                    <input className='input-user1' type="text" placeholder='Location Rack Name'/>
                    <button className='add-caategory'>Add</button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Addnewcategory
