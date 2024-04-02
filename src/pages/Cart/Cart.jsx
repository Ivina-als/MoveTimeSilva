/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./style.module.scss";
import { CartContext } from "../../context/cartContext";
import CategoryCart from "../../components/CategoryCart";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={styles.containerCart}>
      <Link to={"/"} className={styles.back}>
        Voltar
      </Link>
      {cartItems && <CategoryCart />}
      {cartItems.length === 0 && (
        <div style={{ color: "black", height: "100svh", marginTop: "24px" }}>
          Carrinho vazio. Retorne para a Home para efetuar suas compras
        </div>
      )}
    </div>
  );
};

export default Cart;
