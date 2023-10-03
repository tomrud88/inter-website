import React from 'react';
import {useState,useEffect} from 'react';
import { Container,Table, TableContainer, TableHead, TableRow,TableCell, TableBody, Typography, makeStyles } from '@material-ui/core';
import { ClipLoader } from 'react-spinners';

const useStyles = makeStyles((theme)=>({
    mainContainer:{
        marginTop:'100px',
        [theme.breakpoints.down('sm')]:{
            marginTop:'90px'
        }
    },
    tableHead:{
        color:'white'
    },
}))


 function TopScorers() {
    const[topScorers,setTopscorers] = useState([]);
    const[loading,setLoading] = useState(false);
    const classes = useStyles()


   useEffect(()=>{
       setLoading(true)
       const fetchTable = async () =>{
       const response = await fetch("/api/fetchTopScorers")   
     const responseData = await response.json()
     
     const scorers = responseData.scorers;
     console.log(scorers)
 
    const  loadedData = [];

            for (const key in scorers){
                loadedData.push({
                    id:key,
                    name:scorers[key].player.name,
                    team:scorers[key].team.name,
                    goals:scorers[key].goals,
                })
            }
            console.log(loadedData)
            setTopscorers(loadedData)
            setLoading(false)
        }
       fetchTable()   
   },[])
   console.log(topScorers)

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
        </div>)}
    </Container>
) 
}
export default TopScorers

