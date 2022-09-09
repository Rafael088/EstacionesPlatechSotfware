import React from "react";

import { CButton, CRow, CCol } from "@coreui/react";

const NavBarButtons = ({...props}) => {
    
    const {setter} = props
    function hello() {
        alert('Hello');
    }
    return <>
    <div class="p-3 mb-5 bg-light rounded">
    <CRow className="justify-content-center">
        
    <CCol xs={3}>
        <CButton onClick = {() => {setter("prediccion")}} color = "success">
             Grafica de confiabilidad
        </CButton>
    </CCol>
    <CCol  xs = {4}>                    
        <CButton onClick = {() => {setter("sensor")}} color = "success">
             Grafica de estado de sensores
        </CButton>
    </CCol>
    </CRow>
    </div>
    </>
}

export default NavBarButtons