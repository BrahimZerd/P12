


function insentiveSentence (props){

    console.log(props.todayScore)
    return(
        props.score > 0.3 || props.todayScore > 0.1  ? 
        <span className="insentive">Félicitations ! Vous avez explosé vos objectifs hier 👏</span> 
        : <span className="insentive">Courage! Vous êtes sur la bonne voie 👏</span>
    )
}


export default insentiveSentence;