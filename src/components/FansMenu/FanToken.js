import { Button, Container,makeStyles, Typography,Box,Grid,Paper, List, ListItem, Link } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot,faGift } from '@fortawesome/free-solid-svg-icons';
import { Autorenew,RecordVoiceOver } from '@material-ui/icons';
import React from 'react'
import ReactDOM from 'react-dom'

const useStyles = makeStyles((theme) =>({
    gridContainer:{
        width:'80%',
        [theme.breakpoints.down('md')]:{
            width:'80%'
        }
    },
    outerContainer:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
        
    },
    mainContainer:{
        minWidth:'100%',
        margin:'50px 0 0 0',
        display:'flex',
        justifyContent:'center',
        backgroundImage:'url(https://mocah.org/thumbs/546515-Emblem-Soccer.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        [theme.breakpoints.down('xs')]:{
            height:'120vh'
        }
        
    },
    topContainer:{
        display:'flex',
        width:'80%',
        height:'100vh',
        justifyContent:'center',
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column',
            width:'100%',
            marginTop:'20px'
        }
    },
    leftSiteTop:{
        marginTop:'50px',
        display:'flex',
        flexDirection:'column',
        width:'35%',
        [theme.breakpoints.down('md')]:{
            width:'50%',
          },
        [theme.breakpoints.down('xs')]:{
          width:'100%',
        }
    },
    title:{
        display:'flex',
        flexDirection:'column',
        textAlign:'left',
        alignItems:'flex-start',
        color:'white',
        fontWeight:'500'
    },
    lsSectionTwo:{
        textAlign:'left',
        color:'white',
        fontWeight:'bold',
        marginTop:'40px',
        width:'80%',
        [theme.breakpoints.down('md')]:{
          width:'100%',
          marginTop:'20px'
        }   
    },
    buttonSection:{
        display:'flex',
        justifyContent:'flex-start',
        marginTop:'40px',
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            justifyContent:'center'
        },
        [theme.breakpoints.down('sm')]:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:'20px',
            marginBottom:'20px'
        }
    },
    rightSite:{
        marginTop:'50px',
        display:'grid',
        [theme.breakpoints.down('md')]:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:'0px'
        }
    },
    mainImg:{
        width:'800px',
        [theme.breakpoints.down('md')]:{
            maxWidth:'500px',
           
        },
        [theme.breakpoints.down('sm')]:{
            maxWidth:'350px',
           
        },
        [theme.breakpoints.down('xs')]:{
            maxWidth:'450px',
           
        },
    },
    downloadLinks:{
        display:'flex',
        marginTop:'40px',
        [theme.breakpoints.down('md')]:{
         display:'none'
        }
    },
    imglinks:{
        width:'120px',
        height:'40px',
        marginRight:'10px'
    },
    downloadButton:{
        margin:'10px', 
        borderRadius:'25px',
        border:'2px solid',
        color:'#8fc741',
        borderColor:'#8fc741',
        fontWeight:'800',
        minWidth:'180px',
        minHeight:'50px',
        [theme.breakpoints.down('md')]:{
            width:'130px'
            },
        [theme.breakpoints.down('xs')]:{
        width:'50%'
        }
    },
    learnMore:{
        margin:'10px',
        borderRadius:'25px',
        color:'white',
        fontWeight:'800',
        backgroundColor:'#8fc741',
        minWidth:'150px',
        minHeight:'50px',
        [theme.breakpoints.down('md')]:{
            width:'100px'
            },
        [theme.breakpoints.down('xs')]:{
            width:'50%'
        }
    },
    moreThatFanContainer:{
        paddingTop:'100px',
        marginBottom:'100px'
    },
    paper:{
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'top',
        height:'100%',
        width:'100%',
        borderRadius:'20px',
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        flexDirection:'column',
        color:'white',
        
    },
    cardContainer:{
        padding:theme.spacing(1),
        height:'250px',
        maxWidth:'450px',
        borderRadius:'20px',
        '&:hover':{
           '& $card':{ transform: 'rotateX(-180deg)'
         },
        } 
    },
    card:{
       height:'100%',
       width:'100%',
       transition:'transform 1.5s ease-in-out',
       transformStyle:'preserve-3d', 
    },
    ownInterContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'100px',
        paddingBottom:'50px',
        [theme.breakpoints.down('xs')]:{
           flexDirection:'column'
        }
    },
    logo:{
        width:'420px',
        height:'420px',
       marginRight:'70px',
       [theme.breakpoints.down('md')]:{
        width:'220px',
        height:'220px'
       },
       [theme.breakpoints.down('xs')]:{
        marginRight:'0',
        marginBottom:'50px',
        width:'320px',
        height:'320px',
        
    }},
    getStarted:{
        margin:'10px',
        borderRadius:'25px',
        color:'white',
        fontWeight:'800',
        backgroundColor:'#8fc741',
        width:'170px',
        minHeight:'50px',
        [theme.breakpoints.down('xs')]:{
            width:'100%'
            },
    }
    
    
}))

