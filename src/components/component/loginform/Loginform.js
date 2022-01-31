import React, {useState,useRef} from 'react';
import validate from './validateInfo';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import useForm from './useform';
import './login.css';
import img1 from '../../images/off the beaten track.png'
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '../snakebar';
import  axios from 'axios';

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const [isloading , setLoading] = useState(false);
    const [post, setPost] = useState(null)
  const login = () =>{
    console.warn(values)
    setLoading(true);
   axios.post("http://localhost:4001/auth/login",{values},{
   method : "POST",
   headers: {
      'Accept':'application/json',
      'Content-Type': 'application/json',
   },
   body:JSON.stringify(values)
  })
   .then(res=>{
     console.log(res.values)
   })
  }
      

  const [state, setState] = useState(false);

    const toggleBtn = () => {
      setState(prevState => !prevState);
    }

    const SnackbarType ={
      success: "success",
      fail: "fail",
    }
  
    const snackbarRef = useRef(null)

  return (
    <div className='login-container'>
    <div className='login-content-left'>
    <img className='login-img' src = {img1} />
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
            value={values.password}
            onChange={handleChange}
          />
          
          {errors.password && <p>{errors.password}</p>}
          <button className='login-btn' onClick={toggleBtn}>
            {
              state ? <AiOutlineEyeInvisible/>:<AiOutlineEye/>
            }
            </button>
        </div>
        <div>
        <span className='login-input-forgetpassword'><a href= '/forgetpassword'>Forget password?</a>
        </span></div>
       { !isloading && 
       <button className='login-input-btn' type='submit'
        onClick= {login}>
          Log in
        </button>
         } 
        { isloading && <button className='login-input-btn' type='submit'
        disabled onClick={() =>{
          snackbarRef.current.show();
        }}>
          loading....
          {post?post:<CircularProgress />}
        </button>}
        <Snackbar ref={snackbarRef} message = "Login Successful!" type = {SnackbarType.success} />
      </form>
    </div>
    </div>
    </div>
  );
      }

export default LoginForm;