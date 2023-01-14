import Header from '../components/Header'
import Aside from '../components/Aside'
import Bonjour from '../components/Bonjour'
import { useParams } from 'react-router-dom'
import getMockedDataById from '../data/getMockeddata'
import { useEffect, useState } from 'react'
import EnergyIndicator from '../components/BurnedEnergy'
import InsentiveSentence from '../components/Incentive'

function Profile() {

    const [user, setUser] = useState({});
    

    
    const {id} = useParams();
        useEffect(() => {
            getMockedDataById(id, setUser);
        }, [id]);
        
       
        console.log(user)

return(
    <div>
       {user.keyData ? 
        <div>
        <Header />
        
        <Bonjour 
        userInfos = {user.userInfos}
        todayScore = {user.todayScore}
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
        <Aside /> 
        
        </div>
        : <div>No DataFound</div>}
    </div>
)

}

export default Profile;