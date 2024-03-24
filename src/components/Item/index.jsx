/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import styles from "./style.module.scss";

const Item = ({ item, link }) => {
  return (
    <>
      <Link to={link} style={{ textDecoration: "none" }}>
        <div className={styles.containerItem}>
          <p className={styles.title}>{item.title}</p>
          <div className={styles.descriptionItem}>
            <img className={styles.pictureUrl} src={item.pictureUrl} />
            <p className={styles.price}>
              Investimento : <b>{item.price}</b>
            </p>
          </div>
          <p className={styles.titleDescription}>Descrição</p>
          <div className={styles.description}>{item.description}</div>
        </div>
      </Link>
    </>
  );
};

export default Item;
