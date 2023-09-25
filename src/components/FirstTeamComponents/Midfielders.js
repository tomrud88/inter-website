import React from 'react';
import {Card, CardActionArea, CardMedia, makeStyles,Grid, CardContent, Typography,Container} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: {
    minHeight: "190px",
    minWidth: "120px",
    maxHeight: "330px",
    maxWidth: "280px",
  },
  mainContainer: {
    minWidth: "100%",
    backgroundColor: "lightgrey",
    padding: "20px",
    maringBottom: "0",
  },
  name: {
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
      fontWeight: "bold",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      fontWeight: "bold",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      fontWeight: "bold",
    },
  },
  titleContainer: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "lightgrey",
  },
  title: {
    fontWeight: "bold",
    padding: "20px 0px 5px 10px",
    margin: "0",
  },
  fCard: {
    marginRight: "15px",
    marginBottom: "15px",
    backgroundColor: "#faf9fc",
  },
  outerContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "lightgrey",
    borderBottom: "5px black solid",
  },
}));

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
          <Grid item lg={2} md={3} sm={3} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Dumfries.small.webp"
                  loading="lazy"
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
          <Grid item lg={2} md={3} sm={3} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Sensi.small.webp"
                  loading="lazy"
                  title="Sensi"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    SENSI STEFANO
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    5
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} md={3} sm={3} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Mkhitaryan.small.webp"
                  loading="lazy"
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
          <Grid item lg={2} md={3} sm={3} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Cuadrado.small.webp"
                  loading="lazy"
                  title="Cuadrado"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    CUADRADO JUAN
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    7
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} md={3} sm={3} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Calhanoglu.small.webp"
                  loading="lazy"
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
          <Grid item lg={2} md={3} sm={3} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Asllani.small.webp"
                  loading="lazy"
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
          <Grid item lg={2} md={3} sm={3} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Berella.small.webp"
                  loading="lazy"
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
          <Grid item lg={2} md={3} sm={3} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Klaassen.small.webp"
                  loading="lazy"
                  title="Klassen"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    DAVY KLAASSEN
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    14
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} md={3} sm={3} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Frattesi.small.webp"
                  loading="lazy"
                  title="Frattesi"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    FRATTESI DAVIDE
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    16
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} md={3} sm={3} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Carlos.small.webp"
                  loading="lazy"
                  title="Carlos Augusto"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    CARLOS AUGUSTO
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    30
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} md={3} sm={3} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Agoume.small.webp"
                  loading="lazy"
                  title="Agoume"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    LUCIEN AGOUME
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    42
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