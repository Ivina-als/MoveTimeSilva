import cart from "/cart.png";
import styles from "./style.module.scss";

const CartWidget = (props) => {
  return (
    <>
      <div className={styles.containerightCart}>
        <button className={styles.buttonCart}>
          <img className={styles.cart} src={cart} />
          <span className={styles.quantity}>{props.countCart}</span>
        </button>
      </div>
    </>
  );
};

export default CartWidget;
