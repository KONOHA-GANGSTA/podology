import { contacts } from "../../constants/contacts";
import styles from "./styles.module.css";
import { PhoneContacts } from "../../components/PhoneContacts/component";
import { LocationContacts } from "../../components/LocationContacts/component";
import { VKContacts } from "../../components/VKcontacts/component";

export const ContactsPage = () => {
  return (
    <div className={styles.root}>
      <section>
        <div className={styles.header}>
          <h1>Запишитесь на прием</h1>
        </div>
        <div className={styles.first_line}>
          <PhoneContacts number={contacts.mobile} className={styles.phone} />
          <LocationContacts
            address={contacts.address}
            href={contacts.yaMaps}
            className={styles.location}
          />
        </div>
        <VKContacts href={contacts.vk} />
      </section>
    </div>
  );
};
