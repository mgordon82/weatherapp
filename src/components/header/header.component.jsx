import './header.styles.css';
import LocalCard from '../localCard/localCard.component';

const Header = ({ localForecast }) => {
  return (
    <header className='header'>
      <h1>Favorite Weather Locations</h1>
      <LocalCard localForecast={localForecast} />
    </header>
  );
};

export default Header;
