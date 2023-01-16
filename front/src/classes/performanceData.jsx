


export default  class getPerformanceData {
    constructor(user) {
        this.userId = user.userId
        this.kind = [
            {
                1:'cardio'
            },
            {
                2:'energy'
            },
            {
                3:'endurance'
            },
            {
                4: 'strength'
            },
            {
                5:'speed'
            },
            {
                6:'intensity'
            }
        ]

        this.data = user.data
    }
}