import { AppBar, Button, IconButton, Toolbar, Typography, Link} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons'
import React from 'react'
import DrawerComponent from './DrawerComponent';
import { useState, useContext } from 'react';
import SerieA from './menuOptions/SerieA';
import Cups from './menuOptions/Cups';
import ForFans from './menuOptions/ForFans';
import Team from './menuOptions/Team';
import Home from './menuOptions/Hom';
import LoginModal from './LoginModal';
import AuthContext from '../store/auth-context';

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
        marginRight:theme.spacing(7),
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
    },
    profileTitle:{
        fontWeight:'bold',
        fontSize:'30px'
    }

}
}))

function Topbar() {
    const classes = useStyles()
    const [opent,setOpent] = useState(false)
    const [isOpen,setIsOpen] = useState(false)

    const authCtx = useContext(AuthContext)
    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () =>{
        authCtx.logout();
    }

    return (
      <div>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.smallMenu}
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpent(!opent)}
            >
              <Menu />
            </IconButton>
            <Link href="/" underline="none">
              <img
                className={classes.logo}
                src="/emblem-inter.webp"
                alt="inter emblem"
              />
            </Link>
            <Typography
              variant="h6"
              component="div"
              className={classes.menuoptions}
              sx={{ flexGrow: 1 }}
            >
              <div className={classes.menuItem}>
                <Link href="/" underline="none" style={{ color: "white" }}>
                  <Home />
                </Link>
              </div>
              <div className={classes.menuItem}>
                <Link href="#" underline="none">
                  <Team />
                </Link>
              </div>
              <div className={classes.menuItem}>
                <Link href="#" underline="none">
                  <SerieA />
                </Link>
              </div>
              <div className={classes.menuItem}>
                <Link href="#" underline="none">
                  <Cups />
                </Link>
              </div>
              <div className={classes.menuItem}>
                <Link href="#" underline="none">
                  <ForFans />
                </Link>
              </div>

              {isLoggedIn && (
                <div className={classes.menuItem}>
                  <Link href="/profile" underline="none">
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "17px",
                        color: "white",
                      }}
                    >
                      PROFILE
                    </p>
                  </Link>
                </div>
              )}
            </Typography>
            {isLoggedIn && (
              <Button onClick={logoutHandler} color="inherit">
                Logout
              </Button>
            )}
            {!isLoggedIn && (
              <LoginModal open={isOpen} onClose={() => setIsOpen(false)} />
            )}
            {!isLoggedIn && (
              <Button onClick={() => setIsOpen(true)} color="inherit">
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
        {opent && <DrawerComponent changeOpen={(opent) => setOpent(opent)} />}
      </div>
    );
}

export default Topbar
