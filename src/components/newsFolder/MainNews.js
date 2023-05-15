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
          INTER BEAT ROMA 2 - 0 IN THE CAPITAL
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/b44ab1b8-ed8e-42f0-a9b7-864ba8389830/20230506200403_1081158573?quality=100&io=transform:fill,width:1586"
          alt="Simone Inzaghi"
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ marginBottom: "20px" }}
          >
            We keep pushing. Two goals, another clean sheet, another win on the
            road. A fourth consecutive league win, a fifth victory in a row in
            all competitions, and lots of cohesion, determination, selflessness
            and brilliant ideas. Inter produced a really solid and clinical
            display. It finished 2-0 in Rome, with Dimarco opening the scoring
            in the first half and Lukaku sealing it after the restart. Three
            vital points ahead of the Champions League semi-final first leg.
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            There was a mix of potentially dangerous ingredients: today's game
            was a vital one in the race for the top four, and it came just
            before the Champions League semi-finals. Nevertheless, Inter were
            excellent and full of running, playing with clear heads. Brozovic
            was the architect and dominated the midfield area, always looking to
            combine with his teammates. He found them everywhere, right from the
            start of the match. He had Dumfries and Dimarco to pick out down the
            flanks, while Barella and Calhanoglu were always there to provide an
            option. Things were working well for Inter, even if Roma - beset
            with absences but with the desire to do well - initially made a
            bright start.
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            Roma were relying heavily on set-pieces and individual inspiration.
            However, the Nerazzurri defenders stood firm, leaving Belotti with
            no space with his back to goal. Then, when there was the
            opportunity, Inter looked to strike on the break, with Barella
            heavily involved when the team countered. At the back, Inter had to
            dig in, and they were also grateful to Onana. Indeed, when Roma were
            at their most dangerous, the Nerazzurri shot-stopper produced a
            fantastic stop to thwart Ibanez. Inzaghi's changes helped combat the
            hosts' pressing. Then, Lautaro regained possession in the final
            third following Ibanez's mistake and sent Lukaku through on goal
            with only Rui Patricio to beat. Romelu's finish was powerful and
            precise and put the game to bed. The Nerazzurri almost added a third
            late on through Lautaro, who was denied by the crossbar. The
            interruptions continued, but Inzaghi's men were the ones smiling at
            the end of stoppage time. A vital Inter victory!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}