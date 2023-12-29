import { Service } from "../../components/Service/component";
import { SERVICES } from "../../constants/services";
import styles from "./styles.module.css";

export const ServicesPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.services_container}>
        {SERVICES.map((el, ind) => (
          <Service service={el} key={ind} />
        ))}
      </div>
    </div>
  );
};
