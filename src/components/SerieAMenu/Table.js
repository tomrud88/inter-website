import { PostAddSharp } from '@material-ui/icons';
import React from 'react';
import {useState,useEffect} from 'react';
import { Container, Grid, Table, TableContainer, TableHead, TableRow,TableCell, TableBody, Typography, makeStyles } from '@material-ui/core';
import { ClipLoader } from 'react-spinners';

const useStyles = makeStyles((theme)=>({
    mainContainer:{
        marginTop:'100px',
        marginBottom:'50px',
        [theme.breakpoints.down('sm')]:{
            marginTop:'90px'
        }
    },
    tableHead:{
        color:'white'
    }
}))


 function Tables() {
    const[footballData,setFootballData] = useState([]);
    const[loading,setLoading] = useState(false)
    const classes = useStyles()


   useEffect(()=>{
       setLoading(true)
       const fetchTable = async () =>{
   const response = await fetch("https://api.football-data.org/v2/competitions/SA/standings", {
	"method": "GET",
	"headers": {
		"X-Auth-Token": "3cb5b9dd8f50443e97d7c53804bd5634"
	}
})   
     const responseData = await response.json()
     
     const standings = responseData.standings;
             console.log(standings)
         
             const table = responseData.standings[0].table;
             console.log(table)
     
    const  loadedData = [];

            for (const key in table){
                loadedData.push({
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
            console.log(loadedData)
            setFootballData(loadedData)
            setLoading(false)
        }
       fetchTable() 
       
   },[])
   console.log(footballData)

   return (
    <Container className={classes.mainContainer}>
        {loading ?
        (<ClipLoader
        size={350}
        color={'#001ea0'}
        loading={loading}
        />):(
            <div>
        <Typography variant='h5' style={{marginBottom:'15px'}}>
            SERIE A TABLE
        </Typography>
        <TableContainer className={classes.tablecontainer}>
           <Table style={{minWidth:550}}size='medium' aria-label='a dense table'>
        <TableHead style={{backgroundColor:'black'}}
        >
            <TableRow >
                <TableCell className={classes.tableHead}></TableCell>
                <TableCell className={classes.tableHead}>Team</TableCell>
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
              {footballData.map((table)=>(
                  <TableRow
                  key={table.key}
                  >
                      <TableCell>
                          {table.position}
                      </TableCell>
                      <TableCell>
                          {table.name}
                      </TableCell>
                      <TableCell>
                          {table.games}
                      </TableCell>
                      <TableCell>
                          {table.won}
                      </TableCell>
                      <TableCell>
                          {table.draw}
                      </TableCell>
                      <TableCell>
                          {table.lost}
                      </TableCell>
                      <TableCell>
                          {table.goalsFor}
                      </TableCell>
                      <TableCell>
                          {table.goalsAgainst}
                      </TableCell>
                      <TableCell>
                          {table.points}
                      </TableCell>
                  </TableRow>
              ))}
          </TableBody>
        </Table>
        </TableContainer>
        </div>)
        }
    </Container>
    
) 
}
export default Tables
