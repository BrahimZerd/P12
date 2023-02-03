
/**getperformancedata format the data from the API or mocked data from performance data to have an easy access to them in the components 
 newkind & translate kind etablish a new order to display them as attempt in the graph

*/



const newKind = {
	1: "6",
	2: "5",
	3: "4",
	4: "3",
	5: "2",
	6: "1",
};
    
const translateKind = {
    6: 'Cardio',
    5: 'Energie',
    4: 'Endurance',
    3: 'Force',
    2: 'Vitesse',
    1:'Intensité',
}




export default  class getPerformanceData {
    constructor(user) {
        
        this.data = user.data.map((element) => ({
            
            kind: translateKind[newKind[element.kind]],
            value: element.value,
            }))
       this.kind = user.kind
    }
}
