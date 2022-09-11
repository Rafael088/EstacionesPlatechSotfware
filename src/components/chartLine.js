import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ChartLine = (props) => {

    const {value, xtag, ytag} = {...props.props}
    const configMargin = { top: 0, right: 0, bottom: 0, left: 0 }
    
    return <>
    <ResponsiveContainer width="100%" height={200}>
        <LineChart  data={value} margin= {configMargin}>
          <Line type="monotone" dataKey={ytag} stroke="#8884d7" />
          <XAxis dataKey={xtag} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <Tooltip /> 
          <Legend />
          <YAxis />
        </LineChart>
    </ResponsiveContainer>
    </>
}

export default ChartLine