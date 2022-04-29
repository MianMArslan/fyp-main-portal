import { useState} from "react";
import "./Form.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { POST } from "../../../services/httpClient.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "../snakebar";
import { TextField, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img1 from "../../images/off the beaten track.png";
const Signup = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [Interset, setInterset] = useState("");
  const [Role, setRole] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const [isloading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [snakbarMessage, setsnakbarMessage] = useState(false);

  const resetForm = () => {
    setFormValues(initialValues);
    setInterset("");
    setRole("");
  };
  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname.trim()) {
      setType("error");
      setsnakbarMessage("First Name required");
      setOpen(true);
    } else if (!/^[A-Za-z]+/.test(values.firstname.trim())) {
      setType("error");
      setsnakbarMessage("Enter a valid first name");
      setOpen(true);
    } else if (!values.lastname) {
      setType("error");
      setsnakbarMessage("Last Name is required!");
      setOpen(true);
    }
    if (!values.lastname.trim()) {
      setType("error");
      setsnakbarMessage("Enter a valid last name");
      setOpen(true);
    }
    if (!values.email) {
      setType("error");
      setsnakbarMessage("Email is Required");
      setOpen(true);
    } else if (!regex.test(values.email)) {
      setType("error");
      setsnakbarMessage("This is not a valid email format!");
      setOpen(true);
    }
    if (!values.password) {
      setType("error");
      setsnakbarMessage("Password is required");
      setOpen(true);
    } else if (values.password.length < 8) {
      setType("error");
      setsnakbarMessage("Password must be more than 8 characters");
      setOpen(true);
    } else return true;
  };
  const create = async (formValues) => {
    if (!Interset) {
      setType("error");
      setsnakbarMessage("select interest");
      setOpen(true);
    } else if (!Role) {
      setType("error");
      setsnakbarMessage("select Role");
      setOpen(true);
    } else {
      formValues.interest = Interset;
      formValues.roleId = parseInt(Role);
      setLoading(true);
      let res = await POST("/auth/registration", formValues);
      if (res?.code === 200) {
        setType("success");
        setOpen(true);
        setLoading(false);
        setsnakbarMessage(res?.message);
        resetForm();
      } else {
        setType("error");
        setOpen(true);
        setLoading(false);
        setsnakbarMessage(res?.message);
        resetForm();
      }
    }
  };

  const [state, setState] = useState(false);
  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };
  const [Checked, setChecked] = useState("");
  function TxtChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <div className="form-container">
      <div className="form-content-left">
        <img className="form-img" src={img1} alt="logo of the website" />
      </div>
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form">
          <h1>Signup</h1>
          <Box sx={{ width: 650, maxWidth: "100%" }}>
            <div className="form-inputs">
              <TextField
                label="First Name"
                type="name"
                fullWidth
                name="firstname"
                placeholder="Enter your first name"
                variant="standard"
                value={formValues.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <TextField
                label="Last Name"
                type="lastname"
                fullWidth
                name="lastname"
                placeholder="Enter your last name"
                variant="standard"
                value={formValues.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <TextField
                label="Email"
                type="email"
                fullWidth
                name="email"
                placeholder="Enter your email"
                variant="standard"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <TextField
                label="Password"
                type={state ? "text" : "password"}
                fullWidth
                name="password"
                placeholder="Enter your password"
                variant="standard"
                value={formValues.password}
                onChange={handleChange}
              />
              <button className="btn-2" onClick={toggleBtn}>
                {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            <FormControl
              variant="standard"
              sx={{ m: 1, width: 360, maxWidth: "90%" }}
              onChange={handleChange}
            >
              <InputLabel id="demo-simple-select-standard-label">
                --Interset-
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={Interset}
                onChange={(e) => setInterset(e.target.value)}
                label="Interset"
              >
                <MenuItem value="">
                  <em>Interset</em>
                </MenuItem>
                <MenuItem value="HUNZA">Hunza</MenuItem>
                <MenuItem value="SAWAT">Sawat</MenuItem>
                <MenuItem value="NARAN">Naran</MenuItem>
                <MenuItem value="KASHMIR">Kashmir</MenuItem>
                <MenuItem value="SKARDU">Skardu</MenuItem>
                <MenuItem value="KALAM">Kalam</MenuItem>
                <MenuItem value="ORMARA">Ormara</MenuItem>
                <MenuItem value="SHUGRAN">Shugran</MenuItem>
                <MenuItem value="KHANPUR">Khanpur</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{ m: 1, width: 360, maxWidth: "100%" }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                --Role-
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={Role}
                onChange={(e) => setRole(e.target.value)}
                label="Role"
              >
                <MenuItem value="">
                  <em>Role</em>
                </MenuItem>
                <MenuItem value="3">Tourism Agencies</MenuItem>
                <MenuItem value="2">Tourist</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <input
            type="checkbox"
            id="check1"
            name="check-1"
            className="Checkbox"
            onChange={TxtChange}
          />
          <label for="check1">
            I Agree the{" "}
            <a
              style={{
                textDecoration: "none",
                color: "#ffa000",
                fontWeight: 600,
              }}
              href="/termsandconditions"
            >
              Terms and Conditions
            </a>
          </label>
          <br></br>
          <button
            className="form-input-btn"
            type="submit"
            disabled={!Checked}
            onClick={async () => {
              let validation = validate(formValues);
              if (validation) await create(formValues);
            }}
          >
            {isloading && <CircularProgress />}
            {!isloading && <span>Sign Up</span>}
          </button>
          {open && (
            <Snackbar
              open={open}
              setOpen={setOpen}
              type={type}
              message={snakbarMessage}
            />
          )}
          <span className="form-input-login">
            Already you have an account? Login <a href="/Login">here</a>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
