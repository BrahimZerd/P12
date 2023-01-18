import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceArea, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
const data = [
  {
    name: 'L',
    uv: 40,
    
  },
  {
    name: 'M',
    uv: 30,
  
  },
  {
    name: 'M',
    uv: 20,
    
  },
  {
    name: 'J',
    uv: 20,
    
  },
  {
    name: 'V',
    uv: 90,
    
  },
  {
    name: 'S',
    uv: 23,
    
  },
  {
    name: 'D',
   
    uv: 43,
   
  },
  
];

export default function ChartLine() {

    const [showCircle, setShowCircle] = useState(false);

  const onMouseOver = () => {
    setShowCircle(true);
  };

  const onMouseOut = () => {
    setShowCircle(false);
  };

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
        
      <LineChart
      
      
      
       style={{position: 'absolute'}}
       
        width={358}
        height={263}
        
        data={data}
       
      >
        <XAxis  
    
        
        
        axisLine={false} 
        tickLine={false}
        
        tick={{fontSize: "12px" }}
        
         dataKey="name" />
         
        
         <Tooltip
         contentStyle={{backgroundColor:'blue'}} 
         cursor={false}
         content={<CustomTooltip />}/>
         
        <Line
        strokeLinecap="round"
            strokeWidth={2}
           
          
          type="monotone"
          dataKey="uv"
          stroke="#FFFFFF"
          dot={false}
          activeDot={{ r: 7 }}
        />
        <text className="customLinechart"x="20" y="40">Durée moyenne des <br></br> sessions</text>
      </LineChart>
    );
  }
