import styles from "./styles.module.css";
import cn from "classnames";

export const Footer = ({ className }) => {
  return (
    <div className={cn(className, styles.root)}>
      <footer className={styles.footer}>г.Пермь, 2023 г.</footer>
    </div>
  );
};
