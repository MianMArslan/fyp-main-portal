
import React, { useState} from 'react';
import '../loginform/login.css';
import ForgetPassword from './Forgetpassword'


const Forgetform = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }


  return (
    <>
        <div>
          <ForgetPassword submitForm={submitForm} />
      </div>
    </>
  );
};

export default Forgetform;