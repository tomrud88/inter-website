import { ClassNames } from '@emotion/react'
import { Container, Grid,Table, TableContainer, TableHead, TableRow,TableCell, TableBody, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'

function createData(name,surname,club,value,transaction){
    return {name,surname,club,value,transaction}
}

const useStyles = makeStyles((theme)=>({
    mainContainer:{
      marginTop:'110px',
      [theme.breakpoints.down('sm')]:{
          marginTop:'90px'
      }

    },
    tableHead:{
        color:'white'
    },
    tablecontainer:{
        margin:'40px 0px 80px'
    }
}))

const rows = [
    createData('Andre','Onana','Manchester United','52.5 mln EURO','definitive'),
    createData('Marcelo','Brozovic','Al-Nassr','18 mln EURO','definitive'),
    createData('Robin','Gosens','Union Berlin','13 mln EURO','definitive'),
    createData('Valentino','Lazaro','Torino','4 mln EURO','definitive'),
    createData('Giovanni','Fabbian','Bologna','5 mln EURO','definitive'),
    createData('Milan','Skriniar','PSG','0','free Transfer'),
    createData('Edin','Dzeko','Fenerbahce','0','free transfer'),
    createData('Danilo','Dambrosio','AC Monza','0','free transfer'),
    createData('Sebastian','Esposito','Sampdoria','0','loan transfer'),
    createData('Valentin','Carboni','AC Monza','0','loan transfer'),
    createData('Zinho','Vanheusden','Standard Liege','0','loan transfer')

]

const rowsOut = [
  createData("Yann", "Sommer", "Bayern", "6.75 mln EURO", "definitive"),
  createData("Davide", "Frattesi", "Sassuolo", "27 mln EURO", "definitive"),
  createData("Carlos", "Augusto", "AC Monza", "4.5 mln EURO", "loan"),
  createData("Marko", "Arnautovic", "Bologna", "8.0 mln EURO", "definitive"),
  createData(
    "Marcus",
    "Thuram",
    "Borussia Moenchengladbach",
    "0",
    "free transfer"
  ),
  createData("Alexis", "Sanchez", "Olimpique Marsyllia", "0", "free transfer"),
  createData("Davy", "Klassen", "Ajax Amsterdam", "0", "free transfer"),
];

function Transfers() {
    const classes = useStyles()
    return (
        <Container className={classes.mainContainer}>
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