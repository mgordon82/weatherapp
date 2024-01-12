import { useNavigate } from 'react-router-dom';
import './card.styles.css';

const Card = ({ data }) => {
  const { name } = data.properties;
  const navigate = useNavigate();
  const handleDetailRouting = () => {
    console.log('data', data);
    navigate('/details', { state: { data: data } });
  };
  return (
    <div className='card' onClick={handleDetailRouting}>
      <h2 style={{ fontSize: '1em' }}>{name}</h2>
    </div>
  );
};

export default Card;
