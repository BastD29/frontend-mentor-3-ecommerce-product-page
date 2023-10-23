// import { useTranslation } from "react-i18next";
// import { Select } from "../Select/Select";
// import { useState } from "react";
// import { Icon } from "../Icon/Icon";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductButtons from "./ProductButtons/ProductButtons";

import styles from "./Product.module.scss";

export default function Product() {
  // const { t, i18n } = useTranslation();

  // const [selectedValue, setSelectedValue] = useState("en");

  // const languages = [
  //   { label: "English", value: "en" },
  //   { label: "French", value: "fr" },
  // ];

  // const changeLanguage = (language: string) => {
  //   i18n.changeLanguage(language);
  //   setSelectedValue(language);
  // };

  return (
    <div className={styles["product"]}>
      {/* <Select
        options={languages}
        value={selectedValue}
        onChange={changeLanguage}
      /> */}

      <ProductInfo />
      <ProductButtons />
    </div>
  );
}
