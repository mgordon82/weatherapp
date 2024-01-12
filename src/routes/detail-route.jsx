import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const data = location.state ? location.state.data : null;
  const [locationData, setLocationData] = useState({});
  console.log('detail data', data);

  useEffect(() => {
    if (data) {
      fetch(`${data.properties.forecast}/observations`)
        .then((response) => response.json())
        .then((forecast) => setLocationData(forecast.features[0].properties))
        .catch(console.log('error'));
    }
  }, [data]);
  console.log('location data', locationData);
  return (
    <div>
      <h2>Details for {data.properties.name}</h2>
      <p></p>
    </div>
  );
};

export default Details;
