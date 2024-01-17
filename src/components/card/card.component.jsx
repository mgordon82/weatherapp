import { useNavigate } from 'react-router-dom';
import './card.styles.css';
import round from '../../utils/round';
import useDeviceType from '../../custom-hooks/useDeviceType';

const Card = ({ data }) => {
  const isMobile = useDeviceType();
  const { name } = data.query.location;
  const { condition, temp_f, temp_c } = data.query.current;
  const navigate = useNavigate();
  const handleDetailRouting = () => {
    navigate('/details', { state: { data: data } });
  };
  return (
    <div
      className='card locations-card'
      style={{
        width: isMobile ? '30%' : '200px',
        justifyContent: isMobile ? 'center' : 'left',
      }}
      onClick={handleDetailRouting}
    >
      <img src={condition.icon} alt={condition.text} />
      <div>
        <h2 style={{ fontSize: '1em', display: 'inline-block' }}>{name}</h2>
        <p>
          {round(temp_f)}ºF / {round(temp_c)}ºC
        </p>
      </div>
    </div>
  );
};

export default Card;
