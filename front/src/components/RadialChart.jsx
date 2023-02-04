import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis,ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';



/**Radialbarchart is a chart that show the athlete the best & worst kind of performance he has, and where he should practice to up these perf
 * @param {Object} props contains user kinds + for each kinds, the performance
 * @param {array} data contains the array of performance
  */


export default function RadialBarChart (props){
  //custom polarangleaxis for a better display of kinds elements
  function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    return (
      <text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 12}
        x={x + (x - cx) / 2000}
      >
        {payload.value}
      </text>
    );
  }
  
    return (
        <div  className="radialChart" style={{ width: '263px', height: "258px" }}>
      <ResponsiveContainer >
        <RadarChart  cx="50%" cy="50%" outerRadius="80%" data={props.performance.data}  >
          <PolarGrid
          radialLines={false} />
          <PolarAngleAxis dataKey="kind" fontSize="12px" tick={props => renderPolarAngleAxis(props)} />
          <Radar name="Mike" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      </div>
    );
  
}


RadialBarChart.propTypes = {
  props: PropTypes.object,
  performance: PropTypes.object,
  data: PropTypes.array
}