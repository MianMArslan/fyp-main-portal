import React, {useState} from 'react';
import validate from './validateInfo';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import useForm from './useform';
import './login.css';
import img1 from '../../images/off the beaten track.png'
import {POST} from '../../../services/httpClient.js'
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles"

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2)
      }
    }
  }))
  const classes = useStyles()

  const [isloading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState("info")
  const [message, setMessage] = useState("")

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
  
    setOpen(false)
  }
  const login = async (values) =>{
    setLoading(true)
  let res=await POST('http://localhost:4001/auth/login',values)
    console.log(login);
      if (res == 200) {
        setMessage("Loged in Successfully")
        setOpen(true)
        setSeverity("success")
      }
      else{
      setMessage("Loged in Failed")
      setOpen(true)
      setSeverity("error")
      }
      setLoading(false)
} 
  const [state, setState] = useState(false);
    const toggleBtn = () => {
      setState(prevState => !prevState);
    }
    return (
    <div className= {classes.root}>
    <div className='login-container'>
    <div className='login-content-left'>
    <img className='login-img' src = {img1} alt = "logo of the website"/>
    <div className='login-content-right'>
      <form onSubmit={handleSubmit} className='login' noValidate>
        <h1>
          Log in
        </h1>
        <div className='login-inputs'>
          <label className='login-label'>Email</label>
          <input
            className='login-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='login-inputs'>
          <label className='login-label'>Password</label>
          <input
            className='login-input'
            type= {state ? "text" : "password"}
            name='password'
            placeholder='Enter your password'
            value = {values.password}
            onChange={handleChange}
          />
           <button className='login-btn' onClick={toggleBtn}>
            {
              state ? <AiOutlineEyeInvisible/>:<AiOutlineEye/>
            }
            </button>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
        <span className='login-input-forgetpassword'><a href= '/forgetpassword'>Forget password?</a></span><br></br>
        <span className='login-input-forgetpassword'><a href= '/resetpassword'>Reset password?</a>
        </span></div>
        <button className='login-input-btn' type='submit'
        onClick= {()=>
        // {submitForm}
        {login(values)}}>
         {isloading && (
            <CircularProgress />
      )}
          {!isloading && <span>Login</span>}
        </button>
        <Snackbar
         open={open}
        autoHideDuration={4000} 
        anchorOrigin = {{vertical : 'top', horizontal: 'center'}}
        onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
      }

export default LoginForm;