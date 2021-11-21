import React from 'react'
import {Container,makeStyles} from '@material-ui/core';
import GoalKeepers from '../FirstTeamComponents/GoalKeepers'
import Defenders from '../FirstTeamComponents/Defenders';
import Midfielders from '../FirstTeamComponents/Midfielders';
import Strikers from '../FirstTeamComponents/Strikers';

const useStyles = makeStyles((theme)=>({
     mainContainer:{
         marginTop:'80px',
         display:'flex',
         justifyItems:'center',
         alignItems:'center',
         flexDirection:'column',
         backgroundColor:'rgba(20,46,107,255)',
         [theme.breakpoints.down('sm')]:{
            marginTop:'50px'
        }
     }
}))

function FirstTeam() {
    const classes = useStyles()
    return (
        <div> 
            <div style={{justifyContent:'center'}} className={classes.mainContainer}>
                <GoalKeepers/>
                <Defenders/>
                <Midfielders/>
                <Strikers/>
            </div>
           
        </div>
    )
}

export default FirstTeam
