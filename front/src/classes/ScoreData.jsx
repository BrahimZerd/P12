
/**getUserScore format the data from the API or mocked data from score data to have an easy access to them in the components 
 * their is 2 types of score // the todayscore & the score / i format them to get only 1 score

*/


export default class getUserScore {

    constructor(user){
        this.id = user.id;
       
        this.todayScore = 
            user.todayScore * 100 || user.score * 100
      
        
    }}