import AddToCartButton from "./AddToCartButton/AddToCartButton";
import QuantityButtons from "./QuantityButtons/QuantityButtons";

import styles from "./ProductButtons.module.scss";

export default function ProductButtons() {
  return (
    <div className={styles["product-buttons"]}>
      {/* <div className={styles["product__buttons--top-btn"]}>
        <button>-</button>0<button>+</button>
      </div> */}
      {/* <button className={styles["product__buttons--add-to-cart-btn"]}>
        <Icon name="icon-basket" width="16" height="16" />
      </button> */}
      <QuantityButtons />
      <AddToCartButton />
    </div>
  );
}
