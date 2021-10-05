import { List, ListItem, ListItemText,Drawer,makeStyles, Container, Button, Typography } from "@material-ui/core";
import { CalendarTodayOutlined, ConfirmationNumberOutlined, Home, People, ReceiptOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { useState } from "react";

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
          onClick={()=>props.changeOpen(false)} 
          itemSize={30}>
            <ListItem  className={classes.listItem}>
            <Home className={classes.icon}/>
            <Typography variant="h6" className={classes.itemText}>
             HOME
            </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
            <People className={classes.icon}/>
            <Typography variant="h6" className={classes.itemText}>
             TEAM
            </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
            <ReceiptOutlined className={classes.icon}/>
            <Typography variant="h6" className={classes.itemText}>
             NEWS
            </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
            <CalendarTodayOutlined className={classes.icon}/>
            <Typography variant="h6" className={classes.itemText}>
             SEASON
            </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
            <img src='https://static.dezeen.com/uploads/2021/04/inter-milan-football-club-rebrand-logo_dezeen_2364_sq2.jpg' className={classes.img}/>
            <Typography variant="h6" className={classes.itemText}>
             CLUB
            </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
            <ShoppingCartOutlined className={classes.icon}/>
            <Typography variant="h6" className={classes.itemText}>
             SHOP
            </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
            <ConfirmationNumberOutlined className={classes.icon}/>
            <Typography variant="h6" className={classes.itemText}>
             TICKETS
            </Typography>
            </ListItem>
          </List>
          <Button onClick={()=>props.changeOpen(false)}>
            close
          </Button>
          </Drawer>
    );
  }
  
  export default DrawerComponent;
  