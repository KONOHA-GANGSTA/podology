import styles from "./styles.module.css";
import cn from "classnames";

export const MenuBurger = ({ className, cross, callback }) => {
  return (
    <div
      className={cn(
        styles.root,
        { [styles.pile]: !cross, [styles.cross]: cross },
        className
      )}
      onClick={callback}
    >
      {cross ? (
        <>
          <div className={cn(styles.bar, styles.crossBar1)}></div>
          <div className={cn(styles.bar, styles.crossBar2)}></div>
        </>
      ) : (
        [0, 1, 2].map((el) => <div className={styles.bar} key={el}></div>)
      )}
    </div>
  );
};
