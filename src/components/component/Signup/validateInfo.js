export default function validateInfo(values) {
    let errors = {};
  
    if (!values.firstname.trim()) {
      errors.firstname = 'First Name required';
    }
    else if (!/^[A-Za-z]+/.test(values.firstname.trim())) {
      errors.firstname = 'Enter a valid name';
    }
    if (!values.lastname.trim()) {
      errors.lastname = 'Last Name required';
    }
    else if (!/^[A-Za-z]+/.test(values.lastname.trim())) {
      errors.lastname = 'Enter a valid name';
    }
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password.trim()) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
    return errors;
  }