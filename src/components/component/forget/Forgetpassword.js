import React ,{useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import '../loginform/login.css';
import img1 from "../../images/off the beaten track.png"
import {POST} from '../../../services/httpClient.js'
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles"
const ForgetPassword = ({ submitForm }) => {
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
const forget = async (values) =>{
  setLoading(true)
  let res=await POST('http://localhost:4001/auth/forgot-password',values)
  console.log(forget);
  if (res == 200) {
    setMessage("Password Successfully Updated")
    setOpen(true)
    setSeverity("success")
  }
  else{
    setMessage("Unable to update the Password")
      setOpen(true)
      setSeverity("error")
  }
  setLoading(false)
} 
return (
<div className= {classes.root}>
<div className='login-container'>
<div className='login-content-left'>
<img className='login-img' src = {img1} alt = "logo of the website"/>
<div className='login-content-right'>
  <form onSubmit={handleSubmit} className='login' noValidate>
    <h1>
      Forget Password
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
        <button className='login-input-btn' type='submit'
        onClick= {()=>
        {forget(values)}}>
          {isloading && (
          <CircularProgress />
          )}
          {!isloading && <span>Forget Password</span>}
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
            };
export default ForgetPassword;
