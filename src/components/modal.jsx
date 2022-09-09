import React from "react";

import {

    CModal, 
    CModalHeader, 
    CModalBody,
    CModalFooter,
    CButton,
    CPagination, 
    CPaginationItem
} 
    from '@coreui/react'

import WidgetChart from "./widget";

import 'bootstrap/dist/css/bootstrap.min.css'

const ModalA = ({...props}) => {

    const {modalIsOpen, setIsOpen, ChartLineConfig} = props
    const [titulos , setTitulos] = React.useState(["temp","hum"])

    const pages = [
        ["temp"       , "hum"],
        ["lux"        , "temp"],
        ["anenoMeter" , "rain"]
    ]

    const closeModal = () => {
        setIsOpen(false);
    }

    return <>

      <CModal 
        fullscreen
        visible={modalIsOpen}
        onClose={closeModal}
      >
    <CModalHeader align = "center"> 
            <h2>
                Estado de sensores
            </h2>
    </CModalHeader>
    <CModalBody>
        {titulos.map((v,i) => <WidgetChart 
                                ChartLineConfig = {ChartLineConfig} 
                                titulo = {`${v} actual`} 
                                flag = {v} 
                                key = {i}
        />)}

    </CModalBody>

    <CPagination align="center" aria-label="Page navigation example">
        {pages.map((v,i) => <CPaginationItem onClick = {() => setTitulos(v)}> {i} </CPaginationItem>)}
    </CPagination>

    <CModalFooter>
        <CButton color="danger" onClick = {() => {closeModal()}}>Cerrar</CButton>
    </CModalFooter>

      </CModal>
    </>
}

export default ModalA