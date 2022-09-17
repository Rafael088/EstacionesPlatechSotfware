import '../css/analitica.css';
import Cards from './chirldrens/cards';
import HeadComps from './HeadComps';
import { FcDoughnutChart, FcDownLeft, FcClock } from "react-icons/fc";
import React, { useState } from 'react';
import TiempoRest from './TiempoRest';
import Sectores from './Sectores';
import GraficaEPE from './GraficaEPE';
import CardBandLeft from './CardEPE';
import CardInfo from './CardInfo';

function Analitica() {
    const [position, setPosition] = useState(0);
    return ( 
        <div className="contIa">
            <HeadComps titulo="Análisis Mensual" />
            <div className='contIaBody'>
                <div className='contCenter'>
                    <div className='bandLeft'>
                        {position === 0 ?<>
                         <CardBandLeft/>
                        </>:
                        <>
                            {position === 1 ? <><CardInfo titulo="Reacción" datos="Tiempo de restauración del servicio en el ultimo mes. comparando la causa del fallo, con el tiempo en horas en que se solucionó" color='contCardInfo'/><button className='btnBand' onClick={()=>setPosition(0)}>Volver <FcDownLeft className='iconBand'/> </button></>:
                             <><CardInfo titulo="Grafica de sectores" datos="Muestra los sectores con mayor frecuencia de fallos en el ultimo mes" color='contCardInfo'/><button className='btnBand' onClick={()=>setPosition(0)}>Volver <FcDownLeft className='iconBand'/> </button></>  }
                        </>
                        }
                    </div>
                    <div className='dashCenter'>
                        {position === 0 ? <GraficaEPE/>:<></>}
                        {position === 1 ? <TiempoRest/>:<></>}
                        {position === 2 ? <Sectores/>:<></>}
                    </div>
                </div>
                <div className='bandBottom'>
                    <button className='btnBand' onClick={()=>setPosition(1)}>
                        <Cards titulo="Tiempo" color='contCard'>
                            <FcClock className='iconBand'/>
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