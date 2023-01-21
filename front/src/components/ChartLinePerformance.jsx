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
      <p className="customLinechart">Durée moyenne des  sessions</p>
      <LineChart
        style={{position: 'absolute'}}
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
        
      </LineChart>
      </div>
    );
  }
