import React from 'react'
import { Link } from "react-router-dom";

const Addnwecompany = () => {
  return (
    <div>
         <div className='main'>
         <div className="heading">
            <div className='heading-child'>
                <h1>Company Management</h1>
            </div>
            <div>
            <Link to="/Dashboard">Dashboard</Link> / <Link to="/Company">Company Management</Link> / Add Company
            </div>
            <div className="category-child">
                <div className="category-heading">
                    <h4>Add New Company</h4>
                </div>
                <div className="category-input-main">
                    <input className='input-user1' type="text" placeholder='Company Name'/>
                    <input className='input-user1' type="text" placeholder='Company Short Name'/>
                    <button className='add-caategory'>Add</button>
                </div>

            </div>
        </div>
      
    </div>
      
    </div>
  )
}

export default Addnwecompany
