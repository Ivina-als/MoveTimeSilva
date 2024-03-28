import profissionalImg from "/profissional-musculacao.webp";
import styles from "./style.module.scss";
import ItemCount from "../ItemCount";

import { useContext, useEffect, useState } from "react";
import Loader from "../Loader";
import { Link, useParams } from "react-router-dom";
import { profissionalsDetail } from "../../utils/arr";
import { CartContext } from "../../context/cartContext";

const ProfissionalDetail = (props) => {
  const { cartItems } = useContext(CartContext);

  {
    /* proibir comprar duas vezes o mesmo 
id e sincronizar a disponibilidade com a adição no carrinho e criar os metodos*/
  }

  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [totalCoust, setTotalCoust] = useState(0);

  {
    /*Tem que apagar esses estado stock */
  }
  const [stock, setStock] = useState(5);
  const [onAdd, setOnAdd] = useState(0);

  const [cartState] = useState({
    category: "bodybuilding",
    name: "Rossandra Alexa",
    especialidade: "Hipertrofia",
    descrição:
      "Licenciatura em educação física, Atuou 15 anos com fisiculturismo, especilista em ganho de massa magra e hipertrofia",
    disponibilidade: 5,
    price: "220,00",
    number: stock,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const professionals = profissionalsDetail.filter(
    (professional) => professional.category === category
  );

  useEffect(() => {
    let total = 0;
    cartItems.forEach((profissional) => {
      total += profissional.investimento;
    });
    setTotalCoust(total);
  }, [cartItems]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.containerMaxWidth}>
          <div
            style={{ display: "flex", gap: "20px", flexDirection: "column" }}
          >
            <p style={{ color: "#d3d3d3" }}>{category.toUpperCase()}</p>
            {professionals.map((professional) => {
              return (
                <div
                  key={professional.id}
                  className={styles.containerItemDetail}
                >
                  <p>{professional.name}</p>
                  <img
                    className={styles.imageDetail}
                    src={professional.pictureUrl}
                    alt={professional.name}
                  />
                  {/* <h2>{profissional.especialidade}</h2> */}
                  <p className={styles.descriptionDetail}>
                    {professional.descricao}
                  </p>
                  <p className={styles.paragraphDetail}>
                    Investimento: <b>R$ {professional.investimento}/mês</b>
                  </p>
                  {/*cartState é o profissional */}
                  {/*stock tbm ta descrito no profissional */}
                  {/* countCart deixa, é a contagem do carrinho */}
                  <ItemCount
                    professional={professional}
                    cartState={cartState}
                    onAdd={onAdd}
                    setOnAdd={setOnAdd}
                    stock={stock}
                    setStock={setStock}
                    countCart={props.countCart}
                    setCountCart={props.setCountCart}
                  />
                </div>
              );
            })}
            {/* <ItemCount
              cartState={cartState}
              onAdd={onAdd}
              setOnAdd={setOnAdd}
              stock={stock}
              setStock={setStock}
              countCart={props.countCart}
              setCountCart={props.setCountCart}
            /> */}
            <span style={{ color: "white", fontSize: "1.5rem" }}>
              Total: R${totalCoust}/mês
            </span>

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
