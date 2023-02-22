import React from 'react'
import { Link } from "react-router-dom";

const Addnewpurchase = () => {
  return (
    <div>
         <div>
            <div className='main'>
         <div className="heading">
            <div className='heading-child'>
                <h1>Purchase Management</h1>
            </div>
            <div>
            <Link to="/Dashboard">Dashboard</Link> / <Link to="/Purchase">Purchase Management</Link> /Add Purchase 
            </div>
            <div className="category-child">
                <div className="category-heading">
                    <h4>Add New Purchase</h4>
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
      
    </div>
  )
}

export default Addnewpurchase
