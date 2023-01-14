


function insentiveSentence (props){

    console.log(props.todayScore)
    return(
        props.score > 0.15 || props.todayScore > 0.1  ? <div>Bonjour</div> : <div>Aurevoir</div>
    )
}


export default insentiveSentence;