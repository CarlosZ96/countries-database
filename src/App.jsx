import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Continents from './components/Continents';

function App() {
  return (
    <div className="App">
      <header>
        <img src="https://cdn-icons-png.flaticon.com/128/921/921490.png" alt="planet img" />
        <h1>Countries Stats</h1>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Continents" element={<Continents />} />
      </Routes>
    </div>
  );
}

export default App;
