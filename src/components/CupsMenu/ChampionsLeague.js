import React from 'react'
import {useEffect,useState} from 'react'
import{ makeStyles,Container,Typography,TableContainer,Table,TableHead,TableRow,TableCell,TableBody} from '@material-ui/core';
import { ClipLoader } from 'react-spinners';

const useStyles = makeStyles((theme)=>({
    outerContainer:{
        marginTop:'100px',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        [theme.breakpoints.down('sm')]:{
            marginTop:'90px',
        },
    },
    mainContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    mainTitle:{
        display:'flex',
        justifyContent:'center',
        marginBottom:'30px'
    },
    loader: {
        display:'flex',
        justifyContent:'center',
    },
     matchContainer:{
         display:'grid',
         gridTemplateColumns:'3fr 3fr 2fr 3fr',
         height:'60px',
         minWidth:'800px',
         fontWeight:'bold',
         borderBottom:'solid grey 1px',
         [theme.breakpoints.down('sm')]:{
            minWidth:'100%'
          }
         
     },
     round:{
        boxShadow:'5px 5px 15px 0px #000000',
         backgroundColor:'#001ea0',
         minWidth:'800px',
         color:'white',
         display:'flex',
         marginTop:'1px',
         padding:'5px',
         fontWeight:'bold',
         fontSize:'20px',
         [theme.breakpoints.down('sm')]:{
             minWidth: '100%',
             maxWidth: '100%',
         }
     },
     result:{
         display:'flex',
         alignItems:'center',
         justifyContent:'center',
         margin:'0 5px'
     },
     tableTitle:{
         display:'flex',
         justifyContent:'center',
     },
     tableHead:{
        color:'white',
        fontSize:'16px',
        fontWeight:'bold'
    },
    tablecontainer:{
        maxWidth:'800px',
        marginBottom:'50px'
    },
    tableCellbody:{
        fontSize:'16px',
        fontWeight:'bold'
    },
    dateContainer:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    homeContainer:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    awayContainer:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center'
    }
     })
)

function ChampionsLeague() {

    const classes = useStyles()

    const[footballData,setFootballData] = useState([])
    const[loading,setLoading]= useState(false);
    const[fixtures,setFixtures] = useState([])

    useEffect(() => {
        const fetchFixtures = async() =>{
            const response = await fetch(
              "/api/fetchChampionsLeague");
            const responseData = await response.json()
 
            const matches = responseData.matches
            console.log(matches)

            const loadedData = [];

            for(const key in matches){
                loadedData.push({
                    id:key,
                    homeTeam:matches[key].homeTeam.name,
                    awayTeam:matches[key].awayTeam.name,
                    scoreHomeTeam:matches[key].score.fullTime.home,
                    scoreAwayTeam:matches[key].score.fullTime.away,
                    round:matches[key].matchday,
                    date:matches[key].utcDate
                })
            }
            setFixtures(loadedData)
        }
        const fetchTable = async () =>{
            setLoading(true);
            const responses = await fetch("/api/fetchClStandings");   
              const responseDat = await responses.json()
              
              const standing = responseDat.standings[3];
              console.log(standing)
         
              const table = responseDat.standings[3].table;
              console.log(table)
             
              
             const  loadedDat = [];
         
                     for (const key in table){
                         loadedDat.push({
                             id:key,
                             name:table[key].team.name,
                             position:table[key].position,
                             logo:table[key].team.crestUrl,
                             games:table[key].playedGames,
                             won:table[key].won,
                             draw:table[key].draw,
                             lost:table[key].lost,
                             goalsFor:table[key].goalsFor,
                             goalsAgainst:table[key].goalsAgainst,
                             points:table[key].points,
                         })
                     }
                     console.log(loadedDat)
                     setFootballData(loadedDat)
                     setLoading(false)
                 }
        fetchTable()
        fetchFixtures()
    }, [])

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
              <div className={classes.tableTitle}>
                <Typography
                  variant="h5"
                  style={{ marginBottom: "15px", marginTop: "50px" }}
                >
                  TABLE
                </Typography>
              </div>
              <Container
                style={{
                  marginTop: "20px",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <TableContainer className={classes.tablecontainer}>
                  <Table size="medium" aria-label="a dense table">
                    <TableHead style={{ backgroundColor: "black" }}>
                      <TableRow>
                        <TableCell className={classes.tableHead}></TableCell>
                        <TableCell className={classes.tableHead}>
                          Team
                        </TableCell>
                        <TableCell className={classes.tableHead}>MP</TableCell>
                        <TableCell className={classes.tableHead}>W</TableCell>
                        <TableCell className={classes.tableHead}>D</TableCell>
                        <TableCell className={classes.tableHead}>L</TableCell>
                        <TableCell className={classes.tableHead}>GS</TableCell>
                        <TableCell className={classes.tableHead}>GC</TableCell>
                        <TableCell className={classes.tableHead}>Pts</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {footballData.map((table) => (
                        <TableRow key={table.key}>
                          <TableCell className={classes.tableCellbody}>
                            {table.position}
                          </TableCell>
                          <TableCell className={classes.tableCellbody}>
                            {table.name}
                          </TableCell>
                          <TableCell className={classes.tableCellbody}>
                            {table.games}
                          </TableCell>
                          <TableCell className={classes.tableCellbody}>
                            {table.won}
                          </TableCell>
                          <TableCell className={classes.tableCellbody}>
                            {table.draw}
                          </TableCell>
                          <TableCell className={classes.tableCellbody}>
                            {table.lost}
                          </TableCell>
                          <TableCell className={classes.tableCellbody}>
                            {table.goalsFor}
                          </TableCell>
                          <TableCell className={classes.tableCellbody}>
                            {table.goalsAgainst}
                          </TableCell>
                          <TableCell className={classes.tableCellbody}>
                            {table.points}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Container>
            </div>
          )}
        </Container>
      </div>
    );
}

export default ChampionsLeague

