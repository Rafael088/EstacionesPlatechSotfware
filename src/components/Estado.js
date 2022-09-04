import React from "react";
import MapView from "./mapView";
import '../css/estado.css';

function Estado() {
    return ( 
        <div className="contEstado">
            <h2>Estado de los sensores</h2>
            <MapView />
        </div>
     );
}

export default Estado;