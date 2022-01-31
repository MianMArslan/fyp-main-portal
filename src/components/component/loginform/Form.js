import React, { useState } from 'react';
import './login.css';
import LoginForm from './Loginform';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
        <div>
        {/* {!isSubmitted ? ( */}
          <LoginForm submitForm={submitForm} />
        {/* // ) : (
        //   <FormSuccess />
        // )} */}
      </div>
    </>
  );
};

export default Login;