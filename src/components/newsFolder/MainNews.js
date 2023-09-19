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
        objectPosition:'center'
    }
}))

export default function MainNews() {
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
          A THUMPING DERBY WIN!
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/e89837b4-d2c5-4953-ae90-34ecf6c083ed/20230916193810_1123754276?quality=100&io=transform:fill,width:1280,height:1280&format=webp"
          alt="Mikhytarian, Martinez and Frattesi celebrating"
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ marginBottom: "20px" }}
          >
            There are nights you never want to end. There are years, like in
            2023, where you can say: another derby victory? Yes, another derby
            victory. Five cross-city clashes this year, five wins. All of them
            have been amazing, just like the goals that sent San Siro into
            raptures this evening. Five goals to one. 5-1. However you want to
            write it, it's fantastic, it's wonderful, it's deserved. And it's
            absolutely beautiful.
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            Five derby wins in a single calendar year; it had never happened
            before. 5-1, a scoreline that had only previously occurred in Inter
            vs. AC Milan in 1910 and AC Milan vs. Inter in 1974. This evening,
            the San Siro crowd witnessed a spectacular Nerazzurri show, a
            devastating display that took Inter to the top of the table in their
            own right on maximum points after four matches. It was a victory
            that came about thanks to the team's way of playing, their
            determination, their unity, the supporters behind them, the stadium,
            the entire Nerazzurri faithful.
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            The leading figure this evening was Henrikh Mkhitaryan, just like he
            was in the Champions League semi-final first leg earlier on this
            year. The Armenian scored early on and then got the Nerazzurri back
            on track with another goal after AC Milan had pulled one back. He
            was fantastic, also providing an assist for Frattesi's goal. But so
            many others made big contributions. Marcus Thuram was one such
            player. The Rossoneri just couldn't deal with his runs. First, he
            had a hand in the opening goal, pulling the ball back for Dimarco,
            whose cross-shot was diverted into the net by Mkhitaryan. Then, the
            Frenchman produced a magnificent finish for the team's second - one
            of the best in recent derby history. A beautiful right-footed hit
            that flew into the net, leaving Maignan with no chance. A delightful
            combination of power and precision.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}