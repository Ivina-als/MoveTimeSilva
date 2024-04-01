import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { CartContext } from "../../context/cartContext";
import React from "react";

const Counter = (props) => {
  const { addToCart, cartItems, isInCart } = useContext(CartContext);

  const findQuantity = (id) => {
    return cartItems.find((objeto) => objeto.id === id);
  };

  const itemWithId = findQuantity(props.id);

  const [disponibity, setDisponibility] = useState(
    !!itemWithId ? itemWithId.disponibilidade : props.disponibilidade
  );
  const [cartValue, setCartValue] = useState(0);

  const handlePlus = () => {
    if (disponibity > 0) {
      setCartValue(cartValue + 1);
      setDisponibility(disponibity - 1);
    }
  };

  const handleMinus = () => {
    if (cartValue > 0) {
      setCartValue(cartValue - 1);
      setDisponibility(disponibity + 1);
    }
  };

  return (
    <div className={styles.containerCounter}>
      <div className={styles.containerCount}>
        <span className={styles.disponibility}>{disponibity}</span>
        <div className={styles.count}>
          <div className={styles.minus} onClick={handleMinus}>
            -
          </div>
          <div className={styles.cartValue}>{cartValue}</div>
          <div className={styles.plus} onClick={handlePlus}>
            +
          </div>
        </div>
      </div>
      <div className={styles.divButton}>
        <button
          className={styles.buttonIDo}
          style={
            cartValue > 0 && !isInCart(props.id)
              ? { backgroundColor: "#d58a22e8", cursor: "pointer" }
              : { backgroundColor: "#767575", cursor: "not-allowed" }
          }
          onClick={() => {
            if (cartValue > 0) {
              addToCart({
                ...props,
                disponibilidade: props.disponibilidade - cartValue,
                partialPurchaseQuantity: cartValue,
              });
              !isInCart(props.id) && setCartValue(0);
            }
          }}
        >
          Contratar
        </button>
      </div>
    </div>
  );
};

export default Counter;
