import './App.css';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Button,Container,NavDropdown,Dropdown} from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserLogin from './components/login/UserLogin.jsx'
import AdminLogin from './components/login/AdminLogin.jsx'
import AdminUserLoginApp from './components/login/AdminUserLoginApp.jsx';
import LoginState from '../src/context/LoginState';
import AdminLoginInter from './components/login/AdminLoginInter.jsx';
import Output from './components/login/Output';
import Home from './components/navbar/Home';

function App() { 
  return (
    <LoginState>
      <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route exact path ='/UserLogin' component={UserLogin}></Route>
      <Route exact path ='/AdminLogin' component={AdminLogin}></Route>
      <Route exact path ='/AdminPage' component={AdminUserLoginApp}></Route>
      <Route exact path ='/Output' component={Output}></Route>
      <Route exact path ='/' component={Home}></Route>
      <Route exact path ='/AdminInter' component={AdminLoginInter}></Route>
      
      </Switch>
      </BrowserRouter>
      </LoginState>
  );
}

export default App;
