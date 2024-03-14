/* eslint-disable react/prop-types */
import Item from "../Item";
import styles from "./style.module.scss";

const ItemList = ({ items }) => {
  return (
    <>
      <div className={styles.containerItemList}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
