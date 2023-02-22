import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div>
      <div className="user-management-parentall">
        <div>
          <h1>Location Rack Management</h1>
        </div>
        <div>
          <Link to="/Dashboard">Dashboard</Link> / Location Rack Management
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
                <h3>Location Rack Management</h3>
                <Link to="/Addnewlocation">
                  <button>Add</button>
                </Link>
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
                    <th className="th2">Location Rack Name</th>
                    <th className="th2">Status</th>
                    <th className="th2">Date & Time</th>
                    <th className="th2">Action</th>
                  </tr>
                  <tr className="border-top">
                    <td className="td1">Location Rack F</td>
                    <td className="td1">
                      <button>enable</button>
                    </td>
                    <td className="td1">12-5-2022 9:45:34</td>

                    <td className="td1">
                      <button>edit</button> <button>Disable</button>{" "}
                      <button>X</button>
                    </td>
                  </tr>
                  <tr className="border-top">
                    <td className="td1">Location Rack E</td>
                    <td className="td1">
                      <button>enable</button>
                    </td>
                    <td className="td1">12-5-2022 9:45:34</td>

                    <td className="td1">
                      <button>edit</button> <button>Disable</button>{" "}
                      <button>X</button>
                    </td>
                  </tr>
                  <tr className="border-top">
                    <td className="td1">Location Rack D</td>
                    <td className="td1">
                      <button>enable</button>
                    </td>
                    <td className="td1">12-5-2022 9:45:34</td>

                    <td className="td1">
                      <button>edit</button> <button>Disable</button>{" "}
                      <button>X</button>
                    </td>
                  </tr>
                  <tr className="border-top">
                    <td className="td1">Location Rack C</td>
                    <td className="td1">
                      <button>enable</button>
                    </td>
                    <td className="td1">12-5-2022 9:45:34</td>

                    <td className="td1">
                      <button>edit</button> <button>Disable</button>{" "}
                      <button>X</button>
                    </td>
                  </tr>
                  <tr className="border-top">
                    <td className="td1">Location Rack B</td>
                    <td className="td1">
                      <button>enable</button>
                    </td>
                    <td className="td1">12-5-2022 9:45:34</td>

                    <td className="td1">
                      <button>edit</button> <button>Disable</button>{" "}
                      <button>X</button>
                    </td>
                  </tr>
                  <tr className="border-top">
                    <td className="td1">Location Rack A</td>
                    <td className="td1">
                      <button>enable</button>
                    </td>
                    <td className="td1">12-5-2022 9:45:34</td>

                    <td className="td1">
                      <button>edit</button> <button>Disable</button>{" "}
                      <button>X</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default Location;
