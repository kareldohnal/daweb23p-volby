export const VoteButton = ({onVote, name}) => {
    const handleClick = () => {
        onVote(name);
    }
    return (
      <button onClick={handleClick} className="btn-vote">Vybrat</button>
    )
}