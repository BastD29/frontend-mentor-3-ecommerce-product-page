import sneakersLogo from "../../assets/icons/sneakers-title.svg";
import basketIcon from "../../assets/icons/basket-icon.png";
import burgerIcon from "../../assets/icons/burger-icon.svg";
import userImg from "../../assets/images/user-img.png";

import styles from "./Navbar.module.scss";
import { useState } from "react";
import MobileMenu from "../Menu/MobileMenu/MobileMenu";
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["header__left"]}>
        <img
          src={burgerIcon}
          alt="burger-icon"
          className={styles["header__burger-icon"]}
          onClick={toggleMenu}
        />

        {isMenuOpen && <MobileMenu onClose={closeMenu} />}

        <img
          src={sneakersLogo}
          alt="sneakers-logo"
          className={styles["header__sneakers-logo"]}
        />
      </div>

      <Menu />

      {isCartOpen && <Cart />}

      <div className={styles["header__right"]}>
        <div className={styles["header__basket-container"]}>
          <img
            src={basketIcon}
            alt="basket-icon"
            className={styles["header__basket-icon"]}
            onClick={toggleCart}
          />
          {/* {basketQuantity > 0 && (
          <span className={styles["header__basket-quantity"]}>
            {basketQuantity}
          </span>
        )} */}
          {/* <span className={styles["header__basket-quantity"]}>0</span> */}
        </div>

        <img
          src={userImg}
          alt="user-image"
          className={styles["header__user-image"]}
        />
      </div>
    </header>
  );
}
