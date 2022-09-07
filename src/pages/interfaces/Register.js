import React, { useState } from 'react';
import uniquid from 'uniqid';
import axios from 'axios';
import '../../css/register.css';
function Register() {
    
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    async function agregarUsuario() {
   axios.post('/api/usuario/agregarUsuario', {name: {nombre},
                email: {email},
                user:{user},
                password:{password},
                rol:'admin',
                })
                    .then(res=> {alert(res.data)})
                    .then(err => {console.log(err)})
                }
    
    return ( 
        <div className="contRegister">
            <div className='imgLeft'>
                <div className='imgLogo'>
                    
                </div>
                
            </div>
            <div className='contForm'>
                    <div className='headerForm'>
                        <h3>Registrate</h3>
                    </div>
                    <div className='bodyForm'>
                        <form className='formInput'>
                            <div className='input'>
                                <p>Usuario:</p>
                                <input type="text" placeholder='User01' value={user} onChange={(e)=>{setUser(e.target.value)}}/>
                            </div>
                            <div className='input'>
                                <p>Nombre Completo:</p>
                                <input type="text" placeholder='Nombres Apellidos' value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
                            </div>
                            <div className='input'>
                                <p>Correo Electronico:</p>
                                <input type="text" placeholder='correo01@gmail.com' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                            <div className='input'>
                                <p>Contraseña:</p>
                                <input type="password" placeholder='**************' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                            </div>
                            <div className='inputButton'>
                                <input type="button" value="Volver" />
                                <input type="button" value="Registrarme" onClick={agregarUsuario}/>
                            </div>
                        </form>
                    </div>
                
            </div>
        </div>
     );
}

export default Register;