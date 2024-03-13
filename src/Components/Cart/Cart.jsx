import PropTypes from "prop-types";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <p>Cart: {cart.length}</p>
      <div className="bottle-cart">
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.img} />
            <button onClick={() => handleRemoveFromCart(bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
