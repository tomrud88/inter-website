import { Container,Box,makeStyles} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    container:{
        minWidth:'100%',
        height:'40vh',
    },
    stadium:{
        width:'100vw',
        height:'60vh',
        marginLeft:'-25px',
        backgroundPosition:'bottom right'
    }
}))


function Maincontainer() {
    const classes = useStyles()
    return (
        <div>
            <Container fixed className={classes.container}>
                <img className={classes.stadium}
                src='/san-siro.jpg'/>
      </Container>
        </div>
    )
}

export default Maincontainer
