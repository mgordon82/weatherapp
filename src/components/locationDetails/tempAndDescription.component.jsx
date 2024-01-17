import useDeviceType from '../../custom-hooks/useDeviceType';

const TempAndDescription = ({ data }) => {
  const { icon, text, temp, tempC, feelsLikeTemp, feelsLikeTempC } = data;
  const isMobile = useDeviceType();
  return (
    <div
      style={{
        display: 'flex',
        gap: 15,
        alignItems: 'top',
        width: isMobile ? '100%' : '20%',
        height: 80,
      }}
    >
      <img
        src={icon}
        width='auto'
        height='100%'
        alt={`conditions are ${text}`}
      />

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
