import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const ItemDetail = ({ item }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`/profissionals/${item.category}`}
    >
      <button className={styles.containerItemDetail}>
        <img
          className={styles.imageDetail}
          src={item.pictureUrl}
          alt={item.title}
        />
        <h2>{item.title}</h2>
        <p className={styles.descriptionDetail}>{item.description}</p>
        <p className={styles.paragraphDetail}>
          Investimento: <b>{item.price}</b>
        </p>
      </button>
    </Link>
  );
};

export default ItemDetail;
