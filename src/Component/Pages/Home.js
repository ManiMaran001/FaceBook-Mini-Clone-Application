import React from "react";
import Carousel from 'react-grid-carousel'
import CloseIcon from '@mui/icons-material/Close';
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import MailIcon from "@mui/icons-material/Mail";
import PeopleIcon from "@mui/icons-material/People";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AlarmIcon from "@mui/icons-material/Alarm";
import EventIcon from "@mui/icons-material/Event";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { SvgIcon } from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';
import Slider from "react-slick";
import {
  Avatar,
  Grid,
  Divider,
  Box,
  Icon,
  Paper,
  TextField,
  CardContent,
  SpeedDial,
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  IconButton,
  Drawer,
  Toolbar,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  CssBaseline,
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import Header from "../Header/Header";
import DialogAddPost from '../DialogComponet/DialogAddPost'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "27px",
    height: "27px",
    borderRadius: "20px",
  },
  dp: {
    width: "27px",
    height: "27px",
    border: "2px solid #1877F2",
    borderRadius: "37px",
    position: "relative",
    top: "-93%",
    left: "10%",
  },
  dpText: {
    fontSize: "14px",
    position: "relative",
    top: "-24%",
    left: "-20px",
    height: "20px",
    color: "#fff",
    fontWeight: "bolder",
  },
  innerDp:{
    width:"46px",
    height:"46px",
    borderRadius:"36px",
  }
}));

const listitems = [
  {
    id: 1,
    text: "mani maran",
    url: "https://scontent.fmaa5-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/186534087_1169515853552840_5538191343070361382_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=nP6arzmWpIwAX9sf6ZN&_nc_ht=scontent.fmaa5-1.fna&oh=00_AT-XpeVmxT9dSmFEgwdPrWYfWoTacQLvs6U6YVkGKY7n7g&oe=620EF146",
  },
  {
    id: 2,
    text: "Friends",
    url: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png",
  },
  {
    id: 3,
    text: "Watch",
    url: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png",
  },
  {
    id: 4,
    text: "Groups",
    url: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
  },
  {
    id: 5,
    text: "Memories",
    url: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png",
  },
  {
    id: 6,
    text: "Events",
    url: "https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png",
  },
  {
    id: 7,
    text: "Marketplace",
    url: "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png",
  },
  {
    id: 8,
    text: "Saved",
    url: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png",
  },
  {
    id: 9,
    text: "Pages",
    url: "	https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png",
  },
  {
    id: 10,
    text: "Jobs",
    url: "https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/XxEsb0x8INQ.png",
  },
  {
    id: 11,
    text: "Most recent",
    url: "https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png",
  },
  { id: 12, text: "See more" },
];


const post=[
    {
      id: 1,
      text: "Precious Dogo",
      url: "https://scontent.fmaa5-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/186534087_1169515853552840_5538191343070361382_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=nP6arzmWpIwAX9sf6ZN&_nc_ht=scontent.fmaa5-1.fna&oh=00_AT-XpeVmxT9dSmFEgwdPrWYfWoTacQLvs6U6YVkGKY7n7g&oe=620EF146",
      Likes:"200K",
      Comments:"29 Comments",
      Date:"January 26 at 10:45 am",
    },
    {
      id: 2,
      text: "Body Soda",
      url: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png",
      Likes:"200K",
      Comments:"29 Comments",
      Date:"January 26 at 10:45 am",
    },
    {
      id: 3,
      text: "Gaming Norton",
      url: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png",
      Likes:"200K",
      Comments:"29 Comments",
      Date:"January 26 at 10:45 am",
    },
    {
      id: 4,
      text: "Aslam Khan",
      url: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
      Likes:"200K",
      Comments:"29 Comments",
      Date:"January 26 at 10:45 am",
    },
    {
      id: 5,
      text: "ManiMaran",
      url: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png",
      Likes:"200K",
      Comments:"29 Comments",
      Date:"January 26 at 10:45 am",
    },
    {
      id: 6,
      text: "The Prison",
      url: "https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png",
      Likes:"200K",
      Comments:"29 Comments",
      Date:"January 26 at 10:45 am",
    },
    {
      id: 7,
      text: "Marketplace Amazon",
      url: "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png",
      Likes:"200K",
      Comments:"29 Comments",
      Date:"January 26 at 10:45 am"
    },
    {
      id: 8,
      text: "Flipkart",
      url: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png",
      Likes:"200K",
      Comments:"29 Comments",
      Date:"January 26 at 10:45 am"
    },
    {
      id: 9,
      text: "Messo",
      url: "	https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png",
      Likes:"200K",
      Comments:"29 Comments",
      Date:"January 26 at 10:45 am"
    },
    {
      id: 10,
      text: "Electron",
      url: "https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/XxEsb0x8INQ.png",
      Likes:"200K",
      Comments:"29 Comments",
      Date:"January 26 at 10:45 am"
    },
    {
      id: 11,
      text: "Rampage",
      url: "https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png",
      Likes:"200K",
      Comments:"29 Comments",
      Date:"January 26 at 10:45 am"
    },
]

