import { Container,Box,makeStyles, Card, CardMedia, CardContent,ImageListItemBar , Typography, Grid, ListItem, ImageList, ImageListItem} from '@material-ui/core'
import { InsertEmoticon } from '@material-ui/icons'

import React from 'react'

const useStyles = makeStyles((theme)=>({
    container:{
        minWidth:'100%',
        height:'80vh',
        position:'relative',
        display:'grid',
        justifyContent:'center',
        alignItems:'center',
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
        minHeight:'750px',
        width:'100vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    stadium:{
        width:'100%',
        height:'110%',
        backgroundColor:'rgba(35, 61, 191, 0.94)',
        zIndex:1,
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
    },
    imagelist:{
      width:'60vw',
      gap:theme.spacing(2),
      zIndex:1,
      [theme.breakpoints.down('md')]:{
        width:'100vw'
      }
    },
    imagelistItem:{
        zIndex:1,
        
    },
    title:{
      zIndex:1,
      fontSize:'34px'
    }
    
}))


function Maincontainer() {
    const classes = useStyles()
    return (
        <div>
            <Container fixed className={classes.container}>
                <div className={classes.back}>
                <div className={classes.stadium}></div> 
                <ImageList 
                className={classes.imagelist}
                variant="woven"
                cols={6.2}
                rows={4}
                style={{margin:'50px 0'}}
    >
        <ImageListItem className={classes.imagelistItem}
        cols={6.2} 
        rows={3}>
          <img style={{objectFit:'fill',width:'100%'}}src='https://fcinter.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDh6IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a7ab554cd35540bf88c0492d5f9627345ebce0e8/E9uhyx3WUAYZhDK.jpg'
            alt='main'
           
          /><ImageListItemBar className={classes.title} text='primary' title='Martinez lub Correa wroca do Mediolanu szybciej?'/>
        </ImageListItem>
        <ImageListItem className={classes.imagelistItem}
        cols={2} 
        rows={1}>
          <img style={{objectFit:'fill',width:'100%'}}src='https://fcinter.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcHd3IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8a8ef401ca90ee66c163ffe2cee8fff13a0fdb97/facx.png'
            alt='main'
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem className={classes.imagelistItem}
        cols={2} 
        rows={1}>
          <img style={{objectFit:'fill',width:'100%'}}src='https://fcinter.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3dwIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--136870637a6b6ea2dd06c8aa5dde47e62880f97b/twitter.png'
            alt='main'
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem className={classes.imagelistItem}
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
        </div>
    )
}

export default Maincontainer
