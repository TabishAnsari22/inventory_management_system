import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { FaPercent } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { RiTodoLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { IoLogoAmplify } from "react-icons/io5";
import { FaIndustry } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import Chart from "./Chart";
// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import { useNavigate } from 'react-router';
import { GlobalContext } from "./Contex";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {/* {'Copyright © '} */}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  const navigate =useNavigate()
  const userPage = ()=>{
    navigate('/Usermanagement')
  }
  const categoryPage = ()=>{
    navigate('/Category')
  }
  const loccationPage = ()=>{
    navigate('/Location')
  }
  const companyPage = ()=>{
    navigate('/Company')
  }
  const SupplierPage = ()=>{
    navigate('/Supplier')
  }
  const taxPage = ()=>{
    navigate('/Tax')
  }
  const productPage = ()=>{
    navigate('/Product')
  }
  const purchasePage = ()=>{
    navigate('/Purchase')
  }
  const orderPage = ()=>{
    navigate('/Order')
  }
 

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <div onClick={userPage} className="icon-main">
              <HiOutlineUserGroup />
              <p>Users</p>
            </div>
            <div onClick={categoryPage} className="icon-main">
              <BiCategoryAlt />
              <p>Category</p>
            </div>
            <div onClick={loccationPage} className="icon-main">
           
              <GrLocation />
              <p>Loccation Rack</p>
            </div>

            <div onClick={companyPage} className="icon-main">
              <FaIndustry />
              <p>Company</p>
            </div>
            <div onClick={SupplierPage} className="icon-main">
              <IoLogoAmplify />
              <p>Supplier</p>
            </div>
            <div onClick={taxPage} className="icon-main">
              <FaPercent />
              <p>Tax</p>
            </div>
            <div onClick={productPage} className="icon-main">
              <FaProductHunt />
              <p>Poroduct</p>
            </div>
            <div onClick={purchasePage} className="icon-main">
              <BiPurchaseTagAlt /> <p>Poroduct Purchase</p>
            </div>
            <div onClick={orderPage} className="icon-main">
              <RiTodoLine />
              <p>Order</p>
            </div>
            <div className="icon-main">
              <AiOutlineLogout />
              <p>Logout</p>
            </div>
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}

              {/* <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  
                </Paper>
              </Grid> */}
              {/* Recent Deposits */}
              {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                </Paper>
              </Grid> */}
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  {/* <Orders /> */}
                  <div className="box-parent">
                    <div className="box-child1">in Stock Product</div>
                    <div className="box-child2">Out Of Stock Product</div>
                    <div className="box-child3">Total Purchase</div>
                    <div className="box-child4">Total Sale</div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <div className="chart-date">
                    
                    <div className="chart-date-child"><p>Sale Status</p></div>
                    <div className="chart-date-child2">
                      <input type="date" />
                    </div>
                  </div>
                  <Chart />
                </Paper>
              </Grid>
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
                      <h3>List of Out of Product</h3>
                    </div>
                    <div className="entries-parent">
                      <div className="entries-child">
                        <p>Show</p>
                        <select name="select" id="">
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                        </select>
                        <p>entries</p>
                      </div>
                      <div className="entries-child2">
                        <p>Search</p>
                        <input className="input-serch" type="serch" />
                      </div>
                    </div>

                    <div className="table-parent">
                      <table>
                        <tr className="border">
                          <th className="th1">Product Name</th>
                          <th className="th1">Company</th>
                          <th className="th1">Available Quantity</th>
                          <th className="th1">Location Rack</th>
                          <th className="th1">Status</th>
                          <th className="th1">Added On</th>
                          <th className="th1">Update On</th>
                          <th className="th1">Action</th>
                        </tr>
                        <tr className="border-top">
                          <td className="td1">Anchor Nuts</td>
                          <td className="td1">Ananka Fastners</td>
                          <td className="td1">0</td>
                          <td className="td1">Location Rack - E</td>
                          <td className="td1">Enable</td>
                          <td className="td1">2022-7-12 16:00:24</td>
                          <td className="td1">2022-7-12 16:00:24</td>
                          <td className="td1">Purchase</td>
                        </tr>
                       
                      </table>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
