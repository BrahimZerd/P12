import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

/**Button Access is the component when you land the project, that give uses the button to chose between 2 athletes and 2 data sources
 * @param {Object} props is the object that contain the basic information like firstname or id of the athlete
  */

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