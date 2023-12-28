import styles from "./styles.module.css";

export const PriceTableItem = ({ className, item }) => {
  return (
    <tr className={styles.row}>
      {item.title ? (
        <td className={styles.cell}>
          <p>{item.title}</p>
          {item.description ? (
            <p className={styles.description}>({item.description})</p>
          ) : null}
        </td>
      ) : null}
      {item.enum ? <td className={styles.cell}>{item.enum}</td> : null}
      <td className={styles.cell}>{`${item.price} `}&#8381;</td>
    </tr>
  );
};
