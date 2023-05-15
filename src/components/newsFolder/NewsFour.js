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

export default function NewsFour() {
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
          ROMA VS. INTER: PREVIOUS MEETINGS, STATS AND FUN FACTS
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/ff1fe6c3-b32f-4464-936b-3c4fc259934f/20230425173723_762041711-crop?quality=100&io=transform:fill,width:1920"
          alt="Simone Inzaghi"
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ marginBottom: "20px" }}
          >
            Inter face Roma on Saturday 6 May at 18:00 CEST for the 180th time
            in Serie A. The Nerazzurri have collected 75 wins to the
            Giallorossi's 50: against no other side have Inter earned more wins
            in the Italian league. Roma are also the team that Inter have scored
            the most goals against in Serie A: 291.
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            Since the start of the 2021/22 Serie A season, Inter have scored at
            least three goals in 24 league fixtures: no other side has a better
            record in the same period, with Napoli second (20 games).{" "}
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            In 2023, no other striker in Serie A has been involved in more goals
            than Lautaro Martínez in all competitions. The Argentinian has
            grabbed 15 goals and provided three assists, for a total of 18, the
            same as Victor Osimhen.
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            Roma are the team that Marcelo Brozovic has been involved in the
            most number of goals in Serie A: the Croatian midfielder totals
            seven contributions, with two goals and five assists. In his last
            three Serie A games, Brozovic have served up three goalscoring
            passes.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}