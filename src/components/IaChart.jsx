import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
import React, { useState, useEffect } from 'react';
import Cards from "./chirldrens/cards";

function IaChart() {
  let color = {succes: '#02731e', fail: '#DE3C21'};
    const data = [
        {
          tiempo: "1:00",

          pred: 0.1,
          foot: 0,
          ipred: 0
        },
        {
          tiempo: "2:00",

          pred: 0.2,
          foot: 0,
          ipred: 0
        },
        {
          tiempo: "3:00",

          pred: 0.3,
          foot: 0,
          ipred: 0
        },
        {
          tiempo: "4:00",

          pred: 0.4,
          foot: 0,
          ipred: 0
        },
        {
          tiempo: "5:00",

          pred: 0.5,
          foot: 0.6,
          ipred: -1.2
        },
        {
          tiempo: "6:00",

          pred: 0.6,
          foot: 0.7,
          ipred: -1.6
        },
        {
          tiempo: "7:00",

          pred: 0.7,
          foot: 0.8,
          ipred: -1.8
        }
      ];
      const [colorGrafph, setColorGrafph] = useState(" ");
      useEffect(() => {
        const value = data[data.length - 1]
        if(value.ipred=!0 || value.foot!=0 ){
          setColorGrafph(color.fail);
        }else{
          setColorGrafph(color.succes);
        }
        console.log(value)
        console.log(typeof(colorGrafph))
      }, [])
      
    return ( 
        <>
        <div className="contConfiaModal">
        <Cards titulo="Grafica de Predicción" text="Cuando las lineas se separen se lanzara una alerta por posible fallo"/>
        <div className="confiaGraf">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                data={data}
                margin={{
                    top: 50,
                    right: 0,
                    left: 0,
                    bottom: 50
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tiempo" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="pred"
                    stackId="1"
                    stroke="#65FA6B"
                    fill="#fff"
                />
                <Area
                    type="monotone"
                    dataKey="foot"
                    stackId="1"
                    stroke="#65FA6B"
                    fill="#fff"
                />
                <Area
                    type="monotone"
                    dataKey="ipred"
                    stackId="1"
                    stroke="#65FA6B"
                    fill={`${colorGrafph}`}
                />
            </AreaChart>
        </ResponsiveContainer>
        </div>
        <Cards titulo="Historial de Predicciones" text="Mes anterior:" datos="No hubo Riesgos"/>
        </div>
        
        </>
     );
}

export default IaChart;