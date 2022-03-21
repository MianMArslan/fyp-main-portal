import React, { useRef, useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "../../../pages";
import "../loginform/login.css";
import img1 from "../../images/off the beaten track.png";
import Snackbar from "../snakebar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { POST } from "../../../services/httpClient.js";

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
      setSuccess(true);
      setOpen(true);
      setLoading(false);
      setsnakbarMessage("Email is successfully sent!");
    } else if (validator?.email) {
      setType("error");
      setsnakbarMessage(validator.email);
      setOpen(true);
      setLoading(false);
    } else {
      setType("error");
      setsnakbarMessage(res);
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
              {errors.email && <p>{errors.email}</p>}
            </div>
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
    </div>
  );
};

export default ForgetPassword;

{
  /* <Snackbar
ref={snackbarRef}
message = "Successfully Updated"
type = {SnackbarType.success}
/>  
()=>{
          snackbarRef.current.show();
*/
}
