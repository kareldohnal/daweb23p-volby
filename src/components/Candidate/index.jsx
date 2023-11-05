import './style.css';

export const Candidate = ({ name, avatar, onVote }) => {
  const handleClick = () => {
    onVote(name);
  }
  
  return (
    <div className="candidate">
      <h3 className="candidate__name">{name}</h3>
      <img className="candidate__avatar" src={avatar} />
      <button onClick={handleClick} className="btn-vote">Vybrat</button>
    </div>
  );
};