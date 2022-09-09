import React, {useEffect} from  "react";
import { SpinnerCircular }  from  'spinners-react'
import { useSelector }    from  "react-redux";
import { getHeader }      from  "../redux/header/Slice";
import Ranthenna          from  "../services/anthenna";
import MapView            from  "./mapView";


import '../css/estado.css';
import HeadComps from "./HeadComps";


function Estado() {

    const [Antenas , setAntenas] = React.useState(null)
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
                <h2>Estado de los sensores</h2>
                <MapView antenas = {Antenas}/>
            </div>
        </>
    }

    const waitComponent = () => {
        return <>
        <div className="contEstado">
            <SpinnerCircular size = "20%"/>
        </div>   
        </>
    }

    return <>
        {Antenas ? MapComponent() : waitComponent()} 
     </>
}

export default Estado;