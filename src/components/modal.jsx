import React from "react";

import {
    CWidgetStatsB, 
    CCol, 
    CRow, 
    CModal, 
    CModalHeader, 
    CModalBody,
    CModalFooter,
    CButton,
    CPagination, 
    CPaginationItem
} 
    from '@coreui/react'

import 'bootstrap/dist/css/bootstrap.min.css'

import WidgetChart from "./widget";

  const ChartLineConfig = {
    width: 650,
    height: 200,
    configMargin: { top: 0, right: 0, bottom: 0, left: 0 },
    data:[
        {"temperatura": 20,  tiempo:"1:00"},
        {"temperatura": 40,  tiempo:"2:00"},
        {"temperatura": 20,  tiempo:"3:00"},
        {"temperatura": 10,  tiempo:"4:00"},
        {"temperatura":-10,  tiempo:"5:00"},
    ],
    tags:{
        x :"tiempo",
        y : "temperatura"
    }
}
const ModalA = ({...props}) => {
    let subtitle;
    const {modalIsOpen, setIsOpen} = props
    const [titulos , setTitulos] = React.useState(["temperaturas","humedad"])

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return <>

      <CModal 
        fullscreen
        visible={modalIsOpen}
        onClose={closeModal}
      >
    <div class="align-content-lg-centerr">
    <CModalHeader align = "center"> 
        <h2>
            Estado de sensores
        </h2>
    </CModalHeader>
    </div>
    <CModalBody>
        {titulos.map((v) => <WidgetChart ChartLineConfig = {ChartLineConfig} titulo = {`${v} actual`}/>)}
    </CModalBody>

    <CPagination align="center" aria-label="Page navigation example">
   
    <CPaginationItem onClick={() =>
        {
            setTitulos(["temperatura", "humedad"])
        }}>1
    </CPaginationItem>
    <CPaginationItem onClick={() =>
        {
            setTitulos(["luminocidad", "direccion del viento"])
        }}>2
    </CPaginationItem>
    <CPaginationItem onClick={() =>
        {
            setTitulos(["velocidad del viento", "precipitacion"])
        }}>3
    </CPaginationItem>
    </CPagination>
    <CModalFooter>
        <CButton color="danger" onClick = {() => {closeModal()}}>Cerrar</CButton>
    </CModalFooter>
      </CModal>
    </>
}

export default ModalA