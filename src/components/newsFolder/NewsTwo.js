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

export default function NewsTwo() {
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
          INZAGHI:"A HUGE DERBY, COMPLIMENTS TO THE BOYS"
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/06fcdc23-0eb1-4b1a-aa4d-40de0f000a28/FC-Internazionale-v-AC-Milan-Serie-A-TIM?quality=100&io=transform:fill,width:1920&format=webp"
          alt="Simone Inzaghi"
        />
        <CardContent>
          <Typography
            variant="body1"
            style={{ marginBottom: "20px" }}
          >
            The words of Simone Inzaghi after the 5-1 derby win: “I am happy for
            our fans, now we look to the next games”
          </Typography>
          <Typography style={{ marginBottom: "20px"}}>
            San Siro is once again Nerazzurro: Inter wins the first derby
            beating AC Milan 5-1 with a brace from Mkhitaryan and goals from
            Thuram, Calhanoglu, and Frattesi. Simone Inzaghi commented at the
            end of the match:
          </Typography>
          <Typography style={{ marginBottom: "20px", fontWeight: "bold" }}>
            “We have had a great start to the season and played a huge derby. We
            were always focused, we scored in the right moments, and the players
            that came on from the bench did really well, so compliments to the
            boys. We know it is only a good beginning but I we are happy for our
            fans. Now we have to prepare ourselves for the next games to come. I
            watch my boys, and what they give in training, I was a bit worried
            for this game because in the first three matchdays, we had an entire
            week to prepare, but for this one I had various players returning to
            the squad 24 hours beforehand, but I knew they know how to play
            these kinds of games and they've shown me this once again. It makes
            me happy for our club, our society, and our president, we know that
            it is extremely important and what the derby represents. The last
            derbies we won brought us a trophy and the chance to play in a huge
            final, and this game has given us momentarily the top spot of the
            table, but we are only on matchday 4 and the league is long. Having
            depth in the squad is important now that we are about to play every
            three days and there will be space for everyone. Today I praised the
            entire team. There weren't any signs of Leao's goal, maybe we had to
            dribble better in the first half but it's a derby, we have players
            that gave a lot, physically and mentally, and the players that came
            on from the bench helped us greatly. Thuram? Marotta and Ausilio
            wanted to take him last winter, I also spoke to Deschamps who spoke
            well of him. He is a good lad, with a lot of qualities that
            immediately made us like him. Good for him and good for the Club. We
            changed 12 players, it's not inconsequential. Last season gave us
            clarity, we must go on this way, we are happy with the start but we
            have to be ready because we know that the challenges start now. ”
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            Simone Inzaghi
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}