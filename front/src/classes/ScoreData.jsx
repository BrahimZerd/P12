



export default class getUserScore {

    constructor(user){
        this.id = user.id;
       
        this.todayScore = 
            user.todayScore * 100 || user.score * 100
        
      
        
    }}