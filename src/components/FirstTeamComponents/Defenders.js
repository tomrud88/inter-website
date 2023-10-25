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
    minHeight: "350px",
    [theme.breakpoints.down("xs")]: {
      minHeight: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "300px",
    },
  },
  outerContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "lightgrey",
    borderBottom: "5px black solid",
  },
}));

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
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/De_vrij.small.webp"
                  loading="lazy"
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
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Acerbi.small.webp"
                  loading="lazy"
                  title="Acerbi"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    FRANCESCO ACERBI
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    15
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  src="/Pavard.small.webp"
                  loading="lazy"
                  title="Pavard"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    BENJAMIN PAVARD
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    28
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Dimarco.small.webp"
                  loading="lazy"
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
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Bisseck.small.webp"
                  loading="lazy"
                  title="Bisseck"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    BISSECK YANN
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    31
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Darmian.small.webp"
                  loading="lazy"
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
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Bastoni.small.webp"
                  loading="lazy"
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