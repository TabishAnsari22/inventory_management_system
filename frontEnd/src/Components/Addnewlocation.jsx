import React from 'react'
import { Link } from "react-router-dom";

const Addnewlocation = () => {
  return (
    <div className='main'>
         <div className="heading">
            <div className='heading-child'>
                <h1>Location Rack Management</h1>
            </div>
            <div>
            <Link to="/Dashboard">Dashboard</Link> / <Link to="/Location">Location Rack Management</Link> / Add Location Rack 
            </div>
            <div className="category-child">
                <div className="category-heading">
                    <h4>Add New Location Rack </h4>
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

export default Addnewlocation
