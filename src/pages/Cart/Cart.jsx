/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./style.module.scss";
import { CartContext } from "../../context/cartContext";
import CategoryCart from "../../components/CategoryCart";

const Cart = (props) => {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems);
  {
    /*Mostra as categorias, o botão para limpar todo o 
carrinho e o Total, botão de Confimar compra (Ilustrativo) */
  }
  return (
    <div className={styles.containerCart}>
      <CategoryCart />
    </div>
  );
};

export default Cart;
