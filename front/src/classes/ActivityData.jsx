

/**getuseractivity format the data from the API or mocked data from activity data to have an easy access to them in the components 
 
*/
export default class getUserActivity {
    constructor(user) {
        this.userId = user.userId
        this.sessions = user.sessions.map((element) => ({
            day: element.day.split('-')[2]*= 1,
            poids: element.kilogram,
            calories: element.calories,
        })
    )}
}