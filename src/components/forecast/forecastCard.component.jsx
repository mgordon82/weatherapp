import { formatDateWithDay } from '../../utils/dateToDay';
import round from '../../utils/round';

const ForecastCard = ({ name, data }) => {
  const { condition, maxtemp_f, maxtemp_c, mintemp_f, mintemp_c } = data.day;
  return (
    <div className='card forecast-card'>
      <h2
        style={{
          width: '100%',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '1.2em',
        }}
      >
        {formatDateWithDay(data.date)}
      </h2>
      <img src={condition.icon} alt={condition.text} />
      <div>
        <p>
          High: {round(maxtemp_f)}ºF / {round(maxtemp_c)}ºC
        </p>
        <p>
          Low: {round(mintemp_f)}ºF / {round(mintemp_c)}ºC
        </p>
      </div>
    </div>
  );
};

export default ForecastCard;
