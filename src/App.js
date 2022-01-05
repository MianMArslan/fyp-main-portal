import './App.css';
import{ BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './pages'
import Login from './components/component/Login/login'
import Form from './components/component/Signup/Form'
import Forgetpassword from './components/component/Forgetpassword/ForgetPassword';

function App() {
  return (
   <Router>
      {/* 
      <Forgetpassword/>*/}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      {/*  
      
       <Form />   */}
   </Router>
  );
}

export default App; 
