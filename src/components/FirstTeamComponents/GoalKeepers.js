import React from 'react';
import {Card, CardActionArea, CardMedia, makeStyles,Grid, CardContent, Typography,Container} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    media:{
        width:'100%',
    },
    mainContainer:{
        minWidth:'100%',
        backgroundColor:'lightgrey',
        padding:'20px',
        maringBottom:'0'
    },
    name:{
        [theme.breakpoints.up('md')]:{
            fontSize:'14px',
            fontWeight:'bold'
         },
        [theme.breakpoints.down('sm')]:{
           fontSize:'12px',
           fontWeight:'bold'
        },
         [theme.breakpoints.down('xs')]:{
            fontSize:'12px',
            fontWeight:'bold'
         },
    },
    titleContainer:{
        display:'flex',
        justifyContent:'flex-start',
        width:'100%',
        backgroundColor:'lightgrey',
    },
    title:{
        fontWeight:'bold',
        padding:'20px 0px 5px 10px',
        margin:'0'
    },
    fCard:{
        marginRight:'15px',
        marginBottom:'15px'
    },
    outerContainer:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'lightgrey',
        borderBottom:'5px black solid',
    }
}))

function GoalKeepers() {
    const classes = useStyles()
    return (
      <Container className={classes.outerContainer}>
        <Container className={classes.titleContainer}>
          <Typography variant="h5" className={classes.title}>
            GOALKEEPERS
          </Typography>
        </Container>
        <Grid container className={classes.mainContainer}>
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://www.footballdatabase.eu/images/photos/players/a_11/11916.jpg"
                  title="Samir"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    SAMIR HANDANOVIC
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    1
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://www.footballdatabase.eu/images/photos/players/a_7/7515.jpg"
                  title="Samir"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    ALEX CORDAZ
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    21
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://www.footballdatabase.eu/images/photos/players/a_244/244843.jpg"
                  title="Onana"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    ANDRE ONANA
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    24
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
}

export default GoalKeepers
