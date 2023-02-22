import React from 'react'
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="user-management-parentall">
    <div>
      <h1>Category Management</h1>
    </div>
    <div>
      <Link to="/Dashboard">Dashboard</Link> / Category Management
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
            <h3>User Management</h3>
            <Link to="/Addnewcategory"><button>Add</button></Link>
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
                <th className="th2">Category Name</th>
                <th className="th2">Status</th>
                <th className="th2">Date & Time</th>
                <th className="th2">Action</th>
              </tr>
              <tr className="border-top">
                          <td className="td1">Anchor Nuts</td>
                          <td className="td1"><button>enable</button></td>
                          <td className="td1">0</td>
                          <td className="td1"><button>edit</button> <button>Disable</button></td>
                </tr>
             
            </table>
          </div>
        </div>
      </Paper>
    </Grid>
  </div>
  )
}

export default Category
