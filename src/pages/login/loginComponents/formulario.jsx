import React from "react";

const Formulario = (props) => {

    const {register, handleSubmit, conexionDb} = props 

    return <>
    <div className='bodyForm'>
        <form className='formInput' onSubmit={ handleSubmit(conexionDb)}>
            <div className='inputUser'>
                <p>User</p>
                <input type="text" {...register('user',{required:true})} />
            </div>
            <div className='inputPassword'>
                <p>Password</p>
                <input type="password" {...register('password',{required:true})} />
            </div>
            <div className='inputButton'>
                <input type="submit" value="Ingresar" />
            </div>
        </form>
|   </div>
    </>
}

export default Formulario