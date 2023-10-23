import { useTranslation } from "react-i18next";
import styles from "./Menu.module.scss";

export default function Menu() {
  const { t } = useTranslation();
  return (
    <nav className={styles["menu"]}>
      <ul className={styles["menu__list"]}>
        <li>{t("menu.collections")}</li>
        <li>{t("menu.men")}</li>
        <li>{t("menu.women")}</li>
        <li>{t("menu.about")}</li>
        <li>{t("menu.contact")}</li>
      </ul>
    </nav>
  );
}
