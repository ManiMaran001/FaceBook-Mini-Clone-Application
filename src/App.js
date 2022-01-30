import React from "react";
import {BrowserRouter} from 'react-router-dom'
import Routes from './Component/Routers/Routes'
import Home from './Component/Pages/Home'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
const App = () => {
  return(
    <BrowserRouter>
      <Routes/>
      </BrowserRouter>
  // <div style={{background:"red",height:"100vh"}}>
  //   <ButtonAppBar/>
  //   <div style={{border:"1px solid green"}}>
  //     home
  //     </div>
  //     <div style={{border:"2px",height:"10vh",background:"green"}}>
  //     home
  //     </div>
  // </div>
  )
 };
export default App;

