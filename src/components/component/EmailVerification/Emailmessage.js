import { NoEncryption } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./styles.css";
import { useSearchParams } from "react-router-dom";
import { POST } from "../../../services/httpClient.js";
const EmailMessage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isloading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  useEffect(() => {
    verifyEmail();
  }, []);
  const verifyEmail = async () => {
    let token = searchParams.get("token");
    setLoading(true);
    let res = await POST("/auth/user-email-verification", { token });
    if (res?.code === 200) {
      setSuccess(true);
    }
    setLoading(false);
  };
  return (
    <>
      {isSuccess ? (
        <div className="mainbody">
          <div className="content" isSuccess>
            <br></br>
            <h1 align="center">Account Confirmation</h1>
            <br></br>
            <p align="center">You are successfully verify your Email</p>
            <br></br>
            <p align="center">Click here to Login!</p>
            <br></br>
            <button
              style={{
                width: "15%",
                height: "50px",
                marginTop: "20px",
                marginLeft: "43%",
                borderRadius: "2px",
                backgroundColor: "#ffa000",
                outline: "none",
                borderRadius: "1rem",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              <a
                href="/login"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Proceed
              </a>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EmailMessage;
