import React from 'react';
import {
    CWidgetStatsC, 
    CCol,
    CRow,
    } from '@coreui/react'

import ChartLine from './chartLine';
import IaChart from './IaChart';

import { FcCapacitor } from "react-icons/fc";

const WidgetChart = ({...props}) => {
    const {ChartLineConfig , titulo, flag} = props

    ChartLineConfig.value = ChartLineConfig.data?.[flag]
    ChartLineConfig.ytag = flag
    ChartLineConfig.xtag = "tiempo"
    
    const value = ChartLineConfig
                    .value[ChartLineConfig.value.length - 1]
                    ?.[flag]

    const simbols = {
        temp : "C",
        hum  : "%",
        lux  :  "",
        anenoMeter : "m/s",
        rain : "",

    }
    return <>
    <CRow>
        <CCol xs={1}>
            
            <CWidgetStatsC
            className="mb-3"
            progress={{ color: 'success', 
                        value: value}}

            title = {<h3>{titulo}</h3>}
            icon = {<FcCapacitor size={'3em'}/>}
            value = {<h1>{`${value} ${simbols?.[flag]}`}</h1>}

            />
            
        </CCol> 
        <CCol xs={4}> 
            <ChartLine props = {ChartLineConfig}/>
        </CCol> 
        <CCol xs={4}> 
            <IaChart/>
        </CCol> 
    </CRow> 
    </>
}

export default WidgetChart