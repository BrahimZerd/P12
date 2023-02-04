
/**getperformancedata format the data from the API or mocked data from performance data to have an easy access to them in the components 
 newkind & translate kind etablish a new order to display them as attempt in the graph

*/



const newKind = {
	1: "1",
	2: "2",
	3: "4",
	4: "3",
	5: "5",
	6: "6",
};
    
const translateKind = {
    6: 'Cardio',
    5: 'Energie',
    4: 'Force',
    3: 'Endurance',
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
