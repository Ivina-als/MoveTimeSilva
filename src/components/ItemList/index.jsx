/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Item from "../Item";
import ItemDetailContainer from "../ItemDetailContainer";
import styles from "./style.module.scss";

const ItemList = ({ items }) => {
  return (
    <>
      <div className={styles.containerItemList}>
        {items.map((item) => (
          <Item key={item.id} item={item} link={`/category/:${item.id}`} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
