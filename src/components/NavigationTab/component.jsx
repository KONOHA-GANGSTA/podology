import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import cn from "classnames";
import { PAGES_ROUTES } from "../../constants/PAGES_ROUTES";

export const NavigationTab = ({ title, className, opened, setOpened }) => {
  return (
    <NavLink
      to={"/" + PAGES_ROUTES[title]}
      end
      className={({ isActive }) =>
        cn(styles.link, className, {
          [styles.active]: isActive,
          [styles.mobile]: opened,
        })
      }
      onClick={() => setOpened(false)}
    >
      {title}
    </NavLink>
  );
};
