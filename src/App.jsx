import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Continents from './components/Continents';
import DetailsPage from './components/DetailsPage';

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
        <Route path="/Details" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
