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

export default function NewsThree() {
    const classes = useStyles()
  return (
      <Container className={classes.mainContainer}>
    <Card className={classes.mainCard}>
        <Typography gutterBottom variant="h4" component="div" style={{marginTop:'10px',fontWeight:'bold'}}>
        INZAGHI: "CHARACTER, GRIT AND DETERMINATION NEEDED AT THE OLIMPICO"
        </Typography>
      <CardMedia
        className={classes.SimoneImg}
        component="img"
        height="640"
        image="https://www.inter.it/binaries/content/gallery/internazionale/photos/2021/08/20/2021-08-20-15-32-06_382145.jpg/2021-08-20-15-32-06_382145.jpg/internazionale%253Acinema"
        alt="Simone Inzaghi"
      />
      <CardContent>
      <Typography variant="body1" color="text.secondary" style={{marginBottom:'20px'}}>
      APPIANO GENTILE – Simone Inzaghi held a press conference on Friday afternoon to discuss Inter's visit to Jose Mourinho's Roma at the Stadio Olimpico on Saturday.
        </Typography>
<Typography style={{marginBottom:'20px',fontWeight:'bold'}}>
What sort of game are you expecting?</Typography>
<Typography style={{marginBottom:'10px'}}>
“It''s one of the biggest games we have in this run of fixtures. We'll be up against an excellent team with great players so we must be very careful – we'll need a real Inter performance.”
        </Typography>
        <Typography style={{marginBottom:'20px',fontWeight:'bold'}}>
        Where do you think Lautaro Martinez can improve?</Typography>
        <Typography style={{marginBottom:'10px'}}>
        “He has to keep doing what he's doing. He's very young and has lots of room for improvement. I'm very happy with him and the other forwards we have. They're all doing well and helping out when we don't have the ball. Lautaro has scored in the last three matches and long may he keep it up!”
        </Typography>
        <Typography style={{marginBottom:'20px',fontWeight:'bold'}}>
        What's your opinion of Jose Mourinho?</Typography>
        <Typography style={{marginBottom:'10px'}}>
        “It will be nice to meet him as I've never come up against him before. I know this is a special match for him so we'll need to be even more careful. We all know how capable he is and what he's achieved at the clubs he's worked for.”
        </Typography>
        <Typography style={{marginBottom:'20px',fontWeight:'bold'}}>
        Do you expect to have any of the injured players back for this game?</Typography>
        <Typography style={{marginBottom:'10px'}}>
        “Andrea Ranocchia and Matteo Darmian definitely won't be involved and it's unlikely [Stefan] de Vrij and [Aleksandar] Kolarov will be either. I think we'll have them in the squad for Madrid or possibly Cagliari. I need to assess the others. [Alessandro] Bastoni's temperature had gone down by yesterday but he hasn't trained yet. He seems to be better but I'll need to look at them all individually today.”
        </Typography>
      </CardContent>
    </Card>
    </Container>
  );
}