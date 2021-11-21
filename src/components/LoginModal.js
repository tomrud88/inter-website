import { ClassNames } from '@emotion/react'
import React from 'react'
import {makeStyles} from '@material-ui/core'
import ReactDom from 'react-dom'

const useStyles = makeStyles((theme => ({
    backdrop:{
      position:'fixed',
      top:0,
      left:0,
      width:'100%',
      height:'100vh',
      zIndex:'2',
      background:'rgba(0,0,0,0.75)',
      justifyContent:'center',
      display:'flex',
      alignItems:'center'
    },
      loginContainer:{
          height:'500px',
          width:'500px',
          background:'orange',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column'  
      },
      inputSection:{
          width:'80%',
          height:'50px',
          padding:'5px'
      },
      inputEl:{
          width:'100%',
          height:'20px',
      },
      login:{
          padding:'10px 30px',
          borderRadius:'20px',
          width:'150px',
          height:'40px',
          textSize:'20px',
          margin:'10px'
      },
})))

function LoginModal({open,onClose}) {
    const classes = useStyles()
    if(!open) return null
    return ReactDom.createPortal (
        <div className={classes.backdrop}>
        <div className={classes.loginContainer}>
            <img src='https://fcinter.pl/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2d3IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce6018a9cc74938350147bc60dd018680e15b5f1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lLTnpWNE56VUdPZ1pGVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--94c6a9ec7dad8ed5d3d2adaecf783da9c3dc17fa/interr.png'/>
            <h3>LOGIN</h3>
            <div className={classes.inputSection}>
            <label style={{width:'100%'}}>email</label>
            <input className={classes.inputEl} type='text'></input>
            </div>
            <div className={classes.inputSection}>
            <label style={{width:'100%'}}>password</label>
            <input className={classes.inputEl} type='text'></input>
            </div>
            <button className={classes.login}>Login</button>
            <button onClick={onClose}>close</button>
            </div>
        </div>,
        document.getElementById('login-root')
    )
}

export default LoginModal
