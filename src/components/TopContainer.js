import { Container,makeStyles, Grid, ListItem,  Paper, Link} from '@material-ui/core'



import React from 'react'

const useStyles = makeStyles((theme) => ({
  con: {
    maxWidth: "100%",
    margin: "0px",
    padding: "0px",
  },
  containerone: {
    maxWidth: "100%",
    height: "850px",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "750px",
      marginTop: "55px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "500px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "500px",
    },
    marginTop: "30px",
  },
  back: {
    backgroundImage: `url(/san-siro-compressed.webp)`,
    opacity: 1,
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "505px",
      backgroundImage: "none",
    },
    [theme.breakpoints.down("xs")]: {
      height: "525px",
      backgroundImage: "none",
    },
  },
  stadium: {
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(20,46,107,0.9)",
    zIndex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    zIndex: 2,
    fontSize: "34px",
  },
  typo: {
    zIndex: 1,
  },
  resultsContainer: {
    maxWidth: "100vw",
    backgroundColor: "rgba(20,46,107,255)",
    [theme.breakpoints.down("xs")]: {
      marginTop: "5px",
    },
  },
  results: {
    zIndex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(20,46,107,255)",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      marginTop: "25px",
    },
  },
  bottomcontainer: {
    display: "flex",
    flexDirection: "column",
  },
  leftsite: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(35, 61, 101, 0.54)",
    fontWeight: "700",
    color: "white",
  },
  rightsite: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,255)",
    color: "white",
    fontWeight: "700",
  },

  timeofplay: {
    fontWeight: "700",
  },
  gridContainer: {
    marginRight: "0px",
    boxSizing: "border-box",
    width: "60%",
    zIndex: 1,

    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      marginTop: "20px",
      marginRight: "0px",
      overflow: "hidden",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      marginBottom: "25px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0px",
      padding: "0px",
      marginTop: "0px",
    },
  },
  mainCardContainer: {
    "&:hover": {
      transform: "scale(1.02)",
    },
    marginTop: "25px",
    marginBottom: "10px",
    height: "550px",
    padding: theme.spacing(0),
    [theme.breakpoints.down("md")]: {
      marginTop: "5px",
      height: "420px",
      padding: theme.spacing(0),
      overflow: "hidden",
    },
    [theme.breakpoints.down("sm")]: {
      height: "500px",
      marginTop: "5px",
      marginBottom: "5px",
      padding: theme.spacing(0),
      overflow: "hidden",
    },
    [theme.breakpoints.down("xs")]: {
      height: "500px",
      margin: "0px",
      padding: theme.spacing(0),
      overflow: "hidden",
    },
  },
  cardContainer: {
    "&:hover": {
      transform: "scale(1.02)",
    },
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    maxWidth: "380px",
    height: "190px",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mainPaper: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top-left",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundImage: `url(/inter-derby-win-large-compressed.webp)`,
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(/inter-derby-win-small.webp)`,
      backgroundPosition: "center",
    },
  },
  paper: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top-left",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  mainTitle: {
    fontSize: "1.5em",
    fontWeight: "bold",
    marginBottom: "5%",
    color: "white",
    marginLeft: "3%",
    marginRight: "3%",
  },
}));


function TopContainer() {
    const classes = useStyles()
    return (
      <div className={classes.con}>
        <Container className={classes.containerone}>
          <div className={classes.back}>
            <div className={classes.stadium}></div>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className={classes.mainCardContainer}>
                  <Link href="mainNews" underline="none">
                    <Paper
                      className={classes.mainPaper}
                    >
                      <p className={classes.mainTitle}>A THUMPING DERBY WIN!</p>
                    </Paper>
                  </Link>
                </div>
              </Grid>
              <Grid
                item
                md={4}
                lg={4}
                className={classes.imagelistItemSmall}
                // cols={2}
                // rows={1}
              >
                <Link
                  href="https://www.facebook.com/Inter"
                  aria-label="Go to inter facebook page"
                >
                  <div className={classes.cardContainer}>
                    <Paper
                      style={{
                        backgroundImage: "url(/fb-inter.webp)",
                      }}
                      className={classes.paper}
                    ></Paper>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                md={4}
                lg={4}
                className={classes.imagelistItemSmall}
              >
                <Link
                  href="https://twitter.com/Inter"
                  underline="none"
                  aria-label="Go to inter twitter profile"
                >
                  <div className={classes.cardContainer}>
                    <Paper
                      style={{
                        backgroundImage: "url(/twitter-inter.webp)",
                      }}
                      className={classes.paper}
                    ></Paper>
                  </div>
                </Link>
              </Grid>
              <Grid
                item
                md={4}
                lg={4}
                className={classes.imagelistItemSmall}
              >
                <Link
                  href="https://www.instagram.com/inter/?hl=en"
                  underline="none"
                  aria-label="Go to inter instagram profile"
                >
                  <div className={classes.cardContainer}>
                    <Paper
                      style={{
                        backgroundImage:
                          "url(https://fcinter.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbkF5IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--73bd9332e1ccf249d70cf9851eb682c0a0fce317/rgol-malyxq.gif)",
                      }}
                      className={classes.paper}
                    ></Paper>
                  </div>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Container>
        <div className={classes.resultsContainer}>
          <Grid
            className={classes.results}
            container
            direction="row"
            spacing={2}
          >
            <Grid className={classes.leftsite} item lg={4} sm={6} xs={12}>
              <Grid item container direction="column" alignItems="center">
                <ListItem style={{ justifyContent: "center" }}>
                  <img
                    src="/emblem-inter.webp"
                    loading="lazy"
                    alt="Inter emblem"
                    height="70px"
                    width="70px"
                  ></img>
                </ListItem>
                <ListItem style={{ justifyContent: "center" }}>INTER</ListItem>
              </Grid>
              <Grid item className={classes.timeofplay}>
                <ListItem style={{ justifyContent: "center" }}>
                  Round 4
                </ListItem>
                <ListItem
                  style={{ justifyContent: "center", fontSize: "40px" }}
                >
                  5:1
                </ListItem>
                <ListItem
                  style={{ justifyContent: "center", color: "#bea900" }}
                >
                  16.09.2023
                </ListItem>
                <ListItem
                  style={{ justifyContent: "center", color: "#bea900" }}
                >
                  17:00
                </ListItem>
              </Grid>
              <Grid
                item
                container
                direction="column"
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <ListItem style={{ justifyContent: "center" }}>
                  <img
                    src="/milan-emblem.webp"
                    loading="lazy"
                    alt="AC Milan emblem"
                    height="70px"
                    width="70px"
                  ></img>
                </ListItem>
                <ListItem style={{ justifyContent: "center" }}>
                  AC MILAN
                </ListItem>
              </Grid>
            </Grid>
            <Grid className={classes.rightsite} item lg={4} sm={6} xs={12}>
              <Grid
                item
                container
                direction="column"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <ListItem style={{ justifyContent: "center" }}>
                  <img
                    src="sociedad-emblem.webp"
                    loading="lazy"
                    alt="Real Sociedad emblem"
                    height="70px"
                    width="70px"
                  ></img>
                </ListItem>
                <ListItem style={{ justifyContent: "center" }}>
                  REAL SOCIEDAD
                </ListItem>
              </Grid>
              <Grid item className={classes.timeofplay}>
                <ListItem style={{ justifyContent: "center" }}>
                  Round 5
                </ListItem>
                <ListItem
                  style={{ justifyContent: "center", fontSize: "40px" }}
                >
                  -:-
                </ListItem>
                <ListItem
                  style={{ justifyContent: "center", color: "#bea625" }}
                >
                  20.09.2023
                </ListItem>
                <ListItem
                  style={{ justifyContent: "center", color: "#bea625" }}
                >
                  21:00
                </ListItem>
              </Grid>
              <Grid item container direction="column">
                <ListItem style={{ justifyContent: "center" }}>
                  <img
                    src="/emblem-inter.webp"
                    loading="lazy"
                    alt="Inter emblem"
                    height="70px"
                    width="70px"
                  ></img>
                </ListItem>
                <ListItem style={{ justifyContent: "center" }}>INTER</ListItem>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
}

export default TopContainer
