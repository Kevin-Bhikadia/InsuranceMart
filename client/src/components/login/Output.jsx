import { Col, Row, Card } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import { FaClinicMedical } from 'react-icons/fa';
import axios from 'axios';
import { LoginContext } from '../../context/LoginState';
import { useHistory } from 'react-router-dom';

const url = '/api';

const Output = () => {



    const { account, setAccount } = useContext(LoginContext);
    console.log(account);

    const medicinedata = account.phone;

    const history = useHistory();
    var [userdata, setUserdata] = useState([]);

    if(account==='')
    {
        history.push('/UserLogin');
        setAccount('');

    }
    const userFinder = async (medicine) => {
        try {
            await axios.get(`${url}/med/search`, { 'params': { phone: localStorage.getItem("user") } })
                .then((res) => {
                    console.log(res.data);

                    setUserdata(userdata => ([...userdata, res.data]));
                    console.log(userdata);
                })
        } catch (err) {
            console.log('Error while finding User', err);
        }
    }
   
    var i = 0;
    var [I, seI] = useState(0);



    useEffect(() => {
        setUserdata([])
        userFinder(account);

    }, [])

    const updateI = () => {
        i = 2;
        seI(i);
    };

    console.log(userdata[0]);

    if (i != 2) {
        setInterval(updateI, 1000);
    }


    return (
        <div>
            {
                I ?
                    <div>
                        {
                            userdata.length === 0 ?
                                // <Child  />
                                <div className="d-flex justify-content-center">
                                    {/* <Alert msg={"Medicine not found in your district"} color={'warning'}/> */}
                                </div>
                                :
                                <Row xs={5} md={3} className="g-4" style={{ margin: '3% 3%' }}>
                                    {
                                        userdata[0].map(user => (
                                            user.phone === localStorage.getItem("user") ?
                                            <Col className="mb-3">
                                                <Card border="black" style={{ backgroundColor: "#E8F0F2", color: "#000000", borderWidth: '2px' }}>
                                                    <Card.Body>
                                                        <Card.Title style={{ textTransform: 'uppercase' }}><FaClinicMedical className="mb-2" /> {user.phone}</Card.Title>
                                                        <Card.Text>
                                                            <span style={{ color: "#000000" }}>Name: </span>{user.name}
                                                            <br />
                                                            <span style={{ color: "#000000" }}>Amount: </span>{user.amount}
                                                            <br />
                                                            <span style={{ color: "#000000" }}>Product: </span>{user.product}
                                                            <br />
                                                            <span style={{ color: "#000000" }}>Sub product: </span>{user.sub_product}
                                                            <br />
                                                            <span style={{ color: "#000000" }}>Policy type: </span>{user.policy_type}
                                                            <br />
                                                            <span style={{ color: "#000000" }}>Insurar: </span>{user.insurar}
                                                            <br />
                                                            <span style={{ color: "#000000" }}>Policy no: </span>{user.policy_no}
                                                            <br />
                                                            <span style={{ color: "#000000" }}>Start date: </span>{user.start_date}
                                                            <br />
                                                            <span style={{ color: "#000000" }}>End date: </span>{user.end_date}
                                                            <br />
                                                            <span style={{ color: "#000000" }}>Vehicle no: </span>{user.vehicle_no}
                                                            <br />
                                                            <span style={{ color: "#000000" }}>Vehicle type: </span>{user.vehicle_type}
                                                            <br />
                                                  </Card.Text>
                                                                                                              </Card.Body>
                                                </Card>
                                            </Col>:<div></div>
                                        ))
                                    }
                                </Row>
                        }
                    </div>
                    :
                    <div />
            }
        </div >

    )
}


export default Output;