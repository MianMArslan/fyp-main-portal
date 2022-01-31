import React ,{useRef, useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import '../loginform/login.css';
import img1 from "../../images/off the beaten track.png"
import Snackbar from '../snakebar';
import CircularProgress from '@material-ui/core/CircularProgress';
import  axios  from 'axios';

const ForgetPassword = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  // const SnackbarType = {
  //   success: "success",
  //   fail: "fail",
  // }
  // const snackbarRef = useRef(null);

  const [isloading , setLoading] = useState(false);

  const forget = () =>{
    setLoading(true);

    axios.post("http://localhost:4001/auth/forgot-password")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      setLoading(false)
    })
  }

 
  return (
    <div className='login-container'>
    <div className='login-content-left'>
      <img className='login-img' src = {img1}/>
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
        {!isloading && <button className='login-input-btn' type='submit'
         onClick={forget}
        >
          Forget Password
        </button>}
        { isloading && <button className='login-input-btn' type='submit'
        disabled>
          <CircularProgress />
        </button>}
      </form>
      </div>
        </div>
             </div>
  );
};

export default ForgetPassword;


{/* <Snackbar
ref={snackbarRef}
message = "Successfully Updated"
type = {SnackbarType.success}
/>  
()=>{
          snackbarRef.current.show();
*/}