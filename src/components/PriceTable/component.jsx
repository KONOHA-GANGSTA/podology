import { PriceTableItem } from "../PriceTableItem/component";
import styles from "./styles.module.css";
import cn from "classnames";

export const PriceTable = ({ className, table }) => {
  return (
    <div className={cn(className, styles.root)}>
      <table align="center">
        <caption>{table.category}</caption>
        <thead>
          <tr>
            {table.no_title ? null : <th>Услуга</th>}
            {table.no_enum ? null : <th>Количество</th>}
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {table.positions.map((el, ind) => (
            <PriceTableItem item={el} key={ind} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
