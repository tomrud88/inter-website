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
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          style={{ marginTop: "10px", fontWeight: "bold" }}
        >
          INTER VS. AC MILAN TICKETS. SALES BEGIN FOR INTER CLUB MEMBERS ON
          MONDAY 8 MAY
        </Typography>
        <CardMedia
          className={classes.SimoneImg}
          component="img"
          height="640"
          image="https://intermilan.bynder.com/transform/5426fe37-cac6-4de3-b0ea-8a473093cccd/20230419215456_78210789?quality=100&io=transform:fill,width:1280,height:1280"
          alt="Inter Milan stadium"
        />
        <CardContent>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ marginBottom: "20px" }}
          >
            MILAN – FC Internazionale Milano can announce that the ticket-sale
            period for season-ticket holders, for the game Inter vs. AC Milan,
            has now ended. Phase 3, dedicated to Inter Club members, will begin
            on Monday 8 May.
          </Typography>
          <Typography variant="h6">
            PHASE 3 – ONLY 22/23 INTER CLUB MEMBERS
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            From 14:30 CEST until midnight on Monday 8 May (subject to
            availability), sales will be reserved to Inter Club members, who
            will be able to buy up to two tickets per order, provided that
            membership is for the 2022/23 season. The online selling system will
            check at the time of purchase that buyer corresponds with an active
            and valid 2022/23 Inter Club membership. Purchased tickets during
            this phase can only be transferred and given up to another 22/23
            Inter Club member.
          </Typography>
          <Typography variant="h6">
            PHASE 4 – ONLY ‘SIAMO NOI’ CARD HOLDERS
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            From 14.30 CEST on Tuesday 9 May until midnight on Sunday 7 May,
            priority will turn to Siamo Noi card holders who signed up to the
            scheme before Tuesday 18 April. Subject to availability, up to two
            tickets may be bought, provided that both persons are Siamo Noi card
            holders.
          </Typography>
          <Typography variant="h6">GENERAL SALE</Typography>
          <Typography style={{ marginBottom: "20px" }}>
            Due to the overwhelming demand for tickets and with the goal of
            reserving tickets for regular attendees, a general sales period is
            currently not planned.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}