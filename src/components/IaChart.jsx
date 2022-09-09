import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from "recharts";

function IaChart() {
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
          ipred: -2
        }
      ];
    
    return ( 
        <>
        <ResponsiveContainer width="100%" height={200}>
            <AreaChart
                data={data}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
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
                    stroke="#fff"
                    fill="#fff"
                />
                <Area
                    type="monotone"
                    dataKey="foot"
                    stackId="1"
                    stroke="#fff"
                    fill="#fff"
                />
                <Area
                    type="monotone"
                    dataKey="ipred"
                    stackId="1"
                    stroke="#DE3C21"
                    fill="#DE3C21"
                />
            </AreaChart>
        </ResponsiveContainer>
        </>
     );
}

export default IaChart;