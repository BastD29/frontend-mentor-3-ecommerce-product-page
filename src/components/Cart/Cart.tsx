import { useTranslation } from "react-i18next";
import styles from "./Cart.module.scss";
import ProductDetail from "./ProductDetail/ProductDetail";

export default function Cart() {
  const { t } = useTranslation();

  const isCartEmpty = false;

  return (
    <div className={styles["cart"]}>
      <div className={styles["cart__header"]}>
        <h2>{t("cart.title")}</h2>
      </div>
      {isCartEmpty ? (
        <div className={styles["cart__body"]}>
          <p>{t("cart.empty")}</p>
        </div>
      ) : (
        <div className={styles["cart__body"]}>
          <ProductDetail />
          <button className={styles["cart__checkout-btn"]}>
            {t("cart.checkout")}
          </button>
        </div>
      )}
    </div>
  );
}
