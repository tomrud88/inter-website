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
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          style={{ marginTop: "10px", fontWeight: "bold" }}
        >
          LUKAKU AND DARMIAN: "A BIG PERFORMANCE, WE NEED TO KEEP IT UP"
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://cdn-2.tstatic.net/kaltara/foto/bank/images/Selebrasi-gol-Romelu-Lukaku-AS-Roma-vs-Inter-Milan-050523.jpg"
          alt="Romelu Lukaku"
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ marginBottom: "20px" }}
          >
            A third consecutive away win for Inter, who came away with three
            points in Rome thanks to a focused, mature and determined display.
            Romelu Lukaku, who scored the Nerazzurri's second, spoke after the
            match, as did Matteo Darmian. This is what they had to say:
          </Typography>
          <Typography style={{ marginBottom: "20px", fontWeight: "bold" }}>
            “I’m delighted with the team’s performance. We’re growing and
            reaching a really high level, but we need to carry on working. It’s
            an important moment for the team. We know what our situation is and
            what we’re playing for, and we need to make the most of every
            moment. Today, we showed that we’re a really mature team. We’ve got
            many players who have done important things, and this is how you win
            games.”
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            Romelu Lukaku
          </Typography>
          <Typography style={{ marginBottom: "20px", fontWeight: "bold" }}>
            “We’re doing well and almost everyone is available. We need to carry
            on in this manner. The remainder of the season will be difficult,
            but we’re ready to play all the matches that await us across the
            league, Coppa Italia and Champions League. We were composed and
            focused today and managed to come away with an important win. The
            Champions League? We’re ready and will prepare for the match in the
            best way possible in the next few days. We know that we’ll have to
            produce a very focused performance. I feel the confidence of my
            teammates and the staff, and this motivates me to always give my
            all.”
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            Matteo Darmian
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}