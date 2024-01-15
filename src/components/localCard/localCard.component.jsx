import './localCard.styles.css';
import celsiusToFahrenheit from '../../utils/celsiusToFahrenheit';

const LocalCard = ({ localForecast }) => {
  const { icon, textDescription, temperature } = localForecast;
  return (
    <div className='local-card'>
      <img src={icon} alt='Lakeville weather' />
      <div>
        <h2>Weather in Lakeville</h2>

        <p>
          {textDescription} {celsiusToFahrenheit(temperature.value)}ºF (
          {temperature.value}
          ºC)
        </p>
      </div>
    </div>
  );
};

export default LocalCard;
