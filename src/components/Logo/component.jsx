import styles from "./styles.module.css";
import logo from "../../pictures/logo.png";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} />
    </div>
  );
};
