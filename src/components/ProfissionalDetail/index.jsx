import profissional from "/profissional-musculacao.webp";
import styles from "./style.module.scss";
import ItemCount from "../ItemCount";

import { useEffect, useState } from "react";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const ProfissionalDetail = (props) => {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.containerMaxWidth}>
          <div className={styles.containerProfissionalDetails}>
            <img className={styles.imgProfissional} src={profissional} />
            <h3>{cartState.especialidade}</h3>
            <span>{cartState.name}</span>
            <p>
              Investimento: <b>{cartState.price}</b>
            </p>
            <ItemCount
              onAdd={onAdd}
              setOnAdd={setOnAdd}
              stock={stock}
              setStock={setStock}
              countCart={props.countCart}
              setCountCart={props.setCountCart}
            />
            <Link
              style={
                props.countCart === 0
                  ? { color: "grey", cursor: "not-allowed" }
                  : { color: "blue", cursor: "pointer" }
              }
              to={props.countCart != 0 ? "/cart" : ""}
            >
              <p>Finalizar compra</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfissionalDetail;
