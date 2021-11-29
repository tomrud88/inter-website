import { ClassNames } from '@emotion/react'
import{useState} from 'react'
import React from 'react'
import {makeStyles} from '@material-ui/core'
import ReactDom from 'react-dom'
import reactDom from 'react-dom'

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
          background:'rgb(217, 217, 217)',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column'  
      },
      inputArea:{
        marginBottom:'30px',
        width:'80%',
      },
      inputSection:{
          height:'50px',
          padding:'5px',
      },
      inputEl:{
          width:'100%',
          height:'30px',
      },
      login:{
          padding:'10px 30px',
          borderRadius:'20px',
          width:'150px',
          height:'40px',
          textSize:'20px',
          margin:'10px',
          backgroundColor:'rgba(0,30,160,255)',
          color:'white',
          '&:disabled':{
              backgroundColor:'rgb(128, 128, 128)'
          }
      },
      label:{
          
          
      }
})))

function LoginModal({open,onClose}) {
    const classes = useStyles()
    const[enteredEmail,setEnteredEmail] = useState('');
    const[enteredName,setEnteredName] = useState('');
    const[enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const[enteredNameTouched, setEnteredNameTouched] = useState(false);


    const enteredNameIsValid = enteredName.trim() !== ''

    const enteredEmailIsValid = enteredEmail.includes('@')

    let formIsValid = false

    if(enteredEmailIsValid && enteredNameIsValid){
        formIsValid = true
    }

    const emailChangeHandler = (event)=>{
        setEnteredEmail(event.target.value)
    };
    
    const emailBlurHandler = event =>{
        setEnteredEmailTouched(true);
    }

    const nameChangeHandler = (event)=>{
        setEnteredName(event.target.value)
    };
    
    const nameBlurHandler = event =>{
        setEnteredNameTouched(true);
    }

    const formSubmissionHandler = event =>{
        event.preventDefault();

        setEnteredEmailTouched(true);
        setEnteredNameTouched(true);

        if(!enteredEmailIsValid){
            return 
        }

        setEnteredEmail('');
        setEnteredName('');
        setEnteredEmailTouched(false);
        setEnteredNameTouched(false);
    };

    if(!open) return null
    return ReactDom.createPortal (
        <div className={classes.backdrop}>
        <form onSubmit={formSubmissionHandler}>
        <div className={classes.loginContainer}>
            <img src='https://fcinter.pl/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2d3IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce6018a9cc74938350147bc60dd018680e15b5f1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lLTnpWNE56VUdPZ1pGVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--94c6a9ec7dad8ed5d3d2adaecf783da9c3dc17fa/interr.png'/>
            <h3>LOGIN</h3>
            <div className={classes.inputArea}>
            <div className={classes.inputSection}>
            <label style={{width:'100%',fontSize:'14px',textTransform:'uppercase',fontWeight:'bold'}}>email</label>
            <input className={classes.inputEl} 
            type='text' 
            id='email'
            onChange={emailChangeHandler} 
            onBlur={emailBlurHandler}
            value={enteredEmail}>
            </input>
            </div>
            <div className={classes.inputSection}>
            <label style={{width:'100%',fontSize:'14px',textTransform:'uppercase',fontWeight:'bold'}}>password</label>
            <input className={classes.inputEl} 
            type='text' 
            id='password'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}>
            </input>
            </div>
            </div>
            {!enteredEmailIsValid && enteredEmailTouched && <p style={{color:'red'}}>Enered email not valid</p>}
            {!enteredNameIsValid && enteredNameTouched && <p style={{color:'red'}}>Enered password is not valid</p>}
            <button disabled={!formIsValid} className={classes.login}>Login</button>
            <button  onClick={onClose}>close</button>
            <p>Not Register? Sign up</p>
            <p>Forgot your password?</p>
            </div>
            
            </form>
        </div>,
        document.getElementById('login-root')
    )
}

export default LoginModal
