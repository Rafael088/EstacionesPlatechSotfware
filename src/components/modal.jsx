import React from "react";
import '../css/modal.css';
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
import NavBarButtons from "./navBarButtons";
import IaChart from "./IaChart";
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalA = ({...props}) => {

    const {modalIsOpen, setIsOpen, ChartLineConfig} = props
    const [titulos , setTitulos] = React.useState(["temp","hum"])
    const [grafica, setGrafica] = React.useState("sensor")

    const pages = [
        ["temp"       , "hum"],
        ["lux"        , "temp"],
        ["anenoMeter" , "rain"]
    ]

    const closeModal = () => {
        setIsOpen(false);
    }
    const ShowSensorChart = () => {
        return <>
            {titulos.map((v,i) => <WidgetChart 
                        ChartLineConfig = {ChartLineConfig} 
                        titulo = {`${v} actual`} 
                        flag = {v} 
                        key = {i}
            />)}
        </>
    }

    return <>

      <CModal 
        fullscreen
        visible={modalIsOpen}
        onClose={closeModal}
      >
        <div className="contModal"> 
            <div className="modalHeader">
                <div className="headerTitulo">
                    <h2>
                        Estado de Sensores
                    </h2>
                </div>
                <NavBarButtons setter = {setGrafica}/>
            </div>
            <div className="modalBody">
                {grafica == "sensor" ? ShowSensorChart() : <IaChart/>}
            </div>
            <div className="modalFooter">
                <p>@platech</p>
                <div className="buttonsFooter">
                    {pages.map((v,i) => <button className="btnPagi" onClick = {() => setTitulos(v)}> {i} </button>)}
                    
                </div>
                <button className="btnCerrar" onClick = {() => {closeModal()}}>Cerrar</button>
            </div>
        </div>
      </CModal>
    </>
}

export default ModalA