import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend } from "recharts"
import PropTypes from 'prop-types';


/**ScoreBarcart is a chart graph from Rechart framework displaying the weight of the athlete through the week and the calories burned related to these informations
 * @param {Object} props contains the object with 2 array / 1 activity for each day & 2 calory burned for each day
 * @param {Bool} active check if the tooltip is active or not
 * @param {array} payload contain the value of the array related to that selection put in another array
  */
  
   export default function BarChartScore(props) {     
    console.log(props.activity)
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltipBarchart">
            <p className="label">{`${payload[0].value}Kcal `}</p>
            <p className="label">{`${payload[1].value}kg`}</p>
          </div>
        );
      }
      return null;
    };


    return(
  <div className="barChartscoreDiv" >
    <BarChart style={{background: "#FFFFFF"}}  barSize={8} barGap={9} width={925} height={320} data={props.activity}title="Activité Quotidienne"  >
      <text x={35} y={35} style={{fontWeight: "500", fontSize:"15px"}}> Activité Quotidienne</text>
      <YAxis yAxisId="left" dataKey="calories" domain={['dataMin -150', 'dataMax +10' ]} hide={true}/>
    <CartesianGrid strokeDasharray="3 3"vertical={false}/>
    <XAxis dataKey="day" tick={true} tickLine={false}/>
    

    <YAxis
      domain={['dataMin -1', 'dataMax +5' ]}
      
      type="number"
      
      allowDataOverflow={true}
      dataKey="poids"
      axisLine={false}
      tickLine={false}
      tickCount={3}
      orientation="right" />
       
    <Tooltip  content={CustomTooltip}/>
    <Legend verticalAlign="top"wrapperStyle={{margin: "15px"}}stroke= "#9B9EAC"height={120}align="right"iconSize={10} iconType="circle"/>
    <Bar dataKey="calories" yAxisId="left" stackId={2} name="Calories brûlées (kCal)"fill="#E60000" radius={[10, 10, 0, 0]}/>
      <Bar maxBarSize={0}  name="Poids (kg)"dataKey="poids" fill="#282D30" radius={[10, 10, 0, 0]} stackId={1}  />
      
      
  </BarChart>
  </div>
  
  )} 


  BarChartScore.propTypes = {
    
    activity: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.number,
      poids: PropTypes.number,
      calories: PropTypes.number,

    }))
  }