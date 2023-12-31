import './style.css';
import { VoteButton } from '../VoteButton';

export const Candidate = ({ name, avatar, onVote }) => {
  return (
    <div className="candidate">
      <h3 className="candidate__name">{name}</h3>
      <img className="candidate__avatar" src={avatar} />
      <VoteButton onVote={onVote} name={name} />
    </div>
  );
};