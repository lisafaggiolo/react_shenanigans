import logo from './logo.svg';
import './App.css';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';

function App() {
  return (
    <div className="App">
      <hi>
        Tourney Matches <span>Where Coding ans Tournaments found their Match!</span>
      </hi>
      <PlayerList />
      <MatchList />
    </div>
  );
}

export default App;
