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

export default function NewsTwo() {
    const classes = useStyles()
  return (
      <Container className={classes.mainContainer}>
    <Card className={classes.mainCard}>
        <Typography gutterBottom variant="h4" component="div" style={{marginTop:'10px',fontWeight:'bold'}}>
        LAUTARO: "IT’S A KEY PERIOD AND WE’RE FOCUSED ON OUR UPCOMING GAMES"
        </Typography>
      <CardMedia
        className={classes.SimoneImg}
        component="img"
        height="640"
        image="https://lookcharms.com/wp-content/uploads/2021/10/Lautaro-Martinez-Inter-1139088.jpg"
        alt="Simone Inzaghi"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary" style={{marginBottom:'20px'}}>
        APPIANO GENTILE – After providing an assist for Roberto Gagliardini and bagging a penalty to make it 2-0 in the Week 15 victory over Spezia, Lautaro Martinez spoke to Sky Sport about life at the club.
        </Typography>
<Typography style={{marginBottom:'20px',fontWeight:'bold'}}>
You’re attached to the city of Milan now. Was that a factor in your decision to sign a contract renewal?</Typography>
<Typography style={{marginBottom:'10px'}}>
“I spoke a lot about it with my family because we’re happy here. We love the city of Milan and I’ve bought into the club’s projects. I like the way they’ve spoken to me about them and I’m pleased to stay here with my family.”
        </Typography>
        <Typography style={{marginBottom:'20px',fontWeight:'bold'}}>
        How much do you feel you’ve matured and how much do you show that on the pitch?</Typography>
        <Typography style={{marginBottom:'10px'}}>
        “Becoming a father has matured me so much on and off the pitch. I always try to improve as a player and as a person. My wife and family in Argentina are always behind me and they really help me out.”
        </Typography>
        <Typography style={{marginBottom:'20px',fontWeight:'bold'}}>
        In this very even title race, do you think Inter have something over the others?</Typography>
        <Typography style={{marginBottom:'10px'}}>
        “I’m enjoying it this season because you can see the teams are improving, as well as the competition overall. It’s important for us to always be up there. We have to defend our Scudetto title from last season, which was our first in many years. It’s very significant to wear the Scudetto patch on our jerseys.

“We always try to implement on the pitch what the coach asks of us, to be on the front foot, get lots of players forward and also defend together, putting in practice what we work on in training. Other teams are doing well. We’ve dropped some points so far, but we’re now recovering. It’s a key period for us.”
        </Typography>
        <Typography style={{marginBottom:'20px',fontWeight:'bold'}}>
        You’re performing very well in the league, but it hasn’t quite come off for you in the Champions League yet. Are you saving it for the clash at the Bernabeu?</Typography>
        <Typography style={{marginBottom:'10px'}}>
        “I always try to give my all on the pitch and help my team-mates. Sometimes I score, sometimes I don’t, but we’re still doing well. I feel good within this squad and I link up well with whoever else is playing. That’s important because it means we’re all focused and our heads are in the right place.”
        </Typography>   

      </CardContent>
    </Card>
    </Container>
  );
}