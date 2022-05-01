import { createContext, useState , useEffect} from 'react';

export const LoginContext  = createContext(null);

const LoginState = ({children}) =>{
    const [account,setAccount]  = useState('');
    
    useEffect(() => {
         setAccount(localStorage.getItem("user"));
       
    }, []);
    return (
        <LoginContext.Provider value = {{account,setAccount}}>
        {children}
        </LoginContext.Provider>
    );
}

export default LoginState;