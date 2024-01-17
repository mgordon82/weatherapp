import { formatDateWithTime } from '../../utils/dateToDay';

export const CurrentConditions = ({ name, region, localtime, tz_id }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'top',
        padding: '15px 0',
      }}
    >
      <h2 style={{ margin: 0 }}>
        <p style={{ fontWeight: 'normal', fontSize: '0.7em', margin: 0 }}>
          Current Conditions
        </p>
        {name}, {region}
      </h2>
      <div style={{ fontSize: '0.9em' }}>
        <p style={{ margin: 0 }}>{formatDateWithTime(localtime)}</p>
        <p style={{ margin: 0 }}>Timezone: {tz_id}</p>
      </div>
    </div>
  );
};
