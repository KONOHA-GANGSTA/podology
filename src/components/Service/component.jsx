import styles from "./styles.module.css";
import cn from "classnames";
import timer from "../../pictures/svg/timer.svg";

export const Service = ({ className, service }) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.header}>{service.title}</div>
      <div className={styles.duration_row}>
        <div className={styles.image}>
          <img src={timer} />
        </div>
        <div className={styles.duration}>{service.duration}</div>
      </div>
    </div>
  );
};
