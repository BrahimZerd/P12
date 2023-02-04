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
import getApiDataById from '../data/getAPIdata'


function Profile() {

    const [user, setUser] = useState({});
    const [activity, setActivity] = useState({})
    const [averageSessions, setAverage] = useState( {})
    const [performance, setPerformance] = useState({})
    const [score, setScore] = useState({})

    //settled the data in usestate and separate them in different state depends on the data information, to keep them and easily access to the informations, 
    // put a condition if my localstorage is mock => i get the data from my function which catch the mocked data

    // else  i get the data from the API // if no data find, a message is displayed with " No Datafound"
    
    const {id} = useParams();
        
        useEffect(() => {
           if(localStorage.environment === "mock"){
            getMockedDataById(id, setUser, setActivity, setAverage,setPerformance,setScore)}
            
            else
            {getApiDataById(id, setUser, setActivity, setAverage,setPerformance,setScore);}
        },[id]);
        



        
        

return(
    <div> 
    {user.keyData ? 
        <div>
            <Header />
            <div style={{display:"flex", justifyContent: "left"}}>
            <Bonjour userInfos = {user.userInfos} todayScore = {user.todayScore}/>

            <InsentiveSentence score = {user.score} todayScore = {user.todayScore}/>
            </div>
        <div className="flexMain">
            
            <Aside />
            
            <BarChartScore activity = {activity.sessions}/>

            <div className="categories">
                {user.keyData.map(indicator => 
                <EnergyIndicator {...indicator} key={indicator.id} />)}
            </div>

            <div className="flexCharts">   
                <ChartLine array={averageSessions.sessions} userId={averageSessions.userId}/>
                <RadialBarChart performance={performance}/>
                <Gaugechart score= {[score]} />    
            </div>
            
        </div>    
        </div>
        :
        <div>No DataFound</div>}
    </div>
)

}

export default Profile;