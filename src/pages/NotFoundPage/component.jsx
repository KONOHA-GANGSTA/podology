import styles from "./styles.module.css";

export const NotFoundPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>Страница не найдена</div>
      <div className={styles.description}>
        На нашем сайте нет такой страницы
      </div>
    </div>
  );
};
