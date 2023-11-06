import { Candidate } from "../Candidate";
import "./style.css";

export const CandidateList = ({ candidates, onVote }) => {
  return (
    <div className="candidate-list">
      {candidates.map((c) => (
        <Candidate
          key={c.name}
          name={c.name}
          avatar={c.avatar}
          onVote={onVote}
        />
      ))}
    </div>
  );
};
