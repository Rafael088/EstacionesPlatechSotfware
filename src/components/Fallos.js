import '../css/fallos.css';
import HeadComps from './HeadComps';
import TablaFallos from './TablaFallos';
import React, { useState } from 'react';

function Fallos() {
    const [datosT, setDatosT] = useState([
        {
            id:"1",
            name:"Rafael"
           },
           {
            id:"2",
            name:"Diego"
           },
           {
            id:"2",
            name:"Juan"
           },
           {
            id:"3",
            name:"Platech"
           },
           {
            id:"4",
            name:"Chec"
           },
           {
            id:"2",
            name:"Diego"
           },
           {
            id:"2",
            name:"Juan"
           },
           {
            id:"3",
            name:"Platech"
           },
           {
            id:"4",
            name:"Chec"
           },
           {
            id:"2",
            name:"Diego"
           },
           {
            id:"2",
            name:"Juan"
           },
           {
            id:"3",
            name:"Platech"
           },
           {
            id:"4",
            name:"Chec"
           },
           {
            id:"2",
            name:"Diego"
           },
           {
            id:"2",
            name:"Juan"
           },
           {
            id:"3",
            name:"Platech"
           },
           {
            id:"4",
            name:"Chec"
           },
           {
            id:"2",
            name:"Diego"
           },
           {
            id:"2",
            name:"Juan"
           },
           {
            id:"3",
            name:"Platech"
           },
           {
            id:"4",
            name:"Chec"
           }
    ]);
    return ( 
        <div className="contFallos">
            <HeadComps titulo="Registro de Fallos" />
            <div className='contFallosBody'>
                <TablaFallos datos={datosT}/>
            </div>
        </div>
     );
}

export default Fallos;