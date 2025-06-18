const GameCard = ({ game }) => {
    return (
      <div className="game-card">
        <img src={game.coverUrl} alt={game.title} />
        <h2>{game.title}</h2>
        <p>{game.genre}</p>
        <p>{game.platform}</p>
        <p>{game.year}</p>
        <p>{game.price}</p>
        <p>{game.raiting}</p>
        <p>{game.status}</p>
        <p>{game.hoursPlayed}</p>
        <p>{game.difficulty}</p>
      </div>
    );
}

export default GameCard