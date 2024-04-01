import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import { CartContext } from "../../context/cartContext";
import trash from "/trash.png";
import { profissionalsDetail } from "../../utils/arr";

const ProfessionalChosenCart = (props) => {
  const { cartItems } = useContext(CartContext);
  const [allProfessionals, setAllProfessionals] = useState([]);

  useEffect(() => {
    const filterAllProfessionals = (category) => {
      setAllProfessionals(
        cartItems.filter((professional) => professional.category === category)
      );
    };

    filterAllProfessionals(props.category);
  }, []);

  // const findProfessional = (id) => {
  //   const professional = profissionalsDetail.find(
  //     (professional) => professional.id === id
  //   );
  //   setQuantity(professional.disponibilidade);
  // };

  const findProfessional = (id) => {
    const professional = profissionalsDetail.find(
      (professional) => professional.id === id
    );
    return professional.disponibilidade;
  };

  return (
    <div className={styles.containerProfessionalChosenCart}>
      {allProfessionals.map((professionalsByCategory) => {
        return (
          <React.Fragment key={professionalsByCategory.id}>
            <div className={styles.containerCartPrefessional}>
              <div className={styles.containerContent}>
                <figure className={styles.figureCart}>
                  <img
                    className={styles.imgForCart}
                    src={professionalsByCategory.pictureUrl}
                  />
                </figure>
                <div className={styles.contentCartByProfessional}>
                  <h3 style={{ marginTop: 0 }}>
                    {professionalsByCategory.name}
                  </h3>
                  <span>{professionalsByCategory.descricao}</span>
                  <div
                    style={{ marginTop: "10px" }}
                    className={styles.containerPrice}
                  >
                    <span>R$ {professionalsByCategory.investimento}/mês</span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button className={styles.buttonTrash}>
                  <img className={styles.trash} src={trash} />
                </button>
                <span>
                  x
                  {findProfessional(professionalsByCategory.id) -
                    professionalsByCategory.disponibilidade}
                </span>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProfessionalChosenCart;
