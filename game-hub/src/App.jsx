import "./App.css";
import { getAllGames } from './data/mockData.js';
import Header from  './components/header.jsx';
import GameList from './components/GameList.jsx';
import Navigation from './components/Navigation.jsx';
import { useState } from 'react';

function App() {
  const giochi = getAllGames();
  const gamerTag = "CON7AC7";
  
  const [activeTab, setActiveTab] = useState("Tutti");
   const giochiFiltrati = activeTab === "Tutti"
    ? giochi
    : giochi.filter(gioco => gioco.status === activeTab);
  
 

  return (
    <>
      <Header gamerTag={gamerTag} totalGames={giochi.length} />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <GameList games={giochiFiltrati} />
    </>
  );
}

export default App;
