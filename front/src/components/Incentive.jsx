import PropTypes from 'prop-types';

/**insentivesentence display a component that  display 2 different sentences depend on the score inside 
 * *@param {object} props contain  2 different numbers @param {number} score & @param {number} todayScore 
 * these numbers indicate the score if the score or the todayscore is more than a score, the insentive sentence change*/
function insentiveSentence (props){

    return(
        props.score > 0.3 || props.todayScore > 0.1  ? 
        <span className="insentive">Félicitations ! Vous avez explosé vos objectifs hier 👏</span> 
        : <span className="insentive">Courage! Vous êtes sur la bonne voie 👏</span>
    )
}

insentiveSentence.propTypes = {
    props: PropTypes.object,
    score: PropTypes.number,
    todayScore: PropTypes.number
}

export default insentiveSentence;