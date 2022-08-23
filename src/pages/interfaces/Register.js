import React, { useState } from 'react';
import uniquid from 'uniqid';
import axios from 'axios';
function Register() {
    
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    async function agregarUsuario() {
    await axios.post('/api/usuario/agregarUsuario', {name: {nombre},
                email: {email},
                user:{user},
                password:{password},
                rol:'admin',
                id:uniquid()})
                    .then(res=> {alert(res.data)})
                    .then(err => {console.log(err)})
                }
    
    return ( 
        <div className="contRegister">
            <div className='logoContRegister'>

            </div>
            <div className='contForm'>
                <div className='form'>
                    <div className='headerForm'>
                        <h1>PLATECH</h1>
                        <h3>Registro</h3>
                    </div>
                    <div className='bodyForm'>
                        <form className='formInput'>
                            <div className='inputUser'>
                                <p>User</p>
                                <input type="text" value={user} onChange={(e)=>{setUser(e.target.value)}}/>
                            </div>
                            <div className='inputNombre'>
                                <p>Nombre</p>
                                <input type="text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
                            </div>
                            <div className='inputEmail'>
                                <p>email</p>
                                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                            <div className='inputPassword'>
                                <p>Password</p>
                                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                            </div>
                            <div className='inputButton'>
                                <input type="button" value="Registrarme" onClick={agregarUsuario}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Register;