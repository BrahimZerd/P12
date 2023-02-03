import '../App.css';
import mock from '../data/mock'
import ButtonAccess from '../components/ButtonAccessAthlete';


function clickDev() {
	localStorage.setItem('environment', 'mock');
}
function clickAPI() {
	localStorage.setItem('environment', 'api');
}
//create 2differentes storage, called environement api & environement mock / if i click on 2 buttons of mocks i can access to mocked data & if i click on 2 buttons of api i can access
// to API data

   function App() {
     return (
     <div >
            <div key='id1' onClick={clickDev}>
               <p >Access via Mocked Data</p>
               {mock.USER_MAIN_DATA.map((user) => {
            return(<ButtonAccess {...user} key={user.id+1}/>)},
            )}
            </div>

            <div>
             <p>Access via API DATA</p>
            <div onClick={clickAPI} > 
            {mock.USER_MAIN_DATA.map((user) => {

            return(<ButtonAccess {...user} key={user.id}/>)},)
            }
            </div>
            </div>
    </div>
    )}

    export default App; 
    
  


