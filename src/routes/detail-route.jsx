import { Link, useLocation } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import TempAndDescription from '../components/locationDetails/tempAndDescription.component';
import round from '../utils/round';
import ForecastDetails from '../components/forecast/forecast.component';
import { formatDateWithTime } from '../utils/dateToDay';
import { CurrentConditions } from '../components/current-conditions/currentConditions.component';
import useDeviceType from '../custom-hooks/useDeviceType';
import { LocalConditions } from '../components/local-conditions/conditions.component';

const Details = () => {
  const location = useLocation();
  const isMobile = useDeviceType();
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

  const conditionsArr = [
    { name: 'Humidity', value: `${humidity}%` },
    { name: 'Visibility', value: `${vis_miles} miles` },
    { name: 'Current Wind', value: `${wind_mph} mph` },
    { name: 'Wind Direction', value: `${wind_dir}` },
    { name: 'Wind Gust', value: `${gust_mph} mph` },
    { name: 'UV Index', value: `${uv}` },
    { name: 'Precipitation', value: `${precip_in} in` },
  ];

  return (
    <div>
      <CurrentConditions
        name={name}
        region={region}
        localtime={localtime}
        tz_id={tz_id}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'top',
          flexWrap: 'wrap',
          border: '1px solid #ccc',
          borderRadius: 5,
          padding: '15px 10px',
          maxHeight: isMobile ? 'auto' : 100,
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
        <LocalConditions conditionsArr={conditionsArr} />

        <Link
          style={{ flexGrow: 8, textAlign: isMobile ? 'left' : 'right' }}
          to='/'
        >
          Return to Dashboard
        </Link>
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
        Last Updated: {formatDateWithTime(last_updated)}
      </div>
    </div>
  );
};

export default Details;
