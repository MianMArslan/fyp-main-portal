import React ,{useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {POST} from '../../../services/httpClient.js'
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles"
import { TextField ,Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors,
    //  handleData
    } = useForm(
    submitForm,
    validate
  );

  const [state, setState] = useState(false);

  const toggleBtn = () => {
    setState(prevState => !prevState);
  }
  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2)
      }
    }
  }))
  const classes = useStyles()
 
  const [isloading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState("info")
  const [message, setMessage] = useState("")
  const [Checked, setChecked]=useState('')
  function TxtChange(e){
    setChecked(e.target.checked)
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
  
    setOpen(false)
  }

  const [Interset, setInterset] = useState('');
  const [Role, setRole] = useState('');

 function handleData(e){
    e.preventDefault()
    console.warn( 'interset', Interset ,'role',Role )
  }

  const signup = async (values) =>{
    setLoading(true)
  let res=await POST('{{BASE_URL_FYP}}/auth/registration',values)
    console.log(signup);
      if (res == 200) {
        setMessage("Email is Successfully send kindly verify your email with in 15 minutes")
      setOpen(true)
      setSeverity("success")
      }
      else{
        setMessage("Unable to send your email")
        setOpen(true)
        setSeverity("error")
      }
      setLoading(false)
} 
  return (
    <div className='form-content-right'>
    <div className= {classes.root}>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Sign Up
        </h1>
        <Box
      sx={{
        m :1,
        width: 650,
        maxWidth: '100%',
      }}
    >
        <div className='form-inputs'>
        <TextField
                label = "First Name"
                type="name"
                fullWidth
                name="firstname"
                placeholder="Enter your first name"
                variant="standard"
                value={values.firstname}
                onChange={handleChange}
              />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div className='form-inputs'>
        <TextField
                label = "Last Name"
                type="lastname"
                fullWidth
                name="lastname"
                placeholder="Enter your last name"
                variant="standard"
                value={values.lastname}
                onChange={handleChange}
              />
          {errors.lastname && <p>{errors.lastname}</p>}
          </div>
        <div className='form-inputs'>
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
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
        <TextField
                label = "Password"
                type="password"
                fullWidth
                name="password"
                placeholder="Enter your password"
                variant="standard"
                value={values.password}
                onChange={handleChange}
              />
          <button className='btn-2' onClick={toggleBtn}>
          {
            state ? <AiOutlineEyeInvisible/>:<AiOutlineEye/>
          }
          </button>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <FormControl variant="standard" sx={{  m :1,
        width: 520,
        maxWidth: '100%',}}>
        <InputLabel id="demo-simple-select-standard-label">--Interset-</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={Interset}
          onChange= {(e)=> setInterset(e.target.value)}
          label="Interset"
        >
          <MenuItem value="">
            <em>Interset</em>
          </MenuItem>
          <MenuItem value="HUNZA">Hunza</MenuItem>
          <MenuItem value= "SAWAT">Sawat</MenuItem>
          <MenuItem value = "NARAN">Naran</MenuItem>
          <MenuItem value = "KASHMIR">Kashmir</MenuItem>
          <MenuItem value = "SKARDU">Skardu</MenuItem>
          <MenuItem value = "KALAM">Kalam</MenuItem>
          <MenuItem value = "ORMARA">Ormara</MenuItem>
          <MenuItem value = "SHUGRAN">Shugran</MenuItem>
          <MenuItem value = "KHANPUR">Khanpur</MenuItem>
        </Select>
       
      </FormControl>
       <FormControl variant="standard" sx={{  m :1,
        width: 520,
        maxWidth: '100%',}}>
        <InputLabel id="demo-simple-select-standard-label">--Role-</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={Role}
          onChange= {(e)=> setRole(e.target.value)}
          label="Role"
        >
          <MenuItem value="">
            <em>Role</em>
          </MenuItem>
          <MenuItem value="ADMIN">Admin</MenuItem>
          <MenuItem value= "TOURISM AGENCIES">Tourism Agencies</MenuItem>
          <MenuItem value = "Tourist">Tourist</MenuItem>
        </Select> 
       
      </FormControl> 
       </Box>

        <input type="checkbox" id="check1" name="check-1" className="Checkbox"
        onChange = {TxtChange}
        />
        <label for="check1">I Agree the <a style={{textDecoration: 'none' ,color: '#ffa000', fontWeight: 600}} href = '/termsandconditions'>Terms and Conditions</a></label>
       <br></br>
        <button className='form-input-btn' type='submit'
        disabled = {!Checked}
        onClick= { 
          // () =>{
        // signup(values)
        handleData
         }>
           {isloading && (
            <CircularProgress />
      )}
          {!isloading && <span>Sign Up</span>}
        </button>
        <Snackbar
         open={open} 
         autoHideDuration={4000} 
         anchorOrigin = {{vertical : 'top', horizontal: 'center'}}
         onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
        <span className='form-input-login'>Already you have an account? Login <a href='/Formlogin'>here</a> </span>
      </form>
    

    </div>
    </div>
  );
};

export default FormSignup;