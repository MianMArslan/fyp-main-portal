import React ,{useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import Dropdown from './Dropdown';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors} = useForm(
    submitForm,
    validate
  );
    function signUp()
    {
      console.warn(values)
    }
  const [state, setState] = useState(false);

  const toggleBtn = () => {
    setState(prevState => !prevState);
  }

const [selected, setSelected] = useState("--Role--");

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Sign Up
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='firstname'
            placeholder='Enter your First Name'
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your Last Name'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
          </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Interest</label>
          <input
            className='form-input'
            type='text'
            name='interest'
            placeholder='Interest'
            value={values.interest}
            onChange={handleChange}
          />
          </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type= {state ? "text" : "password"}
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          /> 
          <button className='btn-2' onClick={toggleBtn}>
          {
            state ? <AiOutlineEyeInvisible/>:<AiOutlineEye/>
          }
          </button>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <Dropdown selected = {selected} setSelected = {setSelected}/>
        <button className='form-input-btn' type='submit' onClick={signUp}>
          Sign up
        </button>
        <span className='form-input-login'>Already you have an account? Login<a href='/Formlogin'>here</a> </span>
      </form>
    </div>
  );
};

export default FormSignup;