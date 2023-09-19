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

export default function NewsOne() {
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
          INTER AND NIKE PRESENT THE THIRD KIT FOR THE 2023/24 SEASON
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/380909681_844122123740643_596878135096841863_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=MKo5rcWMwCUAX9e4iDE&_nc_ht=scontent-waw1-1.xx&oh=00_AfC28QzujE4hliqROySEUoBunWAAtpkDF9bnUjIH7I5iPg&oe=650D9547"
          alt="Inter Milan third shirt kit"
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ marginBottom: "20px" }}
          >
            Inter and Nike have released the Nerazzurri’s Third Kit for the
            2023/24 season. Initially previewed at a joint event in Milano on
            Monday evening, the predominantly orange kit celebrates the Club’s
            increasingly lifestyle-oriented outlook. It also seeks to support
            the local community, highlighting Inter’s multi-cultural and
            inclusive mindset, for which the Club has distinguished itself since
            its very foundation.
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            The new kit unites a more urban character with tradition. The orange
            returns to an Inter kit for the 14th time in the Club’s history.
            First used in 1937/38 as the base for our away strip, orange has
            long been an alternative for the Nerazzurri’s shirts, especially in
            the 1950s when, until 1957/58, it was invariably used as a second,
            third, or even fourth kit. At the start of the new millennium, our
            third kit was orange for two seasons (2000/01 and 2001/02).
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            This season’s Third Kit follows on from previous years in its
            purpose as a means of connecting with various subcultures in a
            different way. Men’s First Team players Lautaro Martinez and Marcus
            Thuram and Women’s First Team players Matilde Pavan, Flaminia
            Simonetti and Marta Pandini attended the unveiling event, all
            wearing the new shirt.
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            The new third kit will make its debut tomorrow, Wednesday 20
            September, during the team’s first UEFA Champions League match of
            the season against Real Sociedad. As of today, the kit is available
            to buy on the official online store store.inter.it or on nike.com.
            It can also be bought in Inter Store Milan and Inter Store San Siro
            as well as the Milan Loreto, Milan Vittorio Emanuele, and Rome Via
            del Corso Nike stores. The kit will be available to purchase in all
            authorised retail outlets from 27 September.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}