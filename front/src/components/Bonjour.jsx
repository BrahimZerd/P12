import PropTypes from 'prop-types';

/**Bonjour component return a welcome message on the dashboard 
 * @param {Object} props is the object that countain the user basic infos like firstName 
  */
function Bonjour(props) {
return(
  
 
    <div id="Bonjour" >
         {props.userInfos ? <p >Bonjour <span className="red">{props.userInfos.firstName}</span></p> : true}
    </div>
    
)}

Bonjour.propTypes = {
    props: PropTypes.object,
    
  }
export default Bonjour;