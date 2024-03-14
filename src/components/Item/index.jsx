/* eslint-disable react/prop-types */
import styles from "./style.module.scss";

const Item = ({ item }) => {
  // title: "Profissionais de musculação",
  //   description:
  //     "Esses profissionais planeja treinos focados em Musculação, orientando alunos e solucionando dúvidas referentes aos exercícios. Acompanha o desenvolvimento dos alunos e realiza avaliação física com foco em hipertrofia muscular ou emagrecimento saudável. São os profissionais mais indicados para exercícios anaeróbicos ",
  //   price: "R$ 350,00/mês"
  return (
    <>
      <div className={styles.containerItem}>
        <p className={styles.title}>{item.title}</p>
        <div className={styles.descriptionItem}>
          <img className={styles.pictureUrl} src={item.pictureUrl} />
          <p className={styles.price}>
            Investimento : <b>{item.price}</b>
          </p>
        </div>
        <p className={styles.titleDescription}>Descrição</p>
        {/* <aside>{item.description}</aside> */}
        <div className={styles.description}>{item.description}</div>
      </div>
    </>
  );
};

export default Item;
