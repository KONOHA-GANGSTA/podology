import styles from "./styles.module.css";
import cn from "classnames";
import phone from "../../pictures/svg/phone.svg";
import telegram from "../../pictures/svg/telegram.svg";
import whatsapp from "../../pictures/svg/whatsapp.svg";
import { useState } from "react";
import { AlertText } from "../AlertText/component";
import { copyToClipboard } from "../../functions/copyToClipboard";

export const PhoneContacts = ({ className, number }) => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div className={cn(className, styles.root)}>
        <div className={styles.text}>
          <span className={styles.header}>По телефону:</span>
          <span
            onClick={() => {
              copyToClipboard(number.replaceAll(/[ \-]/g, ""));
              setOpened(true);
            }}
            className={styles.number}
          >
            {" " + number}
          </span>
        </div>
        <div className={styles.logos}>
          <div className={cn(styles.image)}>
            <img src={phone} />
          </div>
          <div className={cn(styles.image)}>
            <img src={telegram} />
          </div>
          <div className={cn(styles.image)}>
            <img src={whatsapp} />
          </div>
        </div>
      </div>
      {opened && (
        <AlertText
          text={"Номер скопирован в буфер обмена"}
          setOpened={setOpened}
        />
      )}
    </>
  );
};
