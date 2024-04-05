/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import ItemList from "../ItemList";
import Loader from "../Loader";

function ItemListContainer(props) {
  const [items, setItems] = useState(props.items);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className={styles.containerCards}>
        <p className={styles.contentParagraphTop}>
          <b>De Zero a Cem,</b> chegou a hora de promover o movimento!
        </p>
        <aside className={styles.contentasideTop}>
          Adquira o suporte na consultoria on-line dos melhores profissionais
          especialistas em atividades físicas, para você ou sua equipe
        </aside>
      </div>

      <div className={styles.containerItems}>
        {loading && <Loader />}
        {error && <span className={styles.containerError}>{error}</span>}
        {!loading && !error && <ItemList items={items} />}
      </div>
    </>
  );
}

export default ItemListContainer;
