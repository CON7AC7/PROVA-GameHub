import '../App.css';
import GameCard from './GameCard';

function GameList({ games}) {
  return (
    <div className="grid">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;