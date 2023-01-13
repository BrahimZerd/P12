import mock from './mock';
import { useParams } from 'react-router-dom';
import getUserData from '../classes/MainData'


export default function getMockedDataById(id, setMain) {

    const userId = parseInt(id)
        
        setMain (new getUserData
     (mock.USER_MAIN_DATA.find(element => element.id === userId)),
     
     )
    
    
    
    }



