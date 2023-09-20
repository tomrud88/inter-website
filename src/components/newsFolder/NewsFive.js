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

export default function NewsFive() {
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
          INTERNATIONALS:DUMFRIES GETS ASSIST. ASSLANI ALSO IN ACTION
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/ae7e2ca6-832c-4787-b34c-ecbff6b57cf5/20230828212623_1227357116?quality=100&io=transform:fill,width:1280,height:1280&format=webp"
          alt="Denzel Dumfries"
        />
        <CardContent>
          <Typography
            variant="body1"
            style={{ marginBottom: "20px" }}
          >
            Wins for Albania and the Netherlands in Euro 2024 qualifying
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            Kristjan Asllani and Denzel Dumfries were both involved in Euo 2024
            qualifying this evening.
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            Albania recorded a vital 2-0 win over Poland at home to go top of
            Group E. Asani and Daku with the goals. Asllani played for 70
            minutes.
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            Dumfries, who played the full 90, and the Netherlands also tasted
            victory. The Oranje beat Ireland 2-1 away from home thanks to goals
            from Gakpo and Weghorst, the latter turning home from Denzel's
            assist. The Dutch are now second in Group B on nine points, level
            with Greece but with a game in hand.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}