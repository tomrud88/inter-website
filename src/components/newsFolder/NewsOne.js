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

export default function NewsOne() {
    const classes = useStyles()
  return (
      <Container className={classes.mainContainer}>
    <Card className={classes.mainCard}>
        <Typography gutterBottom variant="h4" component="div" style={{marginTop:'10px',fontWeight:'bold'}}>
        ROMA V INTER: EVERYTHING YOU NEED TO KNOW
        </Typography>
      <CardMedia
        className={classes.SimoneImg}
        component="img"
        height="640"
        image="https://www.inter.it/binaries/content/gallery/internazionale/photos/2021/11/29/2021-11-29-14-17-24_408369.JPG/2021-11-29-14-17-24_408369.JPG/internazionale%253Acinema"
        alt="Simone Inzaghi"
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary" style={{marginBottom:'20px'}}>
        MILAN – Roma meet Inter on Saturday at 18:00 CET: the Nerazzurri will visit the Stadio Olimpico in Matchday 16 of Serie A 2021/22. Simone Inzaghi’s team come into the game fresh from their victory against Spezia, having amassed 34 points so far; and with 36 goals for and 15 against, they boast the league’s most potent attack and second most miserly defence. On the other hand, coming off the back of defeat by Bologna, Jose Mourinho’s Roma have 25 points after 15 matches, having scored 24 and conceded 16. 
        </Typography>
        <Typography variant='h6'>HEAD-TO-HEADS</Typography>
<Typography style={{marginBottom:'20px'}}>
Saturday’s match will be the 177th top-flight meeting between Roma and Inter: the Nerazzurri have 73 wins, compared to 49 for the Giallorossi, with 54 draws.

Roma v Inter clashes have produced 511 goals, the most in Serie A history and at least 38 more than any other head-to-head. Inter have achieved more wins in the top flight (73) against the Giallorossi and Bologna than any other team.

Inter are unbeaten in eight Serie A matches against Roma (2W, 6D), the longest ongoing winless streak for the Giallorossi against any team in the league. The Nerazzurri won their last Serie A outing against Roma and are looking to secure back-to-back league victories against the Giallorossi for the first time since 2015.

The most frequent score between Roma and Inter in Serie A is 0-0 (21 matches); however, only one of the last 14 meetings between the two (in December 2019) has ended goalless.</Typography>
<Typography variant='h6'>FORM BOOK</Typography>
<Typography style={{marginBottom:'10px'}}>
Inter have run out 2-0 winners in each of their last two Serie A fixtures. The Nerazzurri haven’t won three games on the spin without shipping a goal since the back end of the 2019/20 season. If Simone Inzaghi’s side scores for the 18th game in a row, it would match the team’s longest Serie A goalscoring run on the road, which began in October 1950 and lasted until September 1951.

Roma have lost six of their opening 15 matches in a Serie A season for the first time since 2011/12 and have not lost seven out of their first 16 games since 2008/09. Only Fiorentina (zero) have drawn fewer times than Roma (one) in the 2021/22 Serie A campaign. Inter’s tally currently sits on four.
Inter (258) and Roma (264) are the two teams that have had the most efforts on goal in 2021/22. The Nerazzurri have the best attack in the division with 36 goals, meaning the club has reached this tally in back-to-back campaigns, having previously not managed to do so since 1961/62.
        </Typography>
        <Typography variant='h6'>PLAYER FOCUS</Typography>
        <Typography style={{marginBottom:'20px'}}>
        Before signing for Inter, Edin Dzeko scored 85 goals in 199 Serie A appearances for Roma. Aleksandar Kolarov also used to ply his trade in the capital, netting 17 goals in the top flight in a century of Roma appearances.

Roma are the team that Lautaro Martinez has faced the most times (six) and racked up the most minutes against (364) in Serie A without finding the net against them.

Among the sides that Hakan Calhanoglu has faced at least eight times in Serie A, Roma are the team against which he has registered the fewest goal involvements, with just one goal from the penalty spot in June 2020.

Roma are among Arturo Vidal’s favourite two Serie A victims, with the Chilean bagging four goals against Roma and capital rivals Lazio, with his first brace in the Italian top flight coming against the Giallorossi in April 2012.
</Typography>   
      </CardContent>
    </Card>
    </Container>
  );
}