import { AppBar, Button, IconButton, Toolbar, Typography,  Drawer, MenuItem, Box, Popover, Fade, MenuList, Popper, Paper, ClickAwayListener, ImageListItem,Link} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons'
import React from 'react'
import DrawerComponent from './DrawerComponent';
import { useState } from 'react';
import SerieA from './menuOptions/SerieA';
import Cups from './menuOptions/Cups';
import ForFans from './menuOptions/ForFans';
import Team from './menuOptions/Team';
import Home from './menuOptions/Hom';
import FirstTeam from './TeamMenu/FirstTeam';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {white} from '@material-ui/core/colors'
import LoginModal from './LoginModal';

const drawerWidth = 350;

const useStyles = makeStyles((theme)=>({
    palette:{
        primary:'#ffffff'
    },
    toolbar:{
        position:'fixed',
        top:0,
        right:0,
        left:0,
        zIndex:2,
        height:'80px',
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'#001ea0',
        [theme.breakpoints.down('sm')]:{
            height:'50px'
        }
    },
    smallMenu:{
        display:'none',
        [theme.breakpoints.down('sm')]:{
            display:'grid'
        }
    },
    menuoptions:{
        display:'flex',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    menuItem:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.down('sm')]:{
            marginRight:theme.spacing(1),
            fontSize:'10px'
        }
    },
    logo:{
        height:'55px',
        width:'55px',
        [theme.breakpoints.down('sm')]:{
            height:'40px',
            width:'40px',
    },
    paperMenu:{
        color:'green'
    }

}
}))

function Topbar() {
    const classes = useStyles()
    const [opent,setOpent] = useState(false)
    const [anchor, setAnchor] = useState(null)
    const [isOpen,setIsOpen] = useState(false)

    const handleMenuOpen = (event) =>{
       setAnchor(event.currentTarget)
    }

    const handleClose = () => {
        setAnchor(null)
    }

    const open = Boolean(anchor)

    return (
        <div>
           <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <IconButton className={classes.smallMenu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>setOpent(!opent)}
          >
            <Menu />
            </IconButton>
            <Link href='/' underline='none'>
              <img className={classes.logo}src='https://fcinter.pl/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2d3IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce6018a9cc74938350147bc60dd018680e15b5f1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lLTnpWNE56VUdPZ1pGVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--94c6a9ec7dad8ed5d3d2adaecf783da9c3dc17fa/interr.png'/>
           </Link>
            
          <Typography variant='h9' component='div' className={classes.menuoptions} sx={{flexGrow:1}}>
              <div className={classes.menuItem}>
                 <Link href='/' underline='none'
                 style={{color:'white'}}><Home/></Link>
              </div>
              <div className={classes.menuItem}>
                  <Link href='#' underline='none'>
                 <Team/>
                 </Link>
              </div>
              <div className={classes.menuItem}>
                 <Link href='#' underline='none'>
                <SerieA/>
                </Link>
              </div>
              <div className={classes.menuItem}>
                  <Link href='#' underline='none'>
                  <Cups/>
                  </Link>
              </div>
              <div className={classes.menuItem}>
                  <Link href='#' underline='none'>
                  <ForFans/>
                  </Link>
              </div>
              
          </Typography>
      <LoginModal open={isOpen} onClose={()=> setIsOpen(false)}/>
          <Button onClick={()=> setIsOpen(true)} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {opent && <DrawerComponent changeOpen={opent => setOpent(opent)}/>}
        </div>
    )
}

export default Topbar
