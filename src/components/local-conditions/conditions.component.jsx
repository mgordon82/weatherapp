export const LocalConditions = ({ conditionsArr }) => {
  return (
    <div style={{ display: 'flex' }}>
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          lineHeight: '1.3em',
          columnCount: 2,
          columnGap: 40,
        }}
      >
        {conditionsArr.map((condition, key) => {
          return (
            <li key={key} style={{ breakInside: 'avoid-column' }}>
              <span style={{ fontWeight: 'bold' }}>{condition.name}:</span>{' '}
              {condition.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
