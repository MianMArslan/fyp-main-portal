import React, { useState, useRef } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Dropdown from "./Dropdown";
import { POST } from "../../../services/httpClient.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const [state, setState] = useState(false);

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };
  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  }));
  const classes = useStyles();

  const SnackbarType = {
    success: "success",
    fail: "fail",
  };
  const snackbarRef = useRef(null);

  const [isloading, setLoading] = useState(false);

  const signup = () => {
    console.warn(values);
    setLoading(true);

    fetch("http://localhost:4001/auth/registration", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((result) => {
      console.warn("result", result);
    });
  };

  const [selected, setSelected] = useState("--Role--");

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };
  // const signup = async (values) => {
  //   setLoading(true);
  //   let res = await POST("{{BASE_URL_FYP}}/auth/registration", values);
  //   console.log(signup);
  //   if (res == 200) {
  //     setMessage(
  //       "Email is Successfully send kindly verify your email with in 15 minutes"
  //     );
  //     setOpen(true);
  //     setSeverity("success");
  //   } else {
  //     setMessage("Unable to send your email");
  //     setOpen(true);
  //     setSeverity("error");
  //   }
  //   setLoading(false);
  // };
  // const [selected, setSelected] = useState("--Role--");
  return (
    <div className="form-content-right">
      <div className={classes.root}>
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h1>Sign Up</h1>
          <div className="form-inputs">
            <label className="form-label">First Name</label>
            <input
              className="form-input"
              type="text"
              name="firstname"
              placeholder="Enter your First Name"
              value={values.firstname}
              onChange={handleChange}
            />
            {errors.firstname && <p>{errors.firstname}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Last Name</label>
            <input
              className="form-input"
              type="text"
              name="lastname"
              placeholder="Enter your Last Name"
              value={values.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <p>{errors.lastname}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Interest</label>
            <input
              className="form-input"
              type="text"
              name="interest"
              placeholder="Interest"
              value={values.interest}
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type={state ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            <button className="btn-2" onClick={toggleBtn}>
              {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
            {errors.password && <p>{errors.password}</p>}
          </div>
          <Dropdown selected={selected} setSelected={setSelected} />
          {!isloading && (
            <button className="form-input-btn" type="submit" onClick={signup}>
              Sign up
            </button>
          )}
          {isloading && (
            <button
              className="form-input-btn2"
              type="submit"
              disabled
              onClick={() => {
                snackbarRef.current.show();
              }}
            >
              loading....
              <CircularProgress />
            </button>
          )}
          <Snackbar
            ref={snackbarRef}
            message="Email is Successfully send kindly verify your email with in 15 minutes "
            type={SnackbarType.success}
          />

          <span className="form-input-login">
            Already you have an account? Login <a href="/Formlogin">here</a>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default FormSignup;
