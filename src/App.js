import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import Details from './routes/detail-route';
import Header from './components/header/header.component';

function App() {
  const [stations, setStations] = useState([]);
  const [localForecast, setLocalForecast] = useState({
    temperature: 0,
    windChill: 0,
  });

  useEffect(() => {
    fetch('https://api.weather.gov/stations?state=MN')
      .then((response) => response.json())
      .then((stations) => setStations(stations.features));
    fetch('https://api.weather.gov/zones/forecast/MNZ068/observations')
      .then((response) => response.json())
      .then((forecast) => setLocalForecast(forecast.features[0].properties));
  }, []);

  return (
    <Router>
      <div className='App'>
        <Header localForecast={localForecast} />
        <Routes>
          <Route path='/' element={<CardList data={stations} />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
