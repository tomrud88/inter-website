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
          25 YEARS AGO: INTER LIFTED THE UEFA CUP IN PARIS
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/fa948e06-20a9-4364-9101-c51ea45a2a86/AC01648-Bergomi-Giuseppe?quality=100&io=transform:fill,width:1920"
          alt="Inter celebration"
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ marginBottom: "20px" }}
          >
            25 years ago, but it seems like yesterday. 25 years ago, but the
            feelings are still there today, identical. And for those who weren't
            present, or not yet born, the photos and videos from that evening
            bring it all back: the voices of those arriving, still crisp and
            clear, to the Parc des Princes, the stage for one Inter's greatest
            moments in history.
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            25 years ago, 6 May 1998. That incredible run could not have
            finished any other way; it could not have been a finer ending, in an
            all-Italian final, the first ever one on the Uefa Cup, with every
            Interista looking for revenge after the previous year's defeat to
            Schalke.
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            t was a glorious night: Lazio 0-3 Inter. Zamorano's goal started it
            all off, Zanetti's hit into the top corner with his right, Ronaldo's
            dance in his one-on-one with Marchegiani. It was the Nerazzurri's
            third Uefa Cup in its history and the first in Moratti's reign, with
            the sweet and gentil smile of Gigi Simoni, who only ten days prior
            had lost for the first time in the league campaign.
          </Typography>
          <Typography style={{ marginBottom: "20px"}}>
            His squad of players from '98 won with style and pride, because the
            final was a masterpiece; because the celebrations were wild; because
            it was a joy to watch 'O Fenomeno' with the Brazilian flag jumping
            up and down happy together with Beppe Bergomi.
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            In Milan, Nerazzurri supporters gathered to watch the game in Piazza
            del Duomo on the big screen. Following the match, Massimo Moratti
            was help up on the players' shoulders, before dedicating the victory
            to hhis father, Angelo: "He won league titles and European Cups so
            my thought is with him. The fans deserves this, it is Gigi Simoni's
            Cup; he has led the team with tenacity and intelligence."
          </Typography>
          <Typography style={{ marginBottom: "20px"}}>
            When you mention the 1998 Uefa Cup, timeless images suddenly spring
            up to mind, like bright, shining stars in a Black and Blue sky.
            There's the hooped shirts, unimaginable goals by Ronaldo in the
            frozen mud in Moscow; there's the perfect ending at Parc des
            Princes. The "boys of '98": they still call themselves that now, the
            boys of Gigi Simoni.
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            Ronaldo, the one and only Ronaldo. The first win in Neuchatel, then
            the fightback over Lyon. Another French team and another comeback: a
            2-0 defeat in Strasbourg, the famous 3-0 win at San Siro with goals
            from Ronaldo, Zanetti and Simeone. The quarters were revenge for the
            1997 final, beating Schalke through West's goal in extra-time. In
            the semis, Ronaldo drew up one of his most stunning goals in the mud
            of Moscow. In the final in Paris, (the first one-off game) Inter
            dominated the game against Lazio: peaches from Zamorano, Zanetti and
            Ronaldo Inter their third Uefa Cup in its history, and its first
            trophy in the Moratti era.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}