import React from 'react'
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Purchase = () => {
  return (
    <div>
    <div className="user-management-parentall">
<div>
<h1>Purchase Management</h1>
</div>
<div>
<Link to="/Dashboard">Dashboard</Link> / Purchase Management
</div>
<br />
<br />
<br />

<Grid item xs={12} md={8} lg={12}>
<Paper
sx={{
  // p: 2,
  display: "flex",
  flexDirection: "column",
  height: 240,
  border: "1px solid lightgray",
}}
>
<div className="list-parent-all">
  <div className="list-parent">
    <h3>Purchase Management</h3>
    <Link to="/Addnewpurchase"><button>Add</button></Link>
  </div>
  <div className="user-parent">
    <div className="user-child">
      <p>Show</p>
      <select name="select" id="">
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="22">22</option>
        <option value="23">23</option>
      </select>
      <p>entries</p>
    </div>
    <div className="user-child2">
      <p>Search</p>
      <input className="input-serch" type="serch" />
    </div>
  </div>

  <div className="table-parent">
    <table>
      <tr className="border1">
        <th className="th2">Product Name</th>
        <th className="th2">Batch No</th>
        <th className="th2">Supplier</th>
        <th className="th2">Quainnty</th>
        <th className="th2">Available Qty</th>
        <th className="th2">Price Per Unit</th>
        <th className="th2">Total Cost</th>
        <th className="th2">Mfg-Date</th>
        <th className="th2">Expiry Date</th>
        <th className="th2">Sale Price</th>
        <th className="th2">Purchase Date</th>
        <th className="th2">Status</th>
        <th className="th2">Action</th>
      </tr>
      <tr className="border-top">
                  <td className="td1">Self Deilling Screws</td>
                  <td className="td1">999806</td>
                  <td className="td1">NK Fastners</td>
                  <td className="td1">1000</td>
                  <td className="td1">1000</td>
                  <td className="td1">2.10</td>
                  <td className="td1">2100.00</td>
                  <td className="td1">5/2022</td>
                  <td className="td1">5/2025</td>
                  <td className="td1">2.35</td>
                  <td className="td1">2022-5-14 17:34:09</td>
                  <td className="td1"><button>enable</button></td>
                  <td className="td1"><button>edit</button> <button>Disable</button></td>
        </tr>
     
    </table>
  </div>
</div>
</Paper>
</Grid>
</div>
</div>
  )
}

export default Purchase
