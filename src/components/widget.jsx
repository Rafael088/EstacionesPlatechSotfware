import React from 'react';
import '../css/widgets.css';
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
    <div className='contGraphi'>
        <div className='contWidget'>
            <CWidgetStatsC
            className="widget"
            progress={{ color: 'success', 
                        value: value}}

            title = {<h3>{titulo}</h3>}
            icon = {<FcCapacitor size={'3em'}/>}
            value = {<h1>{`${value} ${simbols?.[flag]}`}</h1>}
            />
        </div> 
        <div className='contChartLine'> 
            <ChartLine props = {ChartLineConfig}/>
        </div> 
    </div> 
    </>
}

export default WidgetChart