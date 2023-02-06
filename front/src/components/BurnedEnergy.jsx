import PropTypes from 'prop-types';



/**Energy indicator is a re-usable component which integrate and display general information like total calories burned, protein, glucid & lipid 
 * @param {Object} props is the object that countain the icon of the element and the number of that element, that display the total of category burned
  */
function EnergyIndicator (props) {
    
    return(
        <div className={props.product}>
            <div id={props.product}>
                <img  src={props.icon} alt="icon"  /> 
            </div>
            <span>{props.amount}{props.unit}</span><br></br>
            <span className="greyPolicy">{props.product}</span>
        </div>
    )
}

EnergyIndicator.propTypes = {
    product: PropTypes.string,
    icon: PropTypes.string,
    amount: PropTypes.number,
    unit: PropTypes.string,
}

export default EnergyIndicator;