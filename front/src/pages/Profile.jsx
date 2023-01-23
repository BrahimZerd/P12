import Header from '../components/Header'
import Aside from '../components/Aside'
import Bonjour from '../components/Bonjour'
import { useParams } from 'react-router-dom'
import getMockedDataById from '../data/getMockeddata'
import { useEffect, useState } from 'react'
import EnergyIndicator from '../components/BurnedEnergy'
import InsentiveSentence from '../components/Incentive'
import ChartLine from '../components/ChartLinePerformance'
import BarChartScore from '../components/ScoreBarchart'
import RadialBarChart from '../components/RadialChart'
import Gaugechart from '../components/GaugeChart'



function Profile() {

    const [user, setUser] = useState({});
    const [activity, setActivity] = useState({})
    const [averageSessions, setAverage] = useState( {})
    const [performance, setPerformance] = useState({})
    const [score, setScore] = useState({})
    

    
    const {id} = useParams();
        useEffect(() => {
            getMockedDataById(id, setUser, setActivity, setAverage,setPerformance,setScore);
        }, [id]);
        

return(
    <div>
       {user.keyData ? 
        <div>
        <Header />
        
        <Bonjour 
        userInfos = {user.userInfos}
        todayScore = {user.todayScore}
         />
          <BarChartScore 
          activity = {activity.sessions}
          
          />
         <InsentiveSentence 
         score = {user.score}
         todayScore = {user.todayScore}
         />
        
         
         <div className="categories">
        {user.keyData.map(indicator => 
            <EnergyIndicator
            {...indicator} key={indicator.id} />)}
            </div>
        <div className="flexCharts">   
            <ChartLine 
          
            array={averageSessions.sessions}
            userId={averageSessions.userId}/>
        <RadialBarChart 
            performance={performance}
            />
        <Gaugechart 
           score= {[score]} 
        />    
        </div>
            
        </div>
        : <div>No DataFound</div>}
    </div>
)

}

export default Profile;