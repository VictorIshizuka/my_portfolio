import { LinkItem } from "./LinkItem";

import styles from "./MenuLink.module.css";

export const MenuLink = (): JSX.Element => {
  return (
    <header>
      <nav className={styles.navigation}>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="/sobre-mim">Sobre mim</LinkItem>
      </nav>
    </header>
  );
};
