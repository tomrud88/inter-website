import { List, ListItem, ListItemText,Drawer,makeStyles, Container, Button, Typography,Link } from "@material-ui/core";
import { CalendarTodayOutlined, ConfirmationNumberOutlined, Home, People, ReceiptOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { useState } from "react";
import Team from "./menuOptions/Team";
import Hom from './menuOptions/Hom'
import SerieA from "./menuOptions/SerieA";
import Cups from "./menuOptions/Cups";
import ForFans from "./menuOptions/ForFans";

const useStyles = makeStyles((theme)=>({
  
  
   leftMenu:{
     backgroundColor:'#001ea0',
     display:'grid',
     flexDirection:'column',
     justifyContent:'left',
     height:'100vh',
     width:'100vw',
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
     height:'35px',
     marginRight:theme.spacing(3)
   }
}))

function DrawerComponent(props) {
  const classes = useStyles();
  
    return (
      <Drawer anchor='left' open={props.changeOpen}
      onClose={()=>props.changeOpen(false)} 
      >
          <List className={classes.leftMenu} 
         
          itemSize={30}>
            <ListItem  className={classes.listItem}>
            <Home className={classes.icon}/>
            <Link href='/' underline='none'
                 style={{color:'white'}}><Hom/></Link>
            </ListItem>
            <ListItem className={classes.listItem}>
            <People className={classes.icon}/>
             <Team/>
            </ListItem>
            <ListItem className={classes.listItem}>
            <ReceiptOutlined className={classes.icon}/>
             <SerieA/>
            </ListItem>
            <ListItem className={classes.listItem}>
            <CalendarTodayOutlined className={classes.icon}/>
            <Cups/>
            </ListItem>
            <ListItem className={classes.listItem}>
            <img src='https://static.dezeen.com/uploads/2021/04/inter-milan-football-club-rebrand-logo_dezeen_2364_sq2.jpg' className={classes.img}/>
             <ForFans/>
            </ListItem> 
          </List>
          <Button onClick={()=>props.changeOpen(false)}>
            close
          </Button>
          </Drawer>
    );
  }
  
  export default DrawerComponent;
  