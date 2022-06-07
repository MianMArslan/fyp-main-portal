import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useForm from "./useform";
import "./login.css";
import validator from "validator";
import img1 from "../../images/off the beaten track.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "../snakebar";
import { POST } from "../../../services/httpClient.js";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values } = useForm(submitForm);
  const [isloading, setLoading] = useState(false);
  const [agency, setAgency] = useState(false);
  const [tourist, setTourist] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [snakbarMessage, setsnakbarMessage] = useState(false);

  const validateRequest = (values) => {
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
    let data = window.navigator.geolocation.getCurrentPosition(
      async (data) => {
        values.latitude = data.coords.latitude;
        values.longitude = data.coords.longitude;
        let res = await POST("/auth/login", values);
        if (res.code === 200) {
          setLoading(false);
          setType("success");
          setOpen(true);
          setsnakbarMessage(res?.message);
          if (res.data.userRole.title === "agency") setAgency(true);
          if (res.data.userRole.title === "admin") setAdmin(true);
          if (res.data.userRole.title === "tourist") setTourist(true);
        } else {
          setType("error");
          setOpen(true);
          setLoading(false);
          setsnakbarMessage(res?.data.message);
        }
        return data;
      },
      (err) => {
        setType("error");
        setOpen(true);
        setLoading(false);
        setsnakbarMessage("Allow Location");
      }
    );
  };

  const [state, setState] = useState(false);

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };
  const NavigateExternal = ({ to }) => {
    useEffect(() => {
      window.location.href = to;
    }, []);
    return null;
  };

  return (
    <div className="login-container">
      <div className="login-content-left">
        <img className="login-img" src={img1} alt="Website logo" />
        <div className="login-content-right">
          <form onSubmit={handleSubmit} className="login">
            <h1>Log in</h1>
            <Box
              sx={{
                m: 1,
                width: 550,
                maxWidth: "100%",
              }}
            >
              <div className="login-inputs">
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  name="email"
                  placeholder="Enter your email"
                  variant="standard"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="login-inputs">
                <TextField
                  label="Password"
                  type={state ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  fullWidth
                  variant="standard"
                  value={values.password}
                  onChange={handleChange}
                />
                <button className="login-btn" onClick={toggleBtn}>
                  {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
            </Box>
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
          <span className="login-input-resendVerificationEmail">
            <p>Not Registered Yet?</p>
            <a href="/Signup">Sign Up</a>
          </span>
          <span className="login-input-resendVerificationEmail">
            <p>Trouble while login</p>
            <a href="/resendVerificationEmail">Activate Account</a>
          </span>
          {agency && <NavigateExternal to="https://agency.vtechserve.com/" />}
          {admin && <NavigateExternal to="https://admin.vtechserve.com/" />}
          {tourist && <NavigateExternal to="https://tourist.vtechserve.com/" />}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
