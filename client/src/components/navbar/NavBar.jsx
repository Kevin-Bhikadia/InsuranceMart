import { Navbar, Nav, Button, NavDropdown, Dropdown } from "react-bootstrap";
import Image from "../../images/IM3.png";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginState.jsx";
import { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
function NavBar() {

  const { account, setAccount } = useContext(LoginContext);

  const history = useHistory();

  const clickHandler = () => {
    history.push('/');
    localStorage.clear();

    setAccount(null);

  }

  console.log("your account"+account + "exist");

  return (
    <div style={{}}>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#E8F0F2" }}
      >
        <Link to='/'>
          <img src={Image} style={{ height: "5rem", paddingLeft: 50 }} />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: '#053742' }} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          <div style={{ marginLeft: "auto" }}>
            <Nav>
              <Dropdown
                style={{
                  marginTop: "1.9%",
                  height: "3.2rem",
                  width: "10rem"
                }}
              >
                <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ height: '2.5rem', marginTop: '0.2rem' }}>
                  Login
                </Dropdown.Toggle>

                <Dropdown.Menu variant="light">
                  {
                    account === null ?
                      <div>
                        <Link to="/AdminLogin">
                          <Dropdown.Item variant="light" href="#/action-1" style={{ backgroundColor: 'none', backgroundImage: 'none' }}>Admin Login</Dropdown.Item>
                        </Link>
                        <Link to="/UserLogin">
                          <Dropdown.Item variant="light" href="#/action-2" style={{ backgroundColor: 'none', backgroundImage: 'none' }}>User Login</Dropdown.Item>
                        </Link>
                      </div> :
                      <div>

                        <Link to="/AdminPage">
                          <Dropdown.Item variant="light" href="#/action-1" style={{ backgroundColor: 'none', backgroundImage: 'none' }}>Create User</Dropdown.Item>
                        </Link>
                        <Link to="/UserLogin">
                          <Dropdown.Item variant="light" href="#/action-2" style={{ backgroundColor: 'none', backgroundImage: 'none' }}>User Login</Dropdown.Item>
                        </Link>
                        <Link to="/">
                          <Dropdown.Item variant="light" href="#/action-1" style={{ backgroundColor: 'none', backgroundImage: 'none' }} onClick={clickHandler}>Log Out</Dropdown.Item>
                        </Link>
                      </div>

                  }

                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
