import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "../css/map.css";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


const MapView = ({...props}) => {
    const position = [5.070275, -75.513817]

const iconVerde = new L.Icon({

   iconUrl:      icon,

   iconSize:     iconShadow, 

   shadowSize:   [50, 64], 

   iconAnchor:   [20, 40], 

   popupAnchor:  [0, -40] 

});




    return <>

    <div className="contMap">
        <MapContainer center={position} zoom={14} scrollWheelZoom={true} className = "map">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon = {iconVerde} onClick = {() => console.log("me hicieron click")}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
        </MapContainer>
  </div>
    </>
}

export default MapView