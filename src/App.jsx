import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import CountiresDetails from './components/CountiresDetails';
import Continents from './components/Continents';

function App() {
  return (
    <div className="App">
      <header>
        <img src="https://cdn-icons-png.flaticon.com/128/921/921490.png" alt="planet img" />
        <h1>Countries Databases</h1>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Continents" element={<Continents />} />
        <Route path="/CountiresDetails" element={<CountiresDetails />} />
      </Routes>
    </div>
  );
}

export default App;
