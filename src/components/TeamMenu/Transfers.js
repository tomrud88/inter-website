import { ClassNames } from '@emotion/react'
import { Container, Grid,Table, TableContainer, TableHead, TableRow,TableCell, TableBody, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'

function createData(name,surname,club,value,transaction){
    return {name,surname,club,value,transaction}
}

const useStyles = makeStyles((theme)=>({
    tableHead:{
        color:'white'
    },
    tablecontainer:{
        margin:'40px 0px 80px'
    }
}))

const rows = [
    createData('Romelu','Lukaku','Chelsea FC','115 mln EURO','definitive'),
    createData('Achraf','Hakimi','Paris Saint-Germain','60 mln EURO','definitive'),
    createData('Mateo','Politano','SSC Napoli','19 mln EURO','definitive'),
    createData('Antonio','Candreva','Sampdoria','2.5 mln EURO','definitive'),
    createData('Rigoberto','Rivas','Reggina','0.55 mln EURO','definitive'),
    createData('Jao','Mario','Benfica','0','free Transfer'),
    createData('Radja','Nainggolan','Royal Antwerpia','0','free transfer'),
    createData('Ashley','Young','Aston Villa','0','free transfer'),
    createData('Sebastian','Esposito','FC Basel','0','loan transfer'),
    createData('Andrea','Pinamonti','FC Empoli','0','loan transfer'),
    createData('Zinho','Vanheusden','FC Genoa','0','loan transfer')

]

const rowsOut = [
    createData('Zinho','Vanheusden','Standard Liege','16 mln EURO','definitive'),
    createData('Denzel','Dumfries','PSV Eindhoven','12.5 mln EURO','definitive'),
    createData('Joaquin','Correa','Lazio Roma','5 mln EURO','loan'),
    createData('Matteo','Darmian','Parma','2.5 mln EURO','definitive'),
    createData('Hakan','Calhanoglu','AC Milan','0','free transfer'),
    createData('Edin','Dzeko','AS Roma','0','free transfer')
]

function Transfers() {
    const classes = useStyles()
    return (
        <Container style={{marginTop:'20px'}}>
            <Typography variant='h5' style={{marginBottom:'15px'}}>
                Transfers from the Club
            </Typography>
            <TableContainer className={classes.tablecontainer}>
               <Table style={{minWidth:550}} size='small' aria-label='a dense table'>
            <TableHead style={{backgroundColor:'black'}}
            >
                <TableRow >
                    <TableCell className={classes.tableHead}>Name</TableCell>
                    <TableCell className={classes.tableHead}>Surname</TableCell>
                    <TableCell className={classes.tableHead}>Club</TableCell>
                    <TableCell className={classes.tableHead}>Value</TableCell>
                    <TableCell className={classes.tableHead}>Transaction</TableCell>
                </TableRow>
            </TableHead>
              <TableBody>
                  {rows.map((row)=>(
                      <TableRow
                      key={row.name}
                      >
                          <TableCell>
                              {row.name}
                          </TableCell>
                          <TableCell>
                              {row.surname}
                          </TableCell>
                          <TableCell>
                              {row.club}
                          </TableCell>
                          <TableCell>
                              {row.value}
                          </TableCell>
                          <TableCell>
                              {row.transaction}
                          </TableCell>
                      </TableRow>
                  ))}
              </TableBody>
            </Table>
            </TableContainer>
            <Typography variant='h5' style={{marginBottom:'15px'}}>
                Transfers to the Club
            </Typography>
            <TableContainer className={classes.tablecontainer}>
               <Table style={{minWidth:550}} size='small' aria-label='a dense table'>
            <TableHead style={{backgroundColor:'black'}}
            >
                <TableRow >
                    <TableCell className={classes.tableHead}>Name</TableCell>
                    <TableCell className={classes.tableHead}>Surname</TableCell>
                    <TableCell className={classes.tableHead}>Club</TableCell>
                    <TableCell className={classes.tableHead}>Value</TableCell>
                    <TableCell className={classes.tableHead}>Transaction</TableCell>
                </TableRow>
            </TableHead>
              <TableBody>
                  {rowsOut.map((row)=>(
                      <TableRow
                      key={row.name}
                      >
                          <TableCell>
                              {row.name}
                          </TableCell>
                          <TableCell>
                              {row.surname}
                          </TableCell>
                          <TableCell>
                              {row.club}
                          </TableCell>
                          <TableCell>
                              {row.value}
                          </TableCell>
                          <TableCell>
                              {row.transaction}
                          </TableCell>
                      </TableRow>
                  ))}
              </TableBody>
            </Table>
            </TableContainer>
        </Container>
    )
}

export default Transfers