const drawerWidth = 310;

export default function Home() {
  
  const classes = useStyles();
  const [open,setOpen]=React.useState(false)
  const handleClickOpen=()=>{
    setOpen(true)
  }
  const handleClickClose=()=>{
    setOpen(false)
  }
  return (
    <Box sx={{ display: "flex", backgroundColor: "#ededed" }}>
      <Grid container>
        <Grid
          item
          sm={3}
          md={3}
          sx={{ flexGrow: 0, display: { xs: "none", lg: "flex", md: "none" } }}
        >
          <Drawer
            variant="permanent"
            sx={{
              "& :hover": {
                "& .css-1v8x7dw": {
                  overflow: "auto",
                },
              },
              "& .css-1v8x7dw": {
                overflow: "hidden",
              },
              "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
                background: "#ededed",
                zIndex: 1000,
                borderRight: "0px solid white",
              },
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <List sx={{ mt: 1.5 }}>
                {listitems.map((item) => {
                  return (
                    <>
                      {item.id === 12 ? (
                        <ListItem button key={item.id}>
                          <ListItemIcon sx={{ minWidth: "40px" }}>
                            <img src={item.url} className={classes.icon} />
                          </ListItemIcon>
                          <Typography>{item.text}</Typography>
                        </ListItem>
                      ) : (
                        <ListItem button key={item.id}>
                          <ListItemIcon sx={{ minWidth: "40px" }}>
                            <img src={item.url} className={classes.icon} />
                          </ListItemIcon>
                          <Typography>{item.text}</Typography>
                        </ListItem>
                      )}
                    </>
                  );
                })}
                <ListItem>
                  <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Grid>
        <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16}}
        icon={<SpeedDialIcon />}
      >
      </SpeedDial>
        <Grid item sm={6} md={6} lg={6} xs={12}>
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Box sx={{ mt: 10 }}></Box>
            <Grid container>
              <Grid item sm={1} md={1}></Grid>
              <Grid item sm={10} md={10} xs={12}>
                <Grid container spacing={1}>
                  <Grid
                    item
                    sm={2.4}
                    md={2.4}
                    lg={2.4}
                    xs={3}
                    sx={{ width: 160, height: 190 }}
                  >
                    <Card sx={{ Width: 160, height: 190 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="130"
                        image="https://scontent.fmaa5-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/186534087_1169515853552840_5538191343070361382_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=nP6arzmWpIwAX9sf6ZN&_nc_ht=scontent.fmaa5-1.fna&oh=00_AT-XpeVmxT9dSmFEgwdPrWYfWoTacQLvs6U6YVkGKY7n7g&oe=620EF146"
                      />
                        <AddIcon
                          sx={{
                            background: "#1877F2",
                            fontSize: "32px",
                            border: "4px solid white",
                            borderRadius: "37px",
                            color: "white",
                            position: "relative",
                            top: "-18px",
                            left: "30px",
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: "13px",
                            position: "relative",
                            top: "-16px",
                            left: "13px",
                          }}
                        >
                          Create Story
                        </Typography>
                      
                    </Card>
                  </Grid>
                  <Grid
                    item
                    sm={2.4}
                    md={2.4}
                    lg={2.4}
                    xs={3}
                    sx={{ width: 400, height: 190 }}
                  >
                    <Card sx={{ Width: 160, height: 190 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="190"
                        image="https://1.bp.blogspot.com/-U-wjfnEzcAQ/Xjhax3Vx3_I/AAAAAAAAA3k/HXGGqjC3U1kRJ0rYKv0xwMcMKXVf-63uwCLcBGAsYHQ/s1600/www.statusworlds.com%2B-%2B2020-02-03T230857.905.jpg"
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQyZrrp14l_f4NqEc7tZpo9-oHbaYjNy_xw&usqp=CAU"
                        className={classes.dp}
                      />
                      <span className={classes.dpText}>Mani maran</span>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    sm={2.4}
                    md={2.4}
                    lg={2.4}
                    xs={3}
                    sx={{ width: 400, height: 190 }}
                  >
                    <Card sx={{ Width: 160, height: 190 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="190"
                        image="https://dp.profilepics.in/status/images/men-status-quotes-short-messages-for-whatsapp-facebook.jpg"
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQyZrrp14l_f4NqEc7tZpo9-oHbaYjNy_xw&usqp=CAU"
                        className={classes.dp}
                      />
                      <span className={classes.dpText}>The Dodo loke</span>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    sm={2.4}
                    md={2.4}
                    lg={2.4}
                    xs={3}
                    sx={{ width: 400, height: 190 }}
                  >
                    <Card sx={{ Width: 160, height: 190 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="190"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKioaIo8osRYo6CX1D1DK4dn_KhrO0qDVDw&usqp=CAU"
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQyZrrp14l_f4NqEc7tZpo9-oHbaYjNy_xw&usqp=CAU"
                        className={classes.dp}
                      />
                      <span className={classes.dpText}>guna</span>
                    </Card>
                  </Grid>
                  <Grid
                    item
                    sm={2.4}
                    md={2.4}
                    lg={2.4}
                    xs={3}
                    sx={{ width: 400, height: 190 }}
                  >
                    <Card sx={{ Width: 160, height: 190 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="190"
                        image="https://i.pinimg.com/originals/a0/9e/82/a09e82a19e63c5deb28d4a8562c0048a.jpg"
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQyZrrp14l_f4NqEc7tZpo9-oHbaYjNy_xw&usqp=CAU"
                        className={classes.dp}
                      />
                      <span className={classes.dpText}>The lokesh</span>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={1}></Grid>
            </Grid>
          </Box>
          <Grid container sx={{mt:3.5}}>
              <Grid item sm={2}></Grid>
              <Grid item sm={8} xs={12}>
                <Paper sx={{Width:"80%",height:130}}>
                  <Box sx={{pt:1,pl:2,display:"flex",flexDirection:"row",alignItems:"center",}}>
                    <Box>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQyZrrp14l_f4NqEc7tZpo9-oHbaYjNy_xw&usqp=CAU" alt="profile" className={classes.innerDp}/>
                    </Box>
                    <Box onClick={handleClickOpen}sx={{ml:1,flexGrow:0.96,padding:"10px",width:"0%",border:"1px solid transparent",borderRadius:"36px",background:"#ededed"}}>
                   <span style={{fontSize:"1.0625rem"}}>What's on your mind, mani?</span>
                    </Box>
                    <DialogAddPost clickOpen={open} onClose={handleClickClose}/>
                  </Box>
                  <Divider sx={{mt:1}} variant="middle" />
                  <Box sx={{display:"flex",flexDirection:"row",pb:2,pl:4,pr:3,pt:0.6}}>
                  <Box sx={{display:"flex",flexDirection:"row",p:0,alignItems:"center"}}>
                    <Box>
                      <VideoCallIcon sx={{fontSize:"33px",mr:0.5,color:"#f3425f"}}/>
                    </Box>
                    <Box>
                    <Typography variant="body2" gutterBottom>Live video</Typography>
                    </Box>
                  </Box>
                  <Box sx={{display:"flex",flexDirection:"row",p:1,alignItems:"center"}}>
                    <Box>
                      < PhotoLibraryIcon sx={{fontSize:"33px",mr:0.5,color:"#45bd62"}}/>
                    </Box>
                    <Box>
                    <Typography  variant="body2" gutterBottom>Photo/Video</Typography>
                    </Box>
                  </Box>
                  <Box sx={{display:"flex",flexDirection:"row",p:1,alignItems:"center"}}>
                    <Box>
                      <MoodIcon sx={{fontSize:"33px",mr:0.5,color:"#f7b928"}}/>
                    </Box>
                    <Box>
                    <Typography  variant="body2" gutterBottom>Feeling/Activity</Typography>
                    </Box>
                  </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item sm={2}></Grid>
            </Grid>
            <Grid container sx={{mt:2}}>
              <Grid item sm={2}></Grid>
              <Grid item sm={8} xs={12}>
                <Paper sx={{width:"100%",height:64}}>
                  <Box sx={{p:1,display:"flex",flexDirection:"row"}}>
                    <Box sx={{mr:1.5,display:"flex",flexGrow:0.06,flexDirection:"row",alignItems:"center",padding:"1px 3px 1px 10px",border:"3px solid #f0f0f0",borderRadius:20}}>
                      <Box >
                      <VideoCallIcon sx={{fontSize:"33px",mr:0.5,color:"#f3425f"}}/>
                      </Box>
                      <Box>
                      <Typography  variant="body2" gutterBottom>Create room</Typography>
                      </Box>
                    </Box>
                    <Box sx={{flexGrow:1,display:"flex",flexDirection:"row",}}>
                    <Box sx={{mr:2}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQyZrrp14l_f4NqEc7tZpo9-oHbaYjNy_xw&usqp=CAU" alt="profile" className={classes.innerDp}/>
                    </Box>
                    <Box sx={{mr:2}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQyZrrp14l_f4NqEc7tZpo9-oHbaYjNy_xw&usqp=CAU" alt="profile" className={classes.innerDp}/>
                    </Box>
                    <Box sx={{mr:2}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQyZrrp14l_f4NqEc7tZpo9-oHbaYjNy_xw&usqp=CAU" alt="profile" className={classes.innerDp}/>
                    </Box>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item sm={2}></Grid>
            </Grid>
            <Grid container sx={{mt:2}}>
              <Grid item sm={2}></Grid>
              <Grid item sm={8} xs={12} md={8}>
                {
                  post.map((item)=>{
                    return(
                      <Card sx={{ maxWidth: 490 ,mt:1}} key={item.id}>
                      <CardHeader
                        avatar={
                          <Avatar src="https://scontent.fmaa5-1.fna.fbcdn.net/v/t1.6435-1…lC2YG_ibV_5_BCpGcET5jRX2y3_SchvUaHS9g&oe=6219C2E1" sx={{ bgcolor:"red"}} aria-label="recipe"/>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Preciosus Doggo"
                        subheader="September 14, 2016"
                      />
                      <CardMedia
                      sx={{
                        minHeight:"200"
                      }}
                        component="img"
                        image={item.url}
                        alt="Paella dish"
                      />
                      <CardActions disableSpacing>
                        <Box sx={{pt:1,pl:1,pr:1,flexGrow:1,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                          <Box  sx={{display:"flex",flexDirection:"row"}}>  
                          <Box>
                              <ThumbUpAltIcon sx={{mr:1,fontSize:"18px",color:"white",borderRadius:20,background:"#1877F2"}}/>
                          </Box>
                          <Box>
                            <Typography sx={{mb:0}}variant="body2">{item.Likes}</Typography>
                          </Box>
                          </Box>
                          <Box  sx={{display:"flex",flexDirection:"row"}}>  
                          <Box>
                            <Typography sx={{mb:0}}variant="body2">{item.Comments}</Typography>
                          </Box>
                          </Box>
                        </Box>
                      </CardActions>
                      <Box sx={{pl:1,pr:1}}>
                        <Divider/>
                      <Box sx={{mt:1,pl:2,display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                        <Box  sx={{flexGrow:0.03,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <Box>
                          <ThumbUpAltIcon/> 
                        </Box>
                        <Box>
                        <Typography>Like</Typography>
                        </Box>
                        </Box>
                        <Box  sx={{flexGrow:0.03,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <Box>
                          <ChatBubbleOutlineIcon/> 
                        </Box>
                        <Box>
                        <Typography>Comment</Typography>
                        </Box>
                        </Box>
                        <Box  sx={{flexGrow:0.03,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <Box>
                          <ReplyIcon/> 
                        </Box>
                        <Box>
                        <Typography>Share</Typography>
                        </Box>
                        </Box>
                        <Box  sx={{flexGrow:0.03,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <Box>
                       
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQyZrrp14l_f4NqEc7tZpo9-oHbaYjNy_xw&usqp=CAU" alt="profile" style={{width:"20px",height:"20px",borderRadius:"10px"}}/>
                
                        </Box>
                        <Box>
                       < KeyboardArrowDownIcon/>
                        </Box>
                        </Box>
                      </Box>
                      </Box>
                      <Divider/>
                      </Card>
                    )
                  })
                }
              </Grid>
              <Grid item sm={2}></Grid>
            </Grid>
            <Grid container sx={{mt:3.5}}>
              <Grid item sm={2}></Grid>
              <Grid item sm={8} xs={12}>
                <Paper sx={{Width:"80%",height:600}}>
                  <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",p:2}}>
                    <Box>
                    <Typography>People you may know</Typography>
                    </Box>
                    <Box>
                      <MoreVertIcon/>
                    </Box>
                  </Box>
                  <Box sx={{p:2,display:"flex",flexDirection:"row"}}>
                      {/* {
                      [0,1,2,3,4,5,6,7].map((item)=>{
                        return (
                          <Card sx={{ maxWidth: 240,background:"red"}}>
                          <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate reptiles, with over 6,000
                              species, ranging across all continents except Antarctica
                            </Typography>
                          </CardContent>
                          <CardActions>
                          </CardActions>
                        </Card>                    
                        )
                      })
                    } */}
                  </Box>
                </Paper>
              </Grid>
              </Grid>
             
        </Grid>
        <Grid
          item
          sm={3}
          md={3}
          sx={{ flexGrow: 0, display: { xs: "none", lg: "flex", md: "flex" } }}
        >
          <Drawer
            sx={{
              "& .css-18sg6k4-MuiPaper-root-MuiDrawer-paper": {
                background: "#ededed",
                zIndex: 1000,
                borderLeft: "0px solid white",
              },
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                borderRight: "none",
              },
            }}
            variant="permanent"
            anchor="right"
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <List sx={{ mt: 2 }}>
              <Paper sx={{width:280}}>
                <Box sx={{display:"flex",flexDirection:"row",pl:2,pr:2,pt:2,justifyContent:"space-between"}}>
                  <Box sx={{display:"flex",flexDirection:"row"}}>
                  <Box>
                    <img src="https://www.facebook.com/rsrc.php/v3/yc/r/uZcEIx7yRqF.png" style={{width:"20px",height:"20px"}}/>
                  </Box>
                  <Box>
                    <Typography sx={{ml:1}} varaint="body2" >Birthday's</Typography>
                  </Box>
                  </Box>
                  <Box sx={{display:"flex",flexDirection:"row"}}>
                  <Box>
                    <CloseIcon sx={{}}/>
                  </Box>
                  </Box>
                </Box>
                <Typography sx={{pl:2,pb:2}} variant="body2">Aslam's Birthday is Today</Typography>
              </Paper>
            </List>
            <Divider />
            <List>
              <Box sx={{mb:1}}>
                <Typography>Sponsered</Typography>
              </Box>
            <Box sx={{pl:0.1,flexGrow:1,display:"flex",flexDirection:"row",alignItems:"center"}}>
              <Box sx={{}}>
                <Paper sx={{width:120,height:120}}>
                  <img src="https://scontent.fcjb2-1.fna.fbcdn.net/v/t45.1600-4/c0.110.285.285a/p285x285/260489428_6273157650095_2495055336928343253_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=eaa83b&_nc_ohc=cYAGaz-pkNoAX9BV3MK&_nc_ht=scontent.fcjb2-1.fna&oh=00_AT8H89KIIU6o7pYf3ST_wPPVJnQzfV7VpZM3TmdTMfja2g&oe=61FAFF81" style={{width:"120px",height:"120px"}}/>
                </Paper>
              </Box>
              <Box>
                <Typography sx={{ml:2}} variant="body2">Elite Software Engineer Wanted</Typography>
              </Box>
            </Box>
            <Box sx={{mt:1}}></Box>
            <Box sx={{pl:0.1,flexGrow:1,display:"flex",flexDirection:"row",alignItems:"center"}}>
              <Box sx={{}}>
                <Paper sx={{width:120,height:120}}>
                  <img src="https://scontent.fcjb2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/272583450_6259727109329_5447792406166744900_n.png.jpg?_nc_cat=1&ccb=1-5&_nc_sid=67cdda&_nc_ohc=7jQPyhSFLmUAX-Xfnn5&_nc_ht=scontent.fcjb2-1.fna&oh=00_AT96vCQ5wEIjqO9LC9OhKAeTKWivcC5Ozb2WvRvy_ziiMQ&oe=61FA5B39" style={{width:"120px",height:"120px"}}/>
                </Paper>
              </Box>
              <Box>
                <Typography sx={{ml:2}} variant="body2">Elite Software Engineer Wanted</Typography>
              </Box>
            </Box>
            </List>
            <Box sx={{mt:1}}></Box>
            <Divider/>
            <List>
              <Box sx={{mb:1,p:1,flexGrow:1,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Box>
                <Typography variant="body2">Your Pages</Typography>
                </Box>
                <Box>
                 <MoreVertIcon/>
                </Box>
              </Box>
            </List>
            <Box sx={{mt:1}}></Box>
            <Divider/>
            <Box sx={{p:1,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <Box sx={{flexGrow:"0.5"}}>
                Contacts
              </Box>
              <Box>
                <VideoCallIcon/>
              </Box>
              <Box>
                <SearchIcon/>
              </Box>
              <Box>
                <MoreVertIcon/>
              </Box>
            </Box>
            <Box sx={{mt:0}}></Box>
            <Box sx={{mt:0.5,display:"flex",alignItems:"center",flexDirection:"row"}}>
              <Box>
              <Avatar alt="Remy Sharp" src="ttps://scontent.fcjb2-1.fna.fbcdn.net/v/t1.6435-1…RLoNRILSPooPn0jr9BAWG4hZ-Xrp8obBZVyyg&oe=62197D0E" />
              </Box>
              <Box sx={{pl:1}}>
               <Typography variant="body2">Mkpa Raj</Typography> 
              </Box>
            </Box>
            <Box sx={{mt:0.5,display:"flex",alignItems:"center",flexDirection:"row"}}>
              <Box>
              <Avatar alt="Remy Sharp" src="ttps://scontent.fcjb2-1.fna.fbcdn.net/v/t1.6435-1…RLoNRILSPooPn0jr9BAWG4hZ-Xrp8obBZVyyg&oe=62197D0E" />
              </Box>
              <Box sx={{pl:1}}>
               <Typography variant="body2">Mkpa Raj</Typography> 
              </Box>
            </Box>
            <Box sx={{mt:0.5,display:"flex",alignItems:"center",flexDirection:"row"}}>
              <Box>
              <Avatar alt="Remy Sharp" src="ttps://scontent.fcjb2-1.fna.fbcdn.net/v/t1.6435-1…RLoNRILSPooPn0jr9BAWG4hZ-Xrp8obBZVyyg&oe=62197D0E" />
              </Box>
              <Box sx={{pl:1}}>
               <Typography variant="body2">Mkpa Raj</Typography> 
              </Box>
            </Box>
            </Box>
               </Drawer>
        </Grid>
      </Grid>
    </Box>
  );
}
