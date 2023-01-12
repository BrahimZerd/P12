import Header from '../components/Header'
import Aside from '../components/Aside'
import Bonjour from '../components/Bonjour'
import { useParams } from 'react-router-dom'
import getMockedDataById from '../data/getMockeddata'
import { useEffect, useState } from 'react'


function Profile() {

    const [main, setMain] = useState({});
    

    
    const {id} = useParams();
        useEffect(() => {
            getMockedDataById(id, setMain);
        }, []);
        
        console.log(main)
        

return(
    <div>
        
        
        <Header />
        <Bonjour 
        userInfos = {main.userInfos}
         />
        
        <Aside />
    
    </div>
)

}

export default Profile;