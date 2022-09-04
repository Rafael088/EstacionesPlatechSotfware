import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "../css/map.css";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

import icon from '../imgs/icono_sensor.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ModalA from "./modal";

const MapView = ({...props}) => {

    const position = [5.070275, -75.513817]
    
    const antenas = [
        {
            lat:5.070275,
            lon:-75.513817
        
        },
        {
            lat:5.071275,
            lon:-75.513817
        }
    ]

    const iconVerde = new L.Icon({
    iconUrl:      icon,
    iconSize:     iconShadow, 
    shadowSize:   [50, 64], 
    iconAnchor:   [20, 40], 
    popupAnchor:  [0, -40] 
    });

    const [modalIsOpen, setIsOpen] = React.useState(false)

    return <>

    <div className="contMap">
        <MapContainer center={position} zoom={14} scrollWheelZoom={true} className = "map">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {antenas.map((v,i) => <Marker
                    position = {[v.lat, v.lon]}
                    icon = {iconVerde}
                    eventHandlers={{click: (e) => {setIsOpen(true)},}}
                    key = {i}
                />)}
        </MapContainer>
  </div>
  <ModalA modalIsOpen  = {modalIsOpen} setIsOpen = {setIsOpen}/>
  </>
}

export default MapView