import Header from '../components/Header'
import Aside from '../components/Aside'
import Bonjour from '../components/Bonjour'
import { useParams } from 'react-router-dom'
import getMockedDataById from '../data/getMockeddata'
import { useEffect, useState } from 'react'
import EnergyIndicator from '../components/BurnedEnergy'

function Profile() {

    const [user, setUser] = useState({});
    

    
    const {id} = useParams();
        useEffect(() => {
            getMockedDataById(id, setUser);
        }, [id]);
        
       console.log(user)
        

return(
    <div>
        
        
        <Header />
        <Bonjour 
        userInfos = {user.userInfos}
        todayScore = {user.todayScore}
         />
        {user.keyData.map(indicator => 
            <EnergyIndicator {...indicator} />)}
        <Aside />
    
    </div>
)

}

export default Profile;