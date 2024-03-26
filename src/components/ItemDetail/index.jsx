import styles from "./style.module.scss";

const ItemDetail = ({ item }) => {
  return (
    <button
      className={styles.containerItemDetail}
      onClick={() => (window.location.href = `/profissionals`)}
    >
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
  );
};

export default ItemDetail;
