import React, {useEffect, useState} from  "react";
import { SpinnerCircular }  from  'spinners-react'
import { useSelector }    from  "react-redux";
import { getHeader }      from  "../redux/header/Slice";
import Ranthenna          from  "../services/anthenna";
import MapView            from  "./mapView";


import '../css/estado.css';
import HeadComps from "./HeadComps";


function Estado() {

    const [Antenas , setAntenas] = useState(null)
    const HEADER = useSelector(getHeader)

    useEffect(()=> {
            const asyncEffect = async() =>{
                
                try{
                    const antenas = []
                    const result  = await (await Ranthenna(HEADER)).data

                    result.map((v) => antenas.push({
                        lat : parseFloat(v.ubication.latitud),
                        lon : parseFloat(v.ubication.longitud)
                    }))

                    setAntenas(antenas)

                }catch(e){
                    localStorage.removeItem("user")
                    window.location.href = "../session-expired"
                }
            }
            
            asyncEffect()
    },[])

    const MapComponent = () => {
      
        return <>
            <div className="contEstado">
                <HeadComps titulo="Estado de los Sensores"/>
                <div className="contEstadoBody">
                    <MapView antenas = {Antenas}/>
                </div>
            </div>
        </>
    }

    const waitComponent = () => {
        return <>
        <div className="contEstado">
                <div className="contEstadoBody">
                    <SpinnerCircular size = "20%"/>
                </div>
        </div>   
        </>
    }

    return <>
        {Antenas ? MapComponent() : waitComponent()} 
     </>
}

export default Estado;