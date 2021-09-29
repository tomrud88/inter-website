import { AppBar, Button, IconButton, Toolbar, Typography, makeStyles, Drawer} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import React from 'react'
import DrawerComponent from './DrawerComponent';
import { useState } from 'react';

const drawerWidth = 350;

const useStyles = makeStyles((theme)=>({
    toolbar:{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'#001ea0'
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
        [theme.breakpoints.down('sm')]:{
            marginRight:theme.spacing(1),
            fontSize:'10px'
    }
   
}
}))

function Topbar() {
    const classes = useStyles()
    const [opent,setOpent] = useState(false)

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
              <div className={classes.logo}>
            INTER MILAN
            </div>
          </Typography>
          <Typography variant='h9' component='div' className={classes.menuoptions} sx={{flexGrow:1}}>
              <div className={classes.menuItem}>
                  HOME
              </div>
              <div className={classes.menuItem}>
                  TEAM
              </div>
              <div className={classes.menuItem}>
                  NEWS
              </div>
              <div className={classes.menuItem}>
                  SEASON
              </div>
              <div className={classes.menuItem}>
                  CLUB
              </div>
              <div className={classes.menuItem}>
                  SHOP
              </div>
              <div className={classes.menuItem}>
                  TICKETS
              </div>

          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {opent && <DrawerComponent changeOpen={opent => setOpent(opent)}/>}
        </div>
    )
}

export default Topbar
