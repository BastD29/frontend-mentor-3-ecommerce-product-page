import { useTranslation } from "react-i18next";

import styles from "./ProductPrice.module.scss";

export default function ProductPrice() {
  const { t } = useTranslation();

  return (
    <div className={styles["product-price"]}>
      <div className={styles["product-price__discount"]}>
        <h2>{t("product.productPriceDiscounted")}</h2>
        <span>50%</span>
      </div>
      <h4>{t("product.productPrice")}</h4>
    </div>
  );
}
