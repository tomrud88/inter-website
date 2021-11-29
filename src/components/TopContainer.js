import { Container,Box,makeStyles, Card, CardMedia, CardContent,ImageListItemBar , Typography, Grid, ListItem, ImageList, ImageListItem,Item, Paper,Shadow, Link} from '@material-ui/core'



import React from 'react'

const useStyles = makeStyles((theme)=>({
  con:{
   minWidth:'100vw',
   margin:'0px',
   padding: '0px',
  },
    containerone:{
        boxSizing:'border-box',
        minWidth:'100vw',
        height:'850px',
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('md')]:{
          height:'750px',
          marginTop:'55px'
        },
        [theme.breakpoints.down('sm')]:{
          height:'500px',
        },  
        [theme.breakpoints.down('xs')]:{
          height:'500px',
        },
        marginTop:'30px'  
    },
    back:{
        backgroundImage:`url(/san-siro.jpg)`,
        opacity:1,
        backgroundPosition:'center',
        backgroundSize:'cover',
        position:'absolute',
        top:0,
        left:0,
        right:0,
        height:'100%',
        width:'100vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('xs')]:{
          height:'525px'
        }  
    },
    stadium:{
        boxSizing:'border-box',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(20,46,107,0.9)',
        zIndex:1,
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,   
    },
    title:{
      zIndex:2,
      fontSize:'34px'
    },
    typo:{
      zIndex:1
    },
    resultsContainer:{
      width:'100vw',
      backgroundColor: 'rgba(20,46,107,255)',
      [theme.breakpoints.down('xs')]:{
        marginTop:'5px'
      }  
    },
    results:{
      zIndex:1,
      justifyContent:'center',
      backgroundColor: 'rgba(20,46,107,255)',
      width:'100%',
      [theme.breakpoints.down('xs')]:{
        marginTop:'25px'
      }  
    },
    bottomcontainer:{
      display:'flex',
      flexDirection:'column',
    },
    leftsite:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor: 'rgba(35, 61, 101, 0.54)',
      fontWeight:'700',
      color:'white',
    },
    rightsite:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor: 'rgba(0,0,0,255)',
      color:'white',
      fontWeight:'700'
    },

    timeofplay:{
       fontWeight:'700'
       
    },
    gridContainer:{
      marginRight:'0px',
      boxSizing:'border-box',
      width:'60%',
      zIndex:1,
      marginTop:'50px',
      [theme.breakpoints.down('md')]:{
        width:'80%',
        marginTop:'20px',
        marginRight:'0px',
        overflow:'hidden'
      },
      [theme.breakpoints.down('sm')]:{
        width:'100%',
        height:'100%',
        marginBottom:'25px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
      [theme.breakpoints.down('xs')]:{ 
       marginBottom:'0px',
       padding:'0px',
       marginTop:'0px'
      }
    },
    mainCardContainer:{
      '&:hover':{
        transform:
          'scale(1.02)'
       },
      height:'500px',
      padding:theme.spacing(1),
      [theme.breakpoints.down('xs')]:{
         height:'500px',
         margin:'0px',
         padding:theme.spacing(0),
         overflow:'hidden' 
      } 
    },
    cardContainer:{
      maxWidth:'360px',
      height:'190px',
      padding:theme.spacing(1),
      [theme.breakpoints.down('sm')]:{
        display:'none'
      },
      '&:hover':{
        transform:
          'scale(1.02) 2s'
        
      },

      
    },
    paper:{
      backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'top',
        height:'100%',
        width:'100%',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'flex-end'
    },
    mainTitle:{
      fontSize:'1.5em',
      fontWeight:'bold',
      marginBottom:'5%',
      color:'white',
      marginLeft:'3%',
      marginRight:'3%',
     
    }
    
}))


