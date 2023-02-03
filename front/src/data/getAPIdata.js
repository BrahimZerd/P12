import getUserData from "../classes/MainData";
import getUserActivity from '../classes/ActivityData'
import getUserAverageSessions from '../classes/averageSessionsData';
import getPerformanceData from '../classes/performanceData';
import getUserScore from '../classes/ScoreData';


/**async function to get the data from the API // i did differents constants to visually acceed to the type of data 
 * @param {id} number get the id of the user
 * @param {setUser} object get the data user and put them in an array
 * @param {setActivity} object same with user activity
 * @param {setAverageSessions} object same with sessions
 * @param {setPerformance} object same with performance
 * @param {score} object same with the score
*/

export default async function getApiDataById(id, setUser, setActivity, setAverageSessions,setPerformance, setScore) {
    
    const userId = parseInt(id)
    let userUrl= `http://localhost:5000/user/${userId}`
    let activity = `/activity`
    let performance = `/performance` 
    let averageSession = `/average-sessions`  
     let user = await fetch(`http://localhost:5000/user/${userId}`)
    .then(data => data.json())
    .catch((error) =>
        console.log('Il y a eu un problème avec l\'opération fetch '));

        

    let userActivity = await fetch(userUrl+activity)
    .then(data => data.json())
    
    .catch((error) =>
        console.log('Il y a eu un problème avec l\'opération fetch '));
      
    
    let userPeformance = await fetch(userUrl+performance)
    .then(data => data.json())
    .catch((error) =>
    console.log('Il y a eu un problème avec l\'opération fetch '));

    let userSession = await fetch(userUrl+averageSession)
    .then(data => data.json())
    .catch((error) =>
        console.log('Il y a eu un problème avec l\'opération fetch '));

    let userScore = await fetch(`http://localhost:5000/user/${userId}`)    
    .then(data => data.json())
    .catch((error) =>
        console.log('Il y a eu un problème avec l\'opération fetch '));

        
    setUser (new getUserData
            ([user.data].find(element => element.id === userId))) 

    setActivity (new getUserActivity
            ([userActivity.data].find(element => element.userId ===userId)))

    setAverageSessions(new getUserAverageSessions
        ([userSession.data].find(element => element.userId === userId)
            ))
                
    setPerformance(new getPerformanceData
        ([userPeformance.data].find(element => element.userId === userId)
            ))
    setScore (new getUserScore
        (  [userScore.data].find(element => element.id === userId)))}
