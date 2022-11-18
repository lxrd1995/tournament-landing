import "./TeamRow.scss"

const TeamRow = (props) => {
    return (
        <div className="team-row">
            <div className="team-row-primary">
                <img src={props.img} alt=""></img>
                <p>{props.name}</p>
            </div>
            <p>{props.score}</p>
        </div>
    )
}

export default TeamRow;