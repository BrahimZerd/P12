import mock from './mock';
import { useParams } from 'react-router-dom';


function getMockedDataById () {

    const {id} = useParams

    const getId = mock.USER_MAIN_DATA.find(element => element.id === id)


}