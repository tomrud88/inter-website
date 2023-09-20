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

export default function NewsSeven() {
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
          INTER AND SIMONE INZAGHI TOGETHER UNTIL 2025
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/511c5334-1d99-40b2-a18d-e0ad3c7057b8/inter-it-2023_08_5_11_31_14-543377?quality=100&io=transform:fill,width:1280,height:1280&format=webp"
          alt="Simone Inzaghi"
        />
        <CardContent>
          <Typography
            variant="body1"
            style={{ marginBottom: "20px" }}
          >
            The coach has officially extended his contract with the Nerazzurri
            until 2025
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            FC Internazionale Milano is delighted to announce that Simone
            Inzaghi has signed a new contract with the club to remain as head
            coach until 2025.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}