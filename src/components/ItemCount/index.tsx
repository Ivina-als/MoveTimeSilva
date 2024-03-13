/* eslint-disable react/prop-types */
import React from "react";
import styles from "./style.module.scss";
import gym from "/gym.jpg";

const ItemCount = (props) => {
  return (
    <div className={styles.module}>
      <div className={styles.contentCardLeft}>
        <img className={styles.imgCard} src={gym} />
        <p>Profissionais de musculação / Hipertrofia e emagrecimento</p>
      </div>
      <div className={styles.containerItemList}>
        <div className={styles.submenu}>
          <div className={styles.containerAvailability}>
            <span>Profissionais disponíveis</span>
          </div>
          <div className={styles.containerQuantity}>
            <span>Quantidade</span>
          </div>
          <div className={styles.quantityNumber}>{props.stock}</div>
          <div className={styles.buttonsQuantity}>
            <button
              className={`${styles.size} ${styles.increase}`}
              onClick={() => {
                if (props.stock > 0) {
                  props.setOnAdd(props.onAdd + 1);
                  props.setStock(props.stock - 1);
                }
              }}
            >
              +
            </button>
            <div className={`${styles.size}`}>{props.onAdd}</div>
            <button
              className={`${styles.size} ${styles.decrease}`}
              onClick={() => {
                if (props.onAdd != 0) {
                  props.setOnAdd(props.onAdd - 1);
                  props.setStock(props.stock + 1);
                }
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <button
        className={
          (props.stock == 0 && props.onAdd == 0) || props.onAdd == 0
            ? `${styles.buttonWishDisable}`
            : `${styles.buttonWish}`
        }
        onClick={() => {
          if ((props.stock != 0 && props.onAdd != 0) || props.onAdd != 0) {
            props.setCountCart(props.onAdd);
            props.setOnAdd(0);
          }
        }}
      >
        Adquirir
      </button>
    </div>
  );
};

export default ItemCount;
