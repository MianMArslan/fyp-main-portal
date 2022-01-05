import React, {useState} from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import useForm from '../Signup/useForm'
import validate from '../Signup/validateInfo'
import '../Login/login.css'
import img1 from '../../images/off the beaten track.png'



const Forgetpassword = ({submitForm}) => {
    const { handleChange, handleSubmit, values, errors} = useForm( validate, submitForm);


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
      Reset password
      </h1>
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
      <button className='login-input-btn' type='submit' >
       Reset Password
      </button>
      
             </form>
        </div>
        </div>
             </div>
      </>
  )
}

export default Forgetpassword
