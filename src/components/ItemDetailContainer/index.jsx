import React, { useState, useEffect } from "react";
import { stockItems } from "../../utils/arr";
import Loader from "../Loader";
import ItemDetail from "../ItemDetail";
import styles from "./style.module.scss";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ id = 2 }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const selectedItem = stockItems.find((item) => item.id === id);
          if (selectedItem) {
            resolve(selectedItem);
          } else {
            reject("Item not found");
          }
        }, 2000);
      });
    };

    getItem()
      .then((item) => setItem(item))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.containerContentCard}>
      {item ? <ItemDetail item={item} /> : <Loader />}
    </div>
  );
};

export default ItemDetailContainer;
