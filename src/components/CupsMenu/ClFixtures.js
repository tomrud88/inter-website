import React from 'react'
import {useEffect,useState} from 'react'
import{ makeStyles,Container} from '@material-ui/core';
import { ClipLoader } from 'react-spinners';

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginTop: "90px",
    },
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  loader: {
    display: "flex",
    justifyContent: "center",
  },
  matchContainer: {
    display: "grid",
    gridTemplateColumns: "3fr 3fr 2fr 3fr",
    height: "60px",
    minWidth: "800px",
    fontWeight: "bold",
    borderBottom: "solid grey 1px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
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
  dateContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
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

function ClFixtures() {

    const classes = useStyles()
    const[loading,setLoading]= useState(false);
    const[fixtures,setFixtures] = useState([])

    useEffect(() => {
        const fetchFixtures = async () => {
            const response = await fetch(
                "/api/fetchChampionsLeague");
            const responseData = await response.json()
 
            const matches = responseData.matches
            console.log(matches)

            const loadedData = [];

            for (const key in matches) {
                loadedData.push({
                    id: key,
                    homeTeam: matches[key].homeTeam.name,
                    awayTeam: matches[key].awayTeam.name,
                    scoreHomeTeam: matches[key].score.fullTime.home,
                    scoreAwayTeam: matches[key].score.fullTime.away,
                    round: matches[key].matchday,
                    date: matches[key].utcDate
                })
            }
            setFixtures(loadedData)
        }
        fetchFixtures();
        },[])

        return (
      <div>
        <Container className={classes.outerContainer}>
          <div className={classes.mainTitle}>
            <h1>Champions League</h1>
          </div>
          {loading ? (
            <div className={classes.loader}>
              <ClipLoader size={350} color={"#001ea0"} loading={loading} />
            </div>
          ) : (
            <div>
              {fixtures.map((fixture) => (
                <div className={classes.mainContainer} id={fixture.id}>
                  {fixture.id % 2 === 0 && (
                    <div className={classes.round}>
                      <p style={{ margin: "5px 13px" }}>
                        Round {fixture.round}
                      </p>
                    </div>
                  )}
                  <div className={classes.matchContainer}>
                    <div className={classes.dateContainer}>
                      <p>{new Date(fixture.date).toLocaleString()}</p>
                    </div>
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
      </div>
    );
}

export default ClFixtures