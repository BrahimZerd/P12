import React from 'react';
import { RadialBarChart, RadialBar, Legend, LabelList,  ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  
 
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default function Gaugechart (props) {

   
    const CustomLabel = props => {
        return (
          <g>
            
            <text x={props.viewBox.x} y={props.viewBox.y} fill="#111" dy={120} dx={130} fontSize={18} fontWeight={700}>
              {props.value}  % 
            </text>
            <text  dy={145} dx={120} fill="#74798C" fontSize={18} fontWeight={700} >
              de votre 
            </text>
            <text  dy={170} dx={122} fill="#74798C" fontSize={18} fontWeight={700}>
              objectif
            </text>
          </g>
        );
      };

    
    return (
        <div className="gaugechart"  style={{ width: '263px', height: "258px",}}>
      <ResponsiveContainer >
        <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="60%"  
          startAngle={90}
          endAngle={210} 
          style={{background: "white"}}
          
          barSize={10} data={props.score}>
          <RadialBar
            cornerRadius={5}
            minAngle={65}
           label={CustomLabel }
            clockWise
            dataKey="todayScore" 
            fill='#FF0000'
            
          /> 
          <text
        x={30}
        y={33}
        fontWeight={500}
        fontSize="16px"
        textAnchor="middle"
        dominantBaseline="middle"

        >Score</text>
        </RadialBarChart>
      </ResponsiveContainer>
      </div>
    );
  }
