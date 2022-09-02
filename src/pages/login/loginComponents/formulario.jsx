import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiKey } from "react-icons/bi";

import {setUser, setUserAsync } from '../../../features/oauth/Slice';
import { useDispatch } from 'react-redux';
import oauth from "../../../services/login";

const Formulario = (props) => {

    const {register, handleSubmit, oauth} = props 
    const dispatch = useDispatch()
    

    const submit = (data) => {
        oauth(data)
    }

    return <>
    
        <form className='formInput' onSubmit={ handleSubmit((data) => dispatch(setUserAsync(data)))}>
            <div className='inputUser'>
                <p>User</p>
                <div className="contInputIcon">
                    <AiOutlineUser className="icon"/>
                    <input className="inputText" type="text" {...register('email',{required:true})}/>
                </div>
            </div>
            <div className='inputPassword'>
                <p>Password</p>
                <div className="contInputIcon">
                    <BiKey className="icon"/>
                    <input className="inputPasw" type="password" {...register('passwd',{required:true})} />
                </div>
            </div>
            <div className='inputButton'>
                <input type="submit" value="Login" />
            </div>
        </form>
   
    </>
}

export default Formulario