import { Form, Button, Card} from 'react-bootstrap';
import {BsUpload} from 'react-icons/bs';
import { useContext, useEffect} from 'react';
import { useState } from 'react';
import { CSVReader } from 'react-papaparse';
import { LoginContext } from '../../context/LoginState';
import { dataAdder } from '../../service/Service.js';
import { useHistory } from 'react-router-dom';


const AdminLoginInter = () => {
    const  [files,setFiles] = useState(null);

    const {account,setAccount} = useContext(LoginContext);

    const [errorupload, setErrorupload] = useState(null);

    const history = useHistory();
    
    useEffect(() => {
        
        setAccount(localStorage.getItem("user"));
        console.log(account);
    }, []);

    const handleOnFileLoad = (data) => {
        setErrorupload(null);
        setFiles(data);
    }
    console.log(account);
   
    const clickHandler = () => {
        for(var i=0; i<files.length-1; i++)
        {
            const obj = {
                name: files[i]['data'][0],
                phone: files[i]['data'][1],
                amount:files[i]['data'][2],
                product:files[i]['data'][3],
                sub_product:files[i]['data'][4],
                policy_type:files[i]['data'][5],
                insurar:files[i]['data'][6],
                policy_no:files[i]['data'][7],
                start_date:files[i]['data'][8],
                end_date:files[i]['data'][9],
                vehicle_no:files[i]['data'][10],
                vehicle_type:files[i]['data'][11]
            }
            console.log(obj);
            dataAdder(obj);
        }
        
        setErrorupload('success');
        alert("Data added successfully!!");
    }


    return (
        <div style = {{display: 'flex', alignItems: 'center'}}>
            <Card style={{
            margin: '200px auto',
            borderRadius: '5px',
            background: 'rgba(255,255,255, 0.15)',
            padding: 30,
            }}>
                <h4 style={{color: '#ffffff', display:'flex', justifyContent: "center", alignItems: "center", marginBottom: 30}}>
                    <BsUpload style={{color: '#ffffff', fontSize: 20}} className="mr-2"/>
                    Upload
                </h4>
                <CSVReader onFileLoad={handleOnFileLoad}>
                    <Form>
                        <Form.Group controlId="formFileLg" className="my-3" style={{color:'#fff', marginLeft: '25%'}}>
                            <Form.Control  type="file" size="lg" style={{color:'#fff'}} />
                        </Form.Group>
                    </Form>
                </CSVReader>
                <Button onClick={clickHandler} size="lg" variant="success" type="submit" className="mx-auto" style={{marginLeft: '40%', marginTop: 20}}>
                    Upload
                </Button>
                {
                    (errorupload != null) ? 
                    <h1 msg={"Data Uploaded Successfully"} color={'success'}/> : <div />
                }
            </Card>
        </div>
    )
}


export default AdminLoginInter;
