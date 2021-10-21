import React from 'react'
import {Container,makeStyles} from '@material-ui/core';
import GoalKeepers from '../FirstTeamComponents/GoalKeepers'
import Defenders from '../FirstTeamComponents/Defenders';
import Midfielders from '../FirstTeamComponents/Midfielders';
import Strikers from '../FirstTeamComponents/Strikers';

const useStyles = makeStyles((theme)=>({
     mainContainer:{
         display:'flex',
         justifyItems:'center',
         alignItems:'center',
         flexDirection:'column',
         backgroundColor:'darkblue'
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
