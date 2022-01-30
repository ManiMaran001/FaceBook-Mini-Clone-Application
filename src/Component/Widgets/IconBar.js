import {React,useState} from "react";
import NavBar from "../Widgets/NavBar";
import { Grid, Box, Paper, Typography, Tabs, Tab ,Menu,MenuItem} from "@mui/material";
import WidgetsSharpIcon from "@mui/icons-material/WidgetsSharp";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import Icon from "@mui/material/Icon";
import AppBar from '@mui/material/AppBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { useHistory } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {Dialog,DialogTitle} from '@mui/material';
const useStyles = makeStyles({
  img: {
    width: "30px",
    height: "30px",
    borderRadius: 20,
    marginRight: "5px",
  },
});

// const BootstrapDialog=styled(Dialog)(({theme})=>({
//   "& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop":{
//     background:"rgba(0, 0, 0, 0.0)"
//   },
//   " & .MuiDialog-paper":{
//     background:"#F2F3F5",
//     boxShadow:"0px 0px 0px 1px rgb(0 0 0 / 0%)",
//   },
//   "& .MuiDialog-root":{
//     background:"red"
//   }

// }))

const IconBar = () => {
    const classes = useStyles();
    const [Open,setOpen]=useState(false)
    const handleClickOpen=()=>{
        setOpen(true)
    }
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          ml: 1,
          mt: 1,
          mb: 1,
          justifyContent: "space-around",
        }}
      >
        <Box sx={{flexGrow:0,display:{xs:"none",lg:"flex",md:"none",xl:"flex"}}}>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <img
            className={classes.img}
            src="https://scontent.fmaa5-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/186534087_1169515853552840_5538191343070361382_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=nP6arzmWpIwAX9sf6ZN&_nc_ht=scontent.fmaa5-1.fna&oh=00_AT-XpeVmxT9dSmFEgwdPrWYfWoTacQLvs6U6YVkGKY7n7g&oe=620EF146"
            alt="img"
          />
          <Typography>Mani</Typography>
        </Box>
        </Box>
        <Box
          sx={{
            ml: 2,
            borderRadius: "100px",
            width: "40px",
            height: "40px",
            background: "#7F8E9D",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tooltip title="Menu" placement="bottom"  componentsProps={{
      tooltip: {
        sx: {
          borderRadius:"8px",
         marginTop:"12px !important",
         fontSize:"14px",
         padding:"10px 12px",
        },
      },
    }}>
            <IconButton onClick={handleClickOpen}>
         <Icon>apps</Icon>
         </IconButton>
         </Tooltip>
         <Menu open={Open} onClose={()=>setOpen(false)}>
           <MenuItem>hello</MenuItem>
         </Menu>
        </Box>
        <Box
          sx={{
            borderRadius: "100px",
            width: "40px",
            height: "40px",
            background: "#7F8E9D",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tooltip title="Messenger" placement="bottom"  componentsProps={{
      tooltip: {
        sx: {
          borderRadius:"8px",
         marginTop:"12px !important",
         fontSize:"14px",
         padding:"10px 12px",
        },
      },
    }}>
          <WidgetsSharpIcon sx={{ fontSize: 30 }} />
          </Tooltip>
          <Menu open={Open} onClose={()=>setOpen(false)}>
           <MenuItem>hello</MenuItem>
         </Menu>
        </Box>
        <Box
          sx={{
            borderRadius: "100px",
            width: "40px",
            height: "40px",
            background: "#7F8E9D",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tooltip title="Notifications" placement="bottom"  componentsProps={{
      tooltip: {
        sx: {
          borderRadius:"8px",
         marginTop:"12px !important",
         fontSize:"14px",
         padding:"10px 12px",
        },
      },
    }}>
       <NotificationsIcon/>
       </Tooltip>
        </Box>
        <Box
          sx={{
            mr: 1,
            borderRadius: "100px",
            width: "40px",
            height: "40px",
            background: "#7F8E9D",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <Tooltip title="Account" placement="bottom"  componentsProps={{
      tooltip: {
        sx: {
          borderRadius:"8px",
         marginTop:"12px !important",
         fontSize:"14px",
         padding:"10px 12px",
        },
      },
    }}>
         < ArrowDropDownIcon />
         </Tooltip>
        </Box>
      </Box>
    );
  };
export default IconBar;