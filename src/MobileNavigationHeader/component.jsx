import { MenuBurger } from "../components/MenuBurger/component";
import styles from "./styles.module.css";

export const MobileNavigationHeader = ({ opened, callback }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>НАВИГАЦИЯ</div>
      <div>
        <MenuBurger cross={opened} callback={callback} />
      </div>
    </div>
  );
};
