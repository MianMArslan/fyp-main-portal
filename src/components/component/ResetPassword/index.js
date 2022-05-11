import React, { useState } from "react";
import validate from "./validateInfo";
import useForm from "./usereset";
import "../loginform/login.css";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import img1 from "../../images/off the beaten track.png";
import { POST } from "../../../services/httpClient.js";
import { useSearchParams, Navigate } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "../snakebar";
const ResetPassword = ({ submitForm }) => {
  let { handleChange, handleSubmit, values } = useForm(
    submitForm,
    validate
  );
  const [isloading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(false);
  const [snakbarMessage, setsnakbarMessage] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState(false);

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };

  const validateRequest = (values) => {
    setLoading(true);
    if (!values.password) {
      setType("error");
      setsnakbarMessage("Password is required!");
      setOpen(true);
      setLoading(false);
    } else if (values.password.length < 6) {
      setType("error");
      setsnakbarMessage("Password must be greater then 6 letters!");
      setOpen(true);
      setLoading(false);
    } else {
      Reset(values);
    }
  };

  const Reset = async (values) => {
    let token = searchParams.get("token");
    values.token = token;
    setLoading(true);
    let res = await POST("/auth/reset-password", values);
    if (res?.code === 200) {
      setType("success");
      setTimeout(() => {
        setSuccess(true);
      }, 1000);
      setOpen(true);
      setLoading(false);
      setsnakbarMessage("Successfully Updated!");
    } else {
      setType("error");
      setsnakbarMessage(res.data.message);
      setOpen(true);
      setLoading(false);
    }
    setLoading(false);
  };
  return (
      <div className="login-container">
        <div className="login-content-left">
          <img className="login-img" src={img1} alt="logo of the website" />
          <div className="login-content-right">
            <form onSubmit={handleSubmit} className="login" noValidate>
              <h1>Reset Password</h1>
              <Box
                sx={{
                  m: 1,
                  width: 550,
                  maxWidth: "100%",
                }}
              >
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
              <button
                className="login-input-btn"
                type="submit"
                onClick={() => {
                  validateRequest(values);
                }}
              >
                {isloading && <CircularProgress />}
                {!isloading && <span>Reset Password</span>}
              </button>
              {open && (
                <Snackbar
                  open={open}
                  setOpen={setOpen}
                  type={type}
                  message={snakbarMessage}
                />
              )}
            </form>
          </div>
          {success && <Navigate to={"/Login"} replace />}
        </div>
      </div>
  );
};
export default ResetPassword;
