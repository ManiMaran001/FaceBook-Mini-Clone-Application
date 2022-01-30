// import React from "react";
// import NavBar from "../Widgets/NavBar";
// import IconBar from "../Widgets/IconBar";
// import { Grid, Box, Paper, Typography, Tabs, Tab } from "@mui/material";
// import WidgetsSharpIcon from "@mui/icons-material/WidgetsSharp";
// import { styled } from "@mui/material/styles";
// import { makeStyles } from "@mui/styles";
// import PhoneIcon from "@mui/icons-material/Phone";
// import Icon from "@mui/material/Icon";
// import AppBar from '@mui/material/AppBar';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
// import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
// import { useHistory } from "react-router-dom";
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// const useStyles = makeStyles((theme)=>({

// }))
// function NavTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   const history = useHistory();
//   const navigate = () => {
//     history.push("/Friends");
//   };
//   return (
//     <Grid container>
//       <Grid item sm={1}></Grid>
//       <Grid item sm={10}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           variant="fullWidth"
//           aria-label="full width tabs example"
//         >
//           <Tab icon={<Icon>home</Icon>} onClick={() => history.push("/Home")} />
//           <Tab icon={<PeopleOutlineIcon/>} component="span" onClick={navigate} />
//           <Tab icon={<Icon>ondemand_video</Icon>} />
//           <Tab icon={<GroupsOutlinedIcon/>} />
//           <Tab icon={ <Icon>apps</Icon>} />
//         </Tabs>
//       </Grid>
//       <Grid item sm={1}>
//       </Grid>
//     </Grid>
//   );
// }
// function Header() {
//   const classes=useStyles()
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//     <AppBar position="static" sx={{backgroundColor:"#fff",color:"#000",marginBottom:"-6px"}}>
//       <Grid container sx={{marginBottom:"-6px"}}>
//           <Grid item sm={3} sx={{}} xs={2}>
//             <NavBar />
//           </Grid>
//           <Grid item sm={6} xs={1}sx={{}}>
//             <NavTabs/>
//           </Grid>
//           <Grid item sm={3} sx={{}}>
//             <IconBar />
//           </Grid>
//         </Grid>
//     </AppBar>
//     </Box>
//   );
// }
// export default Header;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  TextField,
  InputAdornment,
  Grid,
  Tabs,
  Tab,
  Icon,
} from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { useHistory } from "react-router-dom";
import SearchBook from "../DialogComponet/SearchBook";
import IconBar from "../Widgets/IconBar";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const useStyles = makeStyles((theme) => ({}));

const Field = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 20,
    paddingLeft: "8px",
  },
  "& .MuiInputBase-input": {
    padding: "6.5px 26px",
    paddingLeft: "0px",
  },
}));
function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const history = useHistory();
  const navigate = () => {
    history.push("/Friends");
  };
  return (
    <Grid container>
      <Grid item sm={1.5}></Grid>
      <Grid item sm={9}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            sx={{
              "&:hover": {
                background: "#f0efed",
              },
            }}
            icon={<Icon>home</Icon>}
            onClick={() => history.push("/Home")}
          />
          <Tab
            sx={{
              "&:hover": {
                background: "#f0efed",
              },
            }}
            icon={<PeopleOutlineIcon />}
            component="span"
            onClick={navigate}
          />
          <Tab
            sx={{
              "&:hover": {
                background: "#f0efed",
              },
            }}
            icon={<Icon>ondemand_video</Icon>}
          />
          <Tab
            sx={{
              "&:hover": {
                background: "#f0efed",
              },
            }}
            icon={<GroupsOutlinedIcon />}
          />
          <Tab
            sx={{
              "&:hover": {
                background: "#f0efed",
              },
            }}
            icon={<Icon>apps</Icon>}
          />
        </Tabs>
      </Grid>
      <Grid item sm={1.5}></Grid>
    </Grid>
  );
}
const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#fff", color: "#000" }}>
      <Toolbar disableGutters>
        <Box>
          <FacebookOutlinedIcon
            sx={{ fontSize: 45, mr: 0.5 }}
            color="primary"
          />
        </Box>
        <Box
          sx={{ flexGrow: 0, display: { xs: "none", md: "none", lg: "flex" } }}
        >
          <Field
            onClick={handleClickOpen}
            size="small"
            variant="outlined"
            placeholder="Search Facebook"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <SearchBook onClose={handleClose} clickOpen={open} />
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 0, display: { xs: "flex", md: "flex", lg: "none" } }}
        >
          <SearchIcon />
        </Typography>
        <Box
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none", lg: "none" } }}
        ></Box>
        <Box
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex", lg: "flex" } }}
        >
          <NavTabs />
        </Box>
        <Box sx={{ flexGrow: 0.2 }}>
          <IconBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
