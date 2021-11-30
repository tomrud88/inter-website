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
      toggle:{
          padding:'30px 20px',
          borderRadius:'30px',
          width:'150px',
          height:'50px',
          fontSize:'18px',
          margin:'10px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'rgba(0,30,160,255)',
          color:'white',
          '&:disabled':{
              backgroundColor:'rgb(128, 128, 128)'
          }
      },
      toggleButton:{
          padding:'10px'
      },
      label:{
          
          
      }
})))

function LoginModal({open,onClose}) {
    const classes = useStyles()
    const[enteredEmail,setEnteredEmail] = useState('');
    const[enteredPassword,setEnteredPassword] = useState('');
    const[enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const[enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);
    const[isLogin,setIsLogin] = useState(false)
    const[isLoading,setIsLoading] = useState(false)
     
    const enteredPasswordIsValid = enteredPassword.trim() !== ''

    const enteredEmailIsValid = enteredEmail.includes('@')

    let formIsValid = false

    if(enteredEmailIsValid && enteredPasswordIsValid){
        formIsValid = true
    }

    const emailChangeHandler = (event)=>{
        setEnteredEmail(event.target.value)
    };
    
    const emailBlurHandler = event =>{
        setEnteredEmailTouched(true);
    }

    const passwordChangeHandler = (event)=>{
        setEnteredPassword(event.target.value)
    };
    
    const passwordBlurHandler = event =>{
        setEnteredPasswordTouched(true);
        
    }

    const switchAuthModeHandler = () =>{
        setEnteredEmailTouched(false);
        setEnteredPasswordTouched(false);
        setEnteredEmail('');
        setEnteredPassword('');
        setIsLogin((prevState) => !prevState);
       
    }

    const formSubmissionHandler = event =>{
        event.preventDefault();

        setIsLogin(true)
        let url;
       if(isLogin) {
           url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDNRUqCdkqKgI0RrD4Q4_fJQ-8Ey2z3g3M'
       } else {
           url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNRUqCdkqKgI0RrD4Q4_fJQ-8Ey2z3g3M'
        }
           fetch(url,
           {
              method:'POST',
              body: JSON.stringify({
                  email: enteredEmail,
                  password: enteredPassword,
                  returnSecureToken: true
              }),
              headers:{
                  'Content-Type':'application/json'
              }
           }).then(res =>{
               setIsLoading(false)
               if(res.ok) {
                  return res.json();
               }else{
                  return res.json().then((data) => {
                      const errorMessage = data.error.message;
                      alert(errorMessage)
                  }
                  );
               }
           }).then(data=>{
               console.log(data)
           }).catch(err =>{
            alert(err.message)
           })
       
    

        if(!enteredEmailIsValid){
            return 
        }

        setEnteredEmail('');
        setEnteredPassword('');
        setEnteredEmailTouched(false);
        setEnteredPasswordTouched(false);
    };

    if(!open) return null
    return ReactDom.createPortal (
        <div className={classes.backdrop}>
        <form onSubmit={formSubmissionHandler}>
        <div className={classes.loginContainer}>
            <img src='https://fcinter.pl/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2d3IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ce6018a9cc74938350147bc60dd018680e15b5f1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lLTnpWNE56VUdPZ1pGVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--94c6a9ec7dad8ed5d3d2adaecf783da9c3dc17fa/interr.png'/>
            <h3>{isLogin ? 'LOGIN' : 'SIGN UP'}</h3>
            <div className={classes.inputArea}>
            <div className={classes.inputSection}>
            <label htmlFor='email' style={{width:'100%',fontSize:'14px',textTransform:'uppercase',fontWeight:'bold'}}>email</label>
            <input className={classes.inputEl} 
            type='email' 
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
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}>
            </input>
            </div>
            </div>
            {!enteredEmailIsValid && enteredEmailTouched && <p style={{color:'red'}}>Enered email not valid</p>}
            {!enteredPasswordIsValid && enteredPasswordTouched && <p style={{color:'red'}}>Enered password is not valid</p>}
           {!isLoading && <button 
            type='submit'
            disabled={!formIsValid} 
            className={classes.toggle}>{isLogin? 'Login':'Create Account'}</button>}
           {isLoading && <p>Loading...</p>}
            <div className={classes.actions}>
            <button
            type='button'
            className={classes.toggleButton}
            onClick={switchAuthModeHandler}>{isLogin? 'Not Register? Sign up' : 'Login with existing account'}</button>
            <p>Forgot your password?</p>
            <button onClick={onClose} >close</button>
            </div>
            </div>
            
            </form>
        </div>,
        document.getElementById('login-root')
    )
}

export default LoginModal
