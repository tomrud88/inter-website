import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import News from './News';
import TopContainer from './TopContainer';
import Trophies from './Trophies';

const useStyles = makeStyles((theme)=>({
   
}));

function MainContainer() {
    const classes = useStyles()
    return (
        <div>
        <TopContainer/>
        <News id='News'/>
        <Trophies/>
        </div>
    )
}

export default MainContainer
