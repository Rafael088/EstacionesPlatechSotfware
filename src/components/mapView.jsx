import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "../css/map.css";
import "leaflet/dist/leaflet.css";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapView = ({...props}) => {
    const position = [51.505, -0.09]
    return <>

    <div className="contMap">
        <MapContainer center={position} zoom={10} scrollWheelZoom={true} className = "map">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
        </MapContainer>
  </div>
    </>
}

export default MapView