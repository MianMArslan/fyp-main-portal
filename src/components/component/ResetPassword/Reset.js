import React, { useState} from 'react';
import '../loginform/login.css';
import ResetPassword from './index'


const Resetform = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }


  return (
    <>
        <div>
          <ResetPassword submitForm={submitForm} />
      </div>
    </>
  );
};

export default Resetform;