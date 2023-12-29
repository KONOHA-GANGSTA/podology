import { createPortal } from "react-dom";
import { MobileNavigationHeader } from "../MobileNavigationHeader/component";
import { NavigationTab } from "../NavigationTab/component";
import styles from "./styles.module.css";
import cn from "classnames";

export const NavigationTabs = ({
  categories,
  className,
  callback,
  opened,
  setOpened,
}) => {
  return (
    <nav className={cn(styles.nav_container, { [styles.opened]: opened })}>
      <div className={styles.navigation}>
        {opened && (
          <MobileNavigationHeader opened={opened} callback={callback} />
        )}
        {categories.map((el, index) => (
          <NavigationTab
            title={el}
            key={index}
            opened={opened}
            setOpened={setOpened}
          />
        ))}
      </div>
      {opened &&
        createPortal(
          <div className={styles.backdrop} onClick={callback}></div>,
          document.body
        )}
    </nav>
  );
};
