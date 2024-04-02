import styles from "./style.module.scss";
import { useContext, useEffect, useState } from "react";
import Loader from "../Loader";
import { Link, useParams } from "react-router-dom";
import { profissionalsDetail } from "../../utils/arr";
import { CartContext } from "../../context/cartContext";
import Counter from "../Counter";

const ProfissionalDetail = (props) => {
  const { addToCart, cartItems, isInCart } = useContext(CartContext);

  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [totalCoust, setTotalCoust] = useState(0);

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
      const professionalArrOrigin = profissionalsDetail.find(
        (objeto) => objeto.id === profissional.id
      );

      total +=
        profissional.investimento *
        (professionalArrOrigin.disponibilidade - profissional.disponibilidade);
    });
    setTotalCoust(total);
  }, [cartItems]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.containerMaxWidth}>
          <div className={styles.containerProfessional}>
            <p className={styles.titleCategory}>
              <img src={`/${category}.svg`} className={styles.iconCategory} />
              <b>{category.toUpperCase()}</b>
            </p>
            {professionals.map((professional) => {
              return (
                <div key={professional.id} className={styles.cardProfessional}>
                  <img
                    className={styles.imgProfessional}
                    src={professional.pictureUrl}
                  />
                  <div className={styles.containerContentRigth}>
                    <h3>{professional.name}</h3>
                    <p>{professional.descricao}</p>
                    <div className={styles.containerDetails}>
                      <div>
                        <b>R$ {professional.investimento},00/mês por aluno</b>
                      </div>
                      <div className={styles.disponibilityText}>
                        Disponibilidade para novos alunos:
                        <Counter {...professional} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <span
              className={styles.total}
              style={{
                color: "#1f1f1f",
                fontSize: "1.5rem",
                marginLeft: "24px",
              }}
            >
              {totalCoust != 0 && `Total: R$ ${totalCoust}/mês`}
            </span>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              {cartItems.length !== 0 && (
                <Link
                  to={"/cart"}
                  className={styles.finishedCart}
                  style={
                    cartItems.length
                      ? { backgroundColor: "#d58a22e8", cursor: "pointer" }
                      : { backgroundColor: "#767575", cursor: "not-allowed" }
                  }
                >
                  Finalizar Compra
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfissionalDetail;
