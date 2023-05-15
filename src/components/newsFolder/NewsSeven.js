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
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          style={{ marginTop: "10px", fontWeight: "bold" }}
        >
          DZEKO'S BRACE AND THE JOY OF THE STARS FROM HELLAS VS. INTER
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/3ca1a854-6e95-407a-b2d1-9a9e33302888/20230503213012_1605916524?quality=100&io=transform:fill,width:1920"
          alt="Edin Dzeko"
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ marginBottom: "20px" }}
          >
            “It was beautiful evening, we had fun and played really well. The
            goal? It was a matter of time, sometimes forwards don't score goals
            but you have to stay calm, because it will come like it did today
            and the important thing is that the team is doing well. These are
            never easy games but today we put in a great performance, we had a
            great session in training yesterday and we told ourselves that if we
            did the same today we would have a good chance of getting the result
            we wanted. Before the goal came we had lots of chances, it's true
            that in the past we have lost games that we shouldn't have lost, but
            when you play every three days it's not easy. Now there's not long
            left and we have to continue playing like this because we're
            starting to show how good we really are. Every game we’ve got left
            now is very important, they are all worth a lot, today we come home
            with the three points but from tomorrow we have to think about Roma.
            We must deliver another strong performance.” Edin Dzeko
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            “I came on with a lot of desire, playing with these teammates makes
            everything easier, it was a great night. Everyone is always helping
            me a lot, when I came on they told me to play with a clear frame of
            mind. The coach? He gave me some instructions about free kicks and
            corners and wished me good luck. ” Mattia Zanotti
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            “This is never an easy stadium to come to, today we started off on
            the right foot, we were aggressive and we showed everything we had
            practised during the week and we are coming home with three
            well-deserved points. I'm doing well, I played 70 minutes against
            Empoli, I came on today, I'm always ready to give it my all. ” Raoul
            Bellanova
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}