import React from "react";

const GameStats = ({ games }) => {
  // 1. Ore giocate (solo "Completati" o "In Corso")
  const oreGiocate = games
    .filter(game => game.status === "Completati" || game.status === "In Corso")
    .reduce((acc, game) => acc + (game.hoursPlayed || 0), 0);

  // 2. Conteggio giochi per stato
  const giochiPerStato = {};
  games.forEach(game => {
    const stato = game.status || "Sconosciuto";
    giochiPerStato[stato] = (giochiPerStato[stato] || 0) + 1;
  });

  // 3. Voto medio
  const voti = games.filter(game => typeof game.rating === "number");
  const votoMedio = voti.length
    ? (voti.reduce((acc, game) => acc + game.rating, 0) / voti.length).toFixed(1)
    : "N/A";

  // 4. Piattaforma più frequente
  const piattaforme = {};
  games.forEach(game => {
    const piattaforma = game.platform || "Sconosciuta";
    piattaforme[piattaforma] = (piattaforme[piattaforma] || 0) + 1;
  });

  const piattaformaTop = Object.entries(piattaforme)
    .sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

  return (
    <div className="game-stats">
      <h3>Statistiche Giocatore</h3>

      <p><strong>Ore totali giocate:</strong> {oreGiocate}</p>

      <div>
        <strong>Giochi per stato:</strong>
        <p>
          {Object.entries(giochiPerStato).map(([stato, count]) => (
            <li key={stato}>{stato}: {count}</li>
          ))}
        </p>
      </div>

      <p><strong>Voto medio:</strong> {votoMedio}</p>
      <p><strong>Piattaforma più usata:</strong> {piattaformaTop}</p>
    </div>
  );
};

export default GameStats;