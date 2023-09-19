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

export default function NewsSix() {
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
          2023 BALLON D'OR:BARRELLA AND LAUTARO AMONG THE NOMINEES
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/e20c9a56-9e2c-40cc-8437-d534a2632d81/20230819210217_594450717-crop?quality=100&io=transform:fill,width:1280,height:1280&format=webp"
          alt="Barella and Lautaro"
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ marginBottom: "20px" }}
          >
             Nicolò Barella and Lautaro Martinez are the two Nerazzurri
            players who have made the nominees list for the 2023 Ballon d'Or,
            the prestigious annual award presented by French news magazine
            France Football.
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            The Italian midfielder and Argentinian striker enjoyed a fantastic
            2022/23 campaign, helping Simone Inzaghi's men reach the Champions
            League final in Istanbul. The Nerazzurri ended up winning two
            trophies: the Supercoppa Italiana following a 3-0 victory over AC
            Milan in Riyadh and the Coppa Italia after beating Fiorentina in
            Rome.
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            It was a season that also saw Lautaro achieve the extraordinary feat
            of becoming a World Champion with Argentina in Qatar. Meanwhile,
            Nicolò Barella was named as the best midfielder of the 2022/23
            season by Lega Serie A thanks to his fantastic performances.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}