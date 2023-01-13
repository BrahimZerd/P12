import '../App.css';
import mock from '../data/mock'
import ButtonAccess from '../components/ButtonAccessAthlete';


   function App() {
    return (
     <div>
    
      <div >
         <p>Access via Mocked Data</p>
      </div>
    {mock.USER_MAIN_DATA.map((user) => {

      return(
    <ButtonAccess {...user} key={user.id}
    
    />)})
    }
   <div>
      <p> Acces via API Data
      </p>
   </div>
    
    </div> 
    
    )
    }

    export default App;
  


