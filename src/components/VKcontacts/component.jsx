import styles from "./styles.module.css";
import cn from "classnames";
import vk from "../../pictures/svg/vk.svg";
import code from "../../pictures/photos/qr.jpg";

export const VKContacts = ({ className, href }) => {
  return (
    <div className={cn(className, styles.root)}>
      <div className={styles.text}>
        <div>Следите за нами в социальных сетях</div>
        <div className={styles.address_row}>
          <div className={styles.image}>
            <img src={vk}></img>
          </div>
          <div>
            <a href={href}>{href}</a>
          </div>
        </div>
      </div>
      <div className={styles.code}>
        <img src={code} />
      </div>
    </div>
  );
};
