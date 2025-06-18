import { useState } from "react";

const GameCard = ({ game }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <div className="game-card" onClick={toggleDetails}>
      <img src={game.coverUrl} alt={game.title} />
      <h2>{game.title}</h2>
      <p>{game.genre}</p>

      {showDetails && (
        <>
          <p>{game.platform}</p>
          <p>{game.year}</p>
          <p>{game.price}</p>
          <p>{game.rating}</p>
          <p>{game.status}</p>
          <p>{game.hoursPlayed}</p>
          <p>{game.difficulty}</p>
        </>
      )}
    </div>
  );
};

export default GameCard;
