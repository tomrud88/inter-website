import { Card, CardContent, CardMedia,makeStyles,Typography } from '@material-ui/core'
import { CardActionArea} from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme)=>({
  cardTitleArea:{
      backgroundColor:'rgba(5, 5, 5, 0.95)',
      color:'white'
  }
}))

function NewsItem({item}) {

   const classes = useStyles()

    return (
        <div>
            <Card>
             <CardActionArea>
                 <CardMedia
                   component='img'
                   height='350'
                   image={item.picture}
                   />
                   <CardContent className={classes.cardTitleArea}>
                       <Typography variant='h5' component='div'>
                       {item.title} 
                       </Typography>    
              </CardContent>
             </CardActionArea>
            </Card>
        </div>
    )
}

export default NewsItem
