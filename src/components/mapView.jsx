import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "../css/map.css";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { useSelector } from "react-redux";

import { getHeader } from "../redux/header/Slice";
import icon from '../imgs/icono_sensor.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ModalA from "./modal";
import { anthennaService } from "../services/anthenna";
import sensorId from "../services/sensor";

const MapView = ({...props}) => {

    const position = [5.070275, -75.513817]
    const HEADER   = useSelector(getHeader)

    const [Sensor, setSensor] = React.useState({})
    const [modalIsOpen, setIsOpen] = React.useState(false)

    const {antenas} = props

    const antenaIcon = new L.Icon({
    iconUrl:      icon,
    iconSize:     iconShadow, 
    shadowSize:   [50, 64], 
    iconAnchor:   [20, 40], 
    popupAnchor:  [0, -40] 
    });
  
    const ChartLineConfig = {
        data : {},
        tag  : []
    }


    const transform = (resultSensor) => {

        const names = ["anenoMeter", "hum", "lux" , "rain", "temp"]

        names.forEach((v) => {
            const history = v + 'History'
            const historyArray = []
            const array = resultSensor[history]
            
            array.valor.forEach((w,i) => {
                let content = {}
                content[v] = w


                const date = new Date(array.date[i])
                let [hour, minutes] = [date.getHours(), date.getMinutes()]

                hour    = parseFloat(hour) < 10 ? `0${hour}` : hour
                minutes = parseFloat(minutes) < 10 ? `0${minutes}` : minutes

                content["tiempo"] = `${hour}:${minutes}`

                historyArray.push(content)
            })

            ChartLineConfig.data[v] = historyArray
            
            ChartLineConfig.tag.push({
                x : "tiempo",
                y : v
            })
        })  
    }


    const clickOnAntena = async(e) => {
        const resultAnthenna = await (await anthennaService.GanthennaLotLat(HEADER,e.latlng)).data[0].idSensors
        const resultSensor = await (await sensorId(HEADER, resultAnthenna)).data
        
       
        if(resultSensor){
            transform(resultSensor)
        }
        
        setSensor(ChartLineConfig)
        setIsOpen(true)
    }

    return <>

    <div className="contMap">
        <MapContainer center={position} zoom={14} scrollWheelZoom={true} className = "map">
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {antenas ? antenas.map((v,i) => <Marker
                    position = {[v.lat, v.lon]}
                    icon = {antenaIcon}
                    eventHandlers={{click: (e) => {clickOnAntena(e)},}}
                    key = {i}
                />) : <></>}
        </MapContainer>
  </div>
  <ModalA modalIsOpen  = {modalIsOpen} setIsOpen = {setIsOpen} ChartLineConfig  = {Sensor}/>
  </>
}

export default MapView