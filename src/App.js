import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import celsiusToFahrenheit from './utils/celsiusToFahrenheit';
import Details from './routes/detail-route';

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
      .then((forecast) => setLocalForecast(forecast.features[0].properties))
      .catch(console.log('error'));
  }, []);

  console.log('stations', stations);
  const { icon, textDescription, temperature, windChill } = localForecast;
  return (
    <Router>
      <div className='App'>
        <header>
          <h1>Weather Stations in Minnesota</h1>
          <div>
            <img src={icon} alt='Lakeville weather' />
            <h2>Weather in Lakeville</h2>
            <p>Currently {textDescription}</p>
            <p>
              Temp: {celsiusToFahrenheit(temperature.value)}ºF{' '}
              <span style={{ fontSize: '0.8em' }}>{temperature.value}ºC</span>
            </p>
            <p>
              Wind Chill: {celsiusToFahrenheit(windChill.value)}ºC{' '}
              <span style={{ fontSize: '0.8em' }}>
                {Math.round(windChill.value)}ºC
              </span>
            </p>
          </div>
        </header>
        <Routes>
          <Route path='/' element={<CardList data={stations} />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
