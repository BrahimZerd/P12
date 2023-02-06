import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


/**Gaugechart return a component represent the % of the objectiv necessary to reach a goal fixed by the athlete
 * @param {Object} props contains 2 differents score // we used to modify the class to get only 1 score and put it in a percentage radial chart
 * @param {array} score if the array which contain the 2 score recombine in 1 score.
  */
export default function Gaugechart (props) {


 
    

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
          
            clockWise
            dataKey="todayScore" 
            fill='#FF0000'
            
          /> 

          <text fill="#111" y={105} x={118} fontSize={18} fontWeight={700}>{props.score[0].todayScore} %</text>
          <text  y={130} x={101} fill="#74798C" fontSize={18} fontWeight={700} >
              de votre 
            </text>
            <text  y={149} x={104} fill="#74798C" fontSize={18} fontWeight={700}>
              objectif
            </text>
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
    score: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      todayScore: PropTypes.number,
    }))
  }