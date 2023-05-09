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
        <Typography gutterBottom variant="h4" component="div" style={{marginTop:'10px',fontWeight:'bold'}}>
        INTER CAMPUS SUPPORTING PEOPLE WITH DISABILITIES
        </Typography>
      <CardMedia
        className={classes.SimoneImg}
        component="img"
        height="640"
        image="https://www.inter.it/binaries/content/gallery/internazionale/photos/2021/12/03/ic-giocoalcentro-2020-051.jpg/ic-giocoalcentro-2020-051.jpg/internazionale%253Acinema"
        alt="Simone Inzaghi"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary" style={{marginBottom:'20px'}}>
        Around 15% of the world's population, approximately one billion people, have a disability of some sort and face discrimination and barriers that prevent them from fully participating in social life. It is for these people that the United Nations, in 1981, proclaimed the International Day of Persons with Disabilities, celebrated annually on 3 December, with the aim of promoting understanding of disability issues and support for the dignity, rights and well-being of persons with disabilities. 
        </Typography>
<Typography style={{marginBottom:'20px'}}>
Inter Campus has for several years been supporting children with intellectual disabilities, offering inclusive football programmes to help them develop the skills needed to play and have fun, while learning to relate with other children – with and without disabilities – on the pitch.

At the two Special schools in Inter Campus Poland, children train with our coaches/educators on a weekly basis and take part in tournaments with children without disabilities, offering them an opportunity to show off the skills they have acquired – giving them further joy.</Typography>
<Typography style={{marginBottom:'10px'}}>
In Italy there are two inclusive football initiatives: a permanent one with a group of children from l'Abilità Onlus Association who take part in a weekly programme, and another linked to Gioco al Centro, inaugurated with Parco Inclusivo, offering playing sessions for two or four children at a time on a safe pitch set up for the occasion.
        </Typography>
      </CardContent>
    </Card>
    </Container>
  );
}