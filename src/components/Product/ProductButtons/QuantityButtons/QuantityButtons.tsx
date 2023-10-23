import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../../Icon/Icon";

import styles from "./QuantityButtons.module.scss";
import { RootState } from "src/store/reducer";
import { counterActions } from "../../../../store/counter";

export default function QuantityButtons() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log("state", state);

  const quantity = useSelector((state: RootState) => state.counter.quantity);
  console.log("quantity", quantity);

  return (
    <div className={styles["quantity-button"]}>
      <button onClick={() => dispatch(counterActions.setDecrement())}>
        <Icon name="icon-minus" width="12" height="4" color="#FF7E1B" />
      </button>
      <h2>{quantity}</h2>
      <button onClick={() => dispatch(counterActions.setIncrement())}>
        <Icon name="icon-plus" width="12" height="12" color="#FF7E1B" />
      </button>
    </div>
  );
}
