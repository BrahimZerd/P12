




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