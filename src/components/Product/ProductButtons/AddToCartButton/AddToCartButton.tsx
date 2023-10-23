// import { useTranslation } from "react-i18next";
import { Icon } from "../../../Icon/Icon";
import styles from "./AddToCartButton.module.scss";

export default function AddToCartButton() {
  // const { t } = useTranslation();
  return (
    <button className={styles["add-to-cart-button"]}>
      <Icon name="icon-basket" width="16" height="16" />
      {/* <h3>{t("product.addToCart")}</h3> */}
      <h4 className={styles["add-to-cart-button__text"]}>Add to cart</h4>
    </button>
  );
}
