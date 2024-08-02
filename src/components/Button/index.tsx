import styles from "./Button.module.css";

export const Button = ({
  children,
  onClick,
  long,
}: {
  children: React.ReactNode;
  long?: string;
  onClick?: () => void;
}): JSX.Element => {
  return (
    <button className={`${styles.button} ${styles[long!]}`} onClick={onClick}>
      {children}
    </button>
  );
};
