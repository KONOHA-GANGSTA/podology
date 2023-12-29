import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import styles from "./styles.module.css";

export const AlertText = ({ text, setOpened }) => {
  const [fade, setFade] = useState(false);
  const timeout = useRef();

  useEffect(() => {
    setFade(true);
    timeout.current = setTimeout(() => {
      setOpened(false);
    }, 5000);
  }, []);

  return (
    <div
      onClick={() => {
        setOpened(false);
        clearTimeout(timeout.current);
      }}
      className={cn(styles.root, { [styles.fading]: fade })}
    >
      {text}
    </div>
  );
};
