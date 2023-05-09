import { List, ListItem, ListItemText,Drawer,makeStyles, Container, Button, Typography,Link } from "@material-ui/core";
import { CalendarTodayOutlined, ConfirmationNumberOutlined, Home, People, ReceiptOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { useState } from "react";
import Team from "./menuOptions/Team";
import Hom from './menuOptions/Hom'
import SerieA from "./menuOptions/SerieA";
import Cups from "./menuOptions/Cups";
import ForFans from "./menuOptions/ForFans";


const useStyles = makeStyles((theme)=>({
  
  drawerMenu:{
    backgroundColor:''
  },
   leftMenu:{
     backgroundColor:'#001ea0',
     display:'grid',
     flexDirection:'column',
     justifyContent:'left',
     height:'100vh',
     width:'300px',
     color:'white'
   },
   listItem:{
     backgroundColor:'#001ea0',
     
     
   },
   icon:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
      marginRight:theme.spacing(3),
      fontSize:'25px'
   },
   itemText:{
    fontWeight:500
   },
   img:{
     height:'30px',
     marginRight:theme.spacing(3)
   },
   escape:{
     width:'50px',
     height:'60px',
     backgroundColor:'#001ea0',
     boxShadow:'5px 5px 15px 0px #000000',
     color:'white',
     border:'1px solid white'
   }
}))

function DrawerComponent(props) {
  const classes = useStyles();
  
    return (
      <Drawer className={classes.drawerMenu} anchor='left' open={props.changeOpen}
      onClose={()=>props.changeOpen(false)} 
      >
        <div style={{backgroundColor:'#001ea0',padding:'10px',justifyContent:'flex-start',display:'flex'}}>
        <Button className={classes.escape} onClick={()=>props.changeOpen(false)}>
           x
            </Button>
            </div>
            <List className={classes.leftMenu}>
            
            <ListItem   className={classes.listItem}>
            <Home className={classes.icon}/>
            <Link href='/' underline='none'
                 style={{color:'white'}}><Hom/></Link>
            </ListItem>
            <ListItem className={classes.listItem}>
            <People className={classes.icon}/>
            <Link href='#' underline='none' style={{color:'white'}}>
             <Team/></Link>
            </ListItem>
            <ListItem className={classes.listItem}>
            <ReceiptOutlined className={classes.icon}/>
            <Link href='#' underline='none' style={{color:'white'}}>
             <SerieA/>
             </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
            <CalendarTodayOutlined className={classes.icon}/>
            <Link href='#' underline='none' style={{color:'white'}}>
            <Cups/>
            </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
            <img src='https://static.dezeen.com/uploads/2021/04/inter-milan-football-club-rebrand-logo_dezeen_2364_sq2.jpg' className={classes.img}/>
            <Link href='#' underline='none' style={{color:'white'}}>
             <ForFans/>
             </Link>
            </ListItem> 
          </List>
          
          </Drawer>
    );
  }
  
  export default DrawerComponent;
  