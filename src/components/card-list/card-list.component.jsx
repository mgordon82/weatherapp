import Card from '../card/card.component';

const CardList = ({ data }) => {
  return (
    <div
      style={{
        padding: '0 25px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 15,
      }}
    >
      {data.map((location, key) => {
        return <Card data={location} key={key} />;
      })}
    </div>
  );
};

export default CardList;
