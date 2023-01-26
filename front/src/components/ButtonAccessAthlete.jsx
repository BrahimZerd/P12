import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



function ButtonAccess (props) {
    return (
        <div>
            <Link to={'user/' + props.id} className="athleteButton">
                <span>{props.userInfos.firstName}</span>
            </Link>
        </div>
    )

}


ButtonAccess.propTypes= {
    props: PropTypes.object,
    firstName: PropTypes.string
}



export default ButtonAccess;