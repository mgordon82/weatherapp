import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import Details from './routes/detail-route';
import Header from './components/header/header.component';
import fetchData from './requests/request';
import locations from './utils/locations.json';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const result = await fetchData(
          'current.json',
          'POST',
          locations,
          'bulk'
        );
        setWeatherData(result.bulk);
      } catch (error) {
        console.log('there was an error', error);
      }
    };

    fetchAndSetData();
  }, []);

  return (
    <Router>
      <div className='App'>
        {weatherData ? (
          <>
            <Header localForecast={weatherData[1].query} />
            <Routes>
              <Route path='/' element={<CardList data={weatherData} />} />
              <Route path='/details' element={<Details />} />
            </Routes>
          </>
        ) : (
          <p>Loading Weather Data</p>
        )}
      </div>
    </Router>
  );
}

export default App;
