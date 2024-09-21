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
    }
     })
)

function ClTable() {

    const classes = useStyles()

    const[footballData,setFootballData] = useState([])
    const[loading,setLoading]= useState(false);

    useEffect(() => {
        const fetchTable = async () =>{
            setLoading(true);
            const responses = await fetch("/api/fetchClStandings");   
              const responseDat = await responses.json()
              
              const standing = responseDat.standings;
              console.log(standing)
         
              const table = responseDat.standings[0].table;
              console.log(table)
             
              
             const  loadedDat = [];
         
                     for (const key in table){
                         loadedDat.push({
                             id:key,
                             name:table[key].team.name,
                             position:table[key].position,
                             logo:table[key].team.crest,
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

export default ClTable

