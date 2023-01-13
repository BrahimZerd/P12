import { Link } from "react-router-dom";



function ButtonAccess (props) {
    
    return (
        <div>
            <Link to={'user/' + props.id} className="athleteButton"><span>{props.userInfos.firstName}</span></Link>
        </div>
    )

}


export default ButtonAccess;