import { useState, useContext } from "react";
import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
import { authenticateUserLogin } from '../../service/Service.js';
import { Si1Password, SiGnuprivacyguard } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { authenticateAdminLogin } from '../../service/Service.js';
import { LoginContext } from '../../context/LoginState';

const AdminLoginInitialvalue = {
  phone: '',
  password: ''
}

const UserLogin = () => {

  const [adminLogin, setLogin] = useState(AdminLoginInitialvalue);
  const history = useHistory();
  const { account, setAccount } = useContext(LoginContext);
  const OnChangeValue = (e) => {
    setLogin({ ...adminLogin, [e.target.name]: e.target.value });
    console.log(adminLogin);
  }

  const clickHandler = async () => {

    let response = await (authenticateAdminLogin(adminLogin));
    // alert("clickMe"); 

    if (!response) {
      alert("Invalid login");
      setLogin({ ...adminLogin, password: '' });
      return;
    }

    alert("Admin logged in  Successfully");
    setLogin(AdminLoginInitialvalue);
    localStorage.setItem("user",(adminLogin.phone));
    
    setAccount(localStorage.getItem("user"));
    console.log(adminLogin);
    history.push('/adminInter');
  }

  return (

    <Card
      style={{
        display: "flex",
        width: "35%",
        margin: "100px auto",
        borderRadius: "5px",
        // background: "rgba(255,255,255, 0.15)",
        backgroundColor: "#E8F0F2",
        padding: 30,
        borderWidth: "4px",
        borderColor: "#343a40"
      }}
      className="mx-auto"
    >

      <Form style={{ borderColor: "red" }}>
        <div class="d-flex justify-content-center">
          <h3 style={{ color: 'black', display: 'flex', justifyContent: "center", alignItems: "center", marginBottom: 15, fontWeight: 600 }}>
            <SiGnuprivacyguard style={{ color: 'black', fontSize: 30 }} className="mr-2" />
            Admin Login
          </h3>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="phone" onChange={(e) => { OnChangeValue(e) }} name="phone" value={adminLogin.phone} placeholder="Enter phone number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={(e) => { OnChangeValue(e) }} name="password" value={adminLogin.password} placeholder="Password" />
        </Form.Group>

        <div class="d-flex justify-content-center">
          <Button variant="dark" onClick={() => { clickHandler() }}>
            Get me in
          </Button>
        </div>
      </Form>
    </Card>


  );
};

export default UserLogin;
