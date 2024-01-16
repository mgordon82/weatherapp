import { Link, useLocation } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import TempAndDescription from '../components/locationDetails/tempAndDescription.component';
import round from '../utils/round';
import ForecastDetails from '../components/forecast/forecast.component';

const Details = () => {
  const location = useLocation();
  const localData = location.state.data.query;
  const { name, region, localtime, tz_id } = localData.location;
  const {
    condition,
    feelslike_f,
    feelslike_c,
    gust_mph,
    humidity,
    last_updated,
    precip_in,
    temp_f,
    temp_c,
    vis_miles,
    wind_mph,
    wind_dir,
    uv,
  } = localData.current;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'top',
          padding: '15px 0',
        }}
      >
        <h2 style={{ margin: 0 }}>
          <p style={{ fontWeight: 'normal', fontSize: '0.7em', margin: 0 }}>
            Current Conditions in:
          </p>{' '}
          {name}, {region}
        </h2>
        <div style={{ fontSize: '0.9em' }}>
          <p style={{ margin: 0 }}>Local Time: {localtime}</p>
          <p style={{ margin: 0 }}>Timezone: {tz_id}</p>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          border: '1px solid #ccc',
          borderRadius: 5,
          padding: '15px 10px',
        }}
      >
        <TempAndDescription
          data={{
            icon: condition.icon,
            text: condition.text,
            temp: round(temp_f),
            tempC: round(temp_c),
            feelsLikeTemp: round(feelslike_f),
            feelsLikeTempC: round(feelslike_c),
          }}
        />

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
              <span style={{ fontWeight: 'bold' }}>Humidity:</span> {humidity}%
            </li>

            <li>
              <span style={{ fontWeight: 'bold' }}>Visibility:</span>{' '}
              {vis_miles} miles
            </li>
            <li>
              <span style={{ fontWeight: 'bold' }}>Current Wind:</span>{' '}
              {wind_mph} mph
            </li>
            <li>
              <span style={{ fontWeight: 'bold' }}>Wind Direction:</span>{' '}
              {wind_dir}
            </li>
          </ul>
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
              <span style={{ fontWeight: 'bold' }}>Wind Gust:</span> {gust_mph}{' '}
              mph
            </li>

            <li>
              <span style={{ fontWeight: 'bold' }}>UV Index:</span> {uv}
            </li>
            <li>
              <span style={{ fontWeight: 'bold' }}>Precipitation:</span>{' '}
              {precip_in} in
            </li>
          </ul>
        </div>
        <div>
          <Link to='/'>Return to Dashboard</Link>
        </div>
      </div>
      <ForecastDetails data={localData} />
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: '0.8em',
          marginTop: 15,
        }}
      >
        Last Updated: {last_updated}
      </div>
    </div>
  );
};

export default Details;
