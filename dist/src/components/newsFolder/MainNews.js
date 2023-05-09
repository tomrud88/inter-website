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

export default function MainNews() {
    const classes = useStyles()
  return (
      <Container className={classes.mainContainer}>
    <Card className={classes.mainCard}>
        <Typography gutterBottom variant="h4" component="div" style={{marginTop:'10px',fontWeight:'bold'}}>
        INTER REACH THE LAST 16: GROUP D STANDINGS
        </Typography>
      <CardMedia
        className={classes.SimoneImg}
        component="img"
        height="640"
        image="https://www.inter.it/binaries/content/gallery/internazionale/photos/2021/11/24/2021-11-24-19-30-20_407059.JPG/2021-11-24-19-30-20_407059.JPG/internazionale%3AcinemaApp"
        alt="Simone Inzaghi"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary" style={{marginBottom:'20px'}}>
        Inter have reached the Champions League round of 16. The 2-0 victory over Shakhtar at San Siro coupled with Real Madrid beating Sheriff Tiraspol saw Simone Inzaghi's team reach the knockout stages of Europe’s premier competition. It’s the first time the Nerazzurri have reached the Champions League round of 16 since the 2011/12 season, when they were knocked out by Marseille.
        </Typography>
<Typography style={{marginBottom:'20px'}}>
After losing their opening match against Real Madrid and then drawing 0-0 against Shakhtar in Kyiv, Inter have racked up three consecutive wins. They overcame Sheriff 3-1 both home and away before beating Shakhtar 2-0 last night at San Siro. The victory over Roberto De Zerbi's team along with Real Madrid's triumph over Sheriff allowed the Nerazzurri to reach the knockout stages.</Typography>
<Typography style={{marginBottom:'10px'}}>
First place in Group D will be determined by the outcome of the match at the Santiago Bernabeu on 7 December.
        </Typography>
      </CardContent>
    </Card>
    </Container>
  );
}