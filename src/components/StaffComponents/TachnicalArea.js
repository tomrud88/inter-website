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
        marginTop:'80px',
        display:'flex',
        flexDirection:'column',
        backgroundColor:'lightgrey',
        borderBottom:'5px black solid',
        [theme.breakpoints.down('sm')]:{
            marginTop:'50px'
        }
    }
}))

function TechnicalArea() {
    const classes = useStyles()
    return (
      <Container className={classes.outerContainer}>
        <Container className={classes.titleContainer}>
          <Typography variant="h5" className={classes.title}>
            TECHNICAL AREA
          </Typography>
        </Container>
        <Grid container className={classes.mainContainer}>
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://fcinter.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbGN6IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5734209aec135f5aeedf6fd7cded7ed5209b4701/Screenshot_2.jpg"
                  loading="lazy"
                  title="Farris"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    MASSIMILIANO FARRIS
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    Vice coach
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
                  image="https://fcinter.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbGd6IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0100f0c961cba9d83b6ee474e985b1ceb7765025/Screenshot_3.jpg"
                  loading="lazy"
                  title="Cecchi"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    MARIO CECCHI
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    Technical assistant
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBeq4bBCYuirL4SwHqP_hO5KmTZVYTSbgegg&usqp=CAU"
                  loading="lazy"
                  title="Cerasaro"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    FERRUCCIO CERASARO
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    Technical assistant
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
                  image="https://sortitoutsi.net/uploads/media/89uGGN5MZPtBTecuxQWF7Wy2ZIzpULaA0Dn3mmaR.jpg"
                  loading="lazy"
                  title="Rocchini"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    RICCARDO ROCCHINI
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    Technical assistant
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
                  image="https://media.gettyimages.com/photos/fabio-ripert-fc-internazionale-fitness-coach-looks-on-during-the-a-picture-id1340101770?s=612x612"
                  loading="lazy"
                  title="Ripert"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    FABIO RIPERT
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    Fitness coach
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
                  image="https://sortitoutsi.net/uploads/media/o6RcqKzOiv8Vwl2GsLp2ktQkA9aKSvrnasHf2rsV.jpg"
                  loading="lazy"
                  title="Spicciariello"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    CLAUDIO SPICCIARIELLO
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    Fitness coach
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
                  image="https://media.gettyimages.com/photos/gianluca-zappala-fc-internazionale-goalkeeping-coach-during-the-warm-picture-id1336885337"
                  loading="lazy"
                  title="Zappala"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    GIANLUCA ZAPPALA
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    Goalkeeper coach
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
                  image="https://img.a.transfermarkt.technology/portrait/header/2239-1461576232.jpg?lm=1"
                  loading="lazy"
                  title="Bonauti"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    ADRIANO BONAIUTI
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    Goalkeeper coach
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
                  image="https://i1.rgstatic.net/ii/profile.image/997920413335552-1614934175484_Q512/Andrea-Belli-2.jpg"
                  loading="lazy"
                  title="Belli"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    ANDREA BELLI
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    Functional rehab
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
}
export default TechnicalArea