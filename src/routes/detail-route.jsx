import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import celsiusToFahrenheit from '../utils/celsiusToFahrenheit';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Details = () => {
  const location = useLocation();
  const data = location.state ? location.state.data : null;
  const [locationData, setLocationData] = useState({
    dewpoint: {},
    windChill: {},
    temperature: {},
    visibility: {},
    relativeHumidity: {},
  });
  console.log('detail data', data);

  useEffect(() => {
    if (data) {
      fetch(`${data.properties.forecast}/observations`)
        .then((response) => response.json())
        .then((forecast) => setLocationData(forecast.features[0].properties));
    }
  }, [data]);
  const { name } = data.properties;
  const {
    icon,
    textDescription,
    dewpoint,
    windChill,
    temperature,
    visibility,
    relativeHumidity,
  } = locationData;
  console.log('location data', locationData);
  return (
    <div>
      <h2>Details for {name}</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          border: '1px solid #ccc',
          borderRadius: 5,
          padding: '15px 10px',
        }}
      >
        <div style={{ display: 'flex', columnGap: 15, alignItems: 'top' }}>
          {icon ? (
            <img
              src={icon && icon}
              alt={`${textDescription}-conditions`}
              style={{ height: 86 }}
            />
          ) : (
            <Skeleton style={{ width: 86, height: 86 }} />
          )}
          <div>
            <p style={{ margin: 0 }}>{textDescription || <Skeleton />}</p>
            <p style={{ fontSize: '2em', fontWeight: 'bold', margin: 0 }}>
              {temperature.value !== null ? (
                `${celsiusToFahrenheit(temperature.value)}ºF`
              ) : (
                <Skeleton />
              )}
            </p>
          </div>
        </div>
        <div>
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              lineHeight: '1.3em',
            }}
          >
            <li>
              <span style={{ fontWeight: 'bold' }}>Humidity:</span>{' '}
              {Math.round(relativeHumidity.value)}%
            </li>
            <li>
              <span style={{ fontWeight: 'bold' }}>Wind Chill:</span>{' '}
              {Math.round(celsiusToFahrenheit(windChill.value))}ºF
            </li>
            <li>
              <span style={{ fontWeight: 'bold' }}>Visibility:</span>{' '}
              {visibility.value}m
            </li>
            <li>
              <span style={{ fontWeight: 'bold' }}>Dewpoint:</span>{' '}
              {Math.round(celsiusToFahrenheit(dewpoint.value))}ºF
            </li>
          </ul>
        </div>
        <div>
          <Link to='/'>Return to Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
