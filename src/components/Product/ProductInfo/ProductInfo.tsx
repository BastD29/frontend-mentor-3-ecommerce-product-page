import { useTranslation } from "react-i18next";
import ProductPrice from "./ProductPrice/ProductPrice";

import styles from "./ProductInfo.module.scss";

export default function ProductInfo() {
  const { t } = useTranslation();

  return (
    <div className={styles["product-info"]}>
      <h3 className={styles["company-name"]}>SNEAKER COMPANY</h3>
      <h1>{t("product.productName")}</h1>
      <p>{t("product.productDescription")}</p>
      <ProductPrice />
    </div>
  );
}
