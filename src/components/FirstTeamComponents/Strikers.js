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
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://intermilan.bynder.com/transform/b750c0fb-a0f8-403d-a4b6-6193d3ac5a50/Arnautovic_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://intermilan.bynder.com/transform/a61aa1ba-0b31-42bf-b17f-91fa22403259/Thuram_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://intermilan.bynder.com/transform/f1758b6c-1ea9-4532-940d-c00236ebaa51/Lautaro_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://intermilan.bynder.com/transform/495031e1-57ae-4adc-ab27-5ea2c8e8492d/Sanchez_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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