const Watch = (props) => {
  const { brand, price } = props;
  return (
    <div>
      <h3>Name: {brand}</h3>
      <p>Price: {price}</p>
    </div>
  );
};

export default Watch;
