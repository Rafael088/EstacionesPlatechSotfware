import '../../css/login.css';
import React from 'react';
import {useForm } from'react-hook-form';//npm install react-hook-form


import Cabecera from './loginComponents/cabecera';
import Formulario from './loginComponents/formulario';
import Footer from './loginComponents/footer'
import conexionDb from '../../services/login'

function Login() {
    const {register, handleSubmit} = useForm();

    return ( 
        <div className="login">
            <div className='logoCont'/>
            <div className='contForm'>
                <div className='form'>
                    <Cabecera/>
                    <Formulario register = {register} handleSubmit = {handleSubmit} conexionDb = {conexionDb}/>
                    <Footer/>
                </div>
            </div>
        </div>
     );
}

export default Login;