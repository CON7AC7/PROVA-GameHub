import "./App.css";
import { getAllGames } from './data/mockData.js';
import Header from  './components/header.jsx';
import GameList from './components/GameList.jsx';

function App() {
  const giochi = getAllGames();
  const gamerTag = "CON7AC7";

  return (
    <>
      <Header gamerTag={gamerTag} totalGames={giochi.length} />
      <GameList games={giochi} />
    </>
  );
}

export default App;
