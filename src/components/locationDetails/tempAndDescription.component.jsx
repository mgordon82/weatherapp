import Skeleton from 'react-loading-skeleton';

const TempAndDescription = ({ data }) => {
  const { icon, text, temp, tempC, feelsLikeTemp, feelsLikeTempC } = data;
  return (
    <div style={{ display: 'flex', columnGap: 15, alignItems: 'top' }}>
      {icon ? (
        <img src={icon && icon} alt={`${text}-conditions`} />
      ) : (
        <Skeleton style={{ width: 86, height: 86 }} />
      )}
      <div>
        <p>{text}</p>
        <p style={{ fontSize: '2em', fontWeight: 'bold' }}>
          {temp}ºF <span style={{ fontSize: '0.5em' }}>/ {tempC}ºC</span>
        </p>
        <p>
          Feels Like: {feelsLikeTemp}ºF{' '}
          <span style={{ fontSize: '0.8em' }}>/ {feelsLikeTempC}ºC</span>
        </p>
      </div>
    </div>
  );
};

export default TempAndDescription;
