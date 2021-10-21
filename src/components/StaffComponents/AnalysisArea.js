import React from 'react';
import {Card, CardActionArea, CardMedia, makeStyles,Grid, CardContent, Typography,Container} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    media:{
        width:'100%',
    },
    mainContainer:{
        minWidth:'100%',
        backgroundColor:'lightgrey',
        padding:'20px',
        maringBottom:'0'
    },
    name:{
        [theme.breakpoints.up('md')]:{
            fontSize:'14px',
            fontWeight:'bold'
         },
        [theme.breakpoints.down('sm')]:{
           fontSize:'12px',
           fontWeight:'bold'
        },
         [theme.breakpoints.down('xs')]:{
            fontSize:'12px',
            fontWeight:'bold'
         },
    },
    titleContainer:{
        display:'flex',
        justifyContent:'flex-start',
        width:'100%',
        backgroundColor:'lightgrey',
    },
    title:{
        fontWeight:'bold',
        padding:'20px 0px 5px 10px',
        margin:'0'
    },
    fCard:{
        marginRight:'15px',
        marginBottom:'15px'
    },
    outerContainer:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'lightgrey',
        borderBottom:'5px black solid',
    }
}))

function AnalysisArea() {
    const classes = useStyles()
    return (
         <Container className={classes.outerContainer}>
        <Container className={classes.titleContainer}>
        <Typography
        variant='h5'
        className={classes.title}>ANALYSIS AREA</Typography>
        </Container>
        <Grid container className={classes.mainContainer}>
            <Grid item lg={2} md={2.5} sm={3} xs={5}>
                <Card className={classes.fCard}>
                    <CardActionArea>
                        <CardMedia
                        component='img'
                        className={classes.media}
                        image=
                        'https://www.inter.it/img/435083-170.jpg'
                        title='Lorenzon'
                        />
                        <CardContent>
                            <Typography variant='h5'
                            className={classes.name}>
                            FILIPPO LORENZON</Typography>
                            <Typography variant='h5'
                            className={classes.name}>Head of match analysis</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid> 
            <Grid item lg={2} md={2.5} sm={3} xs={5}>
                <Card className={classes.fCard}>
                    <CardActionArea>
                        <CardMedia
                        component='img'
                        className={classes.media}
                        image=
                        'https://www.inter.it/img/435081-170.jpg'
                        title='Muratore'
                        />
                        <CardContent>
                            <Typography variant='h5'
                            className={classes.name}>
                            MARCELLO MURATORE</Typography>
                            <Typography variant='h5'
                            className={classes.name}>Match analyst</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid> 
            <Grid item lg={2} md={2.5} sm={3} xs={5}>
                <Card className={classes.fCard}>
                    <CardActionArea>
                        <CardMedia
                        component='img'
                        className={classes.media}
                        image=
                        'https://www.inter.it/img/435107-170.jpg'
                        title='Toninato'
                        />
                        <CardContent>
                            <Typography variant='h5'
                            className={classes.name}>
                            GIACOMO TONINATO</Typography>
                            <Typography variant='h5'
                            className={classes.name}>Match analyst</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>  
            <Grid item lg={2} md={2.5} sm={3} xs={5}>
                <Card className={classes.fCard}>
                    <CardActionArea>
                        <CardMedia
                        component='img'
                        className={classes.media}
                        image=
                        'https://i1.rgstatic.net/ii/profile.image/997920413335552-1614934175484_Q512/Andrea-Belli-2.jpg'
                        title='Belli'
                        />
                        <CardContent>
                            <Typography variant='h5'
                            className={classes.name}>
                            ANDREA BELLI</Typography>
                            <Typography variant='h5'
                            className={classes.name}>Functional rehab</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>  
        </Grid>
        </Container>
    )
}
export default AnalysisArea