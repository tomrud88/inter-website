import { makeStyles }from '@material-ui/core'
import React from 'react';
import { useContext,useRef } from 'react';
import AuthContext from '../store/auth-context';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
   outerContainer:{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'column',
       width:'100%',
       height:'100vh'
   },
   profile:{
    display:'flex',
    marginTop:'120px',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column',
    
    height:'100%',
    width:'80%'
   },
   title:{
       fontSize:'50px',
       fontWeight:'500'
   },
   form:{
       display:'flex',
       flexDirection:'column',
       alignItems:'center',
       width:'60%',
       padding:'20px'
   },
   control:{
       display:'flex',
       flexDirection:'column',
       justifyContent:'center',
       alignItems:'center',
       fontSize:'20px',
       fontWeight:'500',
       width:'100%'
   },
   action:{
       marginTop:'20px',
       padding:'1px'
   }
}))

const ProfileForm = () => {
    const classes = useStyles();

    const history = useNavigate()
    const newPasswordInputRef = useRef();

    const authCtx = useContext(AuthContext)

    const submitHandler = event => {
        event.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDNRUqCdkqKgI0RrD4Q4_fJQ-8Ey2z3g3M',
        {
            method:'POST',
            body:JSON.stringify({
              idToken:authCtx.token,
              password: enteredNewPassword,
              returnSecureToken: false
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res =>{
             history.replace('/')
        })
    }
    return (
        <div className={classes.outerContainer}>
        <div className={classes.profile}>
        <p className={classes.title}>Your User Profile</p>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='new-password'>New Password</label>
                        <input style={{ height: '25px', width: '250px', border: '1px solid #001ea0', borderRadius: '5px', marginTop: '5px',paddingLeft:'5px' }}  type='password' id='new-password' minLength='7' ref={newPasswordInputRef}/>
            </div>
            <div className={classes.action}>
                <button style={{padding:'10px 20px',borderRadius:'10px',background:'#001ea0',color:'white'}}>Change Password</button>
            </div>
        </form>
        </div>
        </div>
    )
}
export default ProfileForm
