import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart, removeFromLs } from "../../utils/LocalStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    // console.log("called the useEffect: ", bottles.length);
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      //   console.log(storedCart);
      const savedCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        // console.log("Match Bottle: ", bottle, "Store ID:", id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      //   console.log("saveCart", savedCart);
      setCart(savedCart);
    }
  }, [bottles]);

  //load cart from localStorage
  const handleAddToCart = (id) => {
    const newCart = [...cart, id];
    setCart(newCart);
    addToLS(id);
  };

  const handleRemoveFromCart = (id) => {
    //Visual cart Remove
    //Remove From LocalStorage

    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromLs(id);
  };

  return (
    <div>
      <h3>Bottles available: {bottles.length}</h3>
      {/* {cart.map((cart, i) => ( */}
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      {/* ))} */}
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
