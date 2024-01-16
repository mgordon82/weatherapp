import { useEffect, useState } from 'react';
import fetchData from '../../requests/request';
import Skeleton from 'react-loading-skeleton';
import ForecastCard from './forecastCard.component';

const ForecastDetails = ({ data }) => {
  const { name } = data.location.name;
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const result = await fetchData(
          'forecast.json',
          'POST',
          '',
          `${data.q}&days=7`
        );
        setForecastData(result.forecast);
      } catch (error) {
        console.log('there was an error', error);
      }
    };

    fetchAndSetData();
  }, [data]);
  return (
    <div
      style={{
        marginTop: 15,
        padding: 25,
        backgroundColor: 'lightyellow',
        borderRadius: 5,
        border: '1px solid gold',
      }}
    >
      <h2
        style={{
          fontSize: '1em',
          marginBottom: 15,
          textTransform: 'uppercase',
        }}
      >
        Forecast Details
      </h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {forecastData
          ? forecastData.forecastday.map((day, key) => {
              return <ForecastCard key={key} name={name} data={day} />;
            })
          : [...Array(7)].map((_, key) => (
              <Skeleton key={key} style={{ width: 232, height: 107 }} />
            ))}
      </div>
    </div>
  );
};
export default ForecastDetails;
