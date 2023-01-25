import React from 'react';
import { LineChart, Line, XAxis, ReferenceArea,  Tooltip } from 'recharts';




export default function ChartLine(props) {
   
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${payload[0].value} min`}</p>
            </div>
            
          );
        }
      
        return null;
      };
     

    return (
    <div>
      
      <LineChart
        
        width={258}
        height={263}
        data={props.array}
      >
      <XAxis  
       axisLine={false} 
       tickLine={false}
       tick={{fontSize: "12px" }}
       dataKey="day" 
      />

      <Tooltip
        cursor={false}
        content={<CustomTooltip />}
      />

     <Line
      strokeLinecap="round"
      strokeWidth={1.5}
      activeDot={{
        fill: '#fff',
        stroke: 'rgba(255, 255, 255, 0.2)',
        strokeWidth: 8,
        r: 4,
        className: 'boxShadow',
      }}
      stroke='#FFFFFF'
      type="monotone"
      dataKey="sessionLength"
      dot={false}
        />
      <ReferenceArea 
        content={<CustomTooltip />}
        />
        <text fill="white" opacity={0.5} className="textSession"x={35} y={35}>Durée moyenne des</text>
        <text fill="white" opacity={0.5} x={35} y={55}>sessions</text>
      </LineChart>
      </div>
    );
  }
