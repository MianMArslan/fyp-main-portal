import React ,{useState} from 'react';
import validate from './validateInfo';
import useForm from './usereset';
import '../loginform/login.css';
import img1 from "../../images/off the beaten track.png"
import {POST} from '../../../services/httpClient.js'
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles"
const ResetPassword = ({ submitForm }) => {
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
const Reset = async (values) =>{
  setLoading(true)
  let res=await POST('http://localhost:4000/auth/reset-password',values)
  console.log(Reset);
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
      Reset Password
      </h1>
      <div className='login-inputs'>
        <label className='login-label'>Reset Password</label>
        <input
        className='login-input'
        type='password'
        name='password'
        placeholder='Enter your password'
        value={values.email}
        onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='login-input-btn' type='submit'
        onClick= {()=>
        {Reset(values)}}>
          {isloading && (
          <CircularProgress />
          )}
          {!isloading && <span>Reset Password</span>}
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
export default ResetPassword;
