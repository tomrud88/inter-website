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

function Defenders() {
    const classes = useStyles()
    return (
      <Container className={classes.outerContainer}>
        <Container className={classes.titleContainer}>
          <Typography variant="h5" className={classes.title}>
            DEFENDERS
          </Typography>
        </Container>
        <Grid container className={classes.mainContainer}>
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="\deVrij.jpg"
                  title="DE VRIJ"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    STEFAN DE VRIJ
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    6
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_110/110489.jpg"
                  title="Acerbi"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    FRANCESCO ACERBI
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    11
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
                  image="\bellanova.jpg"
                  title="bellanova"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    RAOUL BELLANOVA
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    97
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_249/249801.jpg"
                  title="Dimarco"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    FEDERICO DIMARCO
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    32
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_93/93366.jpg"
                  title="D'Ambrosio"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    DANILO D'AMBROSIO
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    33
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_17/17983.jpg"
                  title="Darmian"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    MATTEO DARMIAN
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    36
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_163/163739.jpg"
                  title="Skriniar"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    MILAN SKRINIAR
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    37
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_308/308109.jpg"
                  title="Bastoni"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    ALESSANDRO BASTONI
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    95
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
}
export default Defenders