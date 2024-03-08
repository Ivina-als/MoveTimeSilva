/* eslint-disable react/prop-types */
import styles from "./style.module.scss";

function ItemListContainer(props) {
  return <div className={styles.containerCards}>{props.greeting}</div>;
}

export default ItemListContainer;
