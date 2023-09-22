import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme)=> ({
    mainGrid:{
        marginTop:'50px',
        backgroundImage:'url(/trophies-picture.webp)',
        backgroundSize:'cover',
        height:'700px',
        width:'100vw',
        [theme.breakpoints.down('sm')]:{
            height:'800px',
            marginTop:'80px'
          }
    },
    trophiesGrid:{
        border:'solid #f9efc1 5px',
        height:'500px',
        maxWidth:'95%',
        position:'relative',
        [theme.breakpoints.down('md')]:{
            height:'600px'
          },
        [theme.breakpoints.down('xs')]:{
          height:'700px',
        }
    },
    trophieItem:{
      maxHeight:'60%',
      margin:'20px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      [theme.breakpoints.down('md')]:{
        maxHeight:'50%'
      },
      [theme.breakpoints.down('sm')]:{
        margin:'10px',
        maxHeight:'40%'
      }
    },
    trophieItemnumber:{
        color:'#f9efc1',
        fontWeight:'', 
    },
    interHerb:{
        height: '120px',
        width:'120px',
        position:'absolute',
        top:'-88px',
        [theme.breakpoints.down('sm')]:{
          top:'-108px'
        }
    }
}))

function Trophies() {
    const classes = useStyles()
    return (
      <div>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.mainGrid}
        >
          <Grid
            container
            className={classes.trophiesGrid}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            border="solid gold 1px"
          >
            <img
              className={classes.interHerb}
              src="/emblem-inter.webp"
              alt="Inter emblem"
            />
            <Grid item sm={3} lg={2} className={classes.trophieItem}>
              <div>
                <img
                  src="https://fcinter.pl/assets/scudetto-1107c0a278a95f60b2da4af205d5ddc809c81293e968009efe1ec6257e03b321.png"
                  alt="Scudetto logo"
                  height="100px"
                  width="70px"
                ></img>
              </div>
              <Typography className={classes.trophieItemnumber} variant="h4">
                19X
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "white", fontWeight: "bold" }}
              >
                SCUDETTO
              </Typography>
            </Grid>
            <Grid item sm={3} lg={2} className={classes.trophieItem}>
              <div>
                <img
                  src="https://fcinter.pl/assets/champions-5f4c61f757b883c6f6d30bed90eae56d88758f1fe1cc58d247c39b1eac828332.png"
                  alt="Champions league logo"
                  height="100px"
                  width="70px"
                ></img>
              </div>
              <Typography className={classes.trophieItemnumber} variant="h4">
                3X
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "white", fontWeight: "bold" }}
              >
                CHAMPIONS
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "white", fontWeight: "bold" }}
              >
                LEAGUE
              </Typography>
            </Grid>
            <Grid item sm={3} lg={2} className={classes.trophieItem}>
              <div>
                <img
                  src="https://fcinter.pl/assets/coppa-cba988eb8e81c2de83d038bf39a97835498bc44bd4b5f4ffbc6fbeae5f0bd09e.png"
                  alt="Coppa Italia logo"
                  height="100px"
                  width="70px"
                ></img>
              </div>
              <Typography className={classes.trophieItemnumber} variant="h4">
                8X
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "white", fontWeight: "bold" }}
              >
                COPPA ITALIA
              </Typography>
            </Grid>
            <Grid item sm={3} lg={2} className={classes.trophieItem}>
              <div>
                <img
                  src="https://fcinter.pl/assets/world-d68a45689a7e1c35200d41fa398003e000719c31a6a71a2c02b95bb2f400b476.png"
                  alt="Club world cup logo"
                  height="100px"
                  width="70px"
                ></img>
              </div>
              <Typography className={classes.trophieItemnumber} variant="h4">
                1X
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "white", fontWeight: "bold" }}
              >
                FIFA CLUB
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "white", fontWeight: "bold" }}
              >
                WORLD CUP
              </Typography>
            </Grid>
            <Grid item sm={3} lg={2} className={classes.trophieItem}>
              <div>
                <img
                  src="https://fcinter.pl/assets/uefa-6fcc9eb8a646f05e8511bb4f7f1a627958f56f7adce5c94f2e4ae92d9e4b9776.png"
                  alt="Uefa cup logo"
                  height="100px"
                  width="70px"
                ></img>
              </div>
              <Typography className={classes.trophieItemnumber} variant="h4">
                3X
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "white", fontWeight: "bold" }}
              >
                UEFA CUP
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
}

export default Trophies
