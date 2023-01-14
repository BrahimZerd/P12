import { Link } from "react-router-dom";
import Zen from '../assets/Zen.png';
import Swim from '../assets/Swim.png';
import Bike from '../assets/Bike.png';
import Strength from '../assets/Strength.png';



function aside(){
return(
    <aside>
        <nav className="asideNav">
            <Link id="zen" to="/"><img  src={Zen} alt="meditation" /></Link>
            <Link id="swim" to=""><img src={Swim} alt="swim" /></Link>
            <Link id="bike" to=""><img src={Bike} alt="bike" /></Link>
            <Link id="strength" to=""><img src={Strength} alt="strength" /></Link>
        </nav>
        <span className="lateral">Copyright, SportSee 2020</span>
    </aside>
)

}



export default aside;