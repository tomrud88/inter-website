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
                  image="https://intermilan.bynder.com/transform/0c809a7e-fa44-4f18-b36d-2157cd3818d8/Dumfries_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
                  image="https://intermilan.bynder.com/transform/697f9114-8f73-47b4-a2a0-cc96aac0845c/Sensi_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://intermilan.bynder.com/transform/bafe2ed3-f4d8-4d9a-b1ad-c501738587fb/Mkhitaryan_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
                  image="https://intermilan.bynder.com/transform/52c23e89-c5c0-4835-8c86-7cdc9f40a117/Cuadrado_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://intermilan.bynder.com/transform/d7b5dcaa-2689-4d0f-a617-57a785c98326/Calhanoglu_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
                  image="https://intermilan.bynder.com/transform/df23fa53-3cd2-4d67-963e-061c87c52024/Asllani_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
                  image="https://intermilan.bynder.com/transform/3e5faf8e-a0d8-4c59-a0b6-f303c6000951/Berella_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
                  image="https://intermilan.bynder.com/transform/95e37edc-d299-4d21-8e55-63fb699ee0da/Klaassen_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://intermilan.bynder.com/transform/54365dfd-a3cc-421e-a58d-b6db189bf506/Frattesi_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://intermilan.bynder.com/transform/8ca24fa0-2184-4b30-97f6-4131eaba15e2/Carlos_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="https://intermilan.bynder.com/transform/2e52e61b-9b97-45e8-8a73-62716beed387/Agoume_2x?quality=100&io=transform:fill,width:1152,height:1383&format=webp"
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