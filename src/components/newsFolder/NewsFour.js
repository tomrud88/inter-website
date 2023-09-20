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
          ZANETTI 50:HAPPY BIRTHDAY, JAVIER!
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/f210f510-564c-41cd-af30-16dad5a943cb/FC-Internazionale-v-Genoa-CFC-Serie-A?quality=100&io=transform:fill,width:1280,height:1280&format=webp"
          alt="Javier Zanetti"
        />
        <CardContent>
          <Typography
            variant="body1"
            style={{ marginBottom: "20px" }}
          >
            MILANO - Happy birthday to Javier Zanetti. Inter’s Vice President
            turns 50 years old today, 28 of those he has spent with the
            Nerazzurri.
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            Born in Buenos Aires on 10 August 1973, Zanetti joined Inter in the
            summer of 1995 as a young Argentian who would leave an indelible
            mark on this Club. From his debut against Vicenza on 27 August 1995
            to his final farewell to football against Lazio on 10 May 2014,
            Zanetti made 858 appearances, scored 21 goals, featured for a total
            of 73,284 minutes and bagged 16 trophies: one Champions League, one
            Club World Cup, on UEFA Cup, five league titles, four Coppa Italia
            titles and four Supercups.
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            To that he has now added one Scudetto, two Coppa Italia and two
            Supercoppa titles during his tenure as the Club’s Vice President. In
            2018, Zanetti was also inducted into the Inter Hall of Fame, the
            first defender in Club history to be awarded that honour.
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            To celebrate him reaching his half-century, we’ve collected 50
            photos that tell the incredible Inter story of our current Vice
            President; on behalf of the entire Nerazzurri family, we would like
            to wish him all the best on his birthday!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}