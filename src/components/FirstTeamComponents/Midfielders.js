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

function Midfielders() {
    const classes = useStyles()
    return (
      <Container className={classes.outerContainer}>
        <Container className={classes.titleContainer}>
          <Typography variant="h5" className={classes.title}>
            MIDFIELDERS
          </Typography>
        </Container>
        <Grid container className={classes.mainContainer}>
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://www.footballdatabase.eu/images/photos/players/a_263/263679.jpg"
                  title="Dumfries"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    DENZEL DUMFRIES
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    2
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_185/185404.jpg"
                  title="Gagliardini"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    ROBERTO GAGLIARDINI
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    5
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_29/29904.jpg"
                  title="Mikhitarian"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    HENRIKH MIKHITARIAN
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    22
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_223/223558.jpg"
                  title="Gosens"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    ROBIN GOSENS
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    8
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_483/483505.jpg"
                  title="Carboni"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    VALENTIN CARBONI
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    45
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_158/158977.jpg"
                  title="Calhanoglu"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    HAKAN CALHANOGLU
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    20
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_439/439143.jpg"
                  title="Asslani"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    KRISTJAN ASSLANI
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    14
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_252/252538.jpg"
                  title="BarelLa"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    NICOLO BARELLA
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    23
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
                  image="https://www.footballdatabase.eu/images/photos/players/a_112/112559.jpg"
                  title="Brozovic"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    MARCELO BROZOVIC
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    77
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
}
export default Midfielders