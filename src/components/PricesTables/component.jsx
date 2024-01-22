import { useElementWasInView } from "../../hooks/useElementWasInView";
import { PriceTable } from "../PriceTable/component";
import styles from "./styles.module.css";
import cn from "classnames";

export const PricesTables = ({ data }) => {
  const { state, refs } = useElementWasInView(data.length);

  return (
    <div className={styles.root}>
      {data.map((el, ind) => (
        <div
          key={ind}
          ref={refs[ind]}
          className={cn(styles.container, {
            [styles.hidden]: !state[`s${ind}`],
          })}
        >
          <PriceTable table={el} />
        </div>
      ))}
    </div>
  );
};
