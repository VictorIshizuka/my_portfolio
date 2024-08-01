import { Link, useLocation } from "react-router-dom";

import styles from "./LinkItem.module.css";

export const LinkItem = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  const { pathname } = useLocation();
  return (
    <Link
      className={`${styles.link}   ${pathname === to ? styles.linkActive : ""}`}
      to={to}
    >
      {children}
    </Link>
  );
};
