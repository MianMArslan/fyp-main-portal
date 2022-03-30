import React, { useState } from "react";
import validate from "./validateInfo";
import useForm from "./usereset";
import "../loginform/login.css";
import img1 from "../../images/off the beaten track.png";
import { POST } from "../../../services/httpClient.js";
import { useSearchParams, Navigate } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "../snakebar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
const ResetPassword = ({ submitForm }) => {
  let { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
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
  const [isloading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(false);
  const [snakbarMessage, setsnakbarMessage] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
      setsnakbarMessage("Email is successfully sent!");
    } else {
      setType("error");
      setsnakbarMessage(res);
      setOpen(true);
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <div className={classes.root}>
      <div className="login-container">
        <div className="login-content-left">
          <img className="login-img" src={img1} alt="logo of the website" />
          <div className="login-content-right">
            <form onSubmit={handleSubmit} className="login" noValidate>
              <h1>Reset Password</h1>
              <div className="login-inputs">
                <label className="login-label">Reset Password</label>
                <input
                  className="login-input"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
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
          {success && <Navigate to={"/Formlogin"} replace />}
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
