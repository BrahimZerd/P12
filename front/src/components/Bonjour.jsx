import PropTypes from 'prop-types';


function Bonjour(props) {
    console.log(props)
return(
    <div id="Bonjour">
         {props.userInfos ? <p >Bonjour <span className="red">{props.userInfos.firstName}</span></p> : true}
    </div>
)
}

Bonjour.propTypes = {
    props: PropTypes.object,
    
  }
export default Bonjour;