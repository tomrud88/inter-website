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

export default function NewsEight() {
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
          MEET AND GREET WITH THE NERAZZURRI PARTNERS IN ROME 
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/86cb233a-6e2f-4d63-ae77-475f871586c9/20230505220824_1657084555?quality=100&io=transform:fill,width:1920"
          alt="Inter Partners"
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ marginBottom: "20px" }}
          >
            To mark the away fixture against Roma on matchday 34 in Serie A,
            Inter players took part in a special Meet and Greet evening with
            several Nerazzurri partners.
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            Guests from Attal, Cerba, Kopron, La Molisana, Locauto, Nike, San
            Bernardo, Socios and Volvo had the opportunity to meet Dumfries, de
            Vrij, Asllani and Bellanova for an exclusive autograph signing and
            photo session.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}