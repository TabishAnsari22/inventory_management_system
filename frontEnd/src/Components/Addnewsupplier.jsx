import React from 'react'
import { Link } from "react-router-dom";

const Addnewsupplier = () => {
  return (
    <div>
            <div className='main'>
         <div className="heading">
            <div className='heading-child'>
                <h1>Supplier Management</h1>
            </div>
            <div>
            <Link to="/Dashboard">Dashboard</Link> / <Link to="/Supplier">Supplier Management</Link> / Add Supplier 
            </div>
            <div className="category-child">
                <div className="category-heading">
                    <h4>Add New Supplier</h4>
                </div>
                <div className="category-input-main">
                    <input className='input-user1' type="text" placeholder='Supplier Name'/>
                    <input className='input-user1' type="text" placeholder='Address'/>
                    <input className='input-user1' type="text" placeholder='Contact'/>
                    <input className='input-user1' type="text" placeholder='Emil'/>
                    <button className='add-caategory'>Add</button>
                </div>

            </div>
        </div>
      
    </div>
      
    </div>
  )
}

export default Addnewsupplier