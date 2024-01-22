import styles from "./styles.module.css";
import picture from "../../pictures/logo.png";

export const Spiner = () => {
  return (
    <div className={styles.root}>
      <div className={styles.spiner}>
        <div className={styles.jumper}>
          <img src={picture} />
        </div>
      </div>
    </div>
  );
};
