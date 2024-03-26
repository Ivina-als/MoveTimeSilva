import profissional from "/profissional-musculacao.webp";
import styles from "./style.module.scss";
import ItemCount from "../ItemCount";

import { useState } from "react";
import Loader from "../Loader";

const ProfissionalDetail = (props) => {
  const [cartState] = useState({
    category: "bodybuilding",
    name: "Rossandra Alexa",
    especialidade: "Hipertrofia",
    descrição:
      "Licenciatura em educação física, Atuou 15 anos com fisiculturismo, especilista em ganho de massa magra e hipertrofia",
    disponibilidade: 5,
    price: "220,00",
  });
  const [onAdd, setOnAdd] = useState(0);
  const [stock, setStock] = useState(5);
  // const [countCart, setCountCart] = useState(0);

  return (
    <div className={styles.containerMaxWidth}>
      <div className={styles.containerProfissionalDetails}>
        <img className={styles.imgProfissional} src={profissional} />
        <h3>{cartState.especialidade}</h3>
        <span>{cartState.name}</span>
        <p>
          Investimento: <b>{cartState.price}</b>
        </p>
        {props.countCart === 0 && (
          <ItemCount
            onAdd={onAdd}
            setOnAdd={setOnAdd}
            stock={stock}
            setStock={setStock}
            countCart={props.countCart}
            setCountCart={props.setCountCart}
          />
        )}
      </div>
    </div>
  );
};

export default ProfissionalDetail;
