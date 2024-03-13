/* eslint-disable react/prop-types */
import ItemCount from "../ItemCount";
import styles from "./style.module.scss";

function ItemListContainer(props) {
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
      <ItemCount {...props} />
    </>
  );
}

export default ItemListContainer;
