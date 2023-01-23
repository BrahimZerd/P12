import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis,ResponsiveContainer } from 'recharts';



export default function RadialBarChart (props){
 
  
    return (
        <div  className="radialChart" style={{ width: '263px', height: "258px",  }}>
      <ResponsiveContainer >
        <RadarChart  cx="50%" cy="50%" outerRadius="80%" data={props.performance.data} >
          <PolarGrid
          radialLines={false} />
          <PolarAngleAxis dataKey="kind" fontSize="10px" margin="10px" />
          <Radar name="Mike" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      </div>
    );
  
}
