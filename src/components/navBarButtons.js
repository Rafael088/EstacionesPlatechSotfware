import React from "react";
import { FcBarChart, FcBullish } from "react-icons/fc";
import { CButton, CRow, CCol } from "@coreui/react";

function NavBarButtons({...props}){
    
    const {setter} = props
    function hello() {
        alert('Hello');
    }
    return <>
    <div className="contButtonsModal">
        <button onClick = {() => {setter("prediccion")}}>
            <FcBullish className="icon"/> Confiabilidad
        </button>         
        <button onClick = {() => {setter("sensor")}} >
            <FcBarChart className="icon"/> Varibales
        </button>
    </div>
    </>
}

export default NavBarButtons