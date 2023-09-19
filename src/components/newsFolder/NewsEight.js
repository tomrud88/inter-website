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
          UEFA CHAMPIONS LEAGUE 23/24, INTER'S GROUP STAGE SQUAD LIST
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/d73b1891-420a-44a9-b20b-476286ea8384/1633711673?quality=100&io=transform:fill,width:1920&format=webp"
          alt="Inter Partners"
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ marginBottom: "20px" }}
          >
            The Nerazzurri players who will be able to play against Real
            Sociedad, Benfica and Red Bull Salzburg
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            MILANO - As per regulation, FC Internazionale Milano has submitted
            the list of Nerazzurri players who will be involved in the 2023/24
            Champions League group stage to UEFA.
          </Typography>
          <Typography>1. Yann SOMMER</Typography>
          <Typography>2. Denzel DUMFRIES</Typography>
          <Typography>6. Stefan DE VRIJ</Typography>
          <Typography>7. Juan CUADRADO</Typography>
          <Typography>8. Marco ARNAUTOVIC</Typography>
          <Typography>9. Marcus THURAM</Typography>
          <Typography>10. LAUTARO Martinez</Typography>
          <Typography>12. Raffaele DI GENNARO</Typography>
          <Typography>14. Davy KLAASSEN</Typography>
          <Typography>15. Francesco ACERBI</Typography>
          <Typography>16. Davide FRATTESI</Typography>
          <Typography>20. Hakan CALHANOGLU</Typography>
          <Typography>21. Kristjan ASLLANI</Typography>
          <Typography>22. Henrikh MKHITARYAN</Typography>
          <Typography>23. Nicolò BARELLA</Typography>
          <Typography>28. Benjamin PAVARD</Typography>
          <Typography>30. CARLOS AUGUSTO</Typography>
          <Typography>31. Yann BISSECK</Typography>
          <Typography>32. Federico DIMARCO</Typography>
          <Typography>36. Matteo DARMIAN</Typography>
          <Typography>70. Alexis SANCHEZ</Typography>
          <Typography>77. Emil AUDERO</Typography>
          <Typography>95. Alessandro BASTONI</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}