import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Legend } from "recharts"

  
   export default function BarChartScore(props) {     
    console.log(props.activity)
    return(
<div className="barChartscoreDiv" >
  <p className="barChartTitle">Activité quotidienne</p>
  <BarChart
  style={{background: "#FFFFFF"}}  

  barSize={7}
  barGap={9} 
  width={835} 
  height={220} 
  data={props.activity}>
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
    <Tooltip />
    <Legend
    verticalAlign="top" height={60}
    align="right"
    iconSize={8}
    iconType="circle"
     />
    <Bar maxBarSize={0} dataKey="calories" fill="#282D30" radius={[10, 10, 0, 0]} />
    <Bar dataKey="poids" fill="#E60000" radius={[10, 10, 0, 0]}/>
  </BarChart>
  </div>
  
  )} 