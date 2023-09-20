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

export default function Coach() {
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
          COACH - SIMONE INZAGHI
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/53920958-ea02-4333-b01d-3b07cc9adf2b/OZ9_3782-1432596?quality=100&io=transform:fill,width:1920"
          alt="Simone Inzaghi"
        />
        <CardContent>
          <Typography
            variant="body1"
            color="textSecondary"
            style={{ marginBottom: "20px" }}
          >
            Destined for the ball. When you grow up in a small village close to
            Piacenza and have a brother three years your senior, it is likely
            that you dream of one thing and only thing only, much like him:
            football. The Piacenza shirt, autographs from centre-forwards, who
            were idols to be emulated for those whose rooms were decorated with
            Biancorossi scarves and flags; a photo with them was an object of
            true desire. San Nicolò: the river Trebbia separated them from
            Piacenza’s Galleana - 5 kilometres away from home - the ground that
            inspired the Inzaghi brothers. Between walks in the woods in search
            of mushrooms and days spent fishing, football would always come out
            on top. Anywhere and in any way. In the courtyard or the attic, on
            earthen pitches or gravel.
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            Simone and a continuous task: scoring goals. In the youngest age
            group team with the local club in San Nicolò, he finished the season
            with 92 goals. 92! His aim in life was certain from a young age:
            becoming a footballer. A natural next step was Piacenza with his
            first childhood dream coming true. In addition to paying the cost of
            his subscription, upon Simone’s departure, San Nicolò also received
            40 footballs, training tops and some new nets for the goals.
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            Intertwining memories, which define Simone Inzaghi’s playing career.
            Loan spells with Carpi, Novara, Brescello and Lumezzane before
            breaking into the first team at his hometown club Piacenza. He
            scored 15 goals in Serie A in 1998 at just 22 years of age. He then
            made the move to Lazio, where he would - with his huge goals - help
            them on their way to a historic Scudetto in 2000. Simone Inzaghi
            also won three Coppa Italia titles are three Italian Supercups as a
            player and also became the Biancocelesti’s record goalscorer in
            European competitions and the first Italian player ever to score
            four goals in a single Champions League game (14 March 2000, Lazio
            5-1 Marseille).
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            Once his playing career ended in 2010, Inzaghi instantly made the
            switch to management. His coaching career began in the 2010/11
            season as part of Lazio’s youth set-up, before becoming the head
            coach of the Primavera side (two Coppa Italia titles and one
            Supercup). Then, in April 2016, he landed the first-team job. He had
            seven games left in that season, with which to secure his place for
            the following campaign. He would go on to coach Lazio for another
            five seasons, winning the Coppa Italia in 2019 and two Supercoppa
            titles (2017 and 2019). He also brought Champions League football
            back to the capital-city club with a fourth-place finish in 2020.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}