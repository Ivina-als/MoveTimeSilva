/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import { CartContext } from "../../context/cartContext";
import ProfessionalChosenCart from "../ProfessionalChosenCart";

const CategoryCart = (props) => {
  const { cartItems } = useContext(CartContext);
  const [categorys, setCategorys] = useState([]);
  const [calcTotal, setCalcTotal] = useState(0);

  useEffect(() => {
    const findCategorys = cartItems.reduce((category, professional) => {
      if (!category.includes(professional.category)) {
        return [...category, professional.category];
      }
      return category;
    }, []);
    setCategorys(findCategorys);
  }, [cartItems]);

  useEffect(() => {
    const sum = cartItems.reduce((total, professional) => {
      const valorProfessional =
        professional.investimento * professional.partialPurchaseQuantity;
      return total + valorProfessional;
    }, 0);
    setCalcTotal(sum);
  }, [cartItems]);

  return (
    <div className={styles.CategoryCart}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className={styles.titleTotal}>Total:</span>
        <span className={styles.totalValue}>
          <b>R$ </b>
          {calcTotal},00/mês
        </span>
      </div>
      {categorys.map((category, index) => {
        return (
          <div key={index} className={styles.containerCategoryCart}>
            <div className={styles.textTopCategory}>
              <img className={styles.imgCategory} src={`/${category}.svg`} />{" "}
              <h3>{category.toUpperCase()}</h3>
            </div>
            <ProfessionalChosenCart category={category} />
          </div>
        );
      })}
      <button className={styles.buttonFinishedCart}>
        Finalizar minha Compra
      </button>
    </div>
  );
};

export default CategoryCart;
