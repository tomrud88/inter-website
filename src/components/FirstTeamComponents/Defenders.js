import React from 'react';
import {Card, CardActionArea, CardMedia, makeStyles,Grid, CardContent, Typography,Container} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: {
    width: "100%",
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
                  image="https://intermilan.bynder.com/transform/83294804-df59-4a92-9882-e03037587462/De_vrij_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
                  image="https://intermilan.bynder.com/transform/def73bbf-9dfb-4502-b51b-0ac7ee8cdcd6/Acerbi_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://intermilan.bynder.com/transform/dd090506-1b00-4131-b283-c7436d73532b/Pavard_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://intermilan.bynder.com/transform/eb3886fe-2f2a-4acf-975b-a6c02c5e9b5b/Dimarco_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
                  image="https://intermilan.bynder.com/transform/f5c8ea25-188e-4ccd-add2-5dad79670ac0/Bisseck_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://intermilan.bynder.com/transform/e3f490ea-5bbc-41e8-a02a-1d5b3f61a83d/Darmian_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
                  image="https://intermilan.bynder.com/transform/474c1a82-8003-47b1-89bb-291bc6166c07/Bastoni_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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