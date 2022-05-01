import { Navbar, Nav, Button, NavDropdown, Dropdown } from "react-bootstrap";
import Image from "../../images/IM3.png";
import { Link } from "react-router-dom";
import {LoginContext} from "../../context/LoginState.jsx";
import { useState ,useContext} from "react";
import { useHistory } from 'react-router-dom';
import insmart from"../navbar/insmart.jpeg";
// import image from 'E:\MERN-Project\insmart.jpeg';
import '../navbar/Home.css';

function Home() {
  return (
    
    <div>
        <img className="ad" src={insmart}></img>
    </div>
  );
}

export default Home;
