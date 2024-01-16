import round from '../../utils/round';
import './localCard.styles.css';

const LocalCard = ({ localForecast }) => {
  const { location } = localForecast;
  const { condition, temp_f, temp_c } = localForecast.current;
  return (
    <div className='local-card'>
      <img
        src={condition.icon}
        alt={`${location.name} weather is currently ${condition.text}`}
      />
      <div>
        <h2>{location.name} Weather</h2>

        <p>
          {condition.text} {round(temp_f)}ºF ({round(temp_c)}
          ºC)
        </p>
      </div>
    </div>
  );
};

export default LocalCard;
