import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Form from "./components/component/Signup/Form";
import Forgetform from "./components/component/forget/Form";
import Login from "./components/component/loginform/Form";
import Resetform from "./components/component/ResetPassword/Reset";
import { TermsCondition } from "./components/component/Terms and Conditions";
import EmailSent from "./components/component/EmailVerification";
import EmailMessage from "./components/component/EmailVerification/Emailmessage";
// import { Exampleform } from "./components/component/form";
// import NavbarAgency from './components/AgencyPortal/Navbar/Navbar';
// import SidebarAgency from './components/AgencyPortal/Sidebar';
// import Carddeals from './components/AgencyPortal/Deals';
// import '../src/pages/page.css'
// import Order from './components/AgencyPortal/Orders';
// import Order from './components/AgencyPortal/Orders';
// import './components/Admin Component/pages/page.css'
// import Sidebar from './components/Admin Component/sidebar';
// import UserList from './components/Admin Component/pages/userList/UserList'
// import NavbarAdmin from './components/Admin Component/Navbar';
// import Home from './components/Admin Component/pages/home page';
// import NewUser from './components/Admin Component/newUser/NewUser';
// import ProductList from './components/Admin Component/pages/productList/ProductList'
// import Product from './components/Admin Component/product/Projuct';
// import NewProduct from './components/Admin Component/pages/newProduct/NewProduct'
// import User from './components/Admin Component/pages/user/User'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Formlogin" element={<Login />}></Route>
        <Route path="/signup" element={<Form />}></Route>
        <Route path="/forgetpassword" element={<Forgetform />}></Route>
        <Route path="/resetpassword" element={<Resetform />}></Route>
        <Route path="/termsandconditions" element={<TermsCondition />}></Route>
        <Route path="/EmailSent" element = {<EmailSent />} ></Route>
      </Routes>
      {/* <EmailMessage /> */}
      {/* <NavbarAgency />
      <div className='container'>
        <SidebarAgency />
        <Routes>
        <Route path = "/deals" element={<Carddeals />}></Route>
        <Route path = "/order" element={<Order />}></Route>

        </Routes> */}
      {/* </div> */}
    </Router>
  );
}
export default App;

{
  /* <Routes>
          <Route exact path="/" element = {<Home />}></Route>
          <Route path="/users" element = {<UserList />}></Route>
          <Route path="/user/:userId" element = {<User />}></Route>
          <Route path="/newUser" element = {<NewUser />}></Route>
          <Route path="/products" element = {<ProductList />}></Route>
          <Route path="/product/:productId"element = {<Product />}>
          </Route><Route path="/newproduct"element = {<NewProduct />}></Route>
            </Routes> */
}
