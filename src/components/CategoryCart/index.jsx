/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import { CartContext } from "../../context/cartContext";
import ProfessionalChosenCart from "../ProfessionalChosenCart";

const CategoryCart = (props) => {
  const { cartItems } = useContext(CartContext);

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const findCategorys = cartItems.reduce((category, professional) => {
      if (!category.includes(professional.category)) {
        return [...category, professional.category];
      }
      return category;
    }, []);
    setCategorys(findCategorys);
  }, []);
  console.log(categorys);
  {
    /*Mostra o container de categoria) e cada um dos 
    profissionais escolhidos para essa categoria*/
  }
  return (
    <div className={styles.CategoryCart}>
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
    </div>
  );
};

export default CategoryCart;
