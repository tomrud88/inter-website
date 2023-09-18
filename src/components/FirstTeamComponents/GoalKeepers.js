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
                  image="https://intermilan.bynder.com/transform/0b09313d-0d76-460f-8029-01c676fcd94d/Sommer_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
                  title="Sommer"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    YANN SOMMER
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
                  image="https://intermilan.bynder.com/transform/ecf4a2a9-92a5-425a-b2c9-2f9054aef74a/Audero_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
                  title="Audero"
                />
                <CardContent>
                  <Typography className={classes.name} variant="h5">
                    EMIL AUDERO
                  </Typography>
                  <Typography className={classes.name} variant="h5">
                    77
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
                  image="https://intermilan.bynder.com/transform/61c883e9-3e25-4ec5-8265-f849f383991d/Di_Gennaro_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
                  title="Di Gennaro"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    RAFFAELE DI GENNARO
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    12
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
