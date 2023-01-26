import PropTypes from 'prop-types';


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