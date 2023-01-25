import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend } from "recharts"

  
   export default function BarChartScore(props) {     
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltipBarchart">
            <p className="label">{`${payload[1].value}Kcal `}</p>
            <p className="label">{`${payload[0].value}kg`}</p>

          </div>
          
        );
      }
    
      return null;
    };
    return(
<div className="barChartscoreDiv" >
  
  <BarChart
  style={{background: "#FFFFFF"}}  
  
  barSize={7}
  barGap={9} 
  width={925} 
  height={320} 
  data={props.activity}
  title="Activité Quotidienne"
  
  >
    <text x={35} y={35} style={{fontWeight: "500", fontSize:"15px"}}> Activité Quotidienne</text>
    
    <CartesianGrid strokeDasharray="3 3"
    vertical={false}
     />
    <XAxis dataKey="day"
    
    tick={true}
    tickLine={false}
     />
     
    <YAxis
    domain={["dataMin -1", "dataMax + 1"]}
    scale="sequential"
    type="number"
    
    allowDataOverflow={true}
    dataKey="poids"
    axisLine={false}
    tickLine={false}
    tickCount={3}
    orientation="right" />
    <Tooltip 
    content={CustomTooltip}/>
    <Legend
    verticalAlign="top"
    wrapperStyle={{
      margin: "15px",
      
  }}
  stroke= "#9B9EAC"
     height={120}
    align="right"
    iconSize={10}
    iconType="circle"
    
     />
    <Bar maxBarSize={0} name="Poids (kg)"dataKey="poids" fill="#282D30" radius={[10, 10, 0, 0]}  />
    <Bar dataKey="calories" name="Calories brûlées (kCal)"fill="#E60000" radius={[10, 10, 0, 0]}/>
  </BarChart>
  </div>
  
  )} 