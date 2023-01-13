import proteinIcon from '../assets/proteinIcon.png';
import lipideIcon from '../assets/lipideIcon.svg';
import glucideIcon from '../assets/glucideIcon.png';
import caloriesIcon from '../assets/caloriesIcon.png';

export default class getUserData {

    constructor(user){
        this.id = user.id;
        this.userInfos = user.userInfos;
        this.todayScore = user.todayScore;
        this.score = user.score;

       
       
        this.keyData = [
            {
                id: 1,
                unit: 'kCal',
                amount: user.keyData.calorieCount ,
                icon: caloriesIcon,
                product: 'Calories'
            },
            {   
                id: 2,
                unit:'g',
                amount: user.keyData.proteinCount,
                icon: proteinIcon,
                product: 'Proteines'
            },
            {   
                id: 3,
                unit:'g',
                amount: user.keyData.carbohydrateCount,
                icon: glucideIcon,
                product: 'Glucides'
            },
            {   
                id: 4,
                unit: 'g',
                amount: user.keyData.lipidCount,
                icon: lipideIcon,
                product: 'Lipides'
            }
        ]
        
    }




}