function TopContainer() {
    const classes = useStyles()
    return (
        <div className={classes.con}>
            <Container className={classes.containerone}>
                <div className={classes.back}>
                <div className={classes.stadium}></div> 
                <Grid container rowSpacing={1}
                columnSpacing={1} className={classes.gridContainer}
               >
               
    
        <Grid item xs={12} sm={12} md={12} lg={12}
        ><div className={classes.mainCardContainer}>
          <Paper style={{backgroundImage:'url(https://www.inter.it/binaries/content/gallery/internazionale/photos/2021/11/24/2021-11-24-19-30-20_407059.JPG/2021-11-24-19-30-20_407059.JPG/internazionale%3AcinemaApp)'}} className={classes.paper}>
            <p className={classes.mainTitle} boxShadow={2}>
            INTER REACH THE LAST 16: GROUP D STANDINGS
            </p>
       </Paper>
        </div>
        </Grid>
        <Grid item  md={4} lg={4} className={classes.imagelistItemSmall}
       // cols={2} 
       // rows={1}
       ><div className={classes.cardContainer}>
         <Link href='https://www.facebook.com/Inter'>
         <Paper style={{backgroundImage:'url(https://fcinter.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcHd3IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8a8ef401ca90ee66c163ffe2cee8fff13a0fdb97/facx.png)'}} className={classes.paper}>
       </Paper>
       </Link>
       </div>
        </Grid>
        <Grid item  md={4} lg={4} 
       // cols={2} 
        //rows={1}
        ><div className={classes.cardContainer}>
          <Link href='https://twitter.com/Inter'>
          <Paper style={{backgroundImage:'url(https://fcinter.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3dwIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--136870637a6b6ea2dd06c8aa5dde47e62880f97b/twitter.png)'}} className={classes.paper}
          >
          </Paper>
          </Link>
          </div>
        </Grid>
        <Grid item md={4} lg={4} className={classes.imagelistItemSmall}
       // cols={2} 
       // rows={1}
       ><div className={classes.cardContainer}>
         <Paper style={{backgroundImage:'url(https://fcinter.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbkF5IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--73bd9332e1ccf249d70cf9851eb682c0a0fce317/rgol-malyxq.gif)'}} className={classes.paper}
          >
          </Paper>
          </div>
        </Grid>
    </Grid>
    </div>
    </Container>
    <div className={classes.resultsContainer} >
    <Grid  className={classes.results} container direction='row' spacing={2}>
      <Grid className={classes.leftsite} item lg={4} sm={6} xs={12}>
        <Grid item container direction='column' alignItems='center'>
        <ListItem style={{justifyContent:'center'}}><img src='https://fcinter.pl/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0llIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--daa9c6ed836e1a7e8301ef676feab9d7677b3f52/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lLTnpWNE56VUdPZ1pGVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--94c6a9ec7dad8ed5d3d2adaecf783da9c3dc17fa/sassuolo.png'></img></ListItem>
        <ListItem style={{justifyContent:'center'}}>SASSUOLO</ListItem>
        </Grid>
        <Grid item className={classes.timeofplay}>
        <ListItem style={{justifyContent:'center'}}>7.kolejka</ListItem>
        <ListItem style={{justifyContent:'center',fontSize:'40px'}}>1:2</ListItem>
        <ListItem style={{justifyContent:'center',color:'#bea900'}}>02.10.2021</ListItem>
        <ListItem style={{justifyContent:'center',color:'#bea900'}}>20:45</ListItem>
        </Grid>
        <Grid item container direction='column'
        style={{alignItems:'center',justifyContent:'center'}}>
        <ListItem style={{justifyContent:'center'}}><img src='https://fcinter.pl/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2d3IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce6018a9cc74938350147bc60dd018680e15b5f1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lLTnpWNE56VUdPZ1pGVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--94c6a9ec7dad8ed5d3d2adaecf783da9c3dc17fa/interr.png'></img></ListItem> 
        <ListItem style={{justifyContent:'center'}}>INTER</ListItem>
        </Grid>
    </Grid>
    <Grid className={classes.rightsite} item lg={4} sm={6} xs={12}>
        <Grid item container direction='column' style={{justifyContent:'center',alignItems:'center'}}>
        <ListItem style={{justifyContent:'center'}}><img src='https://fcinter.pl/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcmdlIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e2bcd6f35995396d2d1da24efc1e096864c66e6a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lLTnpWNE56VUdPZ1pGVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--94c6a9ec7dad8ed5d3d2adaecf783da9c3dc17fa/lazio.png'></img></ListItem>  
        <ListItem style={{justifyContent:'center'}}>LAZIO</ListItem>
        </Grid>
        <Grid item className={classes.timeofplay}>
        <ListItem style={{justifyContent:'center'}}>8.kolejka</ListItem>
        <ListItem style={{justifyContent:'center',fontSize:'40px'}}>-:-</ListItem>
        <ListItem style={{justifyContent:'center',color:'#bea625'}}>16.10.2021</ListItem>
        <ListItem style={{justifyContent:'center',color:'#bea625'}}>18:00</ListItem>
        </Grid>
        <Grid item container direction='column'>
        <ListItem style={{justifyContent:'center'}}><img src='https://fcinter.pl/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2d3IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce6018a9cc74938350147bc60dd018680e15b5f1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lLTnpWNE56VUdPZ1pGVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--94c6a9ec7dad8ed5d3d2adaecf783da9c3dc17fa/interr.png'></img></ListItem> 
        <ListItem style={{justifyContent:'center'}}>INTER</ListItem>
        </Grid>
    </Grid>
    </Grid>
    </div>
        </div>           
    )
}

export default TopContainer
