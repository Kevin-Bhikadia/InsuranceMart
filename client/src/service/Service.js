import axios from 'axios';

const url = '/api';

export const  authenticateSignup = async (user)=>{
    console.log(user);
    try{
        return await axios.post(`${url}/signup`,user)
    }
    catch(error){
        console.log('Error while calling SignUp API', error);
    }
}

export const  authenticateUserLogin = async (user)=>{
    try{
        return await axios.post(`${url}/login`,user)
    }
    catch(error){
        console.log('Error while calling Login API', error);
    }
}

export const  authenticateAdminLogin = async (user)=>{
    try{
        return await axios.post(`${url}/adminLogin`,user)
    }
    catch(error){
        console.log('Error while calling Login API', error);
    }
}

export const dataAdder = async (data) => {
    console.log(data);
    try {
      
        return await axios.post(`${url}/data`, data);
    }
    catch(error) {
        console.log('Error while calling data adder api', error);
    }
}