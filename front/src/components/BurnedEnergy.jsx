import PropTypes from 'prop-types';

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
    props: PropTypes.object,
}

export default EnergyIndicator;