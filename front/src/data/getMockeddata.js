import mock from './mock';
import getUserData from '../classes/MainData'
import getUserActivity from '../classes/ActivityData'
import getUserAverageSessions from '../classes/averageSessionsData';
import getPerformanceData from '../classes/performanceData';
import getUserScore from '../classes/ScoreData';

export default function getMockedDataById(id, setUser, setActivity, setAverageSessions,setPerformance, setScore) {

    const userId = parseInt(id)
        
        setUser (new getUserData
     (mock.USER_MAIN_DATA.find(element => element.id === userId)),
     console.log(mock.USER_MAIN_DATA)
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

    
