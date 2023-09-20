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
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          style={{ marginTop: "10px", fontWeight: "bold" }}
        >
          THURAM, THE DERBY GOAL AND THE SOUND OF SAN SIRO: "I WILL REVEL IN
          THIS MOMENT:REALLY HAPPY ABOUT THE GOAL"
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/570ab8cd-a274-4453-9fb8-c2c17256b859/FC-Internazionale-v-AC-Milan-Serie-A-TIM?quality=100&io=transform:fill,width:1280,height:1280&format=webp"
          alt="Thuram celebration"
        />
        <CardContent>
          <Typography
            variant="body1"
            style={{ marginBottom: "20px" }}
          >
            The words of the Nerazzurri forward at the end of his first Milano
            derby
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            A force of nature that rocked the Milano derby: Marcus Thuram made
            his derby debut with a devastating goal. The demonstration of power
            and personality, topped off with the extraordinary goal he scored to
            make it 2-0. At the end of the match, the French forward spoke to
            DAZN and Inter TV:
          </Typography>
          <Typography style={{ marginBottom: "10px",fontWeight:'bold' }}>
            “Every goal at San Siro is special: I heard a beautiful sound, the
            sound of our fans. I am very happy, my teammates also celebrated a
            lot with me. I am happy that I scored in my first derby, just like
            Ronaldo, my idol as a kid. I hoped to start this well with Inter: I
            am happy to be able to play with these champions in one of the most
            important clubs in Europe; I will revel in the moment. I train to be
            stronger every day, I want to be able to continue like this. For the
            goal I scored, Denzel was there to lead the counterattack: the ball
            went too far but I saw that I was on my own with the defender in
            front of me and I thought that maybe the moment to shoot had
            arrived. For me, it is very easy to play with Lautaro because I
            understand the game: he is one of the best forwards in the world and
            I can learn a lot from him. With two strikers like us, I know very
            well that we have to attack the goal as fast as possible and I like
            this. I celebrated Frattesi's goal a lot because I sent him a
            message this week after his brace with the National team saying that
            he had to do that with Inter too, and he did. Inter has always been
            in my mind since I was injured two years ago: it never left me, I
            worked a lot to still have the trust of the Club.”
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}