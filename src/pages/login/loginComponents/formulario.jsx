import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
const Formulario = (props) => {

    const {register, handleSubmit, conexionDb} = props 

    return <>
    
        <form className='formInput' onSubmit={ handleSubmit(conexionDb)}>
            <div className='inputUser'>
                <p>User</p>
                <div className="contInputIcon">
                    <AiOutlineUser className="icon"/>
                    <input className="inputText" type="text" {...register('user',{required:true})}/>
                </div>
            </div>
            <div className='inputPassword'>
                <p>Password</p>
                <div className="contInputIcon">
                    <BiKey className="icon"/>
                    <input className="inputPasw" type="password" {...register('password',{required:true})} />
                </div>
            </div>
            <div className='inputButton'>
                <input type="submit" value="Login" />
            </div>
        </form>
   
    </>
}

export default Formulario