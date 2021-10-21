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

function Midfielders() {
    const classes = useStyles()
    return (
         <Container className={classes.outerContainer}>
        <Container className={classes.titleContainer}>
        <Typography
        variant='h5'
        className={classes.title}>MIDFIELDERS</Typography>
        </Container>
        <Grid container className={classes.mainContainer}>
            <Grid item lg={2} md={2.5} sm={3} xs={5}>
                <Card className={classes.fCard} >
                    <CardActionArea>
                        <CardMedia
                        component='img'
                        className={classes.media}
                        image=
                        'https://www.inter.it/html/img/giocatori/testine/2021-22/G1100.jpg'
                        title='Dumfries'
                        />
                        <CardContent>
                            <Typography
                            className={classes.name} variant='h5'>
                            DENZEL DUMFRIES</Typography>
                            <Typography
                            className={classes.name} variant='h5'>2</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item  lg={2} md={2.5} sm={3} xs={5}>
                <Card className={classes.fCard}>
                    <CardActionArea>
                        <CardMedia
                        component='img'
                        className={classes.media}
                        image=
                        'https://www.inter.it/html/img/giocatori/testine/2021-22/G0989.jpg'
                        title='Gagliardini'
                        />
                        <CardContent>
                            <Typography 
                            className={classes.name}variant='h5'>
                            ROBERTO GAGLIARDINI</Typography>
                            <Typography 
                            className={classes.name}
                            variant='h5'>5</Typography>
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
                        'https://www.inter.it/html/img/giocatori/testine/2021-22/G0998.jpg'
                        title='Vecino'
                        />
                        <CardContent>
                            <Typography variant='h5'
                            className={classes.name}>
                            MATIAS VECINO</Typography>
                            <Typography variant='h5'
                            className={classes.name}>8</Typography>
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
                        'https://www.inter.it/html/img/giocatori/testine/2021-22/G1030.jpg'
                        title='Sensi'
                        />
                        <CardContent>
                            <Typography variant='h5'
                            className={classes.name}>
                            STEFANO SENSI</Typography>
                            <Typography variant='h5'
                            className={classes.name}>12</Typography>
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
                        'https://www.inter.it/html/img/giocatori/testine/2021-22/G0968.jpg'
                        title="Perisic"
                        />
                        <CardContent>
                            <Typography variant='h5'
                            className={classes.name}>
                            IVAN PERISIC</Typography>
                            <Typography variant='h5'
                            className={classes.name}>14</Typography>
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
                        'https://www.inter.it/html/img/giocatori/testine/2021-22/G1095.jpg'
                        title='Calhanoglu'
                        />
                        <CardContent>
                            <Typography variant='h5'
                            className={classes.name}>
                            HAKAN CALHANOGLU</Typography>
                            <Typography variant='h5'
                            className={classes.name}>20</Typography>
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
                        'https://www.inter.it/html/img/giocatori/testine/2021-22/G1045.jpg'
                        title='Vidal'
                        />
                        <CardContent>
                            <Typography variant='h5'
                            className={classes.name}>
                            ARTURO VIDAL</Typography>
                            <Typography variant='h5'
                            className={classes.name}>22</Typography>
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
                        'https://www.inter.it/html/img/giocatori/testine/2021-22/G1031.jpg'
                        title='Barela'
                        />
                        <CardContent>
                            <Typography variant='h5'
                            className={classes.name}>
                            NIKOLO BARELA</Typography>
                            <Typography variant='h5'
                            className={classes.name}>95</Typography>
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
                        'https://www.inter.it/html/img/giocatori/testine/2021-22/G1041.jpg'
                        title='Eriksen'
                        />
                        <CardContent>
                            <Typography variant='h5'
                            className={classes.name}>
                            CHRISTIAN ERIKSEN</Typography>
                            <Typography variant='h5'
                            className={classes.name}>24</Typography>
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
                        'https://www.inter.it/html/img/giocatori/testine/2021-22/G0959.jpg'
                        title='Brozovic'
                        />
                        <CardContent>
                            <Typography variant='h5'
                            className={classes.name}>
                            MARCELO BROZOVIC</Typography>
                            <Typography variant='h5'
                            className={classes.name}>77</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>  
        </Grid>
        </Container>
    )
}
export default Midfielders