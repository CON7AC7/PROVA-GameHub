import './Header.css'

function Header({gamerTag, totalGames}) {
    return (
        <header className="header-style">
      <div className="title-style">
        <h1> GameHub <span className="gamer-tag">{gamerTag}</span></h1>
      </div>

      <div className="counter-style">
        Library <b>{totalGames}</b>
      </div>
        </header>
    );
    
}



export default Header