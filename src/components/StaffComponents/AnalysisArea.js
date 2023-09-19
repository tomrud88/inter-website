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

function AnalysisArea() {
    const classes = useStyles()
    return (
      <Container className={classes.outerContainer}>
        <Container className={classes.titleContainer}>
          <Typography variant="h5" className={classes.title}>
            ANALYSIS AREA
          </Typography>
        </Container>
        <Grid container className={classes.mainContainer}>
          <Grid item lg={2} md={2.5} sm={3} xs={5}>
            <Card className={classes.fCard}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300px"
                  className={classes.media}
                  image="https://media.licdn.com/dms/image/C4D03AQHEkfRtquOBBQ/profile-displayphoto-shrink_800_800/0/1635352270248?e=2147483647&v=beta&t=PZdY_iCIP7iSX-CbD7aJv31XtNGq0JcwJjTieC2fnOA
"
                  loading="lazy"
                  title="Lorenzon"
                  alt="Lorenzon"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    FILIPPO LORENZON
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    Head of match analysis
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
                  height="300px"
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMyqnvUNXtaOPpgVTPNLScv5S_LyzygyU5OqNGcXmuB8p18xXXrXWGrvBzCEYYFx5oYI&usqp=CAU"
                  loading="lazy"
                  title="Muratore"
                  alt="Muratore"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    MARCELLO MURATORE
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    Match analyst
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
                  height="300px"
                  className={classes.media}
                  image="https://media.licdn.com/dms/image/C4D03AQGlMWmBxxIGOg/profile-displayphoto-shrink_800_800/0/1601635949794?e=2147483647&v=beta&t=d2LJf42-HmMbWLO9NP8fZmbIqs_yaIJuNvaZYIUnd9k
"
                  loading="lazy"
                  title="Toninato"
                  alt="Toninato"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.name}>
                    GIACOMO TONINATO
                  </Typography>
                  <Typography variant="h5" className={classes.name}>
                    Match analyst
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
}
export default AnalysisArea