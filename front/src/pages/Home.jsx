import '../App.css';
import mock from '../data/mock'
import ButtonAccess from '../components/ButtonAccessAthlete';


function clickDev() {
	localStorage.setItem('environment', 'mock');
   console.log('enviMock')
}
function clickAPI() {
	localStorage.setItem('environment', 'api');
   console.log('enviAPI')
}


   function App() {
     

      


      
    return (
     <div >
    
      <div onClick={clickDev}>
         <p >Access via Mocked Data</p>
      
    {mock.USER_MAIN_DATA.map((user) => {
      
      return(
         
    <ButtonAccess {...user} key={user.id}
    
    
    />)},
    
    
    
    )
    }
   </div>
   <div >
         <p>Access via API DATA</p>
      </div>
      {mock.USER_MAIN_DATA.map((user) => {

return(
   
   <div id="APIData" onClick={clickAPI} > 
<ButtonAccess {...user} key={user.id}

/>

</div>)

},


)
  
}
    </div>
    
   

    
    
    
    )
    
    }

    export default App; 
    
  


