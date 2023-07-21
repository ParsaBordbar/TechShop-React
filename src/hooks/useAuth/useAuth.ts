import * as React from 'react'
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from 'react-router-dom';


export const useAuth = () => {
    
    const navigate = useNavigate()
    const { pathname } = useLocation()
    
    React.useEffect(() =>{
        if(!Cookies.get('token')){
            navigate('/auth')
        }
        if( pathname === '/auth'){
            navigate('/')
        }
    },[])
}