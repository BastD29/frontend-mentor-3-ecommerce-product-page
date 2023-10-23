import { useState } from "react";
import { images } from "@data/images";
import { Icon } from "../Icon/Icon";
import styles from "./ImageSlider.module.scss";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles["image-slider"]}>
      <img
        src={images[currentIndex].value}
        alt={images[currentIndex].value}
        className={styles["image-slider__image"]}
      />
      <div className={styles["image-slider__buttons"]}>
        <button
          onClick={goPrev}
          className={styles["image-slider__button-prev"]}
        >
          <Icon name="icon-previous" width="12" height="18" color="#000" />
        </button>
        <button
          onClick={goNext}
          className={styles["image-slider__button-next"]}
        >
          <Icon name="icon-next" width="13" height="18" color="#000" />
        </button>
      </div>
    </div>
  );
}
