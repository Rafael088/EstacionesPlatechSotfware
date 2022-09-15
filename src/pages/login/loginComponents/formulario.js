import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { toast, cssTransition} from 'react-toastify';

import { SetUser, getUser } from '../../../redux/oauth/Slice';
import { useDispatch, useSelector } from 'react-redux';

import oauth from "../../../services/login";

import 'react-toastify/dist/ReactToastify.css';
import "animate.css/animate.min.css";
import "./css/toast.css"

function Formulario(props){

    const {register, handleSubmit} = props 
    const dispatch = useDispatch()
    const user = useSelector(getUser)

    const toastId = React.useRef(null);

    const transition = cssTransition({
        enter: "swirl-in-fwd",
        exit: "swirl-out-bck"
    
    });

    const transitionE = cssTransition({
        enter: "bounce-top",
    });
      
    const submit = async (data) => {

        toastId.current = toast("Validando informacion", {
            autoClose : false, 
            transition: transitionE
        })
       
        var result  = await (await oauth(data)).data
    
        var settings = {}

        if(result !== "no puede ingresar"){

            localStorage.setItem('user', JSON.stringify(result))
            dispatch(SetUser(result))
            
            settings["type"]   = toast.TYPE.SUCCESS
            settings["render"] = "usuario valido"
            settings["href"]   = "./home"

            console.log("este es el local storage",user)
        }else{
            settings["type"]   = toast.TYPE.WARNING
            settings["render"] = "usuario o contraseña incorrecta"
            settings["href"]   = "./"  
        }

        setTimeout(()=>
            {   
                toast.update(toastId.current, { 
                type: settings["type"], 
                autoClose: 1000,
                render: settings["render"],
                transition:transition
                })

                window.location.href = settings['href']

            },1000)
        }


    return <>
    
        <form className='formInput' onSubmit={ handleSubmit((data) => submit(data))}>
            <div className='inputUser'>
                <p>Usuario</p>
                <div className="contInputIcon">
                    <AiOutlineUser className="icon"/>
                    <input className="inputText" type="text" {...register('email',{required:true})}/>
                </div>
            </div>
            <div className='inputPassword'>
                <p>Contraseña</p>
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