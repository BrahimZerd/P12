/**getUserAverageSessions format the data from the API or mocked data from sessions data to have an easy access to them in the components 
 const days convert the days of the array to one letter days
*/


const days = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D'
}



export default class getUserAverageSessions {
    constructor(user) {
        this.userId = user.userId
        this.sessions = user.sessions.map((element) => ({
			day: days[element.day],
			sessionLength: element.sessionLength,
		}));
	}
}
    
