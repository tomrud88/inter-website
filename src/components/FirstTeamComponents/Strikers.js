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

function Strikers() {
    const classes = useStyles()
    return (
      <Container className={classes.outerContainer}>
        <Container className={classes.titleContainer}>
          <Typography variant="h5" className={classes.title}>
            STRIKERS
          </Typography>
        </Container>
        <Grid container className={classes.mainContainer}>
          <Grid item lg={2} md={3} sm={3} xs={6}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/Arnautovic.small.webp"
                  loading="lazy"
                  title="Arnautovic"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    MARCO ARNAUTOVIC
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    8
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
                  image="/Thuram.small.webp"
                  loading="lazy"
                  title="Thuram"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    MARCUS THURAM
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    9
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
                  image="/Lautaro.small.webp"
                  loading="lazy"
                  title="Martinez"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    LAUTARO MARTINEZ
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    10
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
                  image="/Sanchez.small.webp"
                  loading="lazy"
                  title="Sanchez"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    ALEXIS SANCHEZ
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    70
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
}
export default Strikers