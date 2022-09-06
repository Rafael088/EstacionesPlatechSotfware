import '../../css/login.css';
import React from 'react';
import {useForm } from'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';

import Cabecera from './loginComponents/cabecera';
import Formulario from './loginComponents/formulario';
import Footer from './loginComponents/footer'

function Login() {

    const {register, handleSubmit} = useForm();

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