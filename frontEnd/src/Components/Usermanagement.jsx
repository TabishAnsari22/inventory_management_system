import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Usermanagement = () => {
  return (
    <div className="user-management-parentall">
      <div>
        <h1>User Management</h1>
      </div>
      <div>
        <Link to="/Dashboard">Dashboard</Link> / User Management
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
              <Link to="/Addnewuser"><button>Add</button></Link>
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
                  <th className="th2">User Name</th>
                  <th className="th2">User Email Address</th>
                  <th className="th2">Password</th>
                  <th className="th2">User Type</th>
                  <th className="th2">Status</th>
                  <th className="th2">Action</th>
                </tr>
               
              </table>
            </div>
          </div>
        </Paper>
      </Grid>
    </div>
  );
};

export default Usermanagement;
