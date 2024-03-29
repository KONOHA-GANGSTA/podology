import { Footer } from "../Footer/component";
import { Header } from "../Header/component";
import styles from "./styles.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
