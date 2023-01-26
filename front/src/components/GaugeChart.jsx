import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';



export default function Gaugechart (props) {

    const CustomLabel = props => {
        return (
          <g>
            
            <text fill="#111" y={110} x={120} fontSize={18} fontWeight={700}>
              {props.value}  % 
            </text>
            <text  y={145} x={110} fill="#74798C" fontSize={18} fontWeight={700} >
              de votre 
            </text>
            <text  y={170} x={112} fill="#74798C" fontSize={18} fontWeight={700}>
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
           label={CustomLabel}
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


  Gaugechart.propTypes =  {
    props: PropTypes.object,
    score: PropTypes.array
  }