function FanToken() {
    const classes = useStyles()
    return (
             <div className={classes.outerContainer}>
            <Container className={classes.mainContainer}>
            <div className={classes.topContainer}>
                <div className={classes.leftSiteTop} >
                <div className={classes.title} >
                <Typography variant='h2'>$INTER</Typography>
                <Typography variant='h2'>Fan Tokens</Typography>
                <Typography variant='h2'>are here</Typography>
                </div>
                <div className={classes.lsSectionTwo}>
                <Typography variant=''>The $INTER Fan Token will give you the power to help the Nerazzurri make the right decisions, access VIP experiences, earn official products, and more.</Typography>
                </div>
                <div className={classes.buttonSection}>
                 <Button className={classes.learnMore} style={{}}variant='contained' href='#moreThatFan'>Learn more</Button>
                 <Button className={classes.downloadButton} variant='outlined'
                 >Download now</Button> 
                </div>
                <div className={classes.downloadLinks}>
                 <img className={classes.imglinks}src='https://inter.fantoken.com/wp-content/uploads/2021/08/App_Store_Button-1-2.png'></img>
                 <img className={classes.imglinks} src='https://inter.fantoken.com/wp-content/uploads/2021/08/Google_Play_Button-1-2.png'></img>
                </div>
                </div>
                <div className={classes.rightSite}>
            <img className={classes.mainImg} src='https://inter.fantoken.com/wp-content/uploads/2021/07/interfantoken.com879player-inter2.png'></img>
            </div>
            </div>
            </Container>
            <Container className={classes.moreThatFanContainer} id='moreThatFan'>
                <Typography variant='h3' style={{fontWeight:'bold'}}>
                    Be more than a fan
                </Typography>
                <Typography variant='subtitle1'>
                    Fan Tokens give you the power to influence decisions taken at Inter HQ in Milan.
                </Typography>
                <Typography variant='subtitle1' style={{fontWeight:'bold'}}>
                    See some of the decisions that fans from other teams influenced already on Socios.com
                </Typography>
            </Container>
            <div  className={classes.gridContainer} id='gridContainer'>
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={12} sm={6} lg={4}>
                    <div className={classes.cardContainer}>
                    <div className={classes.card}>
                        <Paper style={{backgroundImage:'url(https://inter.fantoken.com/wp-content/uploads/2021/07/interfantoken.com442GOAL20CELEB.jpg)',height:'100%'}} className={classes.paper}>
                            <Typography style={{fontWeight:'bold'}}variant='h4'>Goal Celebration Song</Typography></Paper>
                            <Paper style={{backgroundImage:'url(https://inter.fantoken.com/wp-content/uploads/2021/07/interfantoken.com442GOAL20CELEB.jpg)',transform:'rotateX(180deg)'}} className={classes.paper}>
                            <Typography variant='h5'>Goal Celebration Song</Typography>
                            <Typography style={{fontWeight:'bold'}}variant='body2'>Fans got opportunity to choose a new goal song at the stadium after 8 years</Typography></Paper>
                        </div>
                        </div>
                     </Grid>
                     
                     <Grid item xs={12} sm={6} lg={4}>
                     <div className={classes.cardContainer}>
                    <div className={classes.card}>
                        <Paper style={{backgroundImage:'url(https://inter.fantoken.com/wp-content/uploads/2021/07/Bus_Design.png)',height:'100%'}} className={classes.paper}>
                            <Typography style={{fontWeight:'bold'}}variant='h4'>Official Bus Design</Typography></Paper>
                            <Paper style={{backgroundImage:'url(https://inter.fantoken.com/wp-content/uploads/2021/07/Bus_Design.png)',transform:'rotateX(180deg)'}} className={classes.paper}>
                            <Typography variant='h5'>Official Bus Design</Typography>
                            <Typography style={{fontWeight:'bold'}}variant='body2'>Choosing how the official team bus looks is not for everyone. Just for fan token holders.</Typography></Paper>
                        </div>
                        </div>
                     </Grid>
                     <Grid item xs={12} sm={6} lg={4}>
                     <div className={classes.cardContainer}>
                    <div className={classes.card}>
                        <Paper style={{backgroundImage:'url(https://inter.fantoken.com/wp-content/uploads/2021/07/interfantoken.com332CAPTAIN20ARMBAND.jpg)',height:'100%'}} className={classes.paper}>
                            <Typography style={{fontWeight:'bold'}}variant='h4'>The Captain's Armband</Typography></Paper>
                            <Paper style={{backgroundImage:'url(https://inter.fantoken.com/wp-content/uploads/2021/07/interfantoken.com332CAPTAIN20ARMBAND.jpg)',transform:'rotateX(180deg)'}} className={classes.paper}>
                            <Typography variant='h5'>The Captain's Armband</Typography>
                            <Typography style={{fontWeight:'bold'}}variant='body2'>Fans were asked to pick a message they would want to be embroidered in the iconic captain's armband</Typography></Paper>
                        </div>
                        </div>
                     </Grid>
                     <Grid item xs={12} sm={6} lg={4}>
                     <div className={classes.cardContainer}>
                    <div className={classes.card}>
                        <Paper style={{backgroundImage:'url(https://inter.fantoken.com/wp-content/uploads/2021/07/interfantoken.com182KITDESIGN_ASSET.jpg)',height:'100%'}} className={classes.paper}>
                            <Typography style={{fontWeight:'bold'}}variant='h4'>Jersey Design</Typography></Paper>
                            <Paper style={{backgroundImage:'url(https://inter.fantoken.com/wp-content/uploads/2021/07/interfantoken.com182KITDESIGN_ASSET.jpg)',transform:'rotateX(180deg)'}} className={classes.paper}>
                            <Typography variant='h5'>Jersey Design</Typography>
                            <Typography style={{fontWeight:'bold'}}variant='body2'>The Club and their technical partner reached out to fans to choose the kit design for the upcoming season</Typography></Paper>
                        </div>
                        </div>
                     </Grid>
                     <Grid item xs={12} sm={6} lg={4}>
                     <div className={classes.cardContainer}>
                    <div className={classes.card}>
                        <Paper style={{backgroundImage:'url(https://inter.fantoken.com/wp-content/uploads/2021/07/interfantoken.com234FIRSTXI.jpg)',height:'100%'}} className={classes.paper}>
                            <Typography style={{fontWeight:'bold'}}variant='h4'>Starting line-up</Typography></Paper>
                            <Paper style={{backgroundImage:'url(https://inter.fantoken.com/wp-content/uploads/2021/07/interfantoken.com234FIRSTXI.jpg)',transform:'rotateX(180deg)'}} className={classes.paper}>
                            <Typography variant='h5'>Starting line-up</Typography>
                            <Typography style={{fontWeight:'bold'}}variant='body2'>Fans helped the team's manager to pick the first XI that would have made it to an official friendly match﻿</Typography></Paper>
                        </div>
                        </div>
                     </Grid>
                     <Grid item xs={12} sm={6} lg={4}>
                     <div className={classes.cardContainer}>
                    <div className={classes.card}>
                        <Paper style={{backgroundImage:'url(https://inter.fantoken.com/wp-content/uploads/2021/07/interfantoken.com401DRESSSING20ROOM.jpg)',height:'100%'}} className={classes.paper}>
                            <Typography style={{fontWeight:'bold'}}variant='h4'>Dressing room</Typography></Paper>
                            <Paper style={{backgroundImage:'url(https://inter.fantoken.com/wp-content/uploads/2021/07/interfantoken.com401DRESSSING20ROOM.jpg)',transform:'rotateX(180deg)'}} className={classes.paper}>
                            <Typography variant='h5'>Dressing room</Typography>
                            <Typography style={{fontWeight:'bold'}}variant='body2'>Clubs asked their fans to motivate the team by putting up an inspirational message of their choice in the most sacred of locations</Typography></Paper>
                        </div>
                        </div>
                     </Grid>
                </Grid>
            </div>
            <Container className={classes.ownInterContainer}>
                <div >
                    <img className={classes.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/2048px-FC_Internazionale_Milano_2021.svg.png'></img>
                </div>
                <div style={{justifyContent:'flex-start', display:'flex', flexDirection:'column'}}>
                    <Typography variant='h3'>
                        Why should I own $INTER?
                    </Typography>
                    <List>
                        <ListItem>
                        <img style={{width:'35px',height:'35px', marginRight:'30px'}} src='https://www.socios.com/wp-content/uploads/2019/11/Favicon-1-300x300.png'/>
                        <Typography variant='body1'>
                            Own a share of influence of your team
                        </Typography>
                        </ListItem>
                        <ListItem>
                        <RecordVoiceOver fontSize='large' style={{marginRight:'30px'}}/>
                        <Typography variant='body1'>
                        Get in the driving seat and make the right decisions
                        </Typography>
                        </ListItem>
                        <ListItem>
                        <FontAwesomeIcon
                           style={{fontSize:'35px',marginRight:'30px'}} icon={faGift}>
                        </FontAwesomeIcon >
                        <Typography variant='body1'>
                        Turn your dreams into reality with fantastic rewards
                        </Typography>
                        </ListItem>
                        <ListItem>
                        <Autorenew fontSize='large' style={{marginRight:'30px'}}/>
                        <Typography variant='body1'>
                        Join a new era of super fans
                        </Typography>
                        </ListItem>
                    </List>
                    <Button variant='contained' className={classes.getStarted}><Link href='https://www.socios.com/' underline='none' color='inherit'>Get Started</Link></Button>
                </div>
            </Container>
            </div>
    ) 
}

export default FanToken
