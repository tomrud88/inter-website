import { Button, Container,makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) =>({
    mainContainer:{
        minWidth:'100vw',
        marginTop:'60px',
        display:'flex',
        justifyContent:'center',
        backgroundImage:'url(https://mocah.org/thumbs/546515-Emblem-Soccer.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        
    },
    topContainer:{
        display:'flex',
        width:'80%',
        height:'100vh',
        justifyContent:'center',
        [theme.breakpoints.down('xs')]:{
            flexDirection:'column',
            width:'100%',
            marginTop:'10px'
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
    }
    
}))

function FanToken() {
    const classes = useStyles()
    return (
        
            <Container className={classes.mainContainer} style={{}}>
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
                 <Button className={classes.learnMore} style={{}}variant='contained'>Learn more</Button>
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
    
    ) 
}

export default FanToken
