import { thumbnails } from "@data/images";
import { Icon } from "../../Icon/Icon";
import styles from "./ProductDetail.module.scss";

export default function ProductDetail() {
  return (
    <div className={styles["product-detail"]}>
      <img
        src={thumbnails[0].value}
        alt={thumbnails[0].value}
        className={styles["product-detail__thumbnail"]}
      />
      <div className={styles["product-detail__text"]}>
        <h5>Fall limited edition sneakers</h5>
        <div className={styles["product-detail__calculation"]}>
          <h5>
            {"price"} x {"quantity"}
          </h5>
          <h5>{"total"}</h5>
        </div>
      </div>
      <button className={styles["product-detail__delete-btn"]}>
        <Icon name="icon-delete" width="14" height="16" color="#C3CAD9" />
      </button>
    </div>
  );
}
