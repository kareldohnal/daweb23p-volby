import { useState, useEffect } from 'react';
import { CandidateList } from '../../components/CandidateList';
import { Castle } from '../../components/Castle';
import './style.css';

export const HomePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [president, setPresident] = useState(null);

  useEffect(() => setCandidates([
    { name: "Ferdinand Mravenec", avatar: '/avatars/candidate01.png' },
    { name: "Markéta Smetana", avatar: '/avatars/candidate02.png' },
    { name: "Beáta Skočdopolová", avatar: '/avatars/candidate03.png' },
    { name: "Lubomír Poňuchálek", avatar: '/avatars/candidate04.png' },
  ]), []);

  const handleNewPresident = (vstup) => {
    if (window.confirm(`Opravdu chcete zvolit kandidáta ${vstup}?`)) {
      setPresident(vstup);
    }
  }
  
  return (
    <div className="container">
      <Castle president={president} />
      <h2>Kandidátí</h2>
      <CandidateList candidates={candidates} onVote={handleNewPresident} />
    </div>
  );
};