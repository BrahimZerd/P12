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



function Profile() {

    const [user, setUser] = useState({});
    const [activity, setActivity] = useState({})
    const [averageSessions, setAverage] = useState( {})
    const [performance, setPerformance] = useState({})
    

    
    const {id} = useParams();
        useEffect(() => {
            getMockedDataById(id, setUser, setActivity, setAverage,setPerformance);
        }, [id]);
        

return(
    <div>
       {user.keyData ? 
        <div>
        <Header />
        <Aside /> 
        
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
           
            <ChartLine 
          
            array={averageSessions.sessions}
            userId={averageSessions.userId}
            
            
            />
        
        
        
        </div>
        : <div>No DataFound</div>}
    </div>
)

}

export default Profile;