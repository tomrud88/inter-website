import { PostAddSharp } from '@material-ui/icons';
import React from 'react';
import {useState,useEffect} from 'react';
import { Container, Grid,Table, TableContainer, TableHead, TableRow,TableCell, TableBody, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    tableHead:{
        color:'white'
    },
}))


 function TopScorers() {
    const[topScorers,setTopscorers] = useState([]);
    const classes = useStyles()


   useEffect(()=>{
       const fetchTable = async () =>{
   const response = await fetch("http://api.football-data.org/v2/competitions/SA/scorers", {
	"method": "GET",
	"headers": {
		"X-Auth-Token": "3cb5b9dd8f50443e97d7c53804bd5634"
	}
})   
     const responseData = await response.json()
     
     const scorers = responseData.scorers;
     console.log(scorers)

     
     
    const  loadedData = [];

            for (const key in scorers){
                loadedData.push({
                    id:key,
                    name:scorers[key].player.name,
                    team:scorers[key].team.name,
                    goals:scorers[key].numberOfGoals,
                })
            }
            console.log(loadedData)
            setTopscorers(loadedData)
         
        }
       fetchTable() 
       
   },[])
   console.log(topScorers)

   return (
    <Container style={{marginTop:'20px'}}>
        <Typography variant='h5' style={{marginBottom:'15px'}}>
            TOP SCORERS
        </Typography>
        <TableContainer className={classes.tablecontainer}>
           <Table style={{minWidth:550}} size='small' aria-label='a dense table'>
        <TableHead style={{backgroundColor:'black'}}
        >
            <TableRow >
                <TableCell className={classes.tableHead}>Player</TableCell>
                <TableCell className={classes.tableHead}>Team</TableCell>
                <TableCell className={classes.tableHead}>Goals</TableCell>
            </TableRow>
        </TableHead>
          <TableBody>
              {topScorers.map((topscorers)=>(
                  <TableRow
                  key={topscorers.key}
                  >
                      <TableCell>
                          {topscorers.name}
                      </TableCell>
                      <TableCell>
                          {topscorers.team}
                      </TableCell>
                      <TableCell>
                          {topscorers.goals}
                      </TableCell>
                   
                  </TableRow>
              ))}
          </TableBody>
        </Table>
        </TableContainer>
    </Container>
) 
}
export default TopScorers

