import ForgetPwOne from "../../components/ForgetPwOne";
import ForgetPwThree from "../../components/ForgetPwThree";
import ForgetPwTwo from "../../components/ForgetPwTwo";
import React, { useState } from 'react';
import AnimPages from "../../components/AnimPages";
import '../../css/forgetPw.css';

function ForgetPw() {
    var [varOne, setVarOne] = useState(true);
    var [varTwo, setVarTwo] = useState(null);
    var [varThree, setVarThree] = useState(null);
    var index = 0;
    function continuar() {
        switch (index) {
            case 0:
                setVarOne(false)
                setVarTwo(true)
                index++ 
                //Mandar Codigo al correo
                break;
            case 1:
                    setVarTwo(false)
                    setVarThree(true) 
                    index++
                    //Verificar el codigo
                    break;
            case 2:
                //Procedimiento de Cambiar contraseña
                break;
        }
    }
    function volver() {
        switch (index) {
            case 0:
                //Redireccionar A la pesteña de atras login
                break;
            case 1:
                    setVarTwo(false)
                    setVarOne(true) 
                    index--
                    //Volvio al componente 1
                    break;
            case 2:
                setVarThree(false)
                setVarTwo(false)
                //Volvio al componente 2
                break;
        }
    }

    return ( 
        <div className="contForget">
            <div className="contPublicf">
                <div className="contBody">
                    <h1>Restablecer Contraseña</h1>
                    <AnimPages state={index}/>
                    {varOne?<ForgetPwOne/>: <></>}
                    {varTwo?<ForgetPwTwo/>: <></>}
                    {varThree?<ForgetPwThree/>:<></>}
                </div>
                <div className="contFooter">
                    <input type="button" name="Volver" value="Volver" onClick={volver}/>
                    <input type="button" name="Continuar" value="Continuar" onClick={continuar}/>
                </div>
            </div>
        </div>
     );
}

export default ForgetPw;