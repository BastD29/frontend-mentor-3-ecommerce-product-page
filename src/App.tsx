import ImageSlider from "./components/ImageSlider/ImageSlider";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";

import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles["app"]}>
      <Navbar />
      <div className={styles["imgandpdt"]}>
        <ImageSlider />
        <Product />
      </div>
    </div>
  );
}
