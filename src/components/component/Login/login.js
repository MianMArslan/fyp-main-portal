import React,{useState}from 'react'
import useForm from '../Signup/useForm'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import validate from '../Signup/validateInfo';
import './login.css'
import img1 from '../../images/off the beaten track.png'


const Login = ({ submitForm }) => {
    const { handleChange,handleSubmit, values, errors} = useForm(
      submitForm,
      validate
    ); 

    const [state, setState] = useState(false);

    const toggleBtn = () => {
      setState(prevState => !prevState);
    }

    return (
        <>
              <div className='login-container'>
        <div className='login-content-left'>
          <img className='login-img' src = {img1} alt='spaceship' />
        <div className='login-content-right'>
      <form  onSubmit={handleSubmit} className='login'>
        <h1>
        log in
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
          <button className='login-btn' onClick={toggleBtn}>
          {
            state ? <AiOutlineEyeInvisible/>:<AiOutlineEye/>
          }
          </button>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
        <span className='login-input-forgetpassword'><a href= '#'>Forget password?</a>
        </span></div>
        <div><button className='login-input-btn' type='submit' onClick={Login}>
          Log in
        </button></div>
               </form>
          </div>
          </div>
               </div>
        </>
    )
}

export default Login
