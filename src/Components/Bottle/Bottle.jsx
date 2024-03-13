import "./Bottle.css";
import PropTypes from "prop-types";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price, id } = bottle;
  return (
    <div className="bottle">
      <h3>Name: {name}</h3>
      <img src={img} />
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(id)}>Buy Now</button>
    </div>
  );
};
Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
export default Bottle;
