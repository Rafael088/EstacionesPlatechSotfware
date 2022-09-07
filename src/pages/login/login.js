import '../../css/login.css';
import React from 'react';
import {useForm } from'react-hook-form'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { getUser } from '../../redux/oauth/Slice';
import Cabecera from './loginComponents/cabecera';
import Formulario from './loginComponents/formulario';
import Footer from './loginComponents/footer'

function Login() {

    const {register, handleSubmit} = useForm();
    
    const user = useSelector(getUser)

    if(user.value) {
        window.location.href = "./home"
    }
    
    return ( 
        <div className="login">
                <div className='form'>
                    <Cabecera/>
                    <Formulario register = {register} handleSubmit = {handleSubmit}/>
                    <Footer/>
                </div>
            <ToastContainer />
        </div>
     );
}

export default Login;