import { useTranslation } from "react-i18next";

import styles from "./MobileMenu.module.scss";
import { Icon } from "../../Icon/Icon";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const { t } = useTranslation();

  return (
    <nav className={styles["mobile-menu"]}>
      <button onClick={onClose}>
        <Icon name="icon-close" width="13" height="13" />
      </button>
      <ul className={styles["mobile-menu__list"]}>
        <li>{t("menu.collections")}</li>
        <li>{t("menu.men")}</li>
        <li>{t("menu.women")}</li>
        <li>{t("menu.about")}</li>
        <li>{t("menu.contact")}</li>
      </ul>
    </nav>
  );
}
