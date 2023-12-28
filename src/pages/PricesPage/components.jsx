import { useRef } from "react";
import { PriceTable } from "../../components/PriceTable/component";
import { prices } from "../../constants/prices";
import styles from "./styles.module.css";
import { useElementWasInView } from "../../hooks/useElementWasInView";
import cn from "classnames";

export const PricesPage = () => {
  const refs = prices.map((_) => useRef());
  const pageState = useElementWasInView(refs);

  return (
    <div className={styles.root}>
      {prices.map((el, ind) => (
        <div
          key={ind}
          ref={refs[ind]}
          className={cn(styles.container, {
            [styles.hidden]: !pageState[`s${ind}`],
          })}
        >
          <PriceTable table={el} />
        </div>
      ))}
    </div>
  );
};
