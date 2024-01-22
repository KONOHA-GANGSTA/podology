import { Service } from "../../components/Service/component";
import { useGetServicesQuery } from "../../redux/services/api";
import styles from "./styles.module.css";

export const ServicesPage = () => {
  const { data, isFetching } = useGetServicesQuery();
  if (isFetching) return <div>GRUZIM</div>;
  return (
    <div className={styles.root}>
      <div className={styles.services_container}>
        {data.map((el, ind) => (
          <Service service={el} key={ind} />
        ))}
      </div>
    </div>
  );
};
