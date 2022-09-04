import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ChartLine = (props) => {

    const {width, height, configMargin, data, tags} = {...props.props}
    
    return <>
    <div>
    <ResponsiveContainer width="100%" height={200}>
        <LineChart  data={data} margin= {configMargin}>
          <Line type="monotone" dataKey={tags.y} stroke="#8884d7" />
          <XAxis dataKey={tags.x} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <Tooltip /> 
          <Legend />
          <YAxis />
        </LineChart>
    </ResponsiveContainer>
    </div>
    </>
}

export default ChartLine