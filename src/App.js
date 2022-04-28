import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Forgetform from "./components/component/forget/Form";
import Login from "./components/component/loginform/Form";
import Resetform from "./components/component/ResetPassword/Reset";
import { TermsCondition } from "./components/component/Terms and Conditions";
import EmailMessage from "./components/component/EmailVerification/Emailmessage";
import Signup from "./components/component/Signup/SignupForm";
import ResendVerificationEmail from "./components/component/resendVerificaionEmail/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/ForgetPassword" element={<Forgetform />}></Route>
        <Route path="/ResetPassword" element={<Resetform />}></Route>
        <Route path="/TermsAndConditions" element={<TermsCondition />}></Route>
        <Route path="/emailMessage" element={<EmailMessage />}></Route>
        <Route
          path="/resendVerificationEmail"
          element={<ResendVerificationEmail />}
        ></Route>
      </Routes>
    </Router>
  );
}
export default App;
