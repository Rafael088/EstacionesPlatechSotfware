import Cookies from 'universal-cookie';
import React, { useState } from 'react';
import { AiOutlineCheck, AiFillThunderbolt} from "react-icons/ai";
import '../../css/home.css';
import Ia from '../../components/Ia.js';
import Fallos from '../../components/Fallos.js';
import Welcome from '../../components/Welcome';
import Estado from '../../components/Estado';
const cookies = new Cookies();
function Home() {
    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

    function cerrarSesion() {
        
    }
    
    var [varIa, setVarIa] = useState(false);
    var [varFails, setVarFails] = useState(false);
    var [varWelcome, setVarWelcome] = useState(true);
    var [varEstado, setVarEstado] = useState(false);

    function changeCompIa() {
        setVarIa(true)
        setVarFails(false)
        setVarWelcome(false)
        setVarEstado(false)

    }
    function changeCompFails() {
        setVarIa(false)
        setVarFails(true)
        setVarWelcome(false)
        setVarEstado(false)

    }
    function changeCompWelcome() {
        setVarIa(false)
        setVarFails(false)
        setVarWelcome(true)
        setVarEstado(false)

    }
    function changeCompEstado() {
        setVarIa(false)
        setVarFails(false)
        setVarWelcome(false)
        setVarEstado(true)

    }
    return ( 
        <div className="contHome">
            
            <div className='contPublic'>
                <div className='contNavBar'>
                    <div className='contImg'>
                    </div>
                    <div className='contButtons'>
                        <div className={`btt ${varWelcome ? 'bttn':'btt'}`} onClick={changeCompWelcome} > 
                            {varWelcome?<AiOutlineCheck className='iconBtt'></AiOutlineCheck>: <> </>}
                            
                            <p>Welcome</p>
                        </div>
                        <div className={`btt ${varIa ? 'bttn':'btt'}`} onClick={changeCompIa}   >
                            {varIa?<AiOutlineCheck className='iconBtt'></AiOutlineCheck>: <> </>}
                            <p> Predicciones</p>
                        </div>
                        <div className={`btt ${varFails ? 'bttn':'btt'}`} onClick={changeCompFails}  >
                            {varFails?<AiOutlineCheck className='iconBtt'></AiOutlineCheck>: <> </>}
                            <p> Fallos</p>
                        </div>
                        <div className={`btt ${varEstado ? 'bttn':'btt'}`} onClick={changeCompEstado}  >
                            {varEstado?<AiOutlineCheck className='iconBtt'></AiOutlineCheck>: <> </>}
                            <p> Estado</p>    
                        </div>      
                    </div>
                    
                    <button onClick={cerrarSesion} >Cerrar Sesion</button>
                </div>
                <div className='contBody'>
                    <div className='contHead'>
                        <p><AiFillThunderbolt color='#02731E'/>Online</p>
                        <h1>Bienvenido {cookies.get('name')}</h1>
                        <p>{output}</p>
                    </div>
                    
                    {varIa?<Ia></Ia>: <></>}
                    {varFails? <Fallos></Fallos> : <></>}
                    {varWelcome? <Welcome></Welcome> : <></>}
                    {varEstado? <Estado></Estado> : <></>}
                </div>
            </div>
        </div>
     );
}

export default Home;