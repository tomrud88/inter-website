import { Card, CardContent, CardMedia,Link,makeStyles,Typography } from '@material-ui/core'
import { CardActionArea} from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme)=>({
  cardTitleArea:{
      backgroundColor:'rgba(5, 5, 5, 0.95)',
      color:'white'
  },
  Card:{
      '&:hover':{
          transform:
              'scale(1.02)'
      }
  },

  cardPicture:{
    objectPosition:'top',
    [theme.breakpoints.down('sm')]:{
       height:'380px'
    },
    [theme.breakpoints.down('xs')]:{
        height:'330px'
     },
  }
}))

function NewsItem({item}) {

   const classes = useStyles()

    return (
        <div>
            <Link href={item.id} underline='none'>
            <Card className={classes.Card}>
             <CardActionArea >
                 <CardMedia
                   className={classes.cardPicture}
                   component='img'
                   height='360'
                   image={item.picture}
                   />
                   <CardContent className={classes.cardTitleArea}>
                       <Typography variant='h5' component='div'>
                       {item.title} 
                       </Typography>    
              </CardContent>
             </CardActionArea>
            </Card>
            </Link>
        </div>
    )
}

export default NewsItem
