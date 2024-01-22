import styles from "./styles.module.css";
import { PhoneContacts } from "../../components/PhoneContacts/component";
import { LocationContacts } from "../../components/LocationContacts/component";
import { VKContacts } from "../../components/VKcontacts/component";
import { useGetContactsQuery } from "../../redux/services/api";

export const ContactsPage = () => {
  const { data, isFetching } = useGetContactsQuery();

  if (isFetching) return <div>Грузим</div>;

  return (
    <div className={styles.root}>
      <section>
        <div className={styles.header}>
          <h1>Запишитесь на прием</h1>
        </div>
        <div className={styles.first_line}>
          <PhoneContacts number={data.mobile} className={styles.phone} />
          <LocationContacts
            address={data.address}
            href={data.yaMaps}
            className={styles.location}
          />
        </div>
        <VKContacts href={data.vk} />
      </section>
    </div>
  );
};
