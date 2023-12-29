import styles from "./styles.module.css";
import cn from "classnames";
import location from "../../pictures/svg/location.svg";

export const LocationContacts = ({ address, className, href }) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.header}>Наш адрес</div>
      <div className={styles.address_row}>
        <div className={styles.image}>
          <img src={location}></img>
        </div>
        <div>
          <a href={href}>{address}</a>
        </div>
      </div>
    </div>
  );
};
