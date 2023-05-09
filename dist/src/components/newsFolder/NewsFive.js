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

export default function NewsFive() {
    const classes = useStyles()
  return (
      <Container className={classes.mainContainer}>
    <Card className={classes.mainCard}>
        <Typography gutterBottom variant="h4" component="div" style={{marginTop:'10px',fontWeight:'bold'}}>
        GAGLIARDINI: "WE HAVE A SOLID SQUAD, WHOEVER PLAYS ALWAYS DOES WELL"
        </Typography>
      <CardMedia
        className={classes.SimoneImg}
        component="img"
        height="640"
        image="https://sempreinter.com/wp-content/uploads/2021/08/Roberto-Gagliardini-2-scaled-e1629744048250.jpg"
        alt="Simone Inzaghi"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary" style={{marginBottom:'20px'}}>
        MILAN – When he scores, Inter win. It’s as simple as that for Roberto Gagliardini, whose 15 Serie A goals for Inter have come in 13 different games, all of which the Nerazzurri won. The midfielder is the club’s 13th different goalscorer so far this season and he continued the trend of registering most of his goals against sides from Liguria (five v Genoa, two v Sampdoria and one v Spezia).
        </Typography>
<Typography style={{marginBottom:'20px'}}>
Gagliardini described his goal and the team win in an interview with Inter TV. “I always try to score goals whenever opportunities come my way and I’m pleased to have done so this evening.</Typography>
<Typography style={{marginBottom:'10px'}}>
“Being the team’s 13th different goalscorer this season shows how well we're playing consistently. We always create so many goalscoring chances. The wins are down to everyone’s hard work.

“We’re a solid squad. We’re the reigning Italian champions which gives us so much confidence. The players who’ve come in have settled in very well.
        </Typography>
        <Typography style={{marginBottom:'20px'}}>
        “The game against Roma is key for us. We’ll have to put all our energy into it and be fully focused.”</Typography>
      </CardContent>
    </Card>
    </Container>
  );
}