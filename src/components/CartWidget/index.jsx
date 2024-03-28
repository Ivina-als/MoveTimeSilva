/* eslint-disable react/prop-types */
import cart from "/cart.png";
import styles from "./style.module.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";

const CartWidget = (props) => {
  const { cartItems } = useContext(CartContext);
  const [number, setNumber] = useState(0);
  // console.log(cartItems);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((profissional) => {
      total += profissional.number;
    });
    setNumber(total);
  }, [cartItems]);
  return (
    <>
      <div className={styles.containerightCart}>
        <button className={styles.buttonCart}>
          <img className={styles.cart} src={cart} />

          <span className={styles.quantity}>
            {cartItems.length === 0 && props.countCart}
            {cartItems.length !== 0 && number}
          </span>
        </button>
      </div>
    </>
  );
};

export default CartWidget;
