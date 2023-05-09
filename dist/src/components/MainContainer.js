import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import News from './News';
import TopContainer from './TopContainer';
import Trophies from './Trophies';

const useStyles = makeStyles((theme)=>({
    MainContainer:{
        width: '100%',
        height: '100%',
        margin: '0px',
        padding: '0px',
        [theme.breakpoints.down('xs')]:{
            overflow:'hidden'
           }
    }
}));

function MainContainer() {
    const classes = useStyles()
    return (
        <div className={classes.MainContainer}>
        <TopContainer/>
        <News id='News'/>
        <Trophies/>
        </div>
    )
}

export default MainContainer
