/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";
import { CartContext } from "../../context/cartContext";
import ProfessionalChosenCart from "../ProfessionalChosenCart";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Loader from "../Loader";

const CategoryCart = (props) => {
  const { cartItems, clear } = useContext(CartContext);
  const [categorys, setCategorys] = useState([]);
  const [calcTotal, setCalcTotal] = useState(0);
  const [message, setMessage] = useState(false);
  const [orderId, setOrderId] = useState();

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

  const sendOrder = () => {
    const order = {
      buyer: {
        name: "Ivina Albuquerque",
        phone: "819999999",
        email: "ivin@gmail.com",
      },
      items: cartItems,
      date: new Date().toLocaleString(),
      total: calcTotal,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then(({ id }) => setOrderId(id))
      .catch((err) => console.error(err));
  };

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
      <button
        className={styles.buttonFinishedCart}
        onClick={() => {
          sendOrder();
          setMessage(true);
        }}
      >
        Finalizar minha Compra
      </button>
      {message && (
        <div className={styles.overlay}>
          <div className={styles.containerContent}>
            <div className={styles.contentMessageButton}>
              <Link
                to={"/"}
                className={styles.closeModal}
                onClick={() => {
                  setMessage(false);
                  clear();
                }}
              >
                x
              </Link>
            </div>

            {orderId ? (
              <div className={styles.contentMessage}>
                <span>Compra concluída com sucesso!</span>{" "}
                <span>
                  Pedido de n°: <b>{orderId}</b>
                </span>
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryCart;
