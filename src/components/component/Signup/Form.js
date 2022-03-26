import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import img1 from '../../images/off the beaten track.png'
import EmailSent from '../EmailVerification';
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src = {img1} alt='logo of the website' />
      </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
        <EmailSent/>
        )}
      </div>
    </>
  );
};

export default Form;