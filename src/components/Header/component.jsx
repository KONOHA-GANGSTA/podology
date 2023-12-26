import { useState } from "react";
import { PAGES_NAMES } from "../../constants/pagesNames";
import { Logo } from "../Logo/component";
import { MainTitle } from "../MainTitle/component";
import { MenuBurger } from "../MenuBurger/component";
import { NavigationTabs } from "../NavigationTabs/component";
import styles from "./styles.module.css";

export const Header = ({ className }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.title_container}>
          <div>
            <Logo />
          </div>
          <div>
            <MainTitle />
          </div>
          <div>
            <MenuBurger
              cross={opened}
              callback={() => setOpened((state) => !state)}
            />
          </div>
        </div>
        <NavigationTabs
          categories={PAGES_NAMES}
          opened={opened}
          callback={() => setOpened((state) => !state)}
        />
      </header>
    </div>
  );
};
