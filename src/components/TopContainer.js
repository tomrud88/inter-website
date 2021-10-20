import { Container,Box,makeStyles, Card, CardMedia, CardContent,ImageListItemBar , Typography, Grid, ListItem, ImageList, ImageListItem,Item} from '@material-ui/core'


import React from 'react'

const useStyles = makeStyles((theme)=>({
  con:{
    width:'100vw'
  },
    containerone:{
        minWidth:'100vw',
        height:'900px',
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('md')]:{
          height:'750px'
        },  
        [theme.breakpoints.down('xs')]:{
          height:'300px'
        },
        marginBottom:'10px',  
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
          height:'300px'
        }  
    },
    stadium:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(35, 61, 191, 0.94)',
        zIndex:1,
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        [theme.breakpoints.down('xs')]:{
          
        }  
    },
    imagelist:{
      width:'60vw',
      gap:theme.spacing(1.7),
      zIndex:1,
      [theme.breakpoints.down('md')]:{
        width:'100vw',
        gap:theme.spacing(1)
      },
      [theme.breakpoints.down('xs')]:{
        Maxheight:'300px',
        zIndex:1
      }
    },
    imagelistItem:{
        zIndex:1,
        [theme.breakpoints.down('xs')]:{
        maxHeight:'300px',
      }
    },
    imagelistItemSmall:{
      zIndex:1,
      [theme.breakpoints.down('xs')]:{
        display:'none'
      }  
  },
    title:{
      zIndex:2,
      fontSize:'34px'
    },
    typo:{
      zIndex:1
    },
    results:{
      zIndex:1,
      justifyContent:'center',
      backgroundColor: 'rgba(35, 61, 191, 0.94)',
      
      [theme.breakpoints.down('xs')]:{
        
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
      backgroundColor: 'rgba(5, 5, 5, 0.95)',
      color:'white',
      fontWeight:'700'
    },

    timeofplay:{
       fontWeight:'700'
       
    }
    
}))


function TopContainer() {
    const classes = useStyles()
    return (
        <div className={classes.con}>
            <Container className={classes.containerone}>
                <div className={classes.back}>
                <div className={classes.stadium}></div> 
                <ImageList 
                className={classes.imagelist}
                variant="woven"
                cols={6.3}
                rows={4}
                style={{margin:'50px 0'}}
    >
        <ImageListItem  className={classes.imagelistItem}
        cols={6.2} 
        rows={3}>
          <img style={{objectFit:'fill'}}src='https://fcinter.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDh6IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a7ab554cd35540bf88c0492d5f9627345ebce0e8/E9uhyx3WUAYZhDK.jpg'
            alt='main'
           
          /><ImageListItemBar className={classes.title} position='bottom' text='secondary' title='Martinez lub Correa wroca do Mediolanu szybciej?'/>
        </ImageListItem>
        <ImageListItem className={classes.imagelistItemSmall}
        cols={2} 
        rows={1}>
          <img style={{objectFit:'fill',width:'100%'}}src='https://fcinter.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcHd3IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8a8ef401ca90ee66c163ffe2cee8fff13a0fdb97/facx.png'
            alt='main'
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem className={classes.imagelistItemSmall}
        cols={2} 
        rows={1}>
          <img style={{objectFit:'fill',width:'100%'}}src='https://fcinter.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3dwIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--136870637a6b6ea2dd06c8aa5dde47e62880f97b/twitter.png'
            alt='main'
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem className={classes.imagelistItemSmall}
        cols={2} 
        rows={1}>
          <img style={{objectFit:'fill',width:'100%'}}src='https://fcinter.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbkF5IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--73bd9332e1ccf249d70cf9851eb682c0a0fce317/rgol-malyxq.gif'
            alt='main'
            loading="lazy"
          />
        </ImageListItem>
    </ImageList>
    </div>
    </Container>

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
    )
}

export default TopContainer
