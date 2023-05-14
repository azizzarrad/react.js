import logo from './logo.svg';
import './App.css';
import Aziz from './components/Aziz';

function App() {
  const count = 0
  return (
    <div className="App">
      <header className="App-header">
        <Aziz />
        {count}
      </header>
    </div>
  );
}

export default App;
