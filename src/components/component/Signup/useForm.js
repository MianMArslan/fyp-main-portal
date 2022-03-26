import { useState, useEffect } from 'react';
import validateInfo from './validateInfo';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  

  return { handleChange, handleSubmit, values, errors,};
};

export default useForm;