import React from 'react';
import {
    CWidgetStatsC, 
    CCol,
    CRow,
    CCard,
    CCardBody,
    CCardTitle
    } from '@coreui/react'

import ChartLine from './chartLine';


import { FcCapacitor } from "react-icons/fc";

const WidgetChart = ({...props}) => {
    const {ChartLineConfig , titulo} = props
    return <>
    <CRow>
        <CCol xs={6}>
            <CWidgetStatsC
            className="mb-3"
            progress={{ color: 'success', value: 20 }}
            title = {titulo}
            icon = {<FcCapacitor size={'3em'}/>}
            value="20"
            />
            
        </CCol> 
        <CCol xs={6}> 
        <ChartLine props = {ChartLineConfig}/>
        </CCol> 
    </CRow> 
    </>
}

export default WidgetChart