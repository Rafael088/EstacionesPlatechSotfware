import '../css/analitica.css';
import Cards from './chirldrens/cards';
import HeadComps from './HeadComps';
import { FcLandscape, FcDoughnutChart, FcDownLeft, FcCollect, FcScatterPlot, FcLineChart } from "react-icons/fc";
import React, { useState } from 'react';
import Clima from './Clima';
import Sectores from './Sectores';
import GraficaEPE from './GraficaEPE';

function Analitica() {
    const [position, setPosition] = useState(0);
    return ( 
        <div className="contIa">
            <HeadComps titulo="Análisis Mensual" />
            <div className='contIaBody'>
                <div className='contCenter'>
                    <div className='bandLeft'>
                        {position === 0 ?<>
                        <Cards titulo="Efectividad" text="60%" datos="El Ultimo Mes" color='contCard one'>
                            <FcLineChart className='iconBand'/>
                        </Cards>
                        <Cards titulo="Precision" text="70%" datos="El Ultimo Mes" color='contCard two'>
                            <FcCollect className='iconBand'/>
                        </Cards>
                        <Cards titulo="Exactitud" text="80%" datos="El Ultimo Mes" color='contCard three'>
                            <FcScatterPlot className='iconBand'/>
                        </Cards></>:
                        <><button className='btnBand' onClick={()=>setPosition(0)}>Volver <FcDownLeft className='iconBand'/> </button></>
                        }
                    </div>
                    <div className='dashCenter'>
                        {position === 0 ? <GraficaEPE/>:<></>}
                        {position === 1 ? <Clima/>:<></>}
                        {position === 2 ? <Sectores/>:<></>}
                    </div>
                </div>
                <div className='bandBottom'>
                    <button className='btnBand' onClick={()=>setPosition(1)}>
                        <Cards titulo="Clima" color='contCard'>
                            <FcLandscape className='iconBand'/>
                        </Cards>
                    </button>
                    <button className='btnBand' onClick={()=>setPosition(2)}>
                        <Cards titulo="Sectores" color='contCard'>
                            <FcDoughnutChart className='iconBand'/>
                        </Cards>
                    </button>
                </div>
            </div>
        </div>
     );
}

export default Analitica;