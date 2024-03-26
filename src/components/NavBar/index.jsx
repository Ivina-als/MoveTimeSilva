/* eslint-disable react/prop-types */
import logoLightning from "/light.png";
import menuMobile from "/menu-mobile.svg.png";
import styles from "./style.module.scss";
import { categorys } from "../../utils/arr";
import CartWidget from "../CartWidget";

const NavBar = (props) => {
  return (
    <>
      <nav className={styles.containerNavBar}>
        <div className={styles.logoNavBar}>
          <figure className={styles.containerLogo}>
            <img className={styles.logo} src={logoLightning} />
          </figure>
        </div>
        <div className={styles.categoryList}>
          <ul className={styles.categoryUl}>
            {categorys.map((category, index) => {
              return (
                <li key={index} className={styles.categoryIten}>
                  <a href={category.href} className={styles.categoryAnchor}>
                    {category.subtitile}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.containerightButtons}>
          <CartWidget {...props} />

          <button
            className={styles.buttonMobile}
            // eslint-disable-next-line react/prop-types
            onClick={() => props.setOpen(!props.open)}
          >
            <img className={styles.menuMobile} src={menuMobile} />
          </button>
        </div>
      </nav>
      {props.open && (
        <>
          <div className={styles.menuItensMobile}>
            <ul className={styles.mobileList}>
              {categorys.map((itens, i) => {
                return (
                  <li key={i} className={styles.categoryItem}>
                    <a href={itens.href} className={styles.categoryAnchor}>
                      {itens.subtitile}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
