import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    mainCard:{
        maxWidth:'1000px'
    },
    mainContainer:{
        marginTop:'80px',
        justifyContent:'center',
        display:'flex',
        [theme.breakpoints.down('sm')]:{
          marginTop:'70px'
      }
    },
    SimoneImg:{
        objectFit:'cover',
        objectPosition:'top'
    }
}))

export default function NewsSeven() {
    const classes = useStyles()
  return (
      <Container className={classes.mainContainer}>
    <Card className={classes.mainCard}>
        <Typography gutterBottom variant="h4" component="div" style={{marginTop:'10px',fontWeight:'bold'}}>
        DUMFRIES: "IT WAS SO GOOD TO PLAY IN FRONT OF THE FANS"
        </Typography>
      <CardMedia
        className={classes.SimoneImg}
        component="img"
        height="640"
        image="https://www.inter.it/binaries/content/gallery/internazionale/photos/2021/12/01/2021-12-01-17-56-02_408699.JPG/2021-12-01-17-56-02_408699.JPG/internazionale%3AcinemaApp"
        alt="Simone Inzaghi"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary" style={{marginBottom:'20px'}}>
        MILAN – Denzel Dumfries got the nod to start in the right wing-back berth for the first time since the clash with Udinese in October. The Dutchman clocked plenty of miles after putting in a tireless performance that included some key defensive ball recoveries. All in all, the wing-back was pleased with his contribution, as he told Inter TV after the match.
        </Typography>
<Typography style={{marginBottom:'20px'}}>
“The most important thing was to win this game. I think we scored two good goals including a good penalty by Lautaro Martinez.

“I think it had been a long time since I started and I also played the full 90 minutes, so I was very happy to play again today. It was very good to play in front of the fans.</Typography>
<Typography style={{marginBottom:'10px'}}>
“I feel good. I think there were ups and downs in the first few months. I played some good matches and others that were not really good. I’m honest with myself. I know I can play better, but I’m also human. I try to improve and I feel really good now. 

“My team-mates are helping me very much, especially Stefan de Vrij, but also Ivan Perisic and Edin Dzeko. It’s really important for me to settle into the team because I don’t speak Italian yet. The fans didn’t see my qualities yet, so I will show more and more.”
        </Typography>
      </CardContent>
    </Card>
    </Container>
  );
}