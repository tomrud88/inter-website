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

export default function NewsSix() {
    const classes = useStyles()
  return (
      <Container className={classes.mainContainer}>
    <Card className={classes.mainCard}>
        <Typography gutterBottom variant="h4" component="div" style={{marginTop:'10px',fontWeight:'bold'}}>
        CALHANOGLU ON TARGET FOR THIRD GAME IN A ROW
        </Typography>
      <CardMedia
        className={classes.SimoneImg}
        component="img"
        height="640"
        image="https://i.internethaber.com/storage/files/images/2021/08/21/e9vdfkexoaye9n3-TIIP.jpg"
        alt="Simone Inzaghi"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary" style={{marginBottom:'20px'}}>
        VENICE – Hakan Calhanoglu registered his fourth goal of the season and found the net for the third Serie A game in a row against Venezia on Saturday evening with a stunning right-footed strike from long range that left Sergio Romero helpless.
        </Typography>
<Typography style={{marginBottom:'20px'}}>
Four goals in 12 games matches the midfielder’s goalscoring tally from the entirety of last season and scoring for three consecutive games was a first in his professional career in Serie A and the Bundesliga. Here’s what Calhanoglu told Inter TV after the game:</Typography>
<Typography style={{marginBottom:'10px'}}>
“I scored a great goal and I’m thrilled. Shooting from long range is in my repertoire.” The stats certainly back him up, as only Lionel Messi (61) has scored more goals from outside the box than Calhanoglu (26, the same as Christian Eriksen) in the top five European leagues since the start of the 2013/14 season. “Let’s not exaggerate. Messi is a phenomenon!”

Calha continued: “I don’t mind if I’ve scored, what matters is the three points and it wasn’t at all easy here in this small stadium with a fiery atmosphere. We only finished the game off at the end, but at least for tonight, we’re closer to Milan and Napoli.

“We showed the right mentality. We’re pleased about that and the fact that we head back to Milan with three key points. Next up is a key clash with Spezia. We’ll have to recover well and prepare as well as we can.”
        </Typography>
      </CardContent>
    </Card>
    </Container>
  );
}