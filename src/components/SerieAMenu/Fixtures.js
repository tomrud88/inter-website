import React from "react";
import { useEffect, useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { ClipLoader } from "react-spinners";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    marginTop: "110px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "90px",
    },
  },
  mainTitle: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  matchContainer: {
    display: "grid",
    gridTemplateColumns: "5fr 2fr 5fr",
    minWidth: "800px",
    fontWeight: "bold",
    height: "50px",
    borderBottom: "solid grey 1px",
    [theme.breakpoints.down("sm")]: {
      minWidth:"100%",
      maxWidth: "100%",
      marginLeft:'20px'
    },
  },
  round: {
    boxShadow: "5px 5px 15px 0px #000000",
    backgroundColor: "#001ea0",
    minWidth: "800px",
    color: "white",
    display: "flex",
    marginTop: "1px",
    padding: "5px",
    fontWeight: "bold",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
      maxWidth: "100%",
    },
  },
  result: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 5px",
  },
  homeContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  awayContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

    function Fixtures() {
      const classes = useStyles();

      const [fixtures, setFixtures] = useState([]);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
        setLoading(true);
        const fetchFixtures = async () => {
          try {
            const response = await fetch(`/api/fetchFixtures`);
            const responseData = await response.json();
            console.log(responseData);
            console.log("test")

            const loadedData = [];

            for (const key in responseData) {
              loadedData.push({
                id: key,
                homeTeam: responseData[key].homeTeam.name,
                awayTeam: responseData[key].awayTeam.name,
                scoreHomeTeam: responseData[key].score.fullTime.home,
                scoreAwayTeam: responseData[key].score.fullTime.away,
                round: responseData[key].matchday,
              });
            }
            setFixtures(loadedData);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching fixtures:", error);
            setLoading(false);
          }
        };
        fetchFixtures();
      }, []);

      return (
        <Container className={classes.outerContainer}>
          {loading ? (
            <ClipLoader size={350} color={"#001ea0"} loading={loading} />
          ) : (
            <div>
              <div className={classes.mainTitle}>
                <h1>Fixtures</h1>
              </div>
              {fixtures.map((fixture) => (
                <div className={classes.mainContainer} id={fixture.id}>
                  {fixture.id % 10 === 0 && (
                    <div className={classes.round}>
                      <p style={{ margin: "5px 13px" }}>
                        Round {fixture.round}
                      </p>
                    </div>
                  )}
                  <div className={classes.matchContainer}>
                    <div className={classes.homeContainer}>
                      {fixture.homeTeam === "FC Internazionale Milano" ? (
                        <p style={{ color: "#0841ff" }}>{fixture.homeTeam}</p>
                      ) : (
                        <p>{fixture.homeTeam}</p>
                      )}
                    </div>
                    <div className={classes.result}>
                      <p>{fixture.scoreHomeTeam}</p>
                      <p>:</p>
                      <p>{fixture.scoreAwayTeam}</p>
                    </div>
                    <div className={classes.awayContainer}>
                      {fixture.awayTeam === "FC Internazionale Milano" ? (
                        <p style={{ color: "#0841ff" }}>{fixture.awayTeam}</p>
                      ) : (
                        <p>{fixture.awayTeam}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      );
    };

export default Fixtures;