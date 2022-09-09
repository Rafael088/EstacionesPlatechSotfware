import { createSlice } from "@reduxjs/toolkit";

const ChartLineConfig = {
    width: 650,
    height: 200,
    configMargin: { top: 0, right: 0, bottom: 0, left: 0 },
    data : [],
    tag  : []
}

const transform = (resultSensor) => {
    const names = ["anenoMeter", "hum", "lux" , "rain", "temp"]

    names.map((v) => {
        const history = v + 'History'
        const historyArray = []
        const array = resultSensor[history]
        
        array.valor.map((w,i) => {
            let content = {}
            content[v] = w

            const date = new Date(array.date[i])
            const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()]

            content["tiempo"] = `${hour}:${minutes}:${seconds}`
            historyArray.push(content)
        })

        ChartLineConfig.data.push(historyArray)
        console.log(ChartLineConfig)

        ChartLineConfig.tag.push({
            x : "tiempo",
            y : v
        })
    })
}

export const sensorSlice = createSlice({
    name:'sensor',
    initialState: ChartLineConfig,
    reducers:{
        SetSensor: (state, action) => {
            console.log("entre a dispatch")
            //transform(action.payload)
            //console.log(ChartLineConfig)
            //state.value = action.payload
        } 
    }
})

export const {SetSensor} = sensorSlice.actions
export const getSensor = (state) => state.sensor.value
export default sensorSlice.reducer