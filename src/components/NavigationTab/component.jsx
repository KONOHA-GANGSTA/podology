import styles from "./styles.module.css";
import cn from "classnames";

export const NavigationTab = ({ title, className, opened }) => {
  return (
    <div className={cn(styles.root, className, { [styles.mobile]: opened })}>
      {title}
    </div>
  );
};
