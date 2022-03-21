import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useForm from "./useform";
import "./login.css";
import validator from "validator";
import img1 from "../../images/off the beaten track.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "../snakebar";
import { POST } from "../../../services/httpClient.js";

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values } = useForm(submitForm);
  const [isloading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [snakbarMessage, setsnakbarMessage] = useState(false);

  const validateRequest = (values) => {
    console.log(values);
    setLoading(true);
    if (!values.email) {
      setType("error");
      setsnakbarMessage("Email is Required");
      setOpen(true);
      setLoading(false);
    } else if (!values.password) {
      setType("error");
      setsnakbarMessage("Password is required!");
      setOpen(true);
      setLoading(false);
    } else {
      if (validator.isEmail(values.email)) login(values);
      else {
        setType("error");
        setsnakbarMessage("Email is not valid!");
        setOpen(true);
        setLoading(false);
      }
    }
  };

  const login = async (values) => {
    setLoading(true);
    let res = await POST("http://localhost:4001/auth/login", values);
    console.log(res);
  };

  const [state, setState] = useState(false);

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div className="login-container">
      <div className="login-content-left">
        <img className="login-img" src={img1} />
        <div className="login-content-right">
          <form onSubmit={handleSubmit} className="login">
            <h1>Log in</h1>
            <div className="login-inputs">
              <label className="login-label">Email</label>
              <input
                className="login-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="login-inputs">
              <label className="login-label">Password</label>
              <input
                className="login-input"
                type={state ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
              />
              <button className="login-btn" onClick={toggleBtn}>
                {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            <div>
              <span className="login-input-forgetpassword">
                <a href="/forgetpassword">Forget password?</a>
              </span>
            </div>
            <button
              className="login-input-btn"
              type="submit"
              onClick={() => {
                validateRequest(values);
              }}
            >
              {!isloading && <span>Login</span>}
              {isloading && <CircularProgress />}
            </button>
          </form>
          {open && (
            <Snackbar
              open={open}
              setOpen={setOpen}
              type={type}
              message={snakbarMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
