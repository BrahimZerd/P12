import mock from './mock';
import getUserData from '../classes/MainData'
import getUserActivity from '../classes/ActivityData'
import getUserAverageSessions from '../classes/averageSessionsData';
import getPerformanceData from '../classes/performanceData';
import getUserScore from '../classes/ScoreData';

/**function to get the data from the mock // create from classes and the data new format of data with the id as element finder
 * @param {id} number get the id of the user
 * @param {setUser} object get the data user and put them in an array
 * @param {setActivity} object same with user activity
 * @param {setAverageSessions} object same with sessions
 * @param {setPerformance} object same with performance
 * @param {score} object same with the score
*/


export default function getMockedDataById(id, setUser, setActivity, setAverageSessions,setPerformance, setScore) {

    const userId = parseInt(id)
        
        setUser (new getUserData
     (mock.USER_MAIN_DATA.find(element => element.id === userId)),
     )

     setActivity(new getUserActivity
        (mock.USER_ACTIVITY.find(element => element.userId ===userId)))

    setAverageSessions(new getUserAverageSessions(
        mock.USER_AVERAGE_SESSIONS.find(element => element.userId === userId)
    ))
        
    setPerformance(new getPerformanceData(
        mock.USER_PERFORMANCE.find(element => element.userId === userId)
    ))
    setScore (new getUserScore
        (mock.USER_MAIN_DATA.find(element => element.id === userId)),
        
        )
    

    }

    
