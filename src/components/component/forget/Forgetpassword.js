import React, { useRef, useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import { Navigate } from "react-router-dom";
import { TextField } from "@mui/material";
import "../loginform/login.css";
import img1 from "../../images/off the beaten track.png";
import Snackbar from "../snakebar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { POST } from "../../../services/httpClient.js";
import { Box } from "@mui/material";


const ForgetPassword = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const [isloading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(false);
  const [snakbarMessage, setsnakbarMessage] = useState(false);
  const [validator, setValidator] = useState(false);
  const forget = async (values) => {
    setLoading(true);
    let res = await POST("http://localhost:4001/auth/forgot-password", values);
    if (res?.code === 200) {
      setType("success");
      setTimeout(() => {
        setSuccess(true);
      }, 1000);
      setOpen(true);
      setsnakbarMessage("Email is successfully sent!");
      setLoading(false);
    } else if (validator?.email) {
      setType("error");
      setsnakbarMessage(validator.email);
      setOpen(true);
      setLoading(false);
    } else {
      setType("error");
      setsnakbarMessage("Unable to send the Email");
      setOpen(true);
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content-left">
        <img className="login-img" src={img1} />
        <div className="login-content-right">
          <form onSubmit={handleSubmit} className="login" noValidate>
            <h1>Forget Password</h1> 
            <Box
      sx={{
        m :1,
        width: 550,
        maxWidth: '100%',
      }}
    >
            <div className="login-inputs">
              <TextField
                label = "Email"
                type="email"
                fullWidth
                name="email"
                placeholder="Enter your email"
                variant="standard"
                value={values.email}
                onChange={handleChange}
              />
            </div>
          {errors.email && <p>{errors.email}</p>}
        </Box>
            {!isloading && (
              <button
                className="login-input-btn"
                type="submit"
                onClick={() => {
                  setValidator(validate(values));
                  forget(values);
                }}
              >
                Forget Password
              </button>
            )}
            {isloading && (
              <button className="login-input-btn" type="submit" disabled>
                <CircularProgress />
              </button>
            )}
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
      {success && <Navigate to={"/"} replace />}
    </div>
  );
};

export default ForgetPassword;

