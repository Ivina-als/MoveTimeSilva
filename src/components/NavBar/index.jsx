import light from "/light.png";
import styles from "./style.module.scss";

const NavBar = () => {
  const categorys = [
    {
      subtitile: "Yoga",
      href: "#",
    },
    {
      subtitile: "Funcional",
      href: "X",
    },
    {
      subtitile: "Crossfit",
      href: "Y",
    },
    {
      subtitile: "Musculação",
      href: "Z",
    },
  ];
  return (
    <>
      <div className={styles.containerNavbar}>
        <div className={styles.figureNavBar}>
          <img className={styles.figureNavBar} src={light} />
          <p className={styles.brand}>MoveTime</p>
        </div>
        <div className={styles.containerList}>
          <ul className={styles.listUl}>
            {categorys.map((category, index) => {
              return (
                <li className={styles.list} key={index}>
                  <a className={styles.anchor} href={category.href}>
                    {category.subtitile}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
