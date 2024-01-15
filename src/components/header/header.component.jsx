import './header.styles.css';
import LocalCard from '../localCard/localCard.component';

const Header = ({ localForecast }) => {
  return (
    <header className='header'>
      <h1>Weather Stations in Minnesota</h1>
      <LocalCard localForecast={localForecast} />
    </header>
  );
};

export default Header;
