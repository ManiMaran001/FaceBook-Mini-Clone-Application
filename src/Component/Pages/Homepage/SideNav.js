import React from 'react';
import { Grid, Box, Paper, Typography, Tabs, Tab ,Menu,MenuItem} from "@mui/material";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme)=>({
  root:{
    [theme.breakpoints.down("xs")]:{
      display:"none"
    }
  }
}))
function SideNav(){
    const classes=useStyles()
    return(
              <Box>
                sidenav
              </Box>
    )
}

export default SideNav