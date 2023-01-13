

export default class getUserData {

    constructor(user){
        this.id = user.id;
        this.userInfos = user.userInfos;
        this.todayScore = user.todayScore;
        this.score = user.score;

       
       
        this.keyData = [
            {
                unit: 'Kcal',
                amount: user.keyData.calorieCount,
                icon: '',
                product: 'Calories'
            },
            {
                unit:'g',
                amount: user.keyData.proteinCount,
                icon: '',
                product: 'Proteines'
            },
            {
                unit:'g',
                amount: user.keyData.carbohydrateCount,
                icon: '',
                product: 'Glucides'
            },
            {
                unit: 'g',
                amount: user.keyData.lipidCount,
                icon: '',
                product: 'Lipides'
            }
        ]
        
    }




}
