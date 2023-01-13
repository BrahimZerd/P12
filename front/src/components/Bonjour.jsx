


function Bonjour(props) {
return(
    <div id="Bonjour">
         {props.userInfos ? <p >Bonjour <span className="red">{props.userInfos.firstName}</span></p> : true}
    </div>
)
}

export default Bonjour;