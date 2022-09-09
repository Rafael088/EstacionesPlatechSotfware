import React from "react";

import { HiPaperAirplane} from "react-icons/hi";

import '../css/notFound.css';

const Errores = ({...props}) => {

    const {type, titulo1, titulo2} = props

    return <>
    <div className="contNotFound" onClick={() => {
        window.location.href = "../"
        }}>
        <div className="figure1"/>
        <div className="figure2"/>
        <HiPaperAirplane className="figure3"/>
        
        <div className={type} >
            {titulo1}
            <p>{titulo2}</p>
        </div>
    </div>
    
    </>

}

export default Errores