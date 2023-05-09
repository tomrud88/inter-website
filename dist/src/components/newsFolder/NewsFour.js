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
        <Typography gutterBottom variant="h4" component="div" style={{marginTop:'10px',fontWeight:'bold'}}>
        PERISIC WINS LENOVO PLAYER OF THE MONTH FOR NOVEMBER
        </Typography>
      <CardMedia
        className={classes.SimoneImg}
        component="img"
        height="640"
        image="https://www.inter.it/binaries/content/gallery/internazionale/photos/2021/12/02/2021-12-02-12-06-03_409509.jpg/2021-12-02-12-06-03_409509.jpg/internazionale%3Acorpo"
        alt="Simone Inzaghi"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary" style={{marginBottom:'20px'}}>
        MILAN – Ivan Perisic is the LENOVO Player of the Month for November! Nerazzurri fans chose the Croatian winger by voting for him on Twitter, Instagram and Weibo.
        </Typography>
<Typography style={{marginBottom:'20px'}}>
Perisic made five appearances in Serie A and the Champions League in November, starting the Milan derby and wins against Napoli, Shakhtar and Venezia, and coming on as a substitute against Sheriff Tiraspol. </Typography>
<Typography style={{marginBottom:'10px'}}>
His goal against Napoli was his 44th in Serie A, putting him level with Igor Budan as the Croatian to have scored the most goals in the Italian top flight.
        </Typography>
        <Typography style={{marginBottom:'10px'}}>
        Perisic was a star performer in the win over Shakhtar that secured Inter's place in the last 16 with a match to spare. He featured in the build-up to Edin Dzeko's opener then sent over an inch-perfect delivery for the Bosnian to head in the second – his first assist for Inter in the Champions League.
        </Typography>        
      </CardContent>
    </Card>
    </Container>
  );
}