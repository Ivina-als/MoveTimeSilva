/* eslint-disable react/prop-types */
import cart from "/cart.png";
import styles from "./style.module.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { profissionalsDetail } from "../../utils/arr";

const CartWidget = (props) => {
  const { cartItems } = useContext(CartContext);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((profissional) => {
      const professionalArrOrigin = profissionalsDetail.find(
        (objeto) => objeto.id === profissional.id
      );

      total +=
        professionalArrOrigin.disponibilidade - profissional.disponibilidade;
